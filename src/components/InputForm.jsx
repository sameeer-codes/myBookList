import React, { useState } from "react";

const InputForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitle = (event) => setTitle(event.target.value);
  const handleAuthor = (event) => setAuthor(event.target.value);

  const submitBook = (event) => {
    event.preventDefault();

    if (title.trim() === "" && author.trim() === "") {
      alert("Please Enter Valid Values");
      return;
    } else if (title.trim() === "") {
      alert("Please Enter a Valid Title");
      return;
    } else if (author.trim() === "") {
      alert("Please enter a Valid Author");
      return;
    }

    const newBook = { title, author };
    addBook(newBook);

    setTitle("");
    setAuthor("");
  };

  return (
    <form
      onSubmit={submitBook}
      className="max-w-2xl w-full flex flex-col gap-4"
    >
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="BookName">Book Name:</label>
        <input
          onChange={handleTitle}
          className="p-2 rounded-md px-4 shadow-md"
          type="text"
          placeholder="Enter a Book Name"
          id="BookName"
          name="BookName"
          value={title}
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="BookAuthor">Book Author:</label>
        <input
          onChange={handleAuthor}
          className="p-2 rounded-md px-4 shadow-md"
          type="text"
          placeholder="Enter a Book Author"
          id="BookAuthor"
          name="BookAuthor"
          value={author}
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 rounded-md bg-blue-700 cursor-pointer text-gray-200 hover:bg-blue-900 hover:text-white transition"
      >
        Add Book
      </button>
    </form>
  );
};

export default InputForm;
