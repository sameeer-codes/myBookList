import React from "react";

const ListItem = ({ books, deleteBook, setBookIndex }) => {
  console.log(books);
  return (
    <>
      <ul className="max-w-2xl w-[100%] gap-4">
        {books.map((book, index) => (
          <li key={index} className="p-4 border-b">
            <div>
              <p className="text-2xl">{book.title}</p>
              <p className="text-gray-700">{book.author}</p>
            </div>
            <div className="flex mt-2">
              <button
                onClick={() => deleteBook(index)}
                className="p-3 bg-red-600 text-white cursor-pointer rounded-md mr-4 w-[100%]"
              >
                Delete
              </button>
              <button
                onClick={() => setBookIndex(index)}
                className="p-3 bg-green-600 text-white cursor-pointer w-[100%]"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListItem;
