import { Col, Row } from 'react-bootstrap'

export default function Switch({DataItem}) {
  const chenge1=()=>{
    console.log(DataItem[0].price )
    console.log(DataItem[1].price )
  }
  const chenge2=()=>{
   
  }
  
  return (
    <Row>
      <Col sm='12' className='justify-content-center d-flex '>
      <div className="mb-2 switch ">
        <button onClick={()=>(chenge1())} variant="primary" size="sm" className='m-2 btn-switch'>
          Monthly
        </button>{' '}
        <button onClick={()=>(chenge2())} variant="secondary" size="sm" className='m-2 btn-switch'>
           Annually
        </button>
      </div>
     
    </Col>
  </Row>
  )
}
