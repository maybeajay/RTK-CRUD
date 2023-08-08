import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useUserQuery, useUpdateUserMutation } from '../slices/AdminSlice'
const UpdateUserDb = () => {
  const {id} = useParams()
  const [updateUser]=useUpdateUserMutation()
  const {data, error, isLoading} = useUserQuery(id)
    const navigate = useNavigate()
    const initialValue={
      name: "",
      email:""
    }
    const [formData, setFormData]=useState(initialValue)
    const updateData=async()=>{
      await updateUser({id: id, name: formData.name, email: formData.email})
      navigate('/')
    }
    function handleChange(e){
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
      if(data) setFormData({...data})
      else setFormData({...initialValue})
    }, [id, data])
    const {name, email}=formData
    console.log(name, email)
  return (
    <div className='container-fluid w-50 ' style={{marginTop: "10%"}}>
        <h1 className='text-center'>Update user </h1>
        <div className="form-group ">
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Enter Name"
      onChange={(e)=>handleChange(e)}
      name="name"
      defaultValue={name}
    />
  </div>
  <div className="form-group">
    <input
      type="email"
      className="form-control mb-3"
      placeholder="Enter email"
      onChange={(e)=>handleChange(e)}
      name="email"
      defaultValue={email}
    />
  </div>
  <button className="btn btn-primary"
  style={{marginLeft: "40%"}} 
  onClick={updateData}
  >
    Update 
  </button>
    </div>
  )
}

export default UpdateUserDb