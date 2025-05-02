import { oneLine } from "common-tags";

export const LabelStyles = oneLine`
block
capitalize
duration-200
font-medium
mb-2
number-input-label
text-sm
transition-colors

in-data-[invalid=true]:text-red-400
`;

export const RangeStyles = oneLine`
absolute
bg-primary-500
h-full
rounded-full
slider-range

in-data-[invalid=true]:bg-red-500

data-[orientation=vertical]:h-auto
data-[orientation=vertical]:w-full
`;

export const RootStyles = oneLine`
flex
h-5
items-center
relative
select-none
touch-none
w-full

data-[orientation=vertical]:h-48
`;

export const TrackStyles = oneLine`
bg-neutral-primary-400
h-2
relative
rounded-full
slider-track
w-full

data-[orientation=vertical]:h-full
data-[orientation=vertical]:w-2
`;

export const ThumbStyles = oneLine`
block
bg-neutral-primary-100
outline-hidden
relative
rounded-full
size-5
slider-thumb
transition-shadow

hover:shadow-[0_0_0_4px_--alpha(var(--color-primary-400)_/_0.4)]

focus:shadow-[0_0_0_4px_--alpha(var(--color-primary-400)_/_0.7)]

hover:in-data-[invalid=true]:shadow-[0_0_0_4px_--alpha(var(--color-red-500)_/_0.4)]

focus:in-data-[invalid=true]:shadow-[0_0_0_4px_--alpha(var(--color-red-500)_/_0.7)]

data-[orientation=vertical]:-left-1.5
data-[orientation=vertical]:top-[unset]
`;
