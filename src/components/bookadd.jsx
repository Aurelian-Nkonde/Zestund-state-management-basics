import { useState } from "react"
import booksStore from "../booksStore"

export default function BookAdd(){
    const[newbook,setNewBook] = useState({title: "", pages: ""})
    const addingBook = booksStore(state => state.addBook)

    function changePages(e){
        setNewBook({...newbook, pages: e.target.value})
    }

    function changeTitle(e){
        setNewBook({...newbook, title: e.target.value})
    }

    function addingOlBook(e){
        e.preventDefault();
        if(newbook.title.length > 3 ){
            // alert(newbook)
            addingBook(newbook);
            setNewBook({pages: "", title: ""})
        }else {
            alert("book details error!")
        }
    }

    return(
        <div>
            <h3>add a book</h3>
            <input value={newbook.title} onChange={changeTitle} placeholder="title"></input>
            <input value={newbook.pages} onChange={changePages} placeholder="pages" ></input>
            <button onClick={addingOlBook}>add a book</button>
        </div>
    )
}