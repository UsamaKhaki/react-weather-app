import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const { loadingCnt, showLoading } = useSelector((state) => state.utils);

  useEffect(() => {
    if (loadingCnt > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [loadingCnt]);

  if (!isLoading) return null;

  return (
    <div className='w-full h-full fixed top-0 left-0 flex items-center justify-center bg-white'>
      <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
}

export default PageLoader;
