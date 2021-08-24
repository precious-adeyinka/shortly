import React, {useState, useEffect} from "react";
import styled from "./features.module.css";

// components
import Image from "next/image";
import UrlComponent from './UrlComponent';

// dependencies
import {connect} from 'react-redux';
import {setUrls} from '../../../store/actions/index';

const Features = (props) => {
  // props
  const {urls, setUrls} = props;
  // state
  const [shortenedLinks, setShortenedLinks] = useState([]);

  useEffect(() => {
    // Get all the created links
    const base_url = process.env.NODE_ENV !== 'production' ? "http://localhost:3000/api/all_urls" : "https://shortly-shortener.vercel.app/api/all_urls";

    // if (!(Object.keys(urls).length === 0)) {
    if (!(urls.length === 0)) {
      setShortenedLinks(urls);
    }
    else {
      window.fetch(base_url, {
        method: "GET",
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
      })
      .then((res) => {
        if (!res.ok && res.status === 404) return;
        else if (!res.ok) throw new Error("Server Error");
        else {
          return res.json();
        }
      })
      .then((data) => {
        // Update data
        setShortenedLinks(data);
        // Dispatch action
        setUrls(data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  }, [urls])

  return (
    <div className="h-auto w-full bg-gray-200 py-20 pb-44">
      {/* URLS */}
      <div className="h-auto w-full my-10 flex flex-col justify-center items-center space-y-5">
        {
          shortenedLinks?.length !== 0 && shortenedLinks?.map((url) => {
            return (
             <UrlComponent key={url.id} url={url} />
            )
          })
        }
      </div>

      {/* Header */}
      <div className="h-32 w-11/12 flex flex-col justify-center items-center space-y-3 my-5 md:mb-0 mt-16 mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold md:font-sans text-center bgColorDarkBlue md:text-left">
          Advanced Statistics
        </h3>
        <p className="w-10/12 md:w-4/12 text-center mx-auto text-sm text-gray-500 my-3 font-medium md:font-normal leading-relaxed">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      {/* Features List */}
      <div className={`h-auto w-full md:w-10/12 md:mx-auto flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-8 md:space-y-0 mt-20 md:mt-16 ${styled.lineAfterMobile}`}>
        {/* Brand Recognition */}
        <div
          className={`h-50 w-10/12 bg-white shadow-xl rounded-lg mx-auto py-10 px-3 pt-20 ${styled.featuredElemAfter} md:pl-7 md:transform translate-y-0`}
        >
          <div className="h-24 w-24 bgTheme rounded-full flex flex-row justify-center items-center absolute -top-10 left-1/2 md:left-1/4 -translate-x-2/4">
            <Image
              src="/assets/images/icon-brand-recognition.svg"
              height="50"
              width="50"
            />
          </div>

          <h3 className="text-2xl font-bold text-center bgColorDarkBlue md:text-left md:font-sans">
            Brand Recognition
          </h3>
          <p className="w-11/12 text-center mx-auto text-sm text-gray-500 my-3 font-medium md:font-normal leading-relaxed md:text-left md:ml-0">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        {/* Detailed Records */}
        <div
          className={`h-50 w-10/12 bg-white shadow-xl rounded-lg mx-auto py-10 px-3 pt-20 ${styled.featuredElemAfter} md:pl-7 md:transform translate-y-10`}
        >
          <div className="h-24 w-24 bgTheme rounded-full flex flex-row justify-center items-center absolute -top-10 left-1/2 md:left-1/4 -translate-x-2/4">
            <Image
              src="/assets/images/icon-detailed-records.svg"
              height="50"
              width="50"
            />
          </div>

          <h3 className="text-2xl font-bold text-center bgColorDarkBlue md:text-left md:font-sans">
            Detailed Records
          </h3>
          <p className="w-11/12 text-center mx-auto text-sm text-gray-500 my-3 font-medium md:font-normal leading-relaxed md:text-left md:ml-0">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        {/* Fully Customizable */}
        <div
          className={`h-50 w-10/12 bg-white shadow-xl rounded-lg mx-auto py-10 px-3 pt-20 ${styled.featuredElemAfter} md:pl-7 md:transform translate-y-20`}
        >
          <div className="h-24 w-24 bgTheme rounded-full flex flex-row justify-center items-center absolute -top-10 left-1/2 md:left-1/4 -translate-x-2/4">
            <Image
              src="/assets/images/icon-fully-customizable.svg"
              height="50"
              width="50"
            />
          </div>

          <h3 className="text-2xl font-bold text-center bgColorDarkBlue md:text-left md:font-sans">
            Fully Customizable
          </h3>
          <p className="w-11/12 text-center mx-auto text-sm text-gray-500 my-3 font-medium md:font-normal leading-relaxed md:text-left md:ml-0">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({urls: state.urls})
const mapDispatchToProps = {setUrls}

export default connect(mapStateToProps, mapDispatchToProps)(Features);
