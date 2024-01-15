import React, { useState, useEffect } from 'react';
import { GetAllAuthors } from './Requests';

function AuthorsList() {
  // Логика получения данных и отображения списка авторов
  const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const fetchedAuthors = await GetAllAuthors();
                setAuthors(fetchedAuthors);
            } catch (error) {
                console.error("Error fetching authors:", error);
                // Handle error state appropriately
            }
        };

        fetchAuthors();
    }, []);

  return (
    <div>
      <h1>List of authors</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>surname</th>
                            <th>nationality</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map(author => (
                            <tr key={author.idAuthor}>{/* No whitespace before or after this line */}
                                <td>{author.idAuthor}</td>
                                <td>{author.name}</td>
                                <td>{author.surname}</td>
                                <td>{author.nationality}</td>
                                <td>{author.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

    </div>
  );
}

export default AuthorsList;
