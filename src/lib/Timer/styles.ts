import { oneLine } from "common-tags";

export const AreaStyles = oneLine`
flex
justify-center
items-center
timer-area
`;

export const ButtonStyles = oneLine`
bg-neutral-secondary-900
capitalize
inline-flex
gap-1
items-center
outline-none
px-3
py-0.5
ring
ring-neutral-primary-500
rounded
text-neutral-primary-200
text-sm
timer-button
transition-all

[&_i]:text-xs

focus-visible:ring-2
focus-visible:ring-primary-400
focus-visible:text-primary-400

hover:ring-primary-400
hover:text-primary-400
`;

export const ControlStyles = oneLine`
flex
gap-3
justify-center
items-center
mt-4
timer-control
`;

export const SegmentLabelStyles = oneLine`
font-light
text-neutral-secondary-500
text-sm
timer-segment-label
`;

export const SegmentStyles = oneLine`
flex
flex-col
items-center
justify-start
min-w-15
timer-segment
`;

export const SegmentValueStyles = oneLine`
font-bold
text-2xl
timer-segment-value

md:text-4xl
`;

export const SeparatorStyles = oneLine`
px-1
text-primary-400
timer-separator
`;
