import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    border-radius: 4px;
  }
  & h2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 23.9691px;
    line-height: 29px;
    margin: 20px 0 2px;
    color: black;
  }
`

export const Description = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  /* or 138% */
  color: #999999;
  letter-spacing: 0.5px;
`

export const SmallContainer = styled(Container)`
  padding: 5px;
  & h2 {
    font-size: 15px;
    line-height: 22px;
    margin: 3px 0 2px;
  }

  & img {
    border-radius: 8px;
    max-height: 100%;
    max-width: 100%;
  }
`

export const RowContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Column = styled.div`
  flex: ${(props) => (props.image ? "25%" : "75%")};
  & h2,
  p {
    margin-left: 5px;
  }

  & h2 {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
  }
`

export const Type = styled.p`
  color: #6979f8;
  text-align: left;
  width: 100%;
  margin: 10px 0 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;
  text-transform: uppercase;
`

export const DateText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;
  text-transform: uppercase;
  color: #999999;
  text-align: left;
  width: 100%;
  margin-top: 2px;
`
