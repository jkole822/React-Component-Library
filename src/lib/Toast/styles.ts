import { oneLine } from "common-tags";

export const CloseButtonStyles = oneLine`
absolute
appearance-none
duration-200
ease-in-out
h-6
inline-flex
items-center
justify-center
outline-hidden
p-2
right-2
ring-primary-400
rounded-full
text-primary-600
toast-close-button
top-2
transition-all
w-6

focus:ring-2

hover:bg-primary-100 
`;

export const DescriptionStyles = oneLine`
text-neutral-primary-400
text-sm
toast-description
`;

export const RootStyles = oneLine`
bg-neutral-secondary-900
border-[1px]
border-neutral-secondary-600
duration-200
ease-[cubic-bezier(0.16, 1, 0.3, 1)]
flex
flex-col
gap-2
opacity-[var(--opacity)]
p-3
rounded-lg
scale-[var(--scale)]
shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)]
toast-root
transition-all
translate-y-[var(--y)]
w-80
z-[var(--z-index)]
`;

export const TitleStyles = oneLine`
font-medium
text-neutral-primary-50
toast-title
`;

