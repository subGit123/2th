import {useState} from 'react';
import letter from '../data/letter.json';
import {Props} from '../models/letter.model';

export const useLetter = () => {
  const firstLetter = letter.slice(0, 8);
  const secondLetter = letter.slice(9);

  const [isOpen, setIsOpen] = useState(false);
  const [isEffect, setIsEffect] = useState(false);
  const [isLetter, setIsLetter] = useState<Props[]>(firstLetter);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleEffet = () => {
    setIsEffect(!isEffect);

    setTimeout(() => {
      setIsEffect(false);
    }, 20000);
  };

  const handleNext = () => {
    setIsLetter([...secondLetter]);
  };

  return {isOpen, handleOpen, isEffect, handleEffet, isLetter, handleNext};
};
