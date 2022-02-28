import { Container } from "./style";

const Card = ({ poke }) => {
  const actualPokemon = { name: "", type: "", type2: "", img: "" };
  if (poke.name) {
    const {
      name,
      types,
      sprites: { other },
    } = poke;
    actualPokemon.name = name;
    actualPokemon.img = other["official-artwork"].front_default;
    actualPokemon.type = types[0].type.name;
    if (types.length > 1) {
      actualPokemon.type2 = types[1].type.name;
    }
  }
  console.log(poke);

  return (
    <Container>
      {poke.name ? (
        <>
          <h2>{actualPokemon.name}</h2>
          <img src={actualPokemon.img} alt="pokemonImg" />
          <h4>
            Type: {actualPokemon.type}/{actualPokemon.type2}
          </h4>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Card;
