import { create } from "zustand";

const booksStore = create((set) => ({
    logo: "welcome to books libary",
    books: [],
    addBook: (book) => set((state) => ({books: [ ...state.books, book]})),
    deleteAll: () => set((state) => ({books: []})),
    delete: (id) => set((state) => ({
        books: state.books.filter(a => a.title !== id)
    }))
}))

export default booksStore