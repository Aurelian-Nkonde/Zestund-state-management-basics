import { useState } from "react"
import userStore from "../store"

export default function Frameworks(){


    const languages = userStore(state => state.languages)
    const addlanguage = userStore(state => state.addlanguage)

    return(
        <div>
           <h2>{languages.length} in the database</h2>
            <ul>
                {languages.map(data => (
                    <li>{data}</li>
                ))}
            </ul>
        </div>
    )
}