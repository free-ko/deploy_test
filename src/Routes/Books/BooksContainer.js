import React from "react";
import BooksPresenter from "./BooksPresenter";
import { BooksApi } from "../../api";

export default class extends React.Component {
  state = {
    BestSeller: null,
    Recommend: null,
    NewBook: null,
    error: null,
    laoding: true,
  };

  async componentDidMount() {
    try {
      const { item: BestSeller } = await BooksApi.BestSeller();
      const { item: Recommend } = await BooksApi.Recommend();
      const { item: NewBook } = await BooksApi.NewBook();
      this.setState({ BestSeller, Recommend, NewBook });
    } catch {
      this.setState({
        error: "Can't find books...",
      });
    } finally {
      this.setState({
        laoding: false,
      });
    }
  }

  render() {
    const { BestSeller, Recommend, NewBook, error, loading } = this.state;
    return (
      <BooksPresenter
        BestSeller={BestSeller}
        Recommend={Recommend}
        NewBook={NewBook}
        error={error}
        laoding={loading}
      />
    );
  }
}
