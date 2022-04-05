import React, { useState } from "react";

import { StyledAccordian } from "./Style";

import AccordianContent from "./AccordianContent";

const Index = ({ items = [] }) => {
  const [activeItem, setActiveItem] = useState();

  const handleHeaderClicked = (name) => {
    setActiveItem(name === activeItem ? undefined : name);
  };

  return (
    <StyledAccordian>
      {items.map((item) => {
        const isActive = activeItem === item.name;
        return (
          <AccordianContent
            onClick={() => handleHeaderClicked(item.name)}
            itemName={item.name}
            itemContent={item.content}
            isActive={isActive}
          ></AccordianContent>
        );
      })}
    </StyledAccordian>
  );
};

export default Index;
