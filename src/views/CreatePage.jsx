import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
   const [title, setTitle] = useState ("")
   const [price, setPrice] = useState (0)
   const [description, setDescription] = useState ("")
   
   const navigate = useNavigate()
   const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/products`,
        {
            title: title,
            price: price,
            description: description
        })
        
        .then(response => {
            navigate(`/products`)
        })
        .catch(err => console.log(err))
}


   return (
    <div>
        <h4>Add a Product</h4>
    <form onSubmit = {handleSubmit}>
        <div>
            <label>Title</label>
            <input type ="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
            <label>Price</label>
            <input type ="number" name="price" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
            <label>Description</label>
            <input type ="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Create</button>
    </form>
    </div>
  )
}

export default CreatePage