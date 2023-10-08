import { Container, Title } from "./Notification.styled";

export const Notification = ({ message}) => {
  return (
    <Container>
      <Title>{message}</Title>
    </Container>
  );
};
