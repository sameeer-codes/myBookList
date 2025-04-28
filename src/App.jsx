import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ListItem from "./components/ListItem";

const App = () => {
  const [books, setBooks] = useState([]);
  function addBooks(newBook) {
    setBooks((books) => [...books, newBook]);
  }
  return (
    <>
      <div className="font-general p-4 flex flex-col items-center font-medium gap-4">
        <h1 className="text-3xl mt-8">My Book List</h1>
        <InputForm addBook={addBooks} />
        <ListItem books={books} />
      </div>
    </>
  );
};

export default App;
