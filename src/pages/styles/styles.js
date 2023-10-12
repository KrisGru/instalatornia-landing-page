import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 880px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0 5px;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 1180px) {
    padding: 12px;
  }
`;

export const Button = styled.button``;

export const Navbar = styled.nav`
  height: 90px;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  margin: 10px 30px;
`;

export const FlexGrow = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const CallWrapper = styled.div`
  width: 150px;
`;

export const CallButton = styled.button`
  padding: 15px 20px;
  background-color: var(--main-green);
`;
