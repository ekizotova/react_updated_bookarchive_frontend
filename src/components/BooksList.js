import React, { useState, useEffect } from 'react';
import { GetAllBooks } from './Requests';

function BooksList() {
  const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const fetchedBooks = await GetAllBooks();
                setBooks(fetchedBooks);
            } catch (error) {
                console.error("Error fetching books:", error);
                // Handle error state appropriately
            }
        };

        fetchBooks();
    }, []);

  return (
    <div>
      <h1>List of books</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>title</th>
                            <th>genre</th>
                            <th>pageNumber</th>
							<th>ageRating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.idBook}>{/* No whitespace before or after this line */}
                                <td>{book.idBook}</td>
                                <td>{book.title}</td>
                                <td>{book.genre}</td>
                                <td>{book.pageNumber}</td>
                                <td>{book.ageRating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  );
}

export default BooksList;
