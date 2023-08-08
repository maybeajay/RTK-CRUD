import React, { useState } from 'react'
import { useAddUsersMutation, useGetUsersQuery } from '../slices/AdminSlice'
import { useNavigate } from 'react-router-dom';

const AddUserDb = () => {
  const [formData, setFormData]=useState({
    name: "",
    email: ""
  })
   function handleChange(e){
    const {name, value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const navigate = useNavigate()
  const [addUser] = useAddUsersMutation()
  const {data, error, isLoading}=useGetUsersQuery()
  async function addUserData(){
    await addUser(formData);
    navigate('/')
  }
  return (
    <div className='container-fluid w-50'>
        <h1 className='text-center'>Add user </h1>
        <div className="form-group ">
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Enter Name"
      onChange={(e)=>handleChange(e)}
      name="name"
      value={formData.name}
    />
  </div>
  <div className="form-group">
    <input
      type="email"
      className="form-control mb-3"
      placeholder="Enter email"
      onChange={(e)=>handleChange(e)}
      name="email"
      value={formData.email}
    />
  </div>
  <button className="btn btn-primary" 
  onClick={addUserData}
  >
    Add User
  </button>
    </div>
  )
}

export default AddUserDb