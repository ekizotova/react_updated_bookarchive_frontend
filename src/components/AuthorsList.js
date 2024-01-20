import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetAllAuthors, AddAuthor, CheckAuthorExists } from './Requests';

function AuthorsList() {

	const [authors, setAuthors] = useState([]);
	const [newAuthor, setNewAuthor] = useState({
		name: '',
		surname: '',
		nationality: '',
		age: '',
  });
  const [error, setError] = useState('');

	useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const fetchedAuthors = await GetAllAuthors();
                setAuthors(fetchedAuthors);
            } catch (error) {
                console.error("Error fetching authors:", error);
            }
        };

        fetchAuthors();
    }, []);
	
	const handleAddAuthor = async () => {
    try {
		
      if (!newAuthor.name || !newAuthor.surname || !newAuthor.nationality || !newAuthor.age) {
            setError('All fields must be filled');
            return;
        }
	  
	  const authorExists = await CheckAuthorExists(newAuthor);
	  
	  if (authorExists) {
        setError('Author with the same data already exists');
        return;
      }
	  
      await AddAuthor(newAuthor);
   
      const updatedAuthors = await GetAllAuthors();
      setAuthors(updatedAuthors);
     
      setNewAuthor({
        name: '',
        surname: '',
        nationality: '',
        age: '',
      });
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewAuthor((prevAuthor) => ({
			...prevAuthor,
			[name]: value,
    }));
	setError('');
  };

  return (
    <div>
      <h1>List of authors</h1>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>  name  </th>
                            <th>  surname  </th>
                            <th>  country origin  </th>
                            <th>  age  </th>
							<th>books</th>
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
								<td>
                
									<Link to={`/authors/writtenBooks/${author.idAuthor}`}>
											View
									</Link>
								</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
				<h2>Add New Author</h2>
					<form>
					
						<label>
							Name:
							<input type="text" name="name" value={newAuthor.name} onChange={handleInputChange} />
						</label>
						<label>
							Surname:
							<input type="text" name="surname" value={newAuthor.surname} onChange={handleInputChange} />
						</label>
						<label>
							Country Origin:
							<input type="text" name="nationality" value={newAuthor.nationality} onChange={handleInputChange} />
						</label>
						<label>
							Age:
							<input type="text" name="age" value={newAuthor.age} onChange={handleInputChange} />
						</label>
						<button type="button" onClick={handleAddAuthor}>
							Add Author
						</button>
						{error && <div style={{ color: 'red' }}>{error}</div>}
					</form>
    </div>
  );
}

export default AuthorsList;
