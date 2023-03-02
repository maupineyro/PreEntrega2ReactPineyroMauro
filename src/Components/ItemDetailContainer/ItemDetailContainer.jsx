import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.css";
import Loader from '../Loader';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);


const {id}= useParams();

  useEffect(() => {
    setLoading(true);

    const URL = `https://fakestoreapi.com/products/${id}`;
    const getItem = fetch(URL);

    getItem
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id]);

     
  return (
    <>
    {loading ? <Loader /> : <ItemDetail product= {product}  />}
    </>
  )
}

export default ItemDetailContainer