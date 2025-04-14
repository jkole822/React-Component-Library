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
p-1
popover-close-button
right-4
ring-primary-400
rounded-full
text-primary-600
top-4
transition-all
w-6

focus:ring-2

hover:bg-primary-100 
`;

export const ContentStyles = oneLine`
animate-popover-fade-out
bg-neutral-secondary-900
duration-200
max-w-[min(calc(100vw-16px),_380px)]
origin-[var(--radix-popover-content-transform-origin)]
p-5
popover-content
relative
rounded-lg
shadow-xl
w-[calc(100vw-16px)]
z-10

data-[state=open]:animate-popover-fade-in
`;

export const DescriptionStyles = oneLine`
text-neutral-primary-400
text-sm
`;

export const TitleStyles = oneLine`
mb-6
font-bold
text-neutral-primary-200
w-[85%]
`;
