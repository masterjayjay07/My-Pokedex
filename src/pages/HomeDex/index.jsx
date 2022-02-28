import {
  Container,
  HeadDex,
  FooterDex,
  InfosContainer,
  SearchContainer,
} from "./style";
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HomeDex = () => {
  const Schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  const [pokemon, setPokemon] = useState({});

  return (
    <Container>
      <HeadDex />
      <InfosContainer>
        <Card />
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
