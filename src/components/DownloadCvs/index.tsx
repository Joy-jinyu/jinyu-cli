import {
    Button,
    Modal,
    Form,
    DatePicker,
    Input,
    Radio,
    Row,
    Col,
    message
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import request from 'request';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
interface IProps {
    paramKey: string;
    paramValue: string;
}
function DownloadCvs(props: IProps) {
    const { paramKey, paramValue } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [imgStr, setImgStr] = useState('');
    const [uuid, setUuid] = useState('');
    const [form] = Form.useForm();
    const { RangePicker } = DatePicker;
    const formItemLayout = {
        labelCol: {
            sm: { span: 4 }
        },
        wrapperCol: {
            sm: { span: 16 }
        }
    };

    const handleExportBtn = () => {
        setIsOpen(!isOpen);
    };

    const requestCaptcha = useCallback(() => {
        request
            .get('/sys/file/captchaImage')
            .then((data: any) => {
                const { uuid, img } = data;
                setImgStr(img);
                setUuid(uuid);
            })
            .catch(err => {
                console.log('err:', err);
            });
    }, []);
    useEffect(() => {
        if (isOpen) {
            requestCaptcha();
        }
    }, [isOpen]);

    function handleSubmit() {
        form.validateFields().then(res => {
            const { time, code } = res;
            const [startTime, endTime] = time;
            request
                .post(
                    '/sys/file/downloadFileByPage',
                    {
                        file: {
                            mapperId: 'transactionsService'
                        },
                        content: {
                            [paramKey]: paramValue,
                            startTime: startTime.valueOf(),
                            endTime: endTime.valueOf()
                        },
                        captcha: {
                            code,
                            uuid
                        }
                    },
                    {
                        headers: {
                            isDownLoad: true
                        }
                    }
                )
                .then(() => {
                    message.success('下载成功');
                    setIsOpen(false);
                })
                .catch(() => {
                    requestCaptcha();
                });
        });
    }

    function handleCancel() {
        setIsOpen(false);
        form.resetFields();
    }
    function handleDate(e: any) {
        const distance = e.target.value;
        form.setFieldValue('time', [
            moment().subtract(distance, 'months'),
            moment()
        ]);
    }

    return (
        <>
            <Button type="link" block onClick={handleExportBtn}>
                导出为CSV
                <DownloadOutlined className="title-icon" />
            </Button>
            <Modal
                title="下载"
                open={isOpen}
                destroyOnClose
                okText="下载"
                cancelText="取消"
                onOk={handleSubmit}
                onCancel={handleCancel}
            >
                <Form
                    name="downloadCsv"
                    form={form}
                    {...formItemLayout}
                    onFinish={handleSubmit}
                >
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item
                                name="time"
                                label="时间"
                                initialValue={[
                                    moment()
                                        .startOf('day')
                                        .subtract(1, 'months'),
                                    moment().startOf('day')
                                ]}
                                rules={[
                                    {
                                        type: 'array' as const,
                                        required: true,
                                        message: '请选择时间'
                                    }
                                ]}
                            >
                                <RangePicker format="YYYY-MM-DD" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        gutter={24}
                        style={{ marginBottom: 24, marginLeft: '14%' }}
                    >
                        <Col span={24}>
                            <Radio.Group
                                defaultValue={1}
                                onChange={handleDate}
                                buttonStyle="solid"
                            >
                                <Radio.Button value={1}>近一个月</Radio.Button>
                                <Radio.Button value={2}>近三个月</Radio.Button>
                                <Radio.Button value={6}>近半年</Radio.Button>
                            </Radio.Group>
                        </Col>
                    </Row>

                    <Form.Item
                        name="code"
                        label="验证码"
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码'
                            }
                        ]}
                    >
                        <Row gutter={24}>
                            <Col span={12}>
                                <Input placeholder="请输入验证码" />
                            </Col>
                            <Col span={12}>
                                <img src={`data:image/gif;base64,${imgStr}`} />
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default DownloadCvs;
