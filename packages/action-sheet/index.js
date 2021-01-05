import React from 'react'
import Overlay from "../overlay"
import Icon from "../icon"
import Loading from "../loading"
export default function ActionSheet(props) {

  const {
    show = false,
    cancelText = '取消',
    actions = [],
    title,
    nameKey = 'name',
    subnameKey = 'subname',
    description,
    closeable = false,
    close,
    cancel,
    onClick,
  } = props

  function cancelHandle() {
    close && close()
    cancel && cancel()
  }

  function clickHandle(data) {
    close && close()
    onClick && onClick(data)
  }

  return (
    <Overlay show={show} position="bottom" animation="slide-up" close={close}>
      <div className="ui-action-sheet">
        {
          (title || description) && (
            <div className="ui-action-sheet-header">
              { title && <div className="ui-action-sheet-title">{title}</div> }
              { description && <div className="ui-action-sheet-description">{description}</div> }
              {
                closeable && <div className="ui-action-sheet-close" onClick={close}><Icon name="close" size="20px" /></div>
              }
            </div>
          )
        }
        {
          actions.map((item, index) => <Item key={index} nameKey={nameKey} subnameKey={subnameKey} data={item} onClick={data => clickHandle({...data, index})} />)
        }
        <div className="ui-action-sheet-cancel">
          <div className="ui-action-sheet-item" onClick={cancelHandle}>{cancelText}</div>
        </div>
      </div>
    </Overlay>
  )
}

function Item({data, nameKey, subnameKey, onClick}) {
  const cls = data.disabled ? 'ui-action-sheet-item disabled' : 'ui-action-sheet-item'
  const style = data.color ? { color : data.color} : null

  function clickHandle() {
    onClick && onClick(data)
  }

  return (
    <div className={cls} onClick={clickHandle}>
      {
        data.loading ? <div className="ui-action-sheet-loading"><Loading type="circular" color="#C5CAD5" /></div> : (
          <>
            <div className="ui-action-sheet-item-name" style={style}>{data[nameKey]}</div>
            { data[subnameKey] && <div className="ui-action-sheet-item-subname">{data[subnameKey]}</div> }
          </>
        )
      }
    </div>
  )
}