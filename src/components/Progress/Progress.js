import React from 'react';

const Progress = ({ width, bgColor }) => {
  return (
    <div class='progressbar'>
      <div style={{ width: width, background: bgColor }}></div>
    </div>
  );
};

export default Progress;
