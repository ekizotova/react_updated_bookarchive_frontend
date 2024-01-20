import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetAuthorsBooks } from './Requests';

function WrittenBooks() {
  const [books, setBooks] = useState([]);
  const { idAuthor } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await GetAuthorsBooks(idAuthor);
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [idAuthor]);
  
  return (
    <div>
      <h1>List of books by preferred author</h1>
				<table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>genre</th>
                            <th>page number</th>
							<th>rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.idBook}>
								<td> {book.title} </td>
                                <td> {book.genre} </td>
                                <td> {book.pageNumber} </td>
                                <td> {book.ageRating} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  );
}

export default WrittenBooks;
