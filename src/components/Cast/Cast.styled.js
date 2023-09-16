import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const CastInfo = styled.div`
  padding: 10px;
`;
