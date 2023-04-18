import booksStore from "../booksStore";
import Book from "./book";
import BookAdd from "./bookadd";

// const books = [{title: "me", pages: 90}, {title: "hwl", pages: 89}]

export default function Books(){
    const Allbooks = booksStore(state => state.books) 
    const removeAll = booksStore(state => state.deleteAll)

    return (
        <div>
            <h1></h1>
            <h2>{Allbooks.length} books currently in database</h2>
            <button onClick={removeAll}>delete all</button>
            <br></br>
            <BookAdd />
            <br></br>
            {Allbooks.map(data => (
                <Book book={data}/>
            ))}
        </div>
    )
}