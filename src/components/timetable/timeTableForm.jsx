import styled from "styled-components";

const TTFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bakcground-color: lightgreen;
  padding: 10px;
`;
const TTForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  padding: 10px;
  row-gap: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;
const TTForm_Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`;
const TTForm_Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;
const TTForm__Input = styled.input``;
const TTForm_TextArea = styled.textarea``;
const TTForm__Button = styled.button``;
const TTForm__Label = styled.label``;

function TimeTableForm() {
  const getRandomColour = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <TTFormContainer>
      <TTForm>
        <TTForm_Title>Modify Selected Slots</TTForm_Title>
        <TTForm_Row>
          <TTForm__Label>Name: </TTForm__Label>
          <TTForm__Input
            type="text"
            placeholder="Name"
            required
          ></TTForm__Input>
        </TTForm_Row>

        <TTForm_Row>
          <TTForm__Label>Description: </TTForm__Label>
          <TTForm_TextArea required placeholder=""></TTForm_TextArea>
        </TTForm_Row>

        <TTForm_Row>
          <TTForm__Label>Colour: </TTForm__Label>
          <TTForm__Input
            type="color"
            placeholder="Colour"
            defaultValue={getRandomColour()}
          ></TTForm__Input>
        </TTForm_Row>

        <TTForm__Button>Submit</TTForm__Button>
      </TTForm>
    </TTFormContainer>
  );
}

export default TimeTableForm;