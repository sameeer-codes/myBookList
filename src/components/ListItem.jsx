import React from "react";

const listItem = ({ books }) => {
  return (
    <>
      <ul className="max-w-2xl w-[100%] gap-4">
        {books.map((book, index) => (
          <li key={index} className="p-4 border-b">
            {book.title} By {book.author}
          </li>
        ))}
      </ul>
    </>
  );
};

export default listItem;
