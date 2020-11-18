import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;

  /* iPhone 5/SE */
  @media (max-width:320px) {
    padding: 10px;
  }

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    padding: 15px;
  } 

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    padding: 20px;
  }
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
  height: 80%;
  border-radius: 8px;

  /* iPhone 5/SE */
  @media (max-width:320px) {
    width: 72%;
    margin-top: 3rem;
  }

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    width: 83%;
    margin-top: 3rem;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    width: 83%;
    margin-top: 3rem;
  }
`;

const Data = styled.div`
  width: 70%;
  margin-left: 3vw;
  font-size: 18px;
  
  /* iPhone 5/SE */
  @media (max-width:320px) {
    margin-top: 3rem;
  }

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    margin-top: 3rem;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    margin-top: 3rem;
  }
`;

const Title = styled.h3`
  font-size: 38px;

  /* iPhone 5/SE */
  @media (max-width:320px) {
    font-size: 1.4rem;
  }

  /* iPhone 6/7/8 */
    @media (min-width: 321px) and (max-width:375px) {
      font-size: 1.55rem;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    font-size: 1.7rem;
  }

  /* iPhone X */
  @media (height:812px) {
    font-size: 2rem ;
  }
`;

const ItemContainer = styled.div`
  margin: 20px 0;

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    margin: 14px 0;
  }
`;

const Item = styled.span`
  /* iPhone 5/SE */
  @media (max-width:320px) {
    font-size: 11px;
  }

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    font-size: 14px;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    font-size: 16px;
  }
`;

const Stars = styled.span`
  color: #ffe228;
  margin-right: 5px;
  font-size: 13px;
`;

const Divider = styled.span`
  margin: 0 10px;

  /* iPhone 5/SE */
  @media (max-width:320px) {
    margin: 0 5px;
  }

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    margin: 0 5px;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    margin: 0 5px;
  }
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;

  /* iPhone 5/SE */
  @media (max-width:320px) {
    width: 100%;
  }

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    width: 100%;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    width: 100%;
    font-size: 14px;
  }

  /* iPhone X */
  @media (height:812px) {
    font-size: 14px;
  }
`;

const DetailMediaPresenter = ({ result, loading, error }) =>
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
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | KOKOFLIX
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            🎞
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}{" "}
              year
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>
              {
                <Stars role="img" aria-label="rating">
                  {result.vote_average >= 0 &&
                    result.vote_average < 2 &&
                    "★☆☆☆☆"}
                  {result.vote_average >= 2 &&
                    result.vote_average < 5 &&
                    "★★☆☆☆"}
                  {result.vote_average >= 5 &&
                    result.vote_average < 7 &&
                    "★★★☆☆"}
                  {result.vote_average >= 7 &&
                    result.vote_average < 9 &&
                    "★★★★☆"}
                  {result.vote_average >= 9 &&
                    result.vote_average <= 10 &&
                    "★★★★★"}
                </Stars>
              }
              {result.vote_average}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailMediaPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default DetailMediaPresenter;
