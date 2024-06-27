import React, { useState } from 'react';
import './App.css';
import InputField from './InputField';
import SummaryButton from './SummaryButton';
import DrawButton from './DrawButton';
import { getComments } from './api';

const App = () => {
  const [totalComments, setTotalComments] = useState(0);
  const [distinctUsers, setDistinctUsers] = useState(0);
  const [comments, setComments] = useState([]);
  const [winner, setWinner] = useState('');

  const handleLinkSubmit = async (link) => {
    const videoIdMatch = link.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
  
    if (videoId) {
      const fetchedComments = await getComments(videoId);
      const uniqueUsers = [...new Set(fetchedComments)];
  
      setTotalComments(fetchedComments.length);
      setDistinctUsers(uniqueUsers.length);
      setComments(uniqueUsers);
    } else {
      alert('Invalid YouTube link');
    }
  };
  

  const handleDraw = () => {
    const randomIndex = Math.floor(Math.random() * comments.length);
    setWinner(comments[randomIndex]);
  };

  return (
    <div>
      <h1>YouTube Comment Lucky Draw</h1>
      <InputField onLinkSubmit={handleLinkSubmit} />
      <SummaryButton totalComments={totalComments} distinctUsers={distinctUsers} />
      <DrawButton onDraw={handleDraw} winner={winner} />
    </div>
  );
};

export default App;
