import React  from 'react'
import PullRefresh from "./index"
import Tabs from "../tabs"
import Toast from "../toast"
import Cell from "../cell"
import { useMyReducer } from "../utils/hooks"
import "../toast/style"
import '../cell/style'
import '../tabs/style'
import './style'

const list = new Array(100).fill('')

export default function Page() {
  const [state, dispatch] = useMyReducer({
    active: 0,
    showOne: false,
    showTwo: false,
    showThree: false
  })

  function refreshHandle(key) {
    dispatch({[key]: true})
    setTimeout(() => {
      Toast('刷新成功')
      dispatch({[key]: false})
    }, 2000)
  }

  function renderCustom(status) {
    if (status.isPulling) {
      return (
        <div>
          <img
            src="https://img.yzcdn.cn/vant/doge.png"
            style={{ transform: `scale(${status.distance / 80})`, display: 'block', height: '60px' }}
          />
          <div>下拉即可刷新...</div>
        </div>
      )
    }
    if (status.isLoosing) {
      return (
        <div>
          <img
            src="https://img.yzcdn.cn/vant/doge.png"
            style={{ display: 'block', height: '60px' }}
          />
          <div>释放就可以刷新哦</div>
        </div>
      )
    }

    if (status.isLoading) {
      return (
        <div>
          <img
            src="https://img.yzcdn.cn/vant/doge-fire.jpg"
            style={{ display: 'block', height: '60px' }}
          />
          <div>拼命加载...</div>
        </div>
      )
    }
  }

  return (
    <div className="demo-page">
      <Tabs active={state.active} onChange={e => dispatch({active: e})}>
        <div title="基础用法">
          <PullRefresh loading={state.showOne} refresh={() => refreshHandle('showOne')}>
            <div className="demo-page-title">基础用法</div>
            {
              list.map((item, index) => <Cell title={`序号${index}`} key={index} link onClick={() => Toast('index')} />)
            }
          </PullRefresh>
        </div>
        <div title="自定义">
          <PullRefresh
            loading={state.showThree}
            headHeight={80}
            render={renderCustom}
            refresh={() => refreshHandle('showThree')}
          >
            <div style={{height: '500px'}}>
              自定义配置下拉
            </div>
          </PullRefresh>
        </div>
      </Tabs>
    </div>
  )
}