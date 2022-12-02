import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd'
import type { RcFile } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import mockjs from 'mockjs'
import { useCallbackRef } from '@ovometajs/hooks'
import React, { useState, useEffect } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { InputLinkModal } from './input-link-modal'
import './styles.less'

interface IUploadGallery {
  action: string
  value?: string
  onChange?: (value: UploadFile[]) => void
  multiple?: boolean
  max?: number
}

export const UploadGallery = ({ action, value, onChange, multiple, max = 1 }: IUploadGallery) => {
  const [inputLinkOpen, setInputLinkOpen] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  /**
   * {
   *  uid: '-1',
   *   name: 'image.png',
   *   status: 'done',
   *   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
   * },
   */
  const [fileList, setFileList] = useState<any[]>([])

  useEffect(() => {
    /**
     * 初始化渲染时才调用
     */
    if (value && !fileList.length) {
      const fileLinkList = Array.isArray(value) ? value : [value]
      setFileList(
        fileLinkList.map((link, index) => {
          return {
            uid: mockjs.Random.id(),
            index: index + 1,
            name: link.split('/').slice(-1)[0],
            status: 'done',
            url: link
          }
        })
      )
    }
  }, [value])

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  const handleChange = ({ fileList: newFileList }: any) => {
    setFileList(
      newFileList.map((file: any, index: number) => {
        return {
          ...file,
          uid: file.uid || mockjs.Random.id(),
          index: index + 1
        }
      })
    )
    const emitFileLinks = newFileList.map(
      (file: any) => file.response?.data || file.url || file.thumbUrl
    )
    onChange?.(multiple ? emitFileLinks : emitFileLinks[0] || undefined)
  }

  const handleInputLink = (e: any) => {
    setInputLinkOpen(true)
    e.stopPropagation()
  }

  const handleInputLinkSave = (link: string) => {
    handleChange({
      fileList: [
        ...fileList,
        {
          uid: mockjs.Random.id(),
          index: fileList.length + 1,
          name: link.split('/').slice(-1)[0],
          status: 'done',
          url: link
        }
      ]
    })
    setInputLinkOpen(false)
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>选择图片</div>
      <div style={{ marginTop: 8 }} onClickCapture={handleInputLink}>
        输入图片链接
      </div>
    </div>
  )

  const moveRow = useCallbackRef((result: DropResult) => {
    const { source, destination } = result || {}
    if (!destination || !source) {
      return
    }
    const sourceIndex = source.index - 1
    const destinationIndex = destination.index - 1
    if (sourceIndex === destinationIndex) {
      return
    } else {
      const dragRow = fileList[sourceIndex]
      fileList.splice(sourceIndex, 1)
      fileList.splice(destinationIndex, 0, dragRow)
      setFileList(
        fileList.map((file, index) => {
          return {
            uid: index + 1,
            ...file
          }
        })
      )
    }
  })

  return (
    <>
      <DragDropContext onDragEnd={moveRow}>
        <Droppable droppableId={`droppable-top`} direction="horizontal">
          {(provided) => (
            <div
              id="container"
              className="droppable-wrapper-item"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Upload
                action={action}
                multiple={multiple}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                maxCount={max}
                itemRender={(originNode, file) => (
                  <Draggable draggableId={`draggable-${file.uid}`} index={(file as any).index}>
                    {(_provided) => (
                      <div
                        className="draggable-wrapper-item"
                        ref={_provided.innerRef}
                        {..._provided.draggableProps}
                        {..._provided.dragHandleProps}
                      >
                        {originNode}
                      </div>
                    )}
                  </Draggable>
                )}
              >
                {fileList.length >= max ? null : uploadButton}
              </Upload>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Modal
        open={previewOpen}
        visible={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
      <InputLinkModal
        visible={inputLinkOpen}
        onClose={() => {
          setInputLinkOpen(false)
        }}
        onSave={handleInputLinkSave}
      />
    </>
  )
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
