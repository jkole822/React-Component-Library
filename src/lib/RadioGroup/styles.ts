import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
flex
flex-col
gap-2
radio-group-container
w-fit

data-disabled:cursor-not-allowed

data-disabled:[&_*]:cursor-not-allowed

focus-within:[&_.radio-group-label]:text-primary-400

data-[invalid=true]:focus-within:[&_.radio-group-label]:text-red-400
`;

export const GliderContainerStyles = oneLine`
[background:linear-gradient(0deg,_var(--color-neutral-secondary-900)_0%,_var(--color-neutral-secondary-700)_50%,_var(--color-neutral-secondary-900)_100%)]
absolute
bottom-0
left-0
radio-group-glider-container
top-0
w-px

in-data-[orientation=horizontal]:h-px
in-data-[orientation=horizontal]:w-full
`;

export const GliderStyles = oneLine`
[background:linear-gradient(0deg,_rgba(0,0,0,0)_0%,_var(--color-primary-500)_50%,_rgba(0,0,0,0)_100%)]
[transition-timing-function:cubic-bezier(0.37,1.95,0.66,0.56)]
duration-500
radio-group-glider
relative
transition-all
w-full

after:[background:linear-gradient(90deg,_--alpha(var(--color-primary-500)_/_0.3)_0%,_rgba(0,_0,_0,_0)_100%)]
after:absolute
after:h-full
after:left-0
after:w-40

before:-translate-y-1/2
before:absolute
before:bg-primary-500
before:blur-[10px]
before:h-full
before:top-1/2
before:w-2

in-data-[orientation=horizontal]:after:h-16
in-data-[orientation=horizontal]:after:w-full

in-data-[orientation=horizontal]:before:-translate-x-1/2
in-data-[orientation=horizontal]:before:-translate-y-auto
in-data-[orientation=horizontal]:before:h-2
in-data-[orientation=horizontal]:before:left-1/2
in-data-[orientation=horizontal]:before:top-1
in-data-[orientation=horizontal]:before:w-full

in-data-[orientation=horizontal]:[background:linear-gradient(90deg,_rgba(0,0,0,0)_0%,_var(--color-primary-500)_50%,_rgba(0,0,0,0)_100%)]
in-data-[orientation=horizontal]:after:[background:linear-gradient(180deg,_--alpha(var(--color-primary-500)_/_0.3)_0%,_rgba(0,_0,_0,_0)_100%)]

in-data-[invalid=true]:before:bg-red-500

in-data-[invalid=true]:[background:linear-gradient(0deg,_rgba(0,0,0,0)_0%,_var(--color-red-500)_50%,_rgba(0,0,0,0)_100%)]
in-data-[invalid=true]:after:[background:linear-gradient(90deg,_--alpha(var(--color-red-500)_/_0.3)_0%,_rgba(0,_0,_0,_0)_100%)]

in-data-[invalid=true]:in-data-[orientation=horizontal]:[background:linear-gradient(90deg,_rgba(0,0,0,0)_0%,_var(--color-red-500)_50%,_rgba(0,0,0,0)_100%)]
in-data-[invalid=true]:in-data-[orientation=horizontal]:after:[background:linear-gradient(180deg,_--alpha(var(--color-red-500)_/_0.3)_0%,_rgba(0,_0,_0,_0)_100%)]
`;

export const InputStyles = oneLine`
appearance-none
cursor-pointer
radio-group-input

in-data-[state=checked]:[&_~_label]:text-primary-500

in-data-[invalid=true]:in-data-[state=checked]:[&_~_label]:text-red-500
`;

export const ItemStyles = oneLine`
block
radio-group-item
outline-none
p-3

in-data-disabled:opacity-50
`;

export const ItemLabelStyles = oneLine`
block
cursor-pointer
duration-300
ease-in-out
radio-group-item-label
relative
text-neutral-primary-400
transition-all
`;

export const LabelStyles = oneLine`
block
capitalize
duration-200
font-medium
mb-2
select-label
text-sm
transition-colors
`;

export const OptionContainerStyles = oneLine`
flex
flex-col
radio-group-option-container
relative
pl-2

in-data-[orientation=horizontal]:[&_>_div]:grid

in-data-[orientation=horizontal]:pl-0
in-data-[orientation=horizontal]:pt-1
`;
