import { useEffect, useState } from 'react';

// styles
import './styles.scss';

const InitialGreet = () => {
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitial(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`initial-greet ${isInitial ? 'initial' : 'final'}`}>
      <span>What work needs to get done today?</span>
    </div>
  );
};

export default InitialGreet;
