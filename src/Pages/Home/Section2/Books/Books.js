import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";
import BookNowModal from "./BookNowModal";

const Books = () => {
  const [book, setBook] = useState(null);
  const books = useLoaderData();
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books?.map((book) => (
          <Book key={book._id} book={book} setBook={setBook}></Book>
        ))}
      </div>
      <div>{book && <BookNowModal book={book}></BookNowModal>}</div>
    </section>
  );
};

export default Books;
