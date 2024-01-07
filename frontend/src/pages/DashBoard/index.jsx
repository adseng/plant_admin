import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { getAllPlants } from '@/api/index.js'

function Index(props) {

  const chart1 = useRef()
  const chart2 = useRef()
  const chart3 = useRef()
  const chart4 = useRef()

  useEffect(() => {

    getAllPlants().then(res => {
      if (res.status === 200) {
        const categoryMap = {}
        const familyMap = {}
        const genusMap = {}
        const speciesMap = {}
        const cityMap = {}
        res.data.forEach(item => {
          if (item.category in categoryMap) {
            categoryMap[item.category] += 1
          } else {
            categoryMap[item.category] = 1
          }
          if (item.chinese_family_name in familyMap) {
            familyMap[item.chinese_family_name] += 1
          } else {
            familyMap[item.chinese_family_name] = 1
          }
          if (item.chinese_genus_name in genusMap) {
            genusMap[item.chinese_genus_name] += 1
          } else {
            genusMap[item.chinese_genus_name] = 1
          }
          if (item.chinese_species_name in speciesMap) {
            speciesMap[item.chinese_species_name] += 1
          } else {
            speciesMap[item.chinese_species_name] = 1
          }
          if (item.county_city_distribution in cityMap) {
            cityMap[item.county_city_distribution] += 1
          } else {
            cityMap[item.county_city_distribution] = 1
          }
        })

        initPieCharts(Object.keys(categoryMap).map(key => {
          return {
            name: key,
            value: categoryMap[key]
          }
        }), document.querySelector('.charts_1'), chart1, ['50%'], 'Category of plants')

        initPieCharts(Object.keys(familyMap).map(key => {
          return {
            name: key,
            value: familyMap[key]
          }
        }), document.querySelector('.charts_2'), chart2, ['40%', '70%'], 'Family of plants')

        initBarCharts(Object.keys(cityMap).map(key => {
          return {
            name: key,
            value: cityMap[key]
          }
        }), document.querySelector('.charts_3'), chart3, 'City of plants')

        initPieCharts(Object.keys(speciesMap).map(key => {
          return {
            name: key,
            value: speciesMap[key]
          }
        }), document.querySelector('.charts_4'), chart4, ['40%', '70%'], 'Species of plants')

      }
    })

    return () => {
      chart1.current?.dispose()
      chart2.current?.dispose()
      chart3.current?.dispose()
      chart4.current?.dispose()
    }

  }, [])

  function initPieCharts(data, element, ref, radius, title) {

    ref.current = echarts.init(element, undefined, {
      autoResize: true
    })

    const option = {
      title: {
        text: title,
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: radius,
          data: data
        }
      ]
    }

    ref.current.setOption(option)
  }

  function initBarCharts(data, element, ref, title) {

    ref.current = echarts.init(element, undefined, {
      autoResize: true
    })

    const option = {
      title: {
        text: title,
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: data.map(item => item.name)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: data.map(item => item.value),
          type: 'bar'
        }

      ]
    }
    ref.current.setOption(option)
  }

  return (
    <div style={{ height: '100%' }}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '24px'
      }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)' }}
             className={'charts_1'}></div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)' }}
             className={'charts_2'}></div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)' }}
             className={'charts_3'}></div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)' }}
             className={'charts_4'}></div>
      </div>

    </div>
  )
}

export default Index
