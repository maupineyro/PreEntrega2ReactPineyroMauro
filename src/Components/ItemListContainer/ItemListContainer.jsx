import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.css";

import { Container, Row } from 'react-bootstrap';
import Loader from '../Loader';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


const{id} = useParams ();

    useEffect(() => {
      setLoading (true);
    
        const URL = id ? `https://fakestoreapi.com/products/category/${id}`   : 'https://fakestoreapi.com/products/'
        const getCollection = fetch(URL);

        getCollection
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
                setLoading(true);
            })
            .catch((err)=>console.log(err))
            .finally(()=> setLoading(false))
    }, [id]);



  return (
    <Container>
    <Row className='rowBS'>
        {loading ? <Loader /> : <ItemList products={products} /> }
    </Row>
    </Container>
  )
}

export default ItemListContainer



    






//hecho anteriormente de usar bootstrap components

/*const ItemListContainer = () => {
    //https://fakestoreapi.com/products
const [data, setData] = useState([]);
console.log (data);
useEffect(() => {
    fakestore();
}, [])

const fakestore = async () =>{
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json ();
    setData(jsonData);
   }   
    return(
        <>
        <h4>PRODUCTOS</h4>
        
        <div className="listContainer">

        {data.map((product)=>{
            return (
                <>
                    <div className="box" key={product.id}>
                        <div className="content">
                            <h5>{product.title}</h5>
                        </div>
                        
                        <img className='imgProduct' src={product.image} alt="futuro" />
                        <ItemDetailButton />
                    </div>
                
                </>
            )
        })}

            
        </div>
        </>
    )
             
 }
export default ItemListContainer;*/