import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect
} from "react";

// Axios
import axios from "axios";

import {connect} from 'react-redux';
import {updateUrls} from '../../../../store/actions/index';

// Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = (props) => {
  // props
  const {updateUrls} = props;
  // state vars
  const [isOnMobileViewport, updateViewportType] = useState(false);

  // Refs
  const linkRef = useRef(null);

  // Form State
  const [link, setLink] = useState("");
  const [linkErr, setLinkErr] = useState(false);
  const [uiBlocking, setUIBlocking] = useState(false);

  useEffect(() => {
    // Get viewport status
    checkViewport();
  }, [isOnMobileViewport, linkErr]);

  // Check the viewport status and update the bg image accordingly
  const checkViewport = () => {
    if (
      window.matchMedia("only screen (max-width: 500px)").matches ||
      window.screen.availWidth <= 425
    ) {
      updateViewportType(true);
    } else {
      updateViewportType(false);
    }
  };

  const handleSubmit = (e) => {
    const base_url = "http://localhost:3000/api/shorten";

    e.preventDefault();

    if (linkRef.current.value === "") {
      setLinkErr(true);
      return false;
    } else {
      setLinkErr(false);

      // Block UI
      setUIBlocking(true);

      // Shorten the link
      window
        .fetch(base_url, {
          method: "POST",
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify({ "longUrl": link })
        })
        .then((res) => {
          if (!res.ok) throw new Error("Server Error");
          else {
            return res.json();
          }
        })
        .then((data) => {
          // custom alert
          toast.success("Voila, your short link is ready!", 
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );

          // console.log(data);
          updateUrls(data);

          // reset form
          resetForm();

          // Block UI
          setUIBlocking(false);
        })
        .catch((err) => {
          //  Block UI
          setUIBlocking(false);

          console.log(err);
        });
    }
  };

  const handleLink = (e) => {
    setLink(e.target.value.trim().toLowerCase());
  };

  const resetForm = () => {
    setLink("");
    setLinkErr(false);
  };

  return (
    <div
      className={`h-full w-full ${
        isOnMobileViewport ? "bgShortenMobile" : "bgShortenDesktop"
      } flex flex-col justify-center items-center py-10`}
    >
      <div className="h-full w-11/12 bg-transparent flex flex-col md:flex-row justify-center items-center md:space-x-4 transition duration-700">
        <form
          className="h-auto md:h-28 w-11/12 mx-auto transition duration-700 flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="h-auto w-full flex flex-col justify-center items-start">
            <div className="h-auto w-full flex flex-col md:flex-row justify-center items-center md:space-x-5">
              <div className="h-auto md:max-h-20 w-full flex flex-col justify-center items-start">
                <input
                  ref={linkRef}
                  type="text"
                  placeholder="Shorten a link here..."
                  className={`h-12 w-full rounded-md px-5 mx-auto focus:outline-none ${
                    linkErr
                      ? "border-2 border-red-500 text-red-500"
                      : "border border-gray-100 text-gray-800"
                  } transition duration-700`}
                  value={link}
                  name="link"
                  onChange={handleLink}
                />
              </div>

              <button
                type="submit"
                className="h-12 w-full md:w-4/12 bgThemePrimary text-md text-white font-bold mx-auto mt-3 md:mt-0 rounded-md px-10 
                cursor-pointer focus:outline-none shadow-lg transition duration-700 flex justify-center items-center"
              >
                {uiBlocking ? (
                  <div className="h-5 w-5 rounded-full spinner ml-2 animate-spin"></div>
                ) : (
                  <span>Shorten it!</span>
                )}
              </button>
            </div>

            {/* Err */}
            {linkErr ? (
              <div className="text-red-500 font-medium text-xs m-1 transition duration-700">
                Please add a link
              </div>
            ) : null}
          </div>
        </form>
      </div>

      {/* Notifications */}
      <ToastContainer />
    </div>
  );
};


const mapDispatchToProps = {updateUrls}

export default connect(null, mapDispatchToProps)(Form);
