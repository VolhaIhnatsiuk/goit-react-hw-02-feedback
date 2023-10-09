import { List, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={onLeaveFeedback} name={option}>
              {option}
            </Button>
          </li>
        );
        })}
    </List>
  );
};