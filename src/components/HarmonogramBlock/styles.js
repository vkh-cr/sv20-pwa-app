import styled from 'styled-components';
import color from '../../constants/colors'
export const Container = styled.div`
  padding: 3px 5px ;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`

export const HeaderWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
  margin-bottom: 3px;
`

export const Time = styled.div`
  padding: 2px;
`

export const TimeWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: flex-end;
  color: ${color.PRIMARY_BLUE};
`

export const Location = styled.div`
  font-style: italic;
  color: gray;
  margin-left: 110px;
`
export const Activities = styled.div`
  border-left: 1px ${color.PRIMARY_BLUE} solid;
`

export const Activity = styled.div`
  padding-left: 20px;
`
export const Person = styled.div`
  margin: 3px 0 3px 30px;
  color: gray;
`
export const ActivityLocation = styled.div`
  font-style: italic;
  color: gray;
  margin: 3px 0 3px 30px;
`


export const Note = styled.div`
 text-indent: 110px; 
`