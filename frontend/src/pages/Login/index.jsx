import React, { useEffect, useState } from 'react'
import { Button, Flex, Form, Input, message } from 'antd'
import img from '@/assets/img/img_1.png'
import { addUser, getUserAll } from '@/api/index.js'
import { useNavigate } from 'react-router-dom'

function Index(props) {

  const [form] = Form.useForm()
  const [uses, setUses] = useState([])

  const [register, setRegister] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getUserAll().then(res => {
      if (res.status === 200) {
        setUses(res.data)
      }
    })
  }, [])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{
        width: '400px',
        padding: '24px',
        backgroundColor: 'rgba(170,255,207,0.41)',
        textAlign: 'center',
        borderRadius: '12px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)'
      }}>
        <div style={{
          fontSize: '24px',
          padding: '20px'
        }}>Plant Admin
        </div>
        {register ?
          <div>
            <Form layout={'vertical'} form={form}>
              <Form.Item label={'account'} name={'account'} required>
                <Input />
              </Form.Item>
              <Form.Item label={'password'} name={'pwd'} required>
                <Input type={'password'} />
              </Form.Item>
              <Form.Item label={'re password'} name={'repwd'} required>
                <Input type={'password'} />
              </Form.Item>
            </Form>
            <Flex justify={'center'} gap={'middle'}>
              <Button style={{ width: '100px' }} onClick={() => {
                form.validateFields().then(values => {
                  if (values.repwd !== values.pwd) {
                    message.error('two password not equal')
                    return
                  }
                  uses.forEach(item => {
                    if (item.account === values.account) {
                      message.error('account has been used')
                      return
                    }
                  })
                  if (values.account && values.pwd) {
                    addUser({
                      account: values.account,
                      pwd: values.pwd
                    }).then(res => {
                      if (res.status === 200) {
                        message.success('register success')
                      }
                    })
                  }
                })
              }}>Conform</Button>
              <Button style={{ width: '100px' }} onClick={() => {
                setRegister(false)
              }}>Go login</Button>
            </Flex>
          </div>
          :
          <div>
            <Form layout={'vertical'} form={form}>
              <Form.Item label={'account'} name={'account'} required>
                <Input />
              </Form.Item>
              <Form.Item label={'password'} name={'pwd'} required>
                <Input type={'password'} />
              </Form.Item>
            </Form>
            <Flex justify={'center'} gap={'middle'}>
              <Button style={{ width: '100px' }} onClick={() => {
                handleSubmit()
              }}>Login</Button>
              <Button style={{ width: '100px' }} onClick={() => {
                setRegister(true)
              }}>Register</Button>
            </Flex>
          </div>
        }
      </div>
    </div>
  )

  function handleSubmit() {
    form.validateFields().then(values => {
      let a = false
      uses.forEach(item => {
        if (item.account === values.account && item.pwd === values.pwd) {
          a = true
          window.sessionStorage.setItem('user', JSON.stringify(item))
          navigate('/dashboard')
        }
      })
      message.info(a? 'login success' : 'account or password error')
    })
  }
}

export default Index
