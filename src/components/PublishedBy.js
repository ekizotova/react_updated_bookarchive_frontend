import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetPublishedByForBook } from './Requests';

function PublishedBy() {
  const [publishedBy, setPublishedBy] = useState([]);
  const { idBook } = useParams();

  useEffect(() => {
    const fetchPublishedBy = async () => {
      try {
        const fetchedPublishedBy = await GetPublishedByForBook(idBook);
        setPublishedBy(fetchedPublishedBy);
      } catch (error) {
        console.error("Error fetching published by:", error);
        // Handle error state appropriately
      }
    };

    fetchPublishedBy();
  }, [idBook]);
  
  return (
    <div>
      <h1>List of publishers for chosen book</h1>
				<table>
                    <thead>
                        <tr>
                            <th>name</th>
							<th>contact</th>
                            <th>location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publishedBy.map(publisher => (
                            <tr key={publisher.idPublisher}>
								<td> {publisher.publName} </td>
								<td> {publisher.telNumber} </td>
                                <td> {publisher.location} </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  );
}

export default PublishedBy;
