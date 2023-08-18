import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom';

const DetailsPage = () => {
    const [product, setProduct] = useState()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>setProduct(response.data))
        .catch(err => console.log(err))
    }, [])
 
    return (
        <div>
            {
                product ?
                    <div>
                        <p>Title: {product.title}</p>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <Link to={`/products/${id}/edit`}>edit</Link>
                    </div>:
                    <p>....loading....</p>
        }
        </div>
    )
 
}

export default DetailsPage