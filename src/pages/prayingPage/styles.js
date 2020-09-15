import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: calc(100vh - (37px + 2* 0.67rem));
  align-items: center;

  a {
    height: 25%;
    display: flex;
    flex: 50%;
  }
`;
