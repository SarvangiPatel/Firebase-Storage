

import React, { useEffect, useState } from 'react'
import { db } from '../Services/fire-store'
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

const Product = () => {

  const [savedata,setdata]=useState([])

  // getdata
  const GetData = async() =>{

    try {

      const querySnapshot  = await getDocs(collection(db,"product"))

      let newarr =[]

      querySnapshot .forEach((doc)=>{
        newarr.push({...doc.data()  , id:doc.id});
  
      })

      setdata(newarr)
      
    } catch (error) {

      console.log(error)
      
    }

  }


  // delete data
  async function deldata(id) {
    try {
        await deleteDoc(doc(db, "product", id));
        GetData();
    } catch (error) {
        console.log("Delete error:", error);
    }
}


// edit data
async function updatePrice(id, newPrice) {
  try {
      const productRef = doc(db, "product", id);
      await updateDoc(productRef, {
          price: newPrice
      });
      GetData(); 
  } catch (error) {
      console.error("Update error:", error);
  }
}

  useEffect(()=>{
    GetData()
  },[])

  return (
    
    <>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
  
{savedata.map((el)=>{
      return <div key={el.id} className='product'>
          
          <img src={el.image} alt="" height={200} width={200} />
          <h3>{el.title}</h3>
          <span>{el.description.substring(0,30)}...</span>
          <h5>{el.price}</h5>

          <button onClick={() => deldata(el.id)}>DELETE</button>
            <button onClick={() => {
                        const newPrice = prompt("Enter new price:");
                        if (newPrice) {
                            updatePrice(el.id, parseFloat(newPrice));
                        }
                    }}>UPDATE PRICE</button>

      </div>

    })}
</div>


    
    </>

  )
}

export default Product