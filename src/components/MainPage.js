import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="App-header">
      <h1>Welcome to the main project page</h1>
      <div>
        <Link to="/authors">
          <button>Authors</button>
        </Link>
        <Link to="/books">
          <button>Books</button>
        </Link>
        <Link to="/bookstores">
          <button>Bookstores</button>
        </Link>
		<Link to="/publishers">
          <button>Publishers</button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;