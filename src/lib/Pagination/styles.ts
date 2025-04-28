import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-neutral-secondary-700
cursor-pointer
duration-200
ease-in-out
grid
h-8
items-center
outline-hidden
pagination-button
px-3
ring-2
ring-neutral-secondary-600
rounded-lg
shadow-sm
text-neutral-primary-200
text-sm
transition-all

disabled:cursor-not-allowed
disabled:ring-neutral-secondary-600!
disabled:opacity-25!

data-[selected]:bg-primary-500
data-[selected]:ring-neutral-primary-300
data-[selected]:text-neutral-primary-100

[&[data-selected]:hover:not(.pagination-ellipsis)]:bg-primary-400

focus-visible:ring-neutral-primary-200

[&:hover:not(.pagination-ellipsis)]:bg-neutral-secondary-600
[&:hover:not(.pagination-ellipsis)]:ring-neutral-primary-100

[&.pagination-ellipsis]:cursor-default
`;

export const ContainerStyles = oneLine`
flex
items-center
gap-2
w-fit
pagination-container
`;
