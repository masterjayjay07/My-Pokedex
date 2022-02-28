import {
  Container,
  HeadDex,
  FooterDex,
  InfosContainer,
  SearchContainer,
} from "./style";
import { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-hot-toast";

const HomeDex = () => {
  const [pokemonData, setPokemonData] = useState({});

  const Schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const getPokemon = (pokemon) => {
    api
      .get(`/pokemon/${pokemon}`)
      .then((res) => setPokemonData(res.data))
      .catch((err) => {
        toast.error("Pokemon não encontrado", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const onSubmitFunction = (data) => {
    getPokemon(data.name.toLowerCase());
  };

  return (
    <Container>
      <HeadDex />
      <InfosContainer>
        <Card poke={pokemonData} />
        <SearchContainer onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            register={register}
            name="name"
            label="Digite o nome aqui"
            error={errors.email?.message}
          />
          <Button children="Buscar" type="submit" />
        </SearchContainer>
      </InfosContainer>
      <FooterDex />
    </Container>
  );
};

export default HomeDex;
