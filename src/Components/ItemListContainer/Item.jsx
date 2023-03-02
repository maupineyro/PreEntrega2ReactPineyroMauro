import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = (product) => {
  return (
      <Card style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={product.image} width='100px' height='100px' />
          <Card.Body style={{display: "flex" , flexbox:"column", justifyContent:"space-evenly"}}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                  $ {product.price}
              </Card.Text>
              <Button>Detalles</Button>
          </Card.Body>
      </Card>
  )
}

export default Item