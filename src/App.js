import Articles from './components/Articles';
import Header from './components/Header';
import ArticlePage from './components/ArticlePage';
import Nav from './components/Nav';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="/*" element={<ErrorPage reason="invalid route" statusCode={404} />} />
      </Routes>
    </div>
  );
}

export default App;
