import { useState } from "react"
import userStore from "../store"

export default function Add(){
    const[newlanguage, setNewLanguage] = useState("")

    const addlanguage = userStore(state => state.addLangue)

    function wordchange(e){
        setNewLanguage(e.target.value)
    }

    function addingMew(){
        if(newlanguage.length > 3){
            addlanguage(newlanguage);
            setNewLanguage("")
        }else{
            alert("short word")
        }
    }


    return (
        <div>
            <h1>add new framework</h1>
            <input value={newlanguage} onChange={wordchange}></input>
            <button onClick={addingMew}>add new framework</button>
        </div>
        )
}