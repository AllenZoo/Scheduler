import uniqid from "uniqid";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { timeContext } from "./timeTable";
import styled from "styled-components";

const TouchButton = styled.button`
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: 0px;
  margin: 0px;

  &:hover {
    cursor: pointer;
  }
`;

const TTSlot = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  flex: 1;
  padding: 0px;
  margin: 0px;

  border: ${(props) => (props.isSelected ? "3px solid green" : "none")};
`;

const TTSlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  width: 100%;
  flex: 1;

  border-radius: 5px;
  border: 1;
  padding: 0px;
  margin: 0px;
`;

const TTSlotText = styled.div``;

function TimeTableSlot(props) {
  const [slotData, setSlotData] = useState(props.slot);
  const [isSelected, setIsSelected] = useState(false);
  const { interactable } = useContext(timeContext);
  const { toggleSelectedSlot } = useContext(timeContext);

  useEffect(() => {}, [props.slot, props.time]);

  useEffect(() => {
    // if (isSelected) {
    //   console.log("Selected");
    // } else {
    //   console.log("Not Selected");
    // }
  }, [isSelected]);

  function toggleSelection() {
    if (!interactable) return;
    let slot = slotData;
    slot["time"] = props.time;
    setIsSelected(!isSelected, toggleSelectedSlot(slot));
  }

  function getTextColour() {
    let r = parseInt(props.slot.colour.substring(1, 3), 16);
    let g = parseInt(props.slot.colour.substring(3, 5), 16);
    let b = parseInt(props.slot.colour.substring(5, 7), 16);
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    if (brightness < 125) {
      return "white";
    } else {
      return "black";
    }
  }

  // empty time table slot
  if (props.slot.name == "") {
    return (
      <TTSlotContainer isSelected={isSelected}>
        <TouchButton isSelected={isSelected} onClick={toggleSelection}>
          <TTSlot
            isSelected={isSelected}
            style={{ backgroundColor: "darkgoldenrod" }}
          >
            <TTSlotText>&#10240;</TTSlotText>
          </TTSlot>{" "}
        </TouchButton>
      </TTSlotContainer>
    );
  }

  return (
    <TTSlotContainer isSelected={isSelected}>
      <TouchButton isSelected={isSelected} onClick={toggleSelection}>
        <TTSlot
          isSelected={isSelected}
          style={{ backgroundColor: props.slot.colour, color: getTextColour() }}
        >
          <TTSlotText>{props.slot.name}</TTSlotText>
        </TTSlot>
      </TouchButton>
    </TTSlotContainer>
  );
}

export default TimeTableSlot;
