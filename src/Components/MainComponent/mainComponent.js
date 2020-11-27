import React, { Component } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import Filters from "../Filters/filterComponent";
import MissionCard from "../MissionCard/missionCardComponent";

import {
  Heading,
  Container,
  MissionsList,
  InfoContainer,
  Loader,
  Footer,
  FooterText,
  DeveloperName,
} from "./styledComponents.js";
import "./styles.css";

@observer
class MainComponent extends Component {
  componentDidMount() {
    stores.storeInstance.fetchData();
  }

  renderMissionsList = () => {
    if (stores.storeInstance.missionsList.length > 0)
      return (
        <MissionsList>
          {stores.storeInstance.missionsList.map((mission) => (
            <MissionCard
              mission={mission}
              key={`${mission.mission_name}${mission.flight_number}`}
            />
          ))}
        </MissionsList>
      );
    else return <Loader>{`No Items to Show`}</Loader>;
  };

  render() {
    return (
      <Container>
        <Heading>{`SpaceX Launch Programs`}</Heading>
        <InfoContainer>
          <Filters />
          {!stores.storeInstance.missionsList ? (
            <Loader>
              <div className="loader" />
            </Loader>
          ) : (
              this.renderMissionsList()
            )}
        </InfoContainer>
        <Footer>
          <FooterText>{`Developed by: `}</FooterText>
          <DeveloperName>{`Sai Neeraja`}</DeveloperName>
        </Footer>
      </Container>
    );
  }
}

export default MainComponent;
