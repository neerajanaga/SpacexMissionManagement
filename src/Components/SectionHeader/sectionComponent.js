import React from "react";

import { Title, HorizontalLine, Container } from "./styledComponents.js";

function SectionHeader(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <HorizontalLine></HorizontalLine>
    </Container>
  );
}

export default SectionHeader;
