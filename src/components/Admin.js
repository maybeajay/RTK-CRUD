import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from "../slices/AdminSlice"
import BeatLoader from "react-spinners/BeatLoader";
import {FaPenToSquare, FaTrash} from 'react-icons/fa6'
export default function Admin(){
    const {data, error, isLoading} = useGetUsersQuery()
    const [deleteUser, response]= useDeleteUserMutation()
    const [updateUser]= useUpdateUserMutation()  
    const navigate = useNavigate()
    const handleDelete=(id)=>{
      if(window.confirm('Are you sure you want to delete')){
        deleteUser(id)
      }
    }
    const handleNavigate=(id)=>{
      navigate(`/updateuser/${id}`)
    }
    return(
        <div>
            <h1 className="text-center">Add SuperHero</h1>
            <div className="custom">
            <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <BeatLoader margin={2} color={"#36d7b7"} size={25} style={{position: "absolute", top: "45%", left: "45%"}}/> : data && data?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <button className="btn btn-outline-dark mt-3 m-3 btn-md"onClick={()=>handleDelete(user.id)} ><FaTrash /></button>
              <button className="btn btn-outline-dark mt-3 m-3 btn-md" onClick={()=>handleNavigate(user.id)} ><FaPenToSquare /></button>
            </tr>
          ))}
        </tbody>
      </table>
            </div>
            {!isLoading ? <button className="btn btn-primary" style={{marginLeft: "30%"}} onClick={()=>navigate('/adduser')}>Add user</button> : null
            }
        </div>
    )
}