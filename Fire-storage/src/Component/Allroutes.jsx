
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './product'
import AddProduct from './AddProduct'

const Allroutes = () => {
  return (
    <>

        <Routes>
            <Route path='/' element={<Product />}></Route>
            <Route path='/addproduct' element={<AddProduct />}></Route>
        </Routes>
    </>
  )
}

export default Allroutes