import React, { useEffect, useState } from "react";

const ElementCount = ({ elementCount, sendDataToParent }) => {
  const [selectedOption] = useState(elementCount);
  useEffect(() => {}, [selectedOption]);
  return (
    <>
      <h5 className="font-italic">Display Options per Page</h5>
      <select
        class="form-control"
        name="state"
        id="maxRows"
        defaultValue={selectedOption}
        onChange={(e) => sendDataToParent(e.target.value)}
      >
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
        <option value="15">15</option>
        <option value="18">18</option>
      </select>
    </>
  );
};

export default ElementCount;
