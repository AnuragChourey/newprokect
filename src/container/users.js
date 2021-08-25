import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { getUsers } from '../redux/action';
const User=()=>{
const [data,setData]=useState([])
  const userList =useSelector((user)=>{
    return user.users.users
   })
  const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getUsers())
      },[data]);
    
    return(
<>
{userList.length!==0?
<>
<h2>User Details</h2>

<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
 
  {userList && userList.map((dataa)=>{
    
  return(
  <tbody>
    <tr>
      <th scope="row">{dataa.id}</th>
      <td>{dataa.name}</td>
      <td>{dataa.email}</td>
      <td>{dataa.website}</td>
    </tr>
   
  </tbody>
  )
  })}:
  
</table>
</>
:<h1>No User Found</h1>}
</>
    )
}

export default User;