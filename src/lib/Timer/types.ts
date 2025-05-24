import { Timer } from '@ark-ui/react/timer'

export interface Props extends Timer.RootProps {
  className?: string;
  hideDays?: boolean;
  hideHours?: boolean;
  hideMinutes?: boolean;
  hideReset?: boolean;
  hideToggle?: boolean;
  separator?: string;
}
