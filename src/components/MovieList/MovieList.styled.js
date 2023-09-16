import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  position: relative;
  left: 0;
  margin: 4px 0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;

  border-left: 2px solid orangered;
  transition: 0.5s;

  &:hover {
    left: 10px;
    &::before {
      transform: scaleX(1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    min-width: 100%;
    height: 100%;
    background: orangered;
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.5s;
  }
`;

export const ListItemLink = styled(Link)`
  text-decoration: none;

  font-size: 18px;
  font-weight: 600;
  color: black;

  position: relative;
  padding: 8px;
  padding-left: 12px;
  display: inline-block;
  z-index: 1;
  transition: 0.5s;

  &:hover {
    color: white;
  }
`;
