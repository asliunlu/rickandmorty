import React, { useEffect, useState } from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import ElementCount from "./category/ElementCount";
import Sort from "../Sort/Sort";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
  elementCount,
  sendpropstoparent,
  sortpropssent,
}) => {
  const [dataFromChild, setDataFromChild] = useState(elementCount);
  const [dataFromSort, setDataFromSort] = useState("");
  function handleDataFromChild(data) {
    setDataFromChild(data);
  }
  function handleprops(data) {
    setDataFromSort(data);
    sortpropssent(data);
  }
  useEffect(() => {
    sendpropstoparent(dataFromChild);
  }, [dataFromChild, sendpropstoparent]);
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-success text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
        <ElementCount
          elementCount={elementCount}
          sendDataToParent={handleDataFromChild}
        />
        <Sort sendtoparent={handleprops} />
      </div>
    </div>
  );
};

export default Filter;
