import {React, useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';



export default function Home() {

    const [users,setUser]= useState([]);

    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers= async ()=>{
        const result= await axios.get("https://60c98abe772a760017203b7e.mockapi.io/users")
    setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`https://60c98abe772a760017203b7e.mockapi.io/users/${id}`);
        loadUsers();
      };


    return (
        <div>
           <div className="conatiner">
               <div className="py-4">
                   <h1>User Details</h1>
                   <table className="table table-striped table-bordered">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map((user,index)=>(
              <tr>
                  
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                  
                      <Link className="btn btn-primary mr-2" to={`/user/${user.id}`}>View</Link>
                      <Link className="btn btn-outline-primary mr-2" to={`/user/edit/${user.id}`}>Edit</Link>
                      <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>

                  </td>
              </tr>
          ))
      }
   </tbody>
</table>
               </div>
               </div> 
        </div>
    )
}
