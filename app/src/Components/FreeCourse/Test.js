import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { Button, colors } from "@mui/material";
import "./test.css";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import dart from "../../assets/images/langu/dart.svg";
import { useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const pdfContainerRef = useRef(null);
  const [courseData, setCourseData] = useState({}); // State to store the course data
  const [coursesData, setCoursesData] = useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const prev = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const next = () => {
    setPageNumber(pageNumber + 1 >= numPages ? pageNumber : pageNumber + 1);
  };

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    setScale(scale - 0.1);
  };

  const handleFullScreen = () => {
    if (!isFullScreen) {
      pdfContainerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    window.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      window.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);


  useEffect(() => {
    // Fetch courses data from the API
    fetch("http://backend.auraednepal.org/v1/courses")
      .then((response) => response.json())
      .then((data) => {
        setCoursesData(data.data.courses);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch course data using the id from the URL parameters
    fetch(`http://backend.auraednepal.org/v1/courses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCourseData(data.data.course);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        // Handle error if necessary
      });

    // Rest of the useEffect hook code...
  }, [id]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isFullScreen) {
        switch (e.keyCode) {
          case 37:
            prev();
            break;
          case 39:
            next();
            break;
          default:
            break;
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [pageNumber, isFullScreen]);

  return (
    <>
      <div>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Righteous",
            marginTop: "40px",
            marginBottom: "100px",
            background: "linear-gradient(30deg, #0000FF 20%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }} className="titlet"
        >
          THIS IS COURSE ABOUT PROGRAMMING LANGUAGE
        </h1>
      </div>
      <section className="secson">
        <div
          className="pdf-container"
          ref={pdfContainerRef}
          style={{ height: isFullScreen ? "100vh" : "auto" }}
        >
          <div className="w-100 border-secondary border-2 mx-auto oknow">
            <Document
              file={`http://backend.auraednepal.org/v1/upload/${courseData.pdf}`}
              onLoadSuccess={onDocumentLoadSuccess}
              className="some"
            >
              <Page pageNumber={pageNumber} noData={true} scale={scale} />
            </Document>
          </div>
      
          <div className="so">
            <Button onClick={prev}>pre</Button>
            <Button onClick={next}>next</Button>
            <Button onClick={zoomIn}>Zoom In</Button>
            <Button onClick={zoomOut}>Zoom Out</Button>
            <Button onClick={handleFullScreen}>
              {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
            </Button>
          </div>
        </div>
        <div className="recom" style={{ height: "847px", overflow: "auto" }}>
          <h5
            className="h4 w-60 p-3 firehell "
            style={{ textAlign: "center", fontFamily: "Monoton" }}
          >
            RECOMMENDED COURSE
          </h5>
          <div>
            {coursesData.map((logo, index) => (
              <div className="card-container" key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                    border: "1px solid #8a175d", // add border property here
                    backgroundColor: "white",
                    margin: "10px", // add background color here
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <CardMedia
                      component="img"
                      image={`http://backend.auraednepal.org/v1/upload/${logo.thumbnail}`}
                      alt={logo.title}
                      sx={{
                        width: 120,
                        height: 100,
                        borderRadius: "0.5rem",
                        backgroundColor: "white",
                        transition: "transform 0.2s ease-out",
                        "&:hover": {
                          transform: "scale(1.3)",
                        },
                      }}
                    />
                  </div>
                  <div style={{ marginLeft: "1rem" }}>
                    <Link to={`/test/${logo.id}`}>{logo.title}</Link>
                  </div>
                </div>
                <hr className="line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
      <div className="flex flex-center justify-center">
        <scroll-show delay="0">
          <div className="flex rounded-lg bg-black bg-opacity-30 shadow-3xl aspect-square p-6 w-36 h-36 mx-2 border-b-4 border-gray6">
            <img className="m-0" src={dart} />
          </div>
        </scroll-show>
      </div>
      <div className="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
      <article className="artii" style={{marginLeft:"90px"}} >
        <p className="my-14">
          {courseData.description}
        </p>
        <h2 className="h2 text-uppercase font-weight-bold my-10 font-opensans">
          🦄 What will I learn?
        </h2>
        <p className="mx-5">
          This course provides a tour of <a href="https://dart.dev/">{courseData.title}</a>{" "}
          and teaches essential concepts for Flutter developers. Here’s what
          you’ll get out of it…
        </p>
        <ul id="myList">
          <li>👨‍🎤 Become confident with the {courseData.title} language</li>
          <li>🐦 Get Prepared for {courseData.title}</li>
          <li>🦺 Master null-safety</li>
          <li>🦾 Learn how to use the {courseData.title} properly</li>
          <li>🕹️ Practice OOP and Functional Programming Concepts</li>
        </ul>

        <h2 className="h2 font-weight-bold my-7">
          🤔 Is this Course Right for Me?
        </h2>
        <p>
          This course is beginner level 🟢 and will walk you through the
          fundamentals of {courseData.title} , but far more in-depth and followed in a long
          linear format.
        </p>
      </article>

      <section className="sectio">
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Righteous",
            marginBottom: "100px",
            background: "linear-gradient(30deg, #0000FF 20%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginTop:"150px"
          }}
        >
          Learn form the visual form video
        </h2>
        <div
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            margin: "50px",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <iframe
            width="360"
            height="215"
            src={courseData.youtubeLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "0.5rem" }}
          ></iframe>
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/q1HZj40ZQrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "0.5rem" }}
          ></iframe>
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/q1HZj40ZQrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "0.5rem" }}
          ></iframe>
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/q1HZj40ZQrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "0.5rem" }}
          ></iframe>
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/q1HZj40ZQrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "0.5rem" }}
          ></iframe>
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/q1HZj40ZQrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "0.5rem" }}
          ></iframe>
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/q1HZj40ZQrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "0.5rem" }}
          ></iframe>
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/q1HZj40ZQrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "0.5rem" }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Test;
