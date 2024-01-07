import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/router/index.jsx'
import './index.css'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ConfigProvider
    theme={{
      components: {
      },
      token: {
        /* 这里是你的全局 token */
        colorPrimary: '#00b96b',
        // 开启算法
        // algorithm: true,
      },
    }}
  >
    <Router></Router>
  </ConfigProvider>
)
