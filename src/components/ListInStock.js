import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetStockForBook } from './Requests';

function ListInStock() {
  const [inStock, setInStock] = useState([]);
  const { idBook } = useParams();

  useEffect(() => {
    const fetchInStock = async () => {
      try {
        const fetchedInStock = await GetStockForBook(idBook);
        setInStock(fetchedInStock);
      } catch (error) {
        console.error("Error fetching stock by:", error);
 
      }
    };

    fetchInStock();
  }, [idBook]);
  
  return (
    <div>
      <h1>List of stores to buy chosen book</h1>
				<table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inStock.map(bookstore => (
                            <tr key={bookstore.idBookstore}>
								<td> {bookstore.storeName} </td>
                                <td> {bookstore.location} </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  );
}

export default ListInStock;
