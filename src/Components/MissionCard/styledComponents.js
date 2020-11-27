import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 210px;
  flex-wrap: wrap;
  background-color: white;
  padding: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-radius: 7px;
  margin-bottom: 20px;
  max-height: 424px;
  flex-direction: column;
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 188px;
  }
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 140px;
    height: 140px;
  }
`;

export const MissionName = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: blue;
`;

export const Label = styled.span``;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  border-radius: 3px;
`;

export const MissionIdList = styled.ul`
  margin-top: 5px;
  margin-bottom: 0px;
`;

export const MissionId = styled.li``;

export const LabelContainer = styled.div`
  margin-top: 10px;
`;

export const Value = styled.span`
  color: rgb(9, 103, 210);
`;
