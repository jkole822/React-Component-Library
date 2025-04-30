import { Progress } from "radix-ui";

export interface Props extends Progress.ProgressProps {
  className?: string;
  label?: string;
}
