import React, { Component } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import ButtonComponent from "../ButtonComponent/buttonComponent";
import SectionHeader from "../SectionHeader/sectionComponent";
import { Container, Heading, YearsContainer } from "./styledComponents.js";

@observer
class Filters extends Component {
  render() {
    return (
      <Container>
        <Heading>{"Filters"}</Heading>
        <SectionHeader title={"Launch Year"} />
        <YearsContainer>
          {stores.storeInstance.getYears().map((year) => (
            <ButtonComponent
              key={year}
              text={year}
              onClickButton={(value) => {
                stores.storeInstance.setSelectedYear(value);
              }}
              isSelected={stores.storeInstance.isSelectedYear === year}
            />
          ))}
        </YearsContainer>
        <SectionHeader title={"Successful Launch"} />
        <YearsContainer>
          {stores.storeInstance.getLaunchValues().map((value) => (
            <ButtonComponent
              key={value}
              text={value}
              onClickButton={(value) => {
                stores.storeInstance.setLaunchValue(value);
              }}
              isSelected={stores.storeInstance.launchValue === value}
            />
          ))}
        </YearsContainer>
        <SectionHeader title={"Successful Landing"} />
        <YearsContainer>
          {stores.storeInstance.getLaunchValues().map((value) => (
            <ButtonComponent
              key={"launch" + value}
              text={value}
              onClickButton={(value) => {
                stores.storeInstance.setLandingValue(value);
              }}
              isSelected={stores.storeInstance.landingValue === value}
            />
          ))}
        </YearsContainer>
      </Container>
    );
  }
}

export default Filters;
