import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import PosterBooks from "../../Components/PosterBooks";

const Container = styled.div`
  padding: 20px;

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    padding-left: 2.3rem;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    padding-left: 2.1rem;
  }
`;

const BooksPresenter = ({ Recommend, BestSeller, NewBook, error, loading }) => (
  <>
    <Helmet>
      <title>Books | KOKOFLIX</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {BestSeller && BestSeller.length > 0 && (
          <Section title="Best Seller">
            {BestSeller.map((book) => (
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
        {Recommend && Recommend.length > 0 && (
          <Section title="Recommend">
            {Recommend.map((book) => (
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

        {NewBook && NewBook.length > 0 && (
          <Section title="New Books">
            {NewBook.map((book) => (
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
      </Container>
    )}
  </>
);

BooksPresenter.propTypes = {
  Recommend: PropTypes.array,
  BestSeller: PropTypes.array,
  NewBook: PropTypes.array,
  loading: PropTypes.string,
};

export default BooksPresenter;
