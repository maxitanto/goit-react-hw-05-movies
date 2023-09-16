import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBtn = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  min-width: 102px;

  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  text-align: center;

  background-color: orangered;

  border: 1px solid transparent;
  border-radius: 0.25rem;

  &:hover,
  &:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
`;

export const FilmInfo = styled.div`
  display: flex;
`;

export const Poster = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Image = styled.img`
  display: block;
  width: 300px;
`;

export const Info = styled.div`
  margin-left: 20px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
