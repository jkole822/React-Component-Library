import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
flex
flex-col
gap-2
radio-group-container
w-fit

data-disabled:[&_*]:cursor-not-allowed

data-[orientation=horizontal]:[&_.radio-group-glider-container]:[background:linear-gradient(90deg,_var(--color-neutral-secondary-900)_0%,_var(--color-neutral-secondary-700)_50%,_var(--color-neutral-secondary-900)_100%)]
data-[orientation=horizontal]:[&_.radio-group-glider-container]:h-px
data-[orientation=horizontal]:[&_.radio-group-glider-container]:w-full

data-[orientation=horizontal]:[&_.radio-group-option-container]:pl-0
data-[orientation=horizontal]:[&_.radio-group-option-container]:pt-1

data-[orientation=horizontal]:[&_.radio-group-option-container_[role="presentation"]]:grid

data-[orientation=horizontal]:[&_.radio-group-glider]:[background:linear-gradient(90deg,_var(--color-neutral-secondary-900)_0%,_var(--color-primary-500)_50%,_var(--color-neutral-secondary-900)_100%)]

data-[invalid=true]:data-[orientation=horizontal]:[&_.radio-group-glider]:[background:linear-gradient(90deg,_var(--color-neutral-secondary-900)_0%,_var(--color-red-500)_50%,_var(--color-neutral-secondary-900)_100%)]

data-[orientation=horizontal]:[&_.radio-group-glider:after]:[background:linear-gradient(180deg,_--alpha(var(--color-primary-500)_/_0.3)_0%,_--alpha(0,_0,_0,_0)_100%)]
data-[orientation=horizontal]:[&_.radio-group-glider:after]:h-16
data-[orientation=horizontal]:[&_.radio-group-glider:after]:w-full

data-[invalid=true]:data-[orientation=horizontal]:[&_.radio-group-glider:after]:[background:linear-gradient(180deg,_--alpha(var(--color-red-500)_/0.3)_0%,--alpha(0,_0,_0,_0)_100%)]

data-[orientation=horizontal]:[&_.radio-group-glider:before]:-translate-x-1/2
data-[orientation=horizontal]:[&_.radio-group-glider:before]:-translate-y-auto
data-[orientation=horizontal]:[&_.radio-group-glider:before]:h-2
data-[orientation=horizontal]:[&_.radio-group-glider:before]:left-1/2
data-[orientation=horizontal]:[&_.radio-group-glider:before]:top-1
data-[orientation=horizontal]:[&_.radio-group-glider:before]:w-full

data-[orientation=horizontal]:[&_.radio-group-item]:text-center

focus-within:[&_.radio-group-label]:text-primary-300

data-[invalid=true]:focus-within:[&_.radio-group-label]:text-red-300
`;

export const DescriptionStyles = oneLine`
radio-group-description
text-neutral-primary-400
text-sm
`;

export const ErrorMessageStyles = oneLine`
radio-group-error-message
font-medium
text-red-400
text-sm
`;

export const GliderContainerStyles = oneLine`
[background:linear-gradient(0deg,_var(--color-neutral-secondary-900)_0%,_var(--color-neutral-secondary-700)_50%,_var(--color-neutral-secondary-900)_100%)]
absolute
bottom-0
left-0
radio-group-glider-container
top-0
w-px
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

in-data-[invalid=true]:[background:linear-gradient(0deg,_rgba(0,0,0,0)_0%,_var(--color-red-500)_50%,_rgba(0,0,0,0)_100%)]
in-data-[invalid=true]:[&::after]:[background:linear-gradient(90deg,_--alpha(var(--color-red-500)_/_0.3)_0%,_rgba(0,0,0,0)_100%)]
in-data-[invalid=true]:[&::before]:bg-red-500
`;

export const InputStyles = oneLine`
appearance-none
cursor-pointer
radio-group-input

in-data-[state=checked]:[&_~_label]:text-primary-500

in-data-[state=checked]:in-data-[invalid=true]:[&_~_label]:text-red-500
`;

export const ItemStyles = oneLine`
block
radio-group-item
p-3

in-data-[disabled]:opacity-50
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
duration-300
ease-in-out
font-extrabold
radio-group-label
tracking-wider
uppercase
transition-all

in-data-[disabled]:opacity-50
`;

export const OptionContainerStyles = oneLine`
flex
flex-col
radio-group-option-container
relative
pl-2
`;
