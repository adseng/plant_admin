import React from 'react'

function Index() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '100px',
      width: '100vw',
      height: '100vh',
      // 404 字体特效
      color: 'rgba(132,116,255,0.56)',
      textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #ff0000, 0 0 80px #ff0000, 0 0 160px #ff0000',
    }}>
      <div>404</div>
    </div>
  )
}

export default Index
