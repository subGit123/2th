import {useState} from 'react';

export const useHeart = () => {
  const [heart, setHeart] = useState(false);

  const handleClick = () => {
    setHeart(!heart);
  };

  return {
    heart,
    handleClick,
  };
};
