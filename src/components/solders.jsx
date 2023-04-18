
import userStore from "../store"

const colors = {
    backgroundColor: "black",
    color: "white",
    padding: "40xp"
}

export default function Solders(){
    const Solders = userStore(state => state.solders)
    const addSolder = userStore(state => state.addSolder)
    const removeSolder = userStore(state => state.removeSolder);
    const removeall = userStore(state => state.removeAll)

    return(
        <div style={colors}>
            <h1>{Solders} in the central banko</h1>
            <button onClick={addSolder}>add a solder</button>
            <button onClick={removeSolder}>remove solder</button>
            <button onClick={removeall}> remove all solders</button>
        </div>
    )
}