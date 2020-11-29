
import React, { useState, useEffect } from 'react'
import shirtsService from '../services/ShirtsService'


import { Table, Tag } from 'antd';


const Shirts = () => {
    const [shirts, setShirts] = useState([]) 
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
        shirtsService
        .getAllShirts()
        .then(firstShirts => {
          setShirts(firstShirts)
        })
    }, [])


    return (
        <div>
            <Table columns={columns} dataSource={shirts} size="small" pagination={{ pageSize: 100 }} scroll={{ y: 'calc(90vh - 84px)' }} />
        </div>
    )
}

export default Shirts

