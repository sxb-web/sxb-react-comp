import React from 'react'
import Icon from "../Icon"
import '../style'

const iconList = [
  'rectangle',
  'right',
  'wrong',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'invisible',
  'visible',
  'service',
  'setting',
  'close',
  'refresh',
  'edit',
  'sort',
  'info',
  'question',
  'security',
  'rmb',
  'wait',
  'check',
  'success',
  'check-disabled',
  'fail',
  'warn',
  'info-solid',
  'scan',
  'share',
  'back',
  'card-bag',
  'message',
  'order',
  'balance',
  'coupon',
  'address-book',
  'mobile-phone',
  'calendar',
  'home',
  'discovery',
  'switch',
  'time',
  'search',
  'user',
  'camera',
  'clock',
  'delete',
  'profession',
  'id-card',
  'authentication',
  'location',
  'filter',
  'motor-vehicle',
  'phone',
  'volumn',
]

export default function Index() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">所有字体</div>
      <div className="demo-page-cnt">
        <div className="list">
          {
            iconList.map((item, index) => (
              <div className="item mt-15">
                <div><Icon name={item}  size="28px" /></div>
                <p>{item}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="demo-page-title">icon 颜色</div>
      <div className="demo-page-cnt">
        <Icon name="time" size="28px" color="#2F86F6" />
        <Icon name="time" size="28px" color="#111A34" />
        <Icon name="time" size="28px" color="#FF5257" />
      </div>
      <div className="demo-page-title">icon 大小</div>
      <div className="demo-page-cnt">
        <Icon name="time" size="28px" color="#2F86F6" />
        <Icon name="time" size="30px" color="#111A34" />
        <Icon name="time" size="36px" color="#FF5257" />
      </div>
    </div>
  )
}