import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const mainPageStyle = {
    backgroundColor: 'green', 
    margin: '0', 
    padding: '0', 
    color: 'white', 
  };	
  return (
    <div style={mainPageStyle} className="App-headgit push -uf origin masterer">
      <h1>Welcome to the main archive page</h1>
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