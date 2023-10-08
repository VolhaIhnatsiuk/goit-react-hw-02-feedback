import { List, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <List>
      <li>
        <Button onClick={onLeaveFeedback} name="good">
          Good
        </Button>
      </li>
      <li>
        <Button onClick={onLeaveFeedback} name="neutral">
          Neutral
        </Button>
      </li>
      <li>
        <Button onClick={onLeaveFeedback} name="bad">
          Bad
        </Button>
      </li>
    </List>
  );
};