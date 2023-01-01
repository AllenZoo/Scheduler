import uniqid from "uniqid";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { timeContext } from "./timeTable";
import styled from "styled-components";

const TouchButton = styled.button`
  background-color: ${(props) => (props.isSelected ? "green" : "red")};
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex: 1;
`;
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

  // empty time table slot
  if (props.slot.name == "") {
    return (
      <TouchButton isSelected={isSelected} onClick={toggleSelection}>
        <div
          className="time-table-row-plan-slot"
          style={{ backgroundColor: "darkgoldenrod" }}
        >
          &#10240;
        </div>{" "}
      </TouchButton>
    );
  }

  return (
    <TouchButton isSelected={isSelected} onClick={toggleSelection}>
      <div
        className="time-table-row-plan-slot"
        style={{ backgroundColor: props.slot.colour }}
      >
        {props.slot.name}
      </div>
    </TouchButton>
  );
}

export default TimeTableSlot;
