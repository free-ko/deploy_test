import React from "react";
import ProtoTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 3px;
  background-position: center center;
  transition: opacity 0.1s linear;

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    height: 222px;
  }
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-top: 7px;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const PosterBooks = ({ isbn, imageUrl, title, rating, year }) => (
  <Link to={`/book/${isbn}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);
PosterBooks.ProtoTypes = {
  isbn: ProtoTypes.number.isRequired,
  imageUrl: ProtoTypes.string,
  title: ProtoTypes.string.isRequired,
  rating: ProtoTypes.number,
  year: ProtoTypes.string,
};

export default PosterBooks;
