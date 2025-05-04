import { oneLine } from "common-tags";

export const IndicatorStyles = oneLine`
bg-primary-500
duration-660
ease-linear
h-full
progress-indicator
transition-[width]
w-full

data-[state=complete]:bg-primary-400
`;

export const LabelStyles = oneLine`
block
h-0
invisible
progress-label
`;

export const RootStyles = oneLine`
bg-neutral-primary-100/20
h-6
overflow-hidden
progress-container
relative
rounded-full
translate-z-0
`;
