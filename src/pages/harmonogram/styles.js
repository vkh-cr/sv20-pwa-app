import styled from 'styled-components';

export const Container = styled.div`

.react-tabs {
  -webkit-tap-highlight-color: transparent;
}

.react-tabs__tab-list {
  border-bottom: 1px solid #aaa;
  margin: 0 0 10px;
  padding: 0;
  flex: 1;
  display: flex;
  justify-content: space-around;
  background: #3E9AEF;
  color: white;
  font-weight: bolder;
}

.react-tabs__tab {
  display: inline-block;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
  width: calc(25% - 12px);
  text-align: center;
}

.react-tabs__tab--selected {
  background: #fff;
  border-color: #aaa;
  color: black;
  border-radius: 5px 5px 0 0;
}


.react-tabs__tab:focus:after {
  content: "";
  position: absolute;
  height: 5px;
  left: -4px;
  right: -4px;
  bottom: -5px;
  background: #fff;
}

.react-tabs__tab-panel {
  display: none;
}

.react-tabs__tab-panel--selected {
  display: block;
}

`;
