import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AuthorsList from './components/AuthorsList';
import BooksList from './components/BooksList';
import BookstoresList from './components/BookstoresList';
import PublihsersList from './components/PublihsersList'; // Исправьте название компонента PublishersList
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
