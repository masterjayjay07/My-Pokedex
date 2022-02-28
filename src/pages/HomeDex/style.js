import styled from "styled-components";
import pokedexUp from "../../assets/pokedexUp.png";
import pokedexDown from "../../assets/pokedexDown.png";
import pokedexMiddle from "../../assets/pokedexMiddle.png";

export const Container = styled.div`
  margin-top: 20px;

  width: 95vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadDex = styled.div`
  background: center / cover no-repeat url(${pokedexUp});
  width: 100%;
  height: 100px;
`;

export const FooterDex = styled.div`
  background: center / cover no-repeat url(${pokedexDown});
  width: 100%;
  height: 100px;
`;

export const InfosContainer = styled.div`
  background: center / cover no-repeat url(${pokedexMiddle});
  height: 400px;
  width: 97%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    height: 70%;
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  width: 98%;
  height: 30%;
  align-items: center;
  justify-content: center;
`;
