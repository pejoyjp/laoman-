import React from 'react';

const Card = ({ title, mp3Path }) => {
  return (
    <div className='border p-2 cursor-pointer  text-center rounded-md'>
      {title}
      <audio controls className="w-full mt-2">
        <source src={mp3Path} type="audio/mpeg" />
        您的浏览器不支持音频播放。
      </audio>
    </div>
  );
};

export default Card;