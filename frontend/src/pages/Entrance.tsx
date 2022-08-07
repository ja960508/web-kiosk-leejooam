import React from 'react';
import styled from 'styled-components';
import { Link } from '../lib/Router';

const LinkButton = styled(Link)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fcfcfc;
  color: #1e2222;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%), 0px 4px 20px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EntranceButton = styled(Link)`
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%), 0px 4px 20px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e2222;
`;

const EntranceButtons = styled.div`
  display: flex;
  justify-content: center;

  ${EntranceButton} {
    flex: 1 1 50%;
    max-width: 320px;
    height: 280px;
    margin-right: 3rem;
  }
`;

const EntranceHeader = styled.header`
  background: #1e2222;
  color: #fcfcfc;
  padding: 1rem;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

function Entrance() {
  return (
    <>
      <EntranceHeader>
        <h1>어서오세요 고객님</h1>
        <h2>매머드 커피 잠실점입니다.</h2>
        <LinkButton to="/admin">매장 관리하기</LinkButton>
      </EntranceHeader>
      <EntranceButtons>
        <EntranceButton to="/customer">매장</EntranceButton>
        <EntranceButton to="/customer">포장</EntranceButton>
      </EntranceButtons>
    </>
  );
}

export default Entrance;
