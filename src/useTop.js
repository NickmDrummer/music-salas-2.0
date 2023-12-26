import { useEffect } from 'react';

const useTop = function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useTop;
