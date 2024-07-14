import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { chipClasses } from "@mui/material";

const Card = ({ page, results, dataFromFilter, dataFromSort }) => {
  let display;
  {
    // Helper function to check if two arrays are equal
    function arraysEqual(arr1, arr2) {
      if (arr1[0] === arr2[0] || !arr2) {
        return true;
      }

      return false;
    }

    // Extracting the names from the results array and trimming any extra spaces
    const resultNames = results?.map((x) => x.name?.trim()) ?? [];

    // Comparing the arrays within the objects
    if (arraysEqual(resultNames, dataFromSort)) {
      display = results?.slice(0, dataFromFilter).map((x) => {
        let { id, image, name, status, location } = x;
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`${page}${id}`}
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          >
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              <img className={`${styles.img} img-fluid`} src={image} alt="" />
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">{name}</div>
                <div className="">
                  <div className="fs-6 fw-normal">Last Location</div>
                  <div className="fs-5">{location.name}</div>
                </div>
              </div>
            </div>

            {(() => {
              if (status === "Dead") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-danger`}
                  >
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-success`}
                  >
                    {status}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-secondary`}
                  >
                    {status}
                  </div>
                );
              }
            })()}
          </Link>
        );
      });
    } else {
      let sorted = results.sort((a, b) => a.name.localeCompare(b.name));
      display = sorted?.slice(0, dataFromFilter).map((x) => {
        let { id, image, name, status, location } = x;

        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`${page}${id}`}
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          >
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              <img className={`${styles.img} img-fluid`} src={image} alt="" />
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">{name}</div>
                <div className="">
                  <div className="fs-6 fw-normal">Last Location</div>
                  <div className="fs-5">{location.name}</div>
                </div>
              </div>
            </div>

            {(() => {
              if (status === "Dead") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-danger`}
                  >
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-success`}
                  >
                    {status}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-secondary`}
                  >
                    {status}
                  </div>
                );
              }
            })()}
          </Link>
        );
      });
    }
  }

  return <>{display}</>;
};

export default Card;
