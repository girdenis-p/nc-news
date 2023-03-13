import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
