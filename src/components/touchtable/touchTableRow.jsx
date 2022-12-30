import styled from "styled-components";
import TouchBlock from "./touchBlock";
import uniqid from "uniqid";

const TTR_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function TouchTableRow(props) {
  return (
    <div>
      <TTR_Container>
        {/* {times.map((time, i) => {
          let id = uniqid();
          return <TouchBlock time={time} key={id}></TouchBlock>;
        })} */}
        <TouchBlock key={uniqid()}></TouchBlock>
        <TouchBlock key={uniqid()}></TouchBlock>
        <TouchBlock key={uniqid()}></TouchBlock>
        <TouchBlock key={uniqid()}></TouchBlock>
        <TouchBlock key={uniqid()}></TouchBlock>
      </TTR_Container>
    </div>
  );
}

export default TouchTableRow;
