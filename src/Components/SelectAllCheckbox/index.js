import React, { useState } from "react";

import "./checkbox.scss";

const Index = ({ options = [], label, onChange, checked, ...attributes }) => {
  return (
    <div
      className="check__box-container check__box-design"
      style={{ marginTop: "3rem" }}
    >
      <div class="check__all-design">
        <label for="checkAll-1">{label}</label>
        <input
          type="checkbox"
          class="check__all"
          id="checkAll-1"
          data-checkall-trigger="group1"
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
      <div className="child__box-container">
        {options &&
          options.length &&
          options.map((item) => {
            return (
              <div class="child__box">
                <input
                  type="checkbox"
                  id={`${item.name}-${item.id}`}
                  checked={checked}
                />
                <label for={`${item.name}${item.id}`} id="checkbox">
                  <svg viewBox="0 0 100 100">
                    <path
                      class="box"
                      d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
                    />
                    <polyline
                      class="check"
                      points="25.5,53.5 39.5,67.5 72.5,34.5 "
                    />
                  </svg>
                  <span>{item.value && item.value}</span>
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Index;
