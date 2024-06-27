import React from 'react';

const SummaryButton = ({ totalComments, distinctUsers }) => {
  return (
    <div>
      <p>Total Comments: {totalComments}</p>
      <p>Distinct Users: {distinctUsers}</p>
    </div>
  );
};

export default SummaryButton;
