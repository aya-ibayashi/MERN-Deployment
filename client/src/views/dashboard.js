import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const Dashboard = () =>{

    const [list, setList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
            .then(res=>{
                setList(res.data);
                setLoaded(true)})
            .catch(err=>console.log(err))
    }, [])

    if (loaded === false){
        return "Loading..."
    }
    
    const deletePirate = (e, id) =>{
        axios.delete("http://localhost:8000/api/pirates/" + id)
            .then( () => {
                axios.get("http://localhost:8000/api/pirates")
                    .then(res=>{
                        setList(res.data);
                        setLoaded(true)})
                    .catch(err=>console.log(err))}
                )
            .catch(
                err=>console.log(err)
            )
    }

    return (
            <div style={{backgroundColor:"#FF9900", paddingBottom:"10px"}}>
                <div style={{backgroundColor:"brown", display:"flex", justifyContent:"center"}}>
                    <h1 style={{color:"white"}}>Pirate Crew</h1>
                    <button style={{height:30, backgroundColor:"lightBlue", marginTop:"30px", marginLeft:"10px"}}><Link to="pirates/new">Add Pirate</Link></button>
                </div>
                {list.map((pirate)=>(
                    <div style={{backgroundColor:"white", width:"500px", margin:"15px auto", display:"flex", justifyContent:"center"}} key={pirate._id}>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.czTfyK62TL8mDde5IA3FFQHaEw&pid=Api" style={{height:"45px", width:"auto", marginTop:"20px", marginRight:"10px"}}/>
                        <div>
                            <h3>{pirate.name}</h3>
                            <button style={{backgroundColor:"lightGreen"}}>
                                <Link to={`/pirates/${pirate._id}`}>View Pirate</Link>
                            </button>
                            <button style={{backgroundColor:"red"}} onClick={(e)=>deletePirate(e, pirate._id)}>Walk the Plank</button>
                         </div>   
                    </div>
                ))}
            </div> 

    )

}

export default Dashboard