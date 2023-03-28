import './App.css';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import SuggestedVideos from './components/SuggestedVideos';
// import VideoList from './components/VideoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import { useState } from 'react';
import SearchResult from './components/SearchResult';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<SuggestedVideos/>} />
      <Route path="/videos/:id" element={<WatchVideo/>} />
      <Route path="/searchresults/:title" element={<SearchResult/>} />
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
