
import userStore from "../store";

export default function Eggs(){
    const eggs = userStore(state => state.eggs.egg);
    const incEgg = userStore(state => state.incEgg)
    const redEggs = userStore(state => state.redEggs.small)
    const incrRed = userStore(state => state.addRedEggs)

    return(
        <div>
            <h1>{eggs} eggs mudanga</h1>
            <button onClick={incEgg}>add egg</button>
            <hr />
            <br></br>
            <h1>{redEggs} red eggs available</h1>
            <button onClick={incrRed} style={{backgroundColor: "yellow"}}>more red egg</button>
        </div>
    )
}