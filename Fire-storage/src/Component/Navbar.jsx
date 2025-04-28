

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <div style={{display:"flex" ,height:"50px",justifyContent:"space-between",padding:"0px 20px",alignItems:"center",backgroundColor:"whitesmoke"}}>
        <div>Logo...</div>
        <div>
            <ul style={{display:"flex",listStyle:"none" ,justifyContent:"space-between"}}>
                <li style={{padding:"0px 10px"}}><Link to="/" style={{color:"black"}}>Product</Link></li>
                <li  style={{padding:"0px 10px"}}><Link to="/addproduct" style={{color:"black"}}>Add Product</Link></li>
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default Navbar