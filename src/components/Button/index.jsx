import { Container } from "./style";

const Button = ({ color, children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
