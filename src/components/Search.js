import React, { useState, useEffect } from 'react';
import { BookByStoreAndPubl, CheckPublisherExists, CheckBookstoreExists } from './Requests';

function Search() {
	const [books, setBooks] = useState([]);
	const [publName, setPublName] = useState('');
	const [storeName, setStoreName] = useState('');
	const [publisherExists, setPublisherExists] = useState(true);
    const [bookstoreExists, setBookstoreExists] = useState(true);
	const [error, setError] = useState('');

		const fetchBooks = async () => {
			try {
				const fetchedBooks = await BookByStoreAndPubl(publName, storeName);
				setBooks(fetchedBooks);
			} catch (error) {
				console.error("Error fetching search:", error);
				}
			};
		
		const handleSearch = async () => {
			if (!publName && !storeName) {
				console.log("Please enter both publisher and bookstore before searching.");
				setError('Fill all blank spaces');
				return;
			}
			
			const publisherExists = await CheckPublisherExists(publName);
			const bookstoreExists = await CheckBookstoreExists(storeName);
			
			setPublisherExists(publisherExists);
			setBookstoreExists(bookstoreExists);
	  
			
			fetchBooks();
		};
		
		useEffect(() => {
			
		}, [publName, storeName]);
	
	
  return (
    <div>
      <h1>Chose specific bookstore and publisher to list awailable books</h1>
	
		
				<div>
					<label>Publisher:</label>
					<input type="text" value={publName} onChange={(e) => setPublName(e.target.value)} />
				</div>
				<div>
					<label>Bookstore:</label>
					<input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
				</div>
				<button onClick={handleSearch}>Search</button>
				{!publisherExists && (
					<div style={{ color: 'red' }}>Publisher not found</div>
)}

				{!bookstoreExists && (
					<div style={{ color: 'red' }}>Bookstore not found</div>
)}
				{error && <div style={{ color: 'red' }}>{error}</div>}

				<table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>genre</th>
                            <th>page number</th>
							<th>rating</th>
							<th>author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.idBook}>{/* No whitespace before or after this line */}
                                <td> {book.title} </td>
                                <td>{book.genre}</td>
                                <td>{book.pageNumber}</td>
                                <td>{book.ageRating}</td>
								<td>{book.name} {book.surname}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  );
}

export default Search;
