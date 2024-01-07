import React, { useEffect, useRef, useState } from 'react'
import { Button, Flex, Form, Input, message, Modal, Select, Table } from 'antd'

import {
  addUser,
  deleteUserById,
  getUserAll,
  searchPlantLikely,
  searchUsersLikely,
  updateUserById
} from '@/api/index.js'
import { useNavigate } from 'react-router-dom'

function Index() {

  const [open, setOpen] = useState(false)
  const [users, setUsers] = useState([])

  const [selectedUser, setSelectedUser] = useState()

  const actions = useRef('')

  const [form] = Form.useForm()

  const [queryForm] = Form.useForm()

  const navigate = useNavigate()

  useEffect(() => {
    _getAllUsers()
  }, [])

  useEffect(() => {

    const user = JSON.parse(sessionStorage.getItem('user'))
    if (user.role !== 'admin') {
      navigate('/')
    }
  }, [navigate])

  return (
    <div>
      <Form form={queryForm}>
        <Flex gap={'middle'}>
          <Form.Item noStyle name={'account'}>
            <Input placeholder={'Account'} size={'large'} style={{ width: '200px' }} />
          </Form.Item>
          <Form.Item noStyle name={'role'}>
            <Select
              size={'large'}
              style={{width: '200px'}}
              options={[
                {
                  label: 'admin',
                  value: 'admin',
                },
                {
                  label: 'user',
                  value: 'user',
                },
              ]}
            />
          </Form.Item>
          <Button size={'large'}
                  onClick={() => {
                    handleQuery()
                  }}
          >Search</Button>
          <Button size={'large'}
                  onClick={() => {
                    actions.current = 'Create'
                    setOpen(true)
                  }}
          >Create</Button>
        </Flex>
      </Form>
      <div style={{ height: '24px' }}></div>
      <div style={{ height: 'calc(100vh - 120px)', overflow: 'scroll' }}>
        <Table
          size={'small'}
          rowKey={(record, index) => record.id}
          dataSource={users}
          columns={[
            {
              title: 'Account',
              dataIndex: 'account'
            },
            {
              title: 'Password',
              dataIndex: 'pwd'
            },
            {
              title: 'Role',
              dataIndex: 'role'
            },
            {
              title: 'action',
              render: (value, record, index) => {
                return <Flex gap={'small'}>
                  <Button onClick={() => {
                    setSelectedUser(record)
                    form.setFieldsValue(record)
                    actions.current = 'Edit'
                    setOpen(true)
                  }}>edit</Button>
                  <Button danger
                          onClick={() => {
                            _deleteUserById(record.id)
                          }}
                  >delete</Button>
                </Flex>
              }
            }
          ]}
        />
      </div>
      <div>
        <Modal
          width={'1000px'}
          title={actions.current}
          open={open}
          afterOpenChange={() => {
            if (open && actions.current === 'Create') {
              const data = {
                account: '',
                pwd: '',
                role: ''
              }
              form.setFieldsValue(data)
            }
          }}
          afterClose={() => {
            form.resetFields()
          }}
          onCancel={() => {
            setOpen(false)
          }}
          onOk={() => {
            handleConfirm()
          }}
        >

          <Form form={form}
                labelAlign={'right'}
                labelCol={{ span: 6 }}
          >
            <Form.Item label={'Account'} name={'account'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Password'} name={'pwd'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Role'} name={'role'}>
              <Select
              options={[
                {
                  label: 'admin',
                  value: 'admin',
                },
                {
                  label: 'user',
                  value: 'user',
                },
              ]}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>

    </div>
  )

  function handleConfirm() {
    const data = form.getFieldsValue()
    // 如果data里面的字段全部为空
    let empty = true
    for (let key in data) {
      if (data[key] !== '' || data[key] !== null || data[key] !== undefined) {
        empty = false
      } else {
        data[key] = ''
      }
    }
    if (empty) {
      message.error('Please fill in all the fields')
    } else {
      if (actions.current === 'Create') {
        _addUser(data)
      }
      if (actions.current === 'Edit') {
        _editUser(data)
      }
    }
  }

  function _addUser(data) {
    /**
     {
     account: '',
     pwd: '',
     role: ''
     }
     */
    addUser(data).then(res => {
      if (res.status === 200) {
        message.success('Create success')
        _getAllUsers()
        setOpen(false)
      }
    })
  }

  function _editUser(data) {
    updateUserById(selectedUser.id, { ...data }).then(res => {
      if (res.status === 200) {
        message.success('Edit success')
        _getAllUsers()
        setOpen(false)
      }
    })

  }

  function _getAllUsers() {
    getUserAll().then(res => {
      if (res.status === 200) {
        setUsers(res.data)
      }
    })
  }

  function _deleteUserById(id) {
    deleteUserById(id).then(res => {
      if (res.status === 200) {
        message.success('Delete success')
        _getAllUsers()
      }
    })
  }

  function handleQuery() {
    searchUsersLikely({
      account: queryForm.getFieldValue('account') || '',
      role: queryForm.getFieldValue('role') || ''
    }).then(res => {
      if (res.status === 200) {
        setUsers(res.data)
      }
    })
  }
}

export default Index
