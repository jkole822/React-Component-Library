import { oneLine } from "common-tags";

export const ControlStyles = oneLine`
-translate-y-1/2
absolute
flex
flex-col
number-input-control
right-0
top-1/2
`;

export const DecrementTriggerStyles = oneLine`
border-l-2
duration-100
px-2.5
py-1
text-xs
transition-colors

in-data-disabled:border-neutral-secondary-600!
in-data-disabled:text-neutral-secondary-600!

in-data-invalid:border-red-500

in-data-invalid:in-data-focus:border-red-500

in-data-focus:border-primary-500
`;

export const DescriptionStyles = oneLine`
block
number-input-description
mt-2
text-neutral-primary-400
text-sm
`;

export const ErrorMessageStyles = oneLine`
block
number-input-error-message
font-medium
text-red-400
text-sm
`;

export const IncrementTriggerStyles = oneLine`
border-b-2
border-l-2
duration-100
px-2.5
py-1
text-xs
transition-colors

in-data-disabled:border-neutral-secondary-600!
in-data-disabled:text-neutral-secondary-600!

in-data-invalid:border-red-500

in-data-invalid:in-data-focus:border-red-500

in-data-focus:border-primary-500
`;

export const InputContainerStyles = oneLine`
number-input-container
relative
w-full
`;

export const InputStyles = oneLine`
duration-200
number-input-input
outline-none
p-3
relative
ring-2
rounded-lg
transition-colors
w-full

focus:ring-primary-500

in-data-disabled:cursor-not-allowed
in-data-disabled:ring-neutral-secondary-600!
in-data-disabled:text-neutral-secondary-600!

in-data-invalid:ring-red-500

in-data-invalid:focus:ring-red-500
`;

export const LabelStyles = oneLine`
block
capitalize
duration-200
font-medium
mb-2
number-input-label
text-sm
transition-colors

data-focus:text-primary-400

data-invalid:text-red-400
`;
