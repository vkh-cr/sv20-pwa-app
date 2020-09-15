import styled from 'styled-components';

export const Container = styled.div`
  flex: 50%;
  background: ${({ imageSrc }) => `linear-gradient(to bottom, rgba(255,255,255,0) 70%, rgba(16,141,229,1) 100%), url("${imageSrc}") no-repeat`};
  background-size: cover;
  height: 100%;
  position: relative;
  display: flex;

  h1 {
    color: white;
    text-align: center;
    vertical-align: bottom;
    text-transform: uppercase;
    font-size: 20px;
    align-self: flex-end;
    width: 100%;
  }
`;
