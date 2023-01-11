import ChecklistList from "../Checklist/components/checklistList";
import styled from "styled-components";

export const TextArea = styled.textarea`
  /* style the textarea itself */
  width: 50%;
  height: auto; /* allow the textarea to grow based on the input */
  min-height: 50px; /* minimum height */
  max-height: 400px; /* maximum height */
  padding: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 14px;
  resize: none; /* disable resize handle */
  text-align: left; /* align input text to the left */
  padding-left: 20px; /* add padding to the left side */
  overflow: wrap; /* hide the scrollbar */

  /* style the placeholder text */
  &::placeholder {
    color: gray;
  }
`;

function TestArea() {
  return (
    <div>
      <ChecklistList title="Cool Checklist"></ChecklistList>
    </div>
  );
}

export default TestArea;
