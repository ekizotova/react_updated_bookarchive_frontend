import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AuthorsList from './components/AuthorsList';
import BooksList from './components/BooksList';
import BookstoresList from './components/BookstoresList';
import PublihsersList from './components/PublihsersList';
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
		  <Route path="/publishers/publisher_info/:publisherId" element={<PublishedBy />} />
		  <Route path="/books/inStock/:idBook" element={<ListInStock />} />
		  <Route path="/books/search" element={<Search />} />
		  <Route path="/books/author/:idAuthor" element={<WrittenBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
