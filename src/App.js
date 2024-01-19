import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AuthorsList from './components/AuthorsList';
import BooksList from './components/BooksList';
import BookstoresList from './components/BookstoresList';
import PublihsersList from './components/PublihsersList'; // Исправьте название компонента PublishersList
import PublishedBy from './components/PublishedBy';
import ListInStock from './components/ListInStock';
import WrittenBooks from './components/WrittenBooks';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/authors" element={<AuthorsList />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/bookstores" element={<BookstoresList />} />
          <Route path="/publishers" element={<PublihsersList />} />
		  <Route path="/books/publishedBy/:idBook" element={<PublishedBy />} />
		  <Route path="/books/inStock/:idBook" element={<ListInStock />} />
		  <Route path="/books/search" element={<Search />} />
		  <Route path="/authors/writtenBooks/:idAuthor" element={<WrittenBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
