import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
    margin-left: 0.6rem;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
    margin-left: 1.2rem;
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.5;
  }

  /* iPhone 5/SE */
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

const Image = styled.div`
  background-image: url(https://fontmeme.com/permalink/200823/28c4f3c5c1bb8038025201832235a06b.png);
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 45px;
  margin-right: 7px;
  padding: 140px;

  /* iPhone 5/SE */
  @media (max-width: 320px) {
      margin-top: 0;
      margin-right: 0;
      padding: 0;
  }

  /* iPhone 6/7/8 */
  @media (min-width: 321px) and (max-width:375px) {
      margin-top: 0;
      margin-right: 0;
      padding: 0;
  }

  /* iPhone 6/7/8/Plus */
  @media (min-width: 376px) and (max-width:414px) {
      margin-top: 0;
      margin-right: 0;
      padding: 0;
  }

`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <SLink to="/">
      <Image />
    </SLink>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/books"}>
        <SLink to="/books">Books</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
