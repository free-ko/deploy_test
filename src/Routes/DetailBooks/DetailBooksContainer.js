import React from "react";
import DetailBooksPresenter from "./DetailBooksPresenter";
import { BooksDetailApi } from "api";
export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { isbn },
      },
      history: { push },
    } = this.props;

    const parseIsbn = parseInt(isbn);
    if (isNaN(parseIsbn)) {
      push("/");
      return;
    }

    // let result = null;
    let res = null;
    try {
      const { item: result } = await BooksDetailApi.isbnDetail(parseIsbn);
      res = result[0];
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, res });
    }
  }
  render() {
    const { res, error, loading } = this.state;
    return (
      <DetailBooksPresenter result={res} error={error} loading={loading} />
    );
  }
}
