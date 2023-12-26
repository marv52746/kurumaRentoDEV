import {useEffect, useState} from 'react';

const useGreeting = name => {
  const [greeting, setGreeting] = useState(`Hello, ${name}!`);
  useEffect(() => {
    // Call the function to get user location here
    updateName();
  }, []);

  const updateName = () => {
    setGreeting('Hello, Marvin!');
  };

  return {greeting};
};

export default useGreeting;
