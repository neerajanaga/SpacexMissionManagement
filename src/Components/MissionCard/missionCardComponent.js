import React from "react";
import { observer } from "mobx-react";

import {
  Container,
  ImageContainer,
  Image,
  Label,
  MissionName,
  LabelContainer,
  Value,
  MissionIdList,
  MissionId,
} from "./styledComponents.js";

const getValueByItsType = (value) => {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "boolean") {
    if (value) {
      return "Yes";
    }
    return "No";
  }
};

const renderLabels = (label, value) => (
  <LabelContainer>
    <Label>{label}</Label>
    <Value>{getValueByItsType(value) ? getValueByItsType(value) : `NA`}</Value>
  </LabelContainer>
);

function MissionCard(props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.mission.links.mission_patch} />
      </ImageContainer>
      <MissionName>{`${props.mission.mission_name} #${props.mission.flight_number}`}</MissionName>
      <Label>{`Mission Ids : `}</Label>
      <MissionIdList>
        {props.mission.mission_id.length > 0 ? (
          props.mission.mission_id.map((id) => (
            <MissionId key={id}>{id}</MissionId>
          ))
        ) : (
          <Value>{`NA`}</Value>
        )}
      </MissionIdList>
      {renderLabels(`Launch Year: `, props.mission.launch_year)}
      {renderLabels(`Successful Launch : `, props.mission.launch_success)}
      {renderLabels(
        `Successful Landing : `,
        props.mission.rocket.first_stage.cores[0].land_success
      )}
    </Container>
  );
}

export default observer(MissionCard);
