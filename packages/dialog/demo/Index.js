import React, {useState} from 'react'
import Dialog from "../index"
import '../style'
import Button from "../../button"
import "../../button/style"

export default function Page() {

  const [show, setShow] = useState(false)

  function getAlert() {
    Dialog.alert({
      title: '提示',
      content: '该订单不可操作'
    })
  }
  function getConfirm() {
    Dialog.confirm({
      title: '提示',
      content: '确认删除？'
    })
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">组件调用</div>
      <div className="demo-page-cnt">
        <Button type="primary" onClick={() => setShow(true)}>点我唤醒</Button>
        <Dialog show={show} title="喜欢吗" cancelText="不喜欢" confirmText="喜欢" close={() => setShow(false)}>
          <img style={{display: 'block', width: '100%'}} src="https://sxbkj-test.oss-cn-hangzhou.aliyuncs.com/carmasterSaas/goodsManage/2020-06-18/And-024F03B8CE1048A4846391287CF1CE0A-1592471005097.jpg" />
        </Dialog>
      </div>
      <div className="demo-page-title">函数唤起</div>
      <div className="demo-page-cnt">
        <Button type="primary" onClick={getAlert}>Alert唤醒</Button>
      </div>
      <br/>
      <div className="demo-page-cnt">
        <Button type="primary" onClick={getConfirm}>Confirm唤醒</Button>
      </div>
    </div>
  )
}
