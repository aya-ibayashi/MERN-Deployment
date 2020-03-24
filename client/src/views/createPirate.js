import React, {useState} from 'react'
import axios from 'axios'
import { navigate, Link } from '@reach/router'

const CreatePirate = () =>{

    const [errors, setErrors] = useState(0)

    const [formState, setFormState] = useState({
        name:"",
        image:"",
        treasureChests:"1",
        catchPhrase:"",
        crewPosition:"Captain",
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    })

    const changeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
        console.log(formState)
    }

    const clickHandler = e => {

        setFormState({
            ...formState,
            [e.target.name] : !formState[e.target.name]
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirates/create", formState)
            .then(newPirate=> navigate('/pirates/'+ newPirate.data._id))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <>
            <div style={{backgroundColor:"brown", display:"flex", justifyContent:"center"}}>
                <h1 style={{color:"white"}}>Add Pirate</h1>
                <button style={{height:30, backgroundColor:"lightBlue", marginTop:"30px", marginLeft:"10px"}}><Link to="/">Crew Board</Link></button>
            </div>    
            <form style={{ backgroundColor:"#FF9900"}} onSubmit= {submitHandler}>
                {errors !== 0 && errors.map((err, i)=>
                    <p style={{color:"red"}} key={i}>{err}</p>
                )}
                <div>
                    <label>Pirate Name:</label>
                    <input name="name" value={formState.name}  onChange={changeHandler}/>
                </div>
                <div>
                    <label>Image URL:</label>
                    <input name="image" value={formState.image} onChange={changeHandler} />
                </div>
                <div>
                    <label>Number of Treasure Chests:</label>
                    <select onChange={changeHandler} value={formState.treasureChests} name="treasureChests">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>
                    <label>Pirate Catch Phrase:</label>
                    <input name="catchPhrase" value={formState.catchPhrase} onChange={changeHandler} />
                </div>
                <div>
                    <label>Crew Position:</label>
                    <select onChange={changeHandler} value={formState.crewPosition} name="crewPosition">
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div>
                    <div>
                        <input type="checkbox" name="pegLeg" checked={formState.pegLeg} onChange = {clickHandler} />
                        <label>Peg Leg</label>
                    </div>
                    <div>
                        <input type="checkbox" name="eyePatch" checked={formState.eyePatch} onChange = {clickHandler} />
                        <label>Eye Patch</label>
                    </div>
                    <div>
                        <input type="checkbox" name="hookHand" checked={formState.hookHand} onChange = {clickHandler} />
                        <label>Hook Hand</label>
                    </div>
                </div>
                <input type="submit" value="Add Pirate"/>
            </form>

        </>

    )

}

export default CreatePirate