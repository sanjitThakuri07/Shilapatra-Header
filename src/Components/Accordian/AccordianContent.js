import React from "react";
import styled from "styled-components";

import {
  StyledAccordianHeader,
  StyledAccordianHeaderIcon,
  StyledAccordianContent,
  StyledAccordianInner,
} from "./Style";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const StyledAccordian = styled.div`
//   overflow: hidden;
//   width: 18.75rem;
//   border-radius: 0.5rem;
//   background: #27262c;
//   color: #f9f9f9;
// `;

// const StyledAccordianInner = styled.div`
//   position: absolute;
//   padding: 1rem;
//   color: #c3c1cb;
// `;

// const StyledAccordianHeader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 4rem;
//   padding: 0 1rem;
//   font-size: 1rem;
//   text-align: left;
//   background: #212025;
//   color: inherit;
//   cursor: pointer;
// `;

// const StyledAccordianHeaderIcon = styled.span`
//   transform: rotate(${(p) => (p.isActive ? -180 : 0)}deg);
//   transition: all 0.3s;
// `;

// const StyledAccordianContent = styled.div`
//   position: relative;
//   overflow: hidden;
//   height: ${(p) => {
//     const inner = document.getElementById(p.itemName);
//     return `${p.isActive ? inner && inner.clientHeight : 0}px`;
//   }};
//   transition: height 0.3s;
// `;

const AccordianContent = ({ onClick, itemName, itemContent, isActive }) => {
  return (
    <>
      <StyledAccordianHeader onClick={onClick}>
        {itemName && itemName}
        <StyledAccordianHeaderIcon
          isActive={isActive}
          className="material-icons"
        >
          expand_more
        </StyledAccordianHeaderIcon>
      </StyledAccordianHeader>
      <StyledAccordianContent itemName={itemName} isActive={isActive}>
        <StyledAccordianInner id={itemName}>{itemContent}</StyledAccordianInner>
      </StyledAccordianContent>
    </>
  );
};

export default AccordianContent;
