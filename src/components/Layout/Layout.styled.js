import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 40px;
  padding: 20px 40px;

  display: flex;
  position: sticky;
  top: 0px;
  z-index: 1100;

  font-size: 20px;
  font-weight: 700;

  background-color: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Wrapper = styled.main`
  margin-left: 40px;
  max-width: 1200px;
  min-height: calc(100vh - 193px);
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: orangered;
  }
`;

export const Footer = styled.footer`
  margin-top: 40px;
  min-height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;

  color: white;
`;
