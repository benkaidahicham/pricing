import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Header() {
  return (
    <Row>
      <Col sm='12' className='justify-content-center text-center'>
                <div className='mt-5 mb-5'><h1 className='text-center'>
                  Flexible, unbeatable pricing
                </h1></div>
      <div className='d-flex justify-content-center'><p>Pick the perfect plan</p></div>
      </Col>
    </Row>
  )
}
