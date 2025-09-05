import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <ListLink href="/">Home</ListLink>
          </li>
          <li>
            <ListLink href="/about">About</ListLink>
          </li>
          <li>
            <ListLink href="/contact">Contact</ListLink>
          </li>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}

const ListLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
