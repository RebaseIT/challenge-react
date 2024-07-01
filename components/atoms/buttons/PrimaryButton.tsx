import Button from '@mui/material/Button';

type ButtonProps = {
    variant: "text" | "outlined" | "contained",
    title: string
}

export default function PrimaryButton(props : ButtonProps) {
  return (
      <Button color="primary" variant={props.variant}>{props.title}</Button>
  );
}