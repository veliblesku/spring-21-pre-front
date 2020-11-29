
import React, { useState, useEffect } from 'react'
import jacketsService from '../services/JacketsService'


import { Table, Tag } from 'antd';


const Jackets = () => {
    const [jackets, setJackets] = useState([]) 
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: 'Type',
          dataIndex: 'type',
          width: 150,
        },
        {
          title: 'Color',
          dataIndex: 'color',
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
            title: 'Manufacturer',
            dataIndex: 'manufacturer'
        },
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Availability',
            dataIndex: 'AVAILABILITY',
            key: 'AVAILABILITY',
            render: text => {
              let color;
              if(text === 'OUTOFSTOCK'){
                color = 'red'
              }
              if (text === 'LESSTHAN10'){
                color = 'yellow'
              }
              if(text === 'INSTOCK') {
                color = 'green'
              }
              console.log("Row render");
              return (
                <Tag color={color} key={text}>
                  {text}
                </Tag>
              );
            }
        }
      ];
      

    useEffect(() => {
      jacketsService
        .getAllJackets()
        .then(firstJackets => {
          setJackets(firstJackets)
        })
    }, [])


    return (
        <div>
            <Table columns={columns} dataSource={jackets} size="small"  scroll={{ y: 'calc(90vh - 84px)' }} />
        </div>
    )
}

export default Jackets

