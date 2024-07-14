import React, { useEffect, useState } from "react";

const Sort = ({ sendtoparent }) => {
  let api = `https://rickandmortyapi.com/api/character`;
  let [fetchedData, setFetchedData] = useState([]);
  let { results } = fetchedData;
  let [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch(api)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          setFetchedData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    fetchData();
  }, [api]);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    sendtoparent(sortedNames);
  };
  function bubbleSort(arr) {
    const n = arr?.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j].localeCompare(arr[j + 1]) > 0) {
          // Değiştir
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  let names = results?.map((x) => {
    let { name } = x;
    return name;
  });
  const sortedNames =
    selectedValue === "Alphabetical" ? names : bubbleSort(names);

  return (
    <>
      <h5 className="mt-2 text-success">Sort By</h5>
      <select defaultValue={"Default"} onChange={handleChange}>
        <option value="Alphabetical">Alphabetical Order</option>
        <option value="Default">Default</option>
      </select>
    </>
  );
};

export default Sort;
