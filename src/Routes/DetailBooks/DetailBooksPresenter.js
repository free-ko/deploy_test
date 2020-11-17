import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;
const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Stars = styled.span`
  color: #ffe228;
  margin-right: 5px;
  font-size: 13px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;
const DetailBooksPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | KOKOFLIX</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.title.replace("&#39", "'")} | KOKOFLIX</title>
      </Helmet>
      <Backdrop bgImage={result.coverLargeUrl} />
      <Content>
        <Cover
          bgImage={
            result.coverLargeUrl
              ? result.coverLargeUrl
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>{result.title.replace("&#39", "'")}</Title>
          <ItemContainer>
            <Item>{result.pubDate.substring(0, 4)}</Item>
            <Divider>•</Divider>
            <Item>출판사: {result.publisher}</Item>
            <Divider>•</Divider>
            <Item>저자: {result.author}</Item>
            <Divider>•</Divider>
            <Item>
              {
                <Stars role="img" aria-label="rating">
                  {result.customerReviewRank >= 0 &&
                    result.customerReviewRank < 2 &&
                    "★☆☆☆☆"}
                  {result.customerReviewRank >= 2 &&
                    result.customerReviewRank < 5 &&
                    "★★☆☆☆"}
                  {result.customerReviewRank >= 5 &&
                    result.customerReviewRank < 7 &&
                    "★★★☆☆"}
                  {result.customerReviewRank >= 7 &&
                    result.customerReviewRank < 9 &&
                    "★★★★☆"}
                  {result.customerReviewRank >= 9 &&
                    result.customerReviewRank <= 10 &&
                    "★★★★★"}
                </Stars>
              }
              {result.customerReviewRank}
            </Item>
          </ItemContainer>
          <Overview>{result.description}</Overview>
        </Data>
      </Content>
    </Container>
  );
DetailBooksPresenter.propTypes = {
  result: PropTypes.object,
};

export default DetailBooksPresenter;
