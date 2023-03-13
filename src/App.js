import './App.css';

import { Routes, Route } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
