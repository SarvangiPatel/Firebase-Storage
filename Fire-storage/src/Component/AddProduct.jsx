

import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Services/fire-store'

const AddProduct = () => {

    const proObj = {
        title: "",
        description: "",
        category: "",
        image: "",
        price: ""
      }

    const [formdata,setformdata] =useState(proObj)

    const {
        title,
        description,
        category,
        image,
        price
      } = formdata

      // Post data
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
//    logic

try {

    const docRef = await addDoc(collection(db,"product"),formdata)

    setformdata(proObj);


    
} catch (error) {
    console.log(error)
}

  }

  return (
    <>

<div className="form-container" style={{height:"500px" ,width:"300px" ,margin:"auto"}}>
        <h1 style={{textAlign:"center"}}>Add Product</h1>
        <form action="" onSubmit={handleSubmit}>
          
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="title"
              /> <br /><br />
            

        
              <input
                type="text"
                name="image"
                value={image}
                onChange={handleChange}
                placeholder="image"
              /><br /><br />
             
           
           
              {" "}
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="description"
              /><br /><br />
          

         
              <select
                name="category"
                value={category}
                onChange={handleChange}
              
              >
                <option value="">Select Your category</option>
                <option value="men's clothing">men's clothing</option>
                <option value="men's clothing">women's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
              </select><br /><br />
           

        
              <input
                type="text"
                name="price"
                value={price}
                onChange={handleChange}
                placeholder="price"
              /><br /><br />
           
          <button type="submit" className="submit-btn">
            Insert Data
          </button>
        </form>
      </div>

    
    </>
  )
}

export default AddProduct