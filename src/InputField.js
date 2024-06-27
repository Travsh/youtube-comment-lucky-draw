import React, { useState } from 'react';

const InputField = ({ onLinkSubmit }) => {
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLinkSubmit(link);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter YouTube video/posting link"
      />
      <button type="submit" disabled={!link}>Process</button>
    </form>
  );
};

export default InputField;
