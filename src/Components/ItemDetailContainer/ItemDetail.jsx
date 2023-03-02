import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const ItemDetail = ({ product }) => {
    return (
        <Container>
            <Row className='m-4'>
                <Col>
                    <img className='border border-warning p-2' src={product.image} alt={product.title} width='250px' />
                </Col>
                <Col style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <div className="card align-self-center justify-content-center border border-info p-2 ">
                        <h3>{product.title}</h3>
                        <p>{product.category}</p>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                   </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;