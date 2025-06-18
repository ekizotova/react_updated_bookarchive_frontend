import React, { useState, useEffect } from 'react';
import { GetAllPublishers } from './Requests';

function PublihsersList() {
  
  const [publishers, setPublishers] = useState([]);

    useEffect(() => {
        const fetchPublishers = async () => {
            try {
                const fetchedPublishers = await GetAllPublishers();
                setPublishers(fetchedPublishers);
            } catch (error) {
                console.error("Error fetching publishers:", error);
               
            }
        };

        fetchPublishers();
    }, []);
	
  return (
    <div>
      <h1>List of publishers</h1>
				<table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>name</th>
							<th>contact</th>
							<th>email</th>
                            <th>location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publishers.map(publisher => (
                            <tr key={publisher.idPublisher}>{/* No whitespace before or after this line */}
                                <td> {publisher.idPublisher} </td>
								<td> {publisher.name} </td>
								<td> {publisher.contactNumber} </td>
			                    <td> {publisher.email} </td>

                                <td> {publisher.location} </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  );
}

export default PublihsersList;
