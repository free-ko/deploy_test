import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    font-size: 1.2rem;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    font-size: 1.3rem;
  }
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    grid-gap: 50px;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 50px;
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
