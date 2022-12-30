import { useEffect, useState } from "react";
import styled from "styled-components";

const TouchButton = styled.button`
  background-color: ${(props) => (props.isSelected ? "green" : "red")};
  border: none;
  border-radius: 5px;
`;

function TouchBlock(props) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected) {
      console.log("Selected");
    } else {
      console.log("Not Selected");
    }
  }, [isSelected]);

  function toggleSelection() {
    setIsSelected(!isSelected);
  }

  return (
    <div>
      <TouchButton isSelected={isSelected} onClick={toggleSelection}>
        Touch Me
      </TouchButton>
    </div>
  );
}

export default TouchBlock;
