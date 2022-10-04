import React from 'react'
import { Row } from 'react-bootstrap'
import PriceCard from './PriceCard'

export default function AppCard({DataItem}) {
  return (
    <Row className='d-flex justify-content-center'>
        
        {
            DataItem.length >=1 ? (DataItem.map((Item)=>{
              return(
                <PriceCard Item={Item}/>
              )
            })) : <h4>لا توجد تصنيفات</h4>
          }
    </Row>
  )
}
