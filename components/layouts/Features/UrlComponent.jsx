import React, {useState} from 'react';

import Link from "next/link";

// Copy to clipboard
import {CopyToClipboard} from 'react-copy-to-clipboard';

const UrlComponent = ({ url }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }

  return (
    <div className="h-auto w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center bg-transparent shadow-xl">
      <div className="h-48 md:h-16 w-full bg-white shadow-l rounded-lg md:flex md:flex-row md:justify-between md:items-center">
        <div className="h-12 w-full md:w-[50%] border-b border-gray-300 md:border-0 mb-2 md:mb-0 p-5 md:px-2 py-7 md:py-0 flex flex-row justify-start items-center">
          <p className="h-auto w-11/12 md:w-11/12 text-md md:text-[15px] font-bold truncate text-gray-800">
            <Link href={url.longUrl}>{url.longUrl}</Link>
          </p>
        </div>
        <div className="h-auto w-full md:w-[60%] flex flex-col md:flex-row md:px-2 justify-center md:justify-end items-start md:items-center space-y-3 md:space-y-0 md:space-x-0">
          <div className="h-12 p-5 text-md md:text-[15px] font-bold bgColorThemePrimary flex flex-row justify-start items-center">
            <Link href={`${process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/urls/' : 'https://shortly-shortener.vercel.app/api/urls/'}${url.urlCode}`}>{url.shortUrl}</Link>
          </div>

          <CopyToClipboard
          text={url.shortUrl}
          onCopy={onCopyText}
          className={`h-12 md:h-8 w-11/12 md:w-2/12 mx-auto ${isCopied ? "bgTheme" : "bgThemePrimary"} text-white shadow-lg text-md md:text-sm font-bold 
          flex justify-center items-center rounded-md border-0 py-3 px-5 focus:outline-none`}
          >
            <button
              // className={`h-12 md:h-8 w-11/12 md:w-3/12 mx-auto ${isCopied ? "bgTheme" : "bgThemePrimary"} text-white shadow-lg text-md md:text-sm font-bold 
              // flex justify-center items-center rounded-md border-0 py-3 px-5 focus:outline-none active:bgTheme focus:bgTheme`}
            >
             {isCopied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}

export default UrlComponent;