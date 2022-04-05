import React, { useState, useRef, useEffect } from "react";

import "./dropdown.scss";

const Index = ({ options = [], prompt = "", id, label, value, onChange }) => {
  const [open, setOpen] = useState(false);
  // for searching
  const [query, setQuery] = useState("");

  const ref = useRef(null);

  function close(e) {
    // closing dropdown when clicked outside the dropdown component
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  });

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return "";
  }

  return (
    <div className="dropdown">
      {/* click to open and close dropdown */}
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">
          <input
            type="text"
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue()}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      {/* list of options */}
      <div className={`options ${open ? "open" : null}`}>
        {/* single list of option */}
        {options &&
          options.length &&
          filter(options).map((option) => (
            <div
              className={`option ${value === option ? "selected" : null}`}
              key={option[id]}
              onClick={() => {
                // on selecting we want the value to show not the query
                setQuery("");
                //   passing the value to the form component
                onChange(option);
                // automatically closing the dropdown
                setOpen(false);
              }}
            >
              {option[label]}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
