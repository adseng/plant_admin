import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import ds_img from '@/assets/img/dashboard.png'
import pt_img from '@/assets/img/plant.png'
import ac_img from '@/assets/img/account.png'
import long_img from '@/assets/img/糖果.png'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Content, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  }
}

export default function() {

  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    // 登录
    if (sessionStorage.getItem('user') === null || sessionStorage.getItem('user') === undefined) {
      navigate('/login')
    }
  }, [])

  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')))
  }, [])

  const items = [getItem(<Link to={'/dashboard'}>Dashboard</Link>, '/dashboard', <img src={ds_img} alt='' width={20} />),
    getItem(<Link to={'/manager'}>Manager</Link>, '/manager', <img src={pt_img} alt='' width={20} />),
    user?.role === 'admin'? getItem(<Link to={'/account'}>Admin</Link>, '/account', <img src={ac_img} alt='' width={20} />) : undefined]

  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }} hasSider>

      <Sider collapsible
             collapsed={collapsed}
             onCollapse={value => setCollapsed(value)}
             theme={'light'}
      >
        <div style={{
          textAlign: 'center',
          fontSize: '2rem',
          padding: '10px 0',
          textShadow: '0 3px 0 rgba(0, 0, 0, 0.1)',
          backgroundImage: `url(${long_img})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          textWrap: 'nowrap'
        }}>
          {!collapsed ? 'Plant Admin' : 'P'}
        </div>
        <Menu defaultSelectedKeys={'/dashboard'} selectedKeys={[location.pathname]} mode='inline' items={items}
              onClick={({ item, key, keyPath, domEvent }) => {
                navigate(key)
              }}
        >
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px', overflow: 'scroll' }}>
          <div style={{ border: '1px solid #000000', padding: '24px 0', height: '100%'}}>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
