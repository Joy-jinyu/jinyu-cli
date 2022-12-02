import { Form, Image, Input, Modal } from 'antd'
import React, { useState, useCallback } from 'react'

interface IInputLinkModal {
  visible: boolean
  onClose: () => void
  onSave: (link: string) => void
}

const LEGAL_HTTP_SOURCE_REGULAR = /^(?:http(s)?:\/\/)(\S)*(\.)+/

export const InputLinkModal = ({ visible, onClose, onSave }: IInputLinkModal) => {
  const [form] = Form.useForm()
  const [imageLink, setImageLink] = useState('')

  const imageChange = (e: any) => {
    setImageLink(e.target.value)
  }

  const handleOk = useCallback(async () => {
    const values = await form.validateFields()
    onSave(values.link)
    form.resetFields()
    setImageLink('')
  }, [])

  const handleCancel = () => {
    onClose()
  }

  return (
    <Modal
      open={visible}
      visible={visible}
      title="图片地址"
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} name="name">
        <Form.Item
          label="图片链接"
          name="link"
          rules={[
            { required: true, message: '请输入图片链接' },
            () => ({
              validator(_, value) {
                if (!!value && !LEGAL_HTTP_SOURCE_REGULAR.test(value as string)) {
                  return Promise.reject(
                    new Error('请输入填写正确的地址，例：https://www.baidu.com')
                  )
                }
                return Promise.resolve()
              }
            })
          ]}
          validateFirst={true}
        >
          <Input allowClear placeholder="图片链接" onChange={imageChange} />
        </Form.Item>
        {imageLink && LEGAL_HTTP_SOURCE_REGULAR.test(imageLink) && (
          <Form.Item>
            <Image height={100} src={imageLink} />
          </Form.Item>
        )}
      </Form>
    </Modal>
  )
}
