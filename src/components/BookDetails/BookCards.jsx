import React, { useState, useEffect } from 'react';
import BooksList from './BooksList';
import "./BooksList.css";

const BookCards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/people/mekBot/books/already-read.json')
      .then(response => response.json())
      .then(data => {
        const first20Items = data.reading_log_entries.slice(0, 21);
        setBooks(first20Items);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 className='cards-heading'>My Book List</h1>
      <BooksList books={books} />
    </div>
  );
};




export default BookCards;
