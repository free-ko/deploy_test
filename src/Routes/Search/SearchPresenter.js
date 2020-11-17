import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "../../Components/Message";
import PosterMedia from "../../Components/PosterMedia";
import PosterBooks from "../../Components/PosterBooks";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;

  /* iPhone 5/SE */
  @media (max-width: 320px) {
    font-size: 1rem;
  }

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    font-size: 1.1rem;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    font-size: 1.3rem;
  }
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  bookResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | KOKOFLIX</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows or Books..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <PosterMedia
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <PosterMedia
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {bookResults && bookResults.length > 0 && (
          <Section title="Books Results">
            {bookResults.map((book) => (
              <PosterBooks
                key={book.itemId}
                isbn={book.isbn}
                title={book.title}
                imageUrl={book.coverLargeUrl}
                rating={book.customerReviewRank}
                year={book.pubDate.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults &&
          movieResults &&
          bookResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 &&
          bookResults.length === 0 && (
            <Message text="Nothing found" color="#95a5a6" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  bookResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
