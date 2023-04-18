import booksStore from "../booksStore"

export default function Book({book}){
    const deleteBook = booksStore(state => state.delete)

    return(
        <div style={{padding: "30px", marginBottom: "20px", backgroundColor: "gray"}}>
            <h2>title: {book.title}</h2>
            <p>pages: {book.pages}</p>
            <button onClick={() => deleteBook(book.title)} style={{backgroundColor: "red", padding: "10px"}}>delete book</button>
        </div>
    )
}