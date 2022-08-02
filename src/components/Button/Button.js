import { Button } from "./ButtonStyles";

const Button = (props) => {
  return (
    <Button className={classes.button} type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};
