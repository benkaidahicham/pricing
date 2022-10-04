import React from 'react'
import { Col,  } from 'react-bootstrap'

export default function PriceCard({Item}) {
  return (
    <Col className=' pt-5' xs="6" sm="6" md="4" lg="3">
    <div className='card '>
      <div className='card-overlay card-s'>
        <div className='overlay-text text-center w-100 p-2'>
          <div className='color-brend'>
          <p>{Item.titel}</p></div>
          <p>{Item.dsc}</p>
          <p>{Item.price}</p>
          
          <div>
                <button className='mb-3 btn-search'>{Item.button}</button>
                </div>
          <p>{Item.plan}</p>

          
        </div>
      </div>
    </div>
  </Col>
  )
}
