import { Container, InputContainer } from "./style";

const Input = ({ name, error, register, ...rest }) => {
  return (
    <Container>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
