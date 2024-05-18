import React, { useEffect, useState } from "react";
import data from "../database/data";
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useSelector } from "react-redux";

export const Questions = () => {
  const [check, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const question = data[0];
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  });

  function onSelect() {
    // console.log("radio button clicked");
  }
  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect()}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check "></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
