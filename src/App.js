import './App.css';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import SuggestedVideos from './components/SuggestedVideos';
// import VideoList from './components/VideoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import { useState } from 'react';
function App() {
  const [info, setInfo] = useState([]);
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<SuggestedVideos getInfo={setInfo}/>} />
      <Route path="/videos/:id" element={<WatchVideo info={info}/>} />
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
