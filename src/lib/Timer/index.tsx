// Packages
import { Timer as ArkTimer } from "@ark-ui/react/timer";

// Styles
import {
  AreaStyles,
  ButtonStyles,
  ControlStyles,
  SegmentLabelStyles,
  SegmentStyles,
  SegmentValueStyles,
  SeparatorStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Timer({
  hideDays,
  hideHours,
  hideMinutes,
  hideReset,
  hideToggle,
  separator,
  ...rest
}: Props) {
  const segments = [
    !hideDays && !hideHours && !hideMinutes && "days",
    !hideHours && !hideMinutes && "hours",
    !hideMinutes && "minutes",
    "seconds",
  ].filter((segment): segment is "days" | "hours" | "minutes" | "seconds" =>
    Boolean(segment),
  );

  const controls = [
    ...(!hideToggle ? ["start", "resume", "pause"] : []),
    !hideReset && "reset",
  ].filter((control): control is "start" | "resume" | "pause" | "reset" =>
    Boolean(control),
  );

  const controlIcons: Record<"start" | "resume" | "pause" | "reset", string> = {
    start: "fa-play",
    resume: "fa-play",
    pause: "fa-pause",
    reset: "fa-rotate-left",
  };

  return (
    <ArkTimer.Root {...rest}>
      <ArkTimer.Area className={AreaStyles}>
        {segments.map((segment) => (
          <>
            <div className={SegmentStyles}>
              <ArkTimer.Item className={SegmentValueStyles} type={segment} />
              <span className={SegmentLabelStyles}>{segment}</span>
            </div>
            {segment !== "seconds" && (
              <ArkTimer.Separator className={SeparatorStyles}>
                {separator}
              </ArkTimer.Separator>
            )}
          </>
        ))}
      </ArkTimer.Area>
      <ArkTimer.Control className={ControlStyles}>
        {controls.map((control) => (
          <ArkTimer.ActionTrigger action={control} className={ButtonStyles}>
            <i
              aria-hidden="true"
              className={`fa-solid ${controlIcons[control]}`}
            ></i>
            <span>{control}</span>
          </ArkTimer.ActionTrigger>
        ))}
      </ArkTimer.Control>
    </ArkTimer.Root>
  );
}
