import Button from 'react-bootstrap/Button';
import axios from 'axios'
import {useEffect, useState } from "react";
export default function API(){
const [data,SetData]=useState([])
let api=()=>{
    axios.get("http://localhost:8080/detail")
    .then(res=>{
        console.log(res.data)
        SetData(res.data)
    })
}
//onload 
     useEffect(()=>{
     api()
     },[])

    return(
     <>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Acno</th>
      <th scope="col">Name</th>
      <th scope="col">RD Amount</th>
      <th scope="col">RD Date</th>
      
     
    </tr>
  </thead>
  <tbody>
  {data.map((item)=>{
      return(<tr>
        <td>{item.acno}</td>
        <td>{item.name}</td>
        <td>{item.rdamt}</td>
        <td>{item.rddate}</td>
          
      </tr>)
    })}
   
  </tbody>
</table>

     </>
    )
}