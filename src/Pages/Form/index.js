import React, { useEffect, useState } from "react";

import Checkbox from "../../Components/Checkbox/";
import SelectAllCheckbox from "../../Components/SelectAllCheckbox/";
import Dropdown from "../../Components/Dropdown/";

import countries from "../../data/countries.json";
import data from "../../data/animals.json";

const multiCheckboxData = [
  {
    id: 1,
    value: "hey",
  },
  {
    id: 2,
    value: "hello",
  },
  {
    id: 3,
    value: "test",
  },
];

const CheckState = ({ label, checked }) => {
  return (
    <div class="check__all-design" style={{ marginTop: "2.4rem" }}>
      <label for="checkAll-1">{label}</label>
      <input
        type="checkbox"
        class="check__all"
        id="checkAll-1"
        data-checkall-trigger="group1"
        checked={checked}
      />
      <label class="check__all-box" for="checkAll-1">
        <div class="state unchecked active-state"></div>
        <div class="state checked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            enable-background="new 0 0 24 24"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <polyline
              class="path"
              fill="none"
              points="20,6 9,17 4,12"
              stroke="#000000"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
        </div>
        <div class="state some__checked"></div>
      </label>
    </div>
  );
};

const Index = () => {
  const [checkBoxValue, setCheckBoxValue] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [multiValue, setMultivalue] = useState([]);

  const [multiValueCheckAll, setMultivalueCheckAll] = useState([]);

  const [value, setValue] = useState(null);
  const [animalValue, setAnimalValue] = useState(null);

  useEffect(() => {
    setCheckBoxValue(isChecked ? "Show Notes" : "");
  }, [isChecked]);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      Form
      <div className="form__container">
        <Checkbox
          label="Show Notes"
          id="custom-1"
          onChange={(val) => {
            setIsChecked((prev) => !prev);
          }}
          checked={isChecked}
        ></Checkbox>
        <div className="text">{checkBoxValue}</div>
        <div
          className="multi__checkbox"
          style={{ marginTop: "1rem", display: "flex", gap: ".8rem" }}
        >
          {multiCheckboxData.map((item) => {
            //  to be verified
            const isMultiChecked = (multiValue || []).includes(item.id);
            return (
              <Checkbox
                id={item.id}
                label={item.value}
                onChange={() => {
                  setMultivalue((prev = []) =>
                    isMultiChecked
                      ? prev.filter((prevId) => prevId !== item.id)
                      : [...prev, item.id]
                  );
                }}
                checked={isMultiChecked}
              />
            );
          })}
        </div>
        {/* <div className="check__box-container check__box-design">
          <CheckState
            label="Check/ Uncheck"
            checked={multiValueCheckAll.every((element) => {
              return multiCheckboxData.map((item) => item.id).includes(element);
            })}
          ></CheckState>
          <div className="child__box-container">
            {multiCheckboxData.map((item) => {
              const isChecked = (multiValue || []).includes(item.id);
              return (
                <Checkbox
                  id={`${item.name}-${item.id}`}
                  label={item.value}
                  checked={isChecked}
                  onChange={() => {
                    console.log(isChecked);
                    isChecked
                      ? setMultivalueCheckAll((prev) => {
                          return prev.filter((prevId) => prevId !== item.id);
                        })
                      : setMultivalueCheckAll((prev) => {
                          return [...prev, item.id];
                        });
                  }}
                />
              );
            })}
          </div>
        </div> */}
        {/* dropdown */}
        <div style={{ width: "200px", marginTop: "3rem" }}>
          <Dropdown
            options={countries}
            prompt="Select Country..."
            id="code"
            label="name"
            value={value}
            onChange={(val) => setValue(val)}
          ></Dropdown>
        </div>
        <div style={{ width: "200px", marginTop: "3rem" }}>
          <Dropdown
            options={data}
            prompt="Select Animal"
            id="id"
            label="name"
            value={animalValue}
            onChange={(val) => setAnimalValue(val)}
          ></Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Index;
