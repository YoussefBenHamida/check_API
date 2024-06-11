import { useEffect,useState } from "react";
import axios from 'axios'
import UserCard from "./UserCard";

const UserList = () => {

    const [listOfUser, setUser]=useState("")

    console.log(listOfUser, 'dataa')

    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>setUser(res.data)
            .catch(error=>console.log())
        )
    },[])

  return (
    <>
    <div
        style={{
        marginTop:'50px',
          display:'inline-grid',
          gridTemplateColumns: 'auto auto ',
          gridGap:'100px',
        }}>
    {listOfUser && listOfUser.map((el)=>(
        <UserCard el={el}/>))}
        </div>
    </>
  )
}

export default UserList