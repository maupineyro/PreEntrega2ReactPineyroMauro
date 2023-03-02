import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
      <Card style={{ width: '22rem', margin: '2rem' }}>
          <Card.Img className='imgProduct' variant="top" src={product.image} width='100px' height='100px' />
          <Card.Body style={{ display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly' }}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                  $ {product.price}
              </Card.Text>
              <Link className='btn btn-secondary'  to={`/item/${product.id}`} >Detalles</Link>

          </Card.Body>
      </Card>
  )
}

export default Item