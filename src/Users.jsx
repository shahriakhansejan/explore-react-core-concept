import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])



    const teamStyle ={
        border: '2px solid green',
        borderRadius: '10px',
        margin: '15px'
    }

    return(
        <div style={teamStyle}>
            <h2>Users : {users.length}</h2>
        </div>
    )
}