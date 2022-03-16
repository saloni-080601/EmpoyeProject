import React from 'react';
import {Link} from 'react-router-dom'
import Data from './Emp.json'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Table() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <>
    <h1>Employe Details:</h1>
    <table className='table'>
        <tr >
            <th className='th' >SNo.</th>
            <th className='th'>FirstName</th>
            <th className='th'>LastName</th>
            <th className='th'>Deparment</th>
            <th className='th'>Edit</th>
            <th >Delete</th>
        </tr>
        
          {Data.map((data,i)=>{
            return (
              <tr className='tr'>
              <td className='td'>{i+1}</td>
              <td className='td'>{data.FirstName}</td>
              <td className='td'>{data.LastName}</td>
              <td className='td'>{data.Deparment}</td>
              <td className='td'>
                <button>Edit</button>
              </td>
              <td className='tf'>
              <button>Delete</button>
              </td>
              </tr>
            )
          })}
            


        </table>
    </>
  )
}
