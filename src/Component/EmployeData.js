import React from 'react'
import {useState} from "react"
import Table from './Table';
import Data from './Emp.json'
import {Link} from 'react-router-dom';
function EmployeData() {
const [name, setName] = useState("");
const [Dep, setDep] = useState("Select");
const [lastname, setLastname] = useState("");

  const handleChange = (event) => {
    setDep(event.target.value)
  }
  return (
    <>
    <form className='form'>
    <h1>ADD/EDIT EMPLOYE</h1>
      <label>FirstName:
        <input className='Box'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label> LastName:
        <input className='Box'
          type="text" 
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
      <label > Deparment:
      <select value={Dep} onChange={handleChange} className="Box">
        <option value="CSE">CSE</option>
        <option value="EEE">EEE</option>
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
      </select>
      
      </label>
      <button type="submit" className='btn'> Submit</button>

    </form>
    <Table/>
    </>
  )
}export default EmployeData

