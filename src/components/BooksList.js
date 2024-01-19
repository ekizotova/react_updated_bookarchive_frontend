import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                            <th> </th>
                            <th>title</th>
                            <th>genre</th>
                            <th>page number</th>
							<th>rating</th>
							<th>author</th>
							<th>publ.</th>
							<th>buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.idBook}>{/* No whitespace before or after this line */}
                                <td> {book.idBook} </td>
                                <td> {book.title} </td>
                                <td>{book.genre}</td>
                                <td>{book.pageNumber}</td>
                                <td>{book.ageRating}</td>
								<td>{book.name} {book.surname}</td>
								<td>
                
									<Link to={`/books/publishedBy/${book.idBook}`}>
											View
									</Link>
								</td>
								<td>
                
									<Link to={`/books/inStock/${book.idBook}`}>
											View
									</Link>
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
