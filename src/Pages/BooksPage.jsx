import { useState, useEffect } from "react";
import { getAllBooks } from "../API/Index";


export default function Homepage() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    async function retrieveBookList() {
      try {
        const newBooks = await getAllBooks();
        setBookList(newBooks);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveBookList();
  }, []);
  return (
    <>
      <h2 className="header">
Explore the library's extensive collection for a diverse array of books</h2>
    </>
  );
}