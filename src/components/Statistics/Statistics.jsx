import { Container, List, Item } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage, children, }) => {
    return (
    <Container>
      {total === 0 ? (
        children
      ) : (
        <List>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>
            <Item>Positive feedback: {positivePercentage || 0}%</Item>
        </List>
    )}
    </Container>
  );
};
