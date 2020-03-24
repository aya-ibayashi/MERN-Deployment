import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

const PirateInfo = ({id}) =>{

    const [pirate, setPirate] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/"+id)
            .then(p=>{console.log(p.data);
                setPirate(p.data);
                setLoaded(true)})
            .catch(err=>console.log(err))
    }, [id])

    if (loaded === false){
        return "Loading..."
    }

    const clickHandler = (e, accessory) => {
        axios.put("http://localhost:8000/api/pirates/update/"+ id, 
                {[accessory]: !pirate[accessory]})
            .then(()=> {
                axios.get("http://localhost:8000/api/pirates/"+id)
                .then(p=>{
                    console.log(p.data);
                    setPirate(p.data);
                    setLoaded(true)})
                .catch(err=>console.log(err))})
            .catch(err=>console.log(err));
    }

    return (

        <>
            <div style={{backgroundColor:"brown", display:"flex", justifyContent:"center"}}>
                <h1 style={{color:"white"}}>{pirate.name}</h1>
                <button  style={{height:30, backgroundColor:"lightBlue", marginTop:"30px", marginLeft:"10px"}}><Link to="/">Crew Board</Link></button>
            </div> 
            <div style={{display:"flex", backgroundColor:"#FF9900"}}>
                <div>
                    <img src={pirate.image} alt="image of pirate"/>
                    <h2>{pirate.catchPhrase}</h2>
                </div>
                <div>
                    <h2>About</h2>
                    <p>Position: {pirate.crewPosition}</p>
                    <p>Treasures: {pirate.treasureChests}</p>
                    <p>Peg Leg: {pirate.pegLeg === true ? "Yes" : "No"} 
                        <button style={{backgroundColor: pirate.pegLeg === true? "red" : "green" }} name="pegLeg" onClick = {e=>clickHandler(e,"pegLeg")}>{pirate.pegLeg === true ? "No" : "Yes"} </button> </p>
                    <p>Eye Patch: {pirate.eyePatch === true ? "Yes" : "No"}
                        <button style={{backgroundColor: pirate.eyePatch === true? "red" : "green" }} name="eyePatch" onClick = {e=>clickHandler(e,"eyePatch")}>{pirate.eyePatch === true ? "No" : "Yes"} </button>
                    </p>
                    <p>Hook Hand: {pirate.hookHand === true ? "Yes" : "No"}
                        <button style={{backgroundColor: pirate.hookHand === true? "red" : "green" }} name="hookHand" onClick = {e=>clickHandler(e,"hookHand")}>{pirate.hookHand === true ? "No" : "Yes"} </button>
                    </p>
                </div>
            </div>

        </>


    )
}

export default PirateInfo