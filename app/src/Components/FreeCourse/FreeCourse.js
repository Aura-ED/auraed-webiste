import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import ReactPaginate from "react-paginate";
import "./free.css";
import one from "../../assets/images/one.png";
import { Link } from "react-router-dom";
import langu from './langu'

const FreeCourse = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [coursesData, setCoursesData] = useState([]);

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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedLogos = coursesData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      {/* ... (rest of the code) ... */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
        }}
        className="containerok"
      >
        {displayedLogos.map((course, index) => (
          <div
            key={index}
            className="card-container"
            style={{ margin: "30px 0px" }}
          >
            {/* Construct the image URL using the course's thumbnail */}
            <CardMedia
              component="img"
              src={`http://backend.auraednepal.org/v1/upload/${course.thumbnail}`}
              alt={course.title} // Replace 'name' with 'title'
              sx={{
                width: 250,
                height: 150,
                borderRadius: "0.5rem",
                transition: "transform 0.2s ease-out",
                "&:hover": {
                  transform: "scale(1.3)",
                },
              }}
            />
            <p style={{ marginTop: "10px", textAlign: "center" }}>
            <Link to={`/test/${course.id}`}>{course.title}</Link> {/* Replace 'logo.name' with 'course.title' */}
            </p>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={Math.ceil(coursesData.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
      />
      <div>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "70px",
            background: "linear-gradient(30deg, #0000FF 20%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Language that you can learn !!
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              margin: "70px",
              height: "350px",
              overflow: "hidden",
            }}
          >
            {langu.map((lan, key) => {
              return (
                <>
                  <div key={key}>
                    <img
                      src={lan.image}
                      alt="img"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <img src={one} className="oneimage" alt=""/>
        </div>
      </div>
    </>
  );
};

export default FreeCourse;
