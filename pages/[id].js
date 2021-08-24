import React, {useEffect, useState} from 'react';

import {useRouter} from 'next/router';

const DynamicUrlsPage = () => {
  const router = useRouter();
  const {id} = router.query;
  const [urlCode, setUrlCode] = useState(id);

  useEffect(() => {
    // set the urlCode from the current window location url
    setUrlCode(window.location.pathname.substr(1));

    if (urlCode === "" || urlCode === null) {
      console.log(false);
      return false;
    }
    else {
      // Setup the base url
      const base_url = process.env.NODE_ENV !== 'production' ? "http://localhost:3000/api/urls/" + urlCode : "https://shortly-shortener.vercel.app/api/urls/" + urlCode
      // Redirect to the base url value
      window.location.href = base_url;
    }
  }, [urlCode])

  return(
    <div className="h-screen w-full flex justify-center items-center">
      You're being redirected 
      <div className="h-5 w-5 rounded-full spinnerDark ml-2 animate-spin"></div>
    </div>
  )
}

export default DynamicUrlsPage;