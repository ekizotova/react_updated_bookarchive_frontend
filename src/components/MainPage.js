import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const mainPageStyle = {
    backgroundColor: 'green', // Замените 'red' на нужный вам цвет
    margin: '0', // Сброс отступов для body, чтобы цвет занимал весь экран
    padding: '0', // Сброс отступов
    color: 'white', // Цвет текста на фоне, чтобы текст был виден
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