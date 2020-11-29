
import React, { useState, useEffect } from 'react'
import AccessoriesService from '../services/AccessoriesService'


import { Table, Tag } from 'antd';


const Accessories = () => {
    const [accessories, setAccessories] = useState([]) 
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
        AccessoriesService
        .getAllAccessories()
        .then(firstAccessories => {
          setAccessories(firstAccessories)
        })
    }, [])


    return (
        <div>
            <Table columns={columns} dataSource={accessories} size="small"  scroll={{ y: 'calc(90vh - 84px)' }} />
        </div>
    )
}

export default Accessories

