import React, { useState } from "react";
import "./BooksList.css";

const BooksList = ({ books }) => {
  const [bookStatus, setBookStatus] = useState({});

  const toggleBookStatus = (key) => {
    setBookStatus((prevStatus) => ({
      ...prevStatus,
      [key]: !prevStatus[key],
    }));
  };
  return (
    <div className="book-item">
      {books.map((book) => (
        <div key={book.work.key} className="book-entry">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-L.jpg`}
            alt={`${book.work.title} cover`}
          />
          <div className="book-entry-info text-center">
            <div className="book-entry-info-item title fw-7 fs-18">
              <h2>{book.work.title}</h2>
            </div>
            <div className="book-entry-info-item author fs-15">
              <span className="text-capitalize fw-7">Author: </span>
              <span>{book.work.author_names[0]}</span>
            </div>

            <div className="book-item-info-item publish-year fs-15">
              <span className="text-capitalize fw-7">Published Year: </span>
              <span>{book.work.first_publish_year}</span>
            </div>

            <button
             style={{
              backgroundColor: bookStatus[book.work.key] ? 'green' : 'transparent',
              color: bookStatus[book.work.key] ? '#fff' : '#007bff',
              border: bookStatus[book.work.key] ? 'none' : '1px solid #007bff',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop:'4px'
            }}
              className={`status-button ${
                bookStatus[book.work.key] ? "read-button" : "unread-button"
              }`}
              onClick={() => toggleBookStatus(book.work.key)}
            >
              {bookStatus[book.work.key] ? "Read" : "Unread"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
