import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ListItem from "./components/ListItem";

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookIndex, setBookIndex] = useState(null);

  function addBooks(newBook) {
    if (bookIndex != undefined && bookIndex != null) {
      const updatedBooks = [...books];
      updatedBooks[bookIndex] = newBook;
      setBooks(updatedBooks);
      setBookIndex(null);
    } else {
      setBooks((books) => [...books, newBook]);
    }
  }

  function deleteBook(bookIndex) {
    const updatedBooks = books.filter((elment, index) => index != bookIndex);
    setBooks(updatedBooks);
    setBookIndex(null);
  }

  function setBookIndexfn(index) {
    setBookIndex(index);
    console.log(index);
  }

  return (
    <>
      <div className="font-general p-4 flex flex-col items-center font-medium gap-4">
        <h1 className="text-3xl mt-8">My Book List</h1>
        <InputForm
          key={bookIndex}
          addBook={addBooks}
          bookToEdit={books[bookIndex]}
        />
        <ListItem
          books={books}
          deleteBook={deleteBook}
          setBookIndex={setBookIndexfn}
        />
      </div>
    </>
  );
};

export default App;
