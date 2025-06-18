import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetAllBooks } from './Requests';

function BooksList() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState({});

  // Fetch books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await GetAllBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Fetch authors once books are loaded
  useEffect(() => {
    const fetchAuthors = async () => {
      const authorMap = { ...authors };

      const uniqueAuthorIds = [...new Set(books.map(book => book.authorId))];

      for (const authorId of uniqueAuthorIds) {
        if (!authorMap[authorId]) {
          try {
			  
            const res = await fetch(`http://localhost:8080/api/authors/name/${authorId}`);
            const data = await res.json();
            authorMap[authorId] = data;
          } catch (err) {
            console.error(`Error fetching author ${authorId}`, err);
          }
        }
      }

      setAuthors(authorMap);
    };

    if (books.length > 0) {
      fetchAuthors();
    }
  }, [books]);

  return (
    <div>
      <h1>List of books</h1>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Title</th>
            <th>Genre</th>
            <th>Page Number</th>
            <th>Rating</th>
            <th>Version</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.pageNumber}</td>
              <td>{book.ageRating}</td>
              <td>{book.version}</td>
              <td>
                {authors[book.authorId]
                  ? `${authors[book.authorId].name} ${authors[book.authorId].surname}`
                  : 'Loading...'}
              </td>
              <td>
   			    <Link to={`/publishers/publisher_info/${book.publisherId}`}>View</Link>
              </td>
              <td>
                <Link to={`/books/inStock/${book.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/books/search">
        <button>Search Page</button>
      </Link>
    </div>
  );
}

export default BooksList;
