import React, { useEffect, useRef, useState } from 'react'
import { Button, Flex, Form, Input, message, Modal, Table } from 'antd'

import { addPlant, deletePlant, getAllPlants, searchPlantLikely, updatePlantsById } from '@/api/index.js'

function Index() {

  const [open, setOpen] = useState(false)
  const [plants, setPlants] = useState([])

  const [selectedPlant, setSelectedPlant] = useState()

  const actions = useRef('')

  const [form] = Form.useForm()

  const [queryForm] = Form.useForm()


  useEffect(() => {
    _getAllPlants()
  }, [])

  return (
    <div>
      <Form form={queryForm}>
        <Flex gap={'middle'}>
          <Form.Item noStyle name={'category'} label={'category'}>
            <Input placeholder={'Category'} size={'large'} style={{ width: '200px' }} />
          </Form.Item>
          <Form.Item noStyle name={'chinese_family_name'}>
            <Input placeholder={'Chinese Family Name'} size={'large'} style={{ width: '200px' }} />
          </Form.Item>
          <Form.Item noStyle name={'chinese_genus_name'}>
            <Input placeholder={'Chinese Genus Name'} size={'large'} style={{ width: '200px' }} />
          </Form.Item>
          <Form.Item noStyle name={'chinese_species_name'}>
            <Input placeholder={'Chinese Species Name'} size={'large'} style={{ width: '200px' }} />
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
      <div style={{height: 'calc(100vh - 120px)', overflow: 'scroll'}}>
        <Table
          size={'small'}
          rowKey={(record, index) => record.id}
          dataSource={plants}
          columns={[
            {
              title: 'Category',
              dataIndex: 'category'
            },
            {
              title: 'Family Serial Number',
              dataIndex: 'family_serial_number'
            },
            {
              title: 'Chinese Family Name',
              dataIndex: 'chinese_family_name'
            },
            {
              title: 'Latin Family Name',
              dataIndex: 'latin_family_name'
            },
            {
              title: 'Chinese Genus Name',
              dataIndex: 'chinese_genus_name'
            },
            {
              title: 'Latin Genus Name',
              dataIndex: 'latin_genus_name'
            },
            {
              title: 'Chinese Species Name',
              dataIndex: 'chinese_species_name'
            },
            {
              title: 'Latin Species Name',
              dataIndex: 'latin_species_name'
            },
            {
              title: 'Chinese Species Name',
              dataIndex: 'chinese_species_name'
            },
            {
              title: 'Latin Species Name',
              dataIndex: 'latin_species_name'
            },
            {
              title: 'Author of the Species',
              dataIndex: 'author_of_the_species'
            },
            {
              title: 'Rank Indicator',
              dataIndex: 'rank_indicator'
            },
            {
              title: 'Status',
              dataIndex: 'status'
            },
            {
              title: 'County/City Distribution',
              dataIndex: 'county_city_distribution'
            },
            {
              title: 'Remarks',
              dataIndex: 'remarks'
            },
            {
              title: 'action',
              render: (value, record, index) => {
                return <Flex gap={'small'}>
                  <Button onClick={() => {
                    setSelectedPlant(record)
                    form.setFieldsValue(record)
                    actions.current = 'Edit'
                    setOpen(true)
                  }}>edit</Button>
                  <Button danger
                          onClick={() => {
                            _deletePlant(record.id)
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
                category: '',
                family_serial_number: '',
                chinese_family_name: '',
                latin_family_name: '',
                chinese_genus_name: '',
                latin_genus_name: '',
                chinese_species_name: '',
                latin_species_name: '',
                author_of_the_species: '',
                rank_indicator: '',
                status: '',
                county_city_distribution: '',
                remarks: '',
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
            <Form.Item label={'Category'} name={'category'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Family Serial Number'} name={'family_serial_number'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Chinese Family Name'} name={'chinese_family_name'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Latin Family Name'} name={'latin_family_name'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Chinese Genus Name'} name={'chinese_genus_name'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Latin Genus Name'} name={'latin_genus_name'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Chinese Species Name'} name={'chinese_species_name'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Latin Species Name'} name={'latin_species_name'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Author of the Species'} name={'author_of_the_species'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Rank Indicator'} name={'rank_indicator'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Status'} name={'status'}>
              <Input />
            </Form.Item>
            <Form.Item label={'County/City Distribution'} name={'county_city_distribution'}>
              <Input />
            </Form.Item>
            <Form.Item label={'Remarks'} name={'remarks'}>
              <Input />
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
        _addPlant(data)
      }
      if (actions.current === 'Edit') {
        _editPlant(data)
      }
    }
  }

  function _addPlant(data) {
    /**
     {
     "category": "角苔类",
     "family_serial_number": "1",
     "chinese_family_name": "角苔科",
     "latin_family_name": "Anthocerotaceae",
     "chinese_genus_name": "角苔属",
     "latin_genus_name": "Anthoceros",
     "chinese_species_name": "台湾角苔",
     "latin_species_name": "Anthoceros angustus",
     "author_of_the_species": "Steph.",
     "rank_indicator": "种",
     "status": "本土野生",
     "county_city_distribution": "深圳市",
     "remarks": "吴德邻, 张力. 2013. 广东苔藓志. 广州: 广东科技出版社"
     }
     */
    addPlant(data).then(res => {
      if (res.status === 200) {
        message.success('Create success')
        _getAllPlants()
        setOpen(false)
      }
    })
  }

  function _editPlant(data) {
    updatePlantsById(selectedPlant.id, { ...data }).then(res => {
      if (res.status === 200) {
        message.success('Edit success')
        _getAllPlants()
        setOpen(false)
      }
    })

  }

  function _getAllPlants() {
    getAllPlants().then(res => {
      if (res.status === 200) {
        setPlants(res.data)
      }
    })
  }

  function _deletePlant(id) {
    deletePlant(id).then(res => {
      if (res.status === 200) {
        message.success('Delete success')
        _getAllPlants()
      }
    })
  }

  function handleQuery() {
    searchPlantLikely({
      category: queryForm.getFieldValue('category') || '',
      chinese_family_name: queryForm.getFieldValue('chinese_family_name') || '',
      chinese_genus_name: queryForm.getFieldValue('chinese_genus_name') || '',
      chinese_species_name: queryForm.getFieldValue('chinese_species_name') || ''
    }).then(res => {
      if (res.status === 200) {
        setPlants(res.data)
      }
    })
  }
}

export default Index
