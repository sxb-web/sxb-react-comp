import React from 'react'
import Icon from '../icon'
import classNames from "../utils/classnames"

export default function Cell(props) {
  const {
    title,
    desc,
    value,
    icon,
    iconSize = '18px',
    iconType = 'square',
    link = true,
    border = true,
    disabled = false,
    children,
    ...other
  } = props

  let cls = classNames("ui-cell", {
    border,
    disabled
  })

  return (
    <div className={cls} {...other}>
      <IconComponent icon={icon} iconSize={iconSize} iconType={iconType} />
      {
        (title || desc) && (
          <div className="ui-cell_content">
            {
              title && <div className="ui-cell_title">{title}</div>
            }
            {
              desc && <div className="ui-cell_desc">{desc}</div>
            }
          </div>
        )
      }
      <div className="ui-cell_value">{value || children || ''}</div>
      {
        link && <div className="ui-cell-link"><Icon name="arrow-right" size="16px" color="#C5CAD5" /></div>
      }
    </div>
  )
}

function IconComponent({icon, iconSize, iconType}) {
  if (!icon) {
    return null
  }
  const isHttp = icon.indexOf('http') > -1
  if (isHttp) {
    const borderRadius = iconType === 'round' ? '9999px' : '0'
    return (
      <div className="ui-cell_icon">
        <div className="ui-cell_image" style={{backgroundImage: 'url('+ icon +')', width: iconSize, height: iconSize, borderRadius}}></div>
      </div>
    )
  } else {
    return (
      <div className="ui-cell_icon">
        <Icon name={icon} size={iconSize} />
      </div>
    )
  }
}