import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './posts/PostList';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Lista de Posts</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
