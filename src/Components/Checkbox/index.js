import React, { useState } from "react";

import "./checkbox.scss";

const Index = ({ label, onChange, checked, ...attributes }) => {
  return (
    <div class="child__box" onChange={onChange}>
      <input
        type="checkbox"
        id={attributes.id}
        checked={checked}
        style={{ display: "block" }}
      />
      <label for={attributes.id} id="checkbox">
        <svg viewBox="0 0 100 100">
          <path
            class="box"
            d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
          />
          <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 " />
        </svg>
        <span>{label && label}</span>
      </label>
    </div>
  );
};

export default Index;
