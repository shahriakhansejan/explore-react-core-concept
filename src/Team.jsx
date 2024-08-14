import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);
    const teamAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const teamRemove = () =>{
        const newTeam = team -1;
        setTeam(newTeam);
    }

    const teamStyle ={
        border: '2px solid purple',
        borderRadius: '10px',
        margin: '15px'
    }

    return(
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={teamAdd}>Add</button>
            <button onClick={teamRemove}>Remove</button>
        </div>

    )
}