import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { getDemoData } from '../store/demoReducer'
import { connect } from 'react-redux'

function About(data) {
  // const [content, setContent] = useState('')
  // useEffect(() => {
  //   axios.post('/api/getDemoData', { name: 'zhangsan' }).then((res) => {
  //     setContent(res.data.data.name)
  //   })
  // }, [])
  return (
    <Fragment>
      <Helmet>
        <title>简易的服务器端渲染 - ABOUT</title>
        <meta name="description" content="服务器端渲染"></meta>
      </Helmet>
      <div>
        <h1>About</h1>
        <button
          onClick={() => {
            data.getDemoData && data.getDemoData('刷新过后的数据')
          }}
        >
          刷新
        </button>
        <p>{data.content}</p>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  // 将对应reducer的内容透传回dom
  return {
    content: state?.demo?.content,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDemoData: (data) => {
      dispatch(getDemoData(data))
    },
  }
}

const storeAbout = connect(mapStateToProps, mapDispatchToProps)(About)

storeAbout.getInitProps = (store, data) => {
  return store.dispatch(getDemoData(data || '这是初始化的demo'))
}

export default storeAbout
