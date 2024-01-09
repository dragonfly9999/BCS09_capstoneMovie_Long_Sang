import React from 'react';
import Lottie from 'react-lottie';
import * as loadingAnimation from './../../assets/animation/loadingAnimation.json';
const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-40 flex items-center"
      style={{ zIndex: '9999' }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
