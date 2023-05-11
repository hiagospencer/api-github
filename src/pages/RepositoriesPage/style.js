import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.gray900};
  min-width: 20rem;
  min-height: 100vh;
  overflow-y: hidden;

`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.gray700};
  width: 100%;
  height: auto;
  overflow-y: hidden;
  padding: 40px 20px;

  @media screen and (max-width:768px){
    height: 100%;
    padding: 40px 10px;
    width: 96%;
  }


`;
