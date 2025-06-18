import React, { useState, useEffect } from 'react';
import { GetAllBookstores } from './Requests';

function BookstoresList() {
 
  const [bookstores, setBookstores] = useState([]);

    useEffect(() => {
        const fetchBookstores = async () => {
            try {
                const fetchedBookstores = await GetAllBookstores();
                setBookstores(fetchedBookstores);
            } catch (error) {
                console.error("Error fetching bookstores:", error);
          
            }
        };

        fetchBookstores();
    }, []);

  return (
    <div>
      <h1>List of bookstores</h1>
				<table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>name</th>
                            <th>location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookstores.map(bookstore => (
                            <tr key={bookstore.idBookstore}>{/* No whitespace before or after this line */}
                                <td> {bookstore.idBookstore} </td>
								<td> {bookstore.name} </td>
                                <td> {bookstore.location} </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  );
}

export default BookstoresList;
