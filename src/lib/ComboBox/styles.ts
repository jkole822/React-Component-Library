import { oneLine } from "common-tags";

export const ClearTriggerIconStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
combo-box-clear-trigger-icon
fa-close
fa-solid
left-1/2
top-1/2
`;

export const ClearTriggerStyles = oneLine`
-translate-y-1/2
absolute
combo-box-clear-trigger
cursor-pointer
duration-200
right-10
ring-primary-200
rounded-full
size-5
top-1/2
transition-colors

hover:ring-2
hover:text-primary-400

data-invalid:ring-red-200
data-invalid:hover:text-red-400
`;

export const ContentStyles = oneLine`
bg-neutral-secondary-900
combo-box-content
max-h-50
overflow-scroll
px-3
py-2
ring-1
ring-neutral-secondary-700
rounded-lg
w-full
`;

export const ControlStyles = oneLine`
combo-box-control
duration-200
p-3
relative
ring-2
rounded-lg
transition-colors
w-full

data-disabled:cursor-not-allowed
data-disabled:ring-neutral-secondary-600

data-focus:ring-primary-500

data-invalid:ring-red-500
`;

export const ItemDescriptionStyles = oneLine`
combo-box-item-description
font-light
text-neutral-primary-400
text-sm
`;

export const ItemIndicatorStyles = oneLine`
-translate-y-1/2
absolute
combo-box-item-indicator
right-2
text-primary-500
top-1/2

group-data-highlighted:text-primary-300
`;

export const ItemLabelStyles = oneLine`
combo-box-item-label
font-medium
`;

export const InputStyles = oneLine`
combo-box-input
outline-none
w-[calc(100%-60px)]

in-data-disabled:cursor-not-allowed
`;

export const ItemStyles = oneLine`
combo-box-item
cursor-pointer
duration-200
group
my-1.5
px-2
py-1
relative
ring-primary-500
rounded-md
transition-colors

data-disabled:bg-neutral-secondary-800
data-disabled:cursor-not-allowed
data-disabled:text-neutral-secondary-500

data-highlighted:bg-neutral-secondary-950
data-highlighted:ring-1
data-highlighted:text-primary-300
`;

export const ItemTextStyles = oneLine`
combo-box-item-text
flex
flex-col
`;

export const LabelStyles = oneLine`
combo-box-label
block
capitalize
duration-200
font-medium
mb-2
text-sm
transition-colors

data-focus:text-primary-400

data-invalid:text-red-400
`;

export const PillCloseButtonStyles = oneLine`
duration-200
ease-in-out
inline-flex
items-center
justify-center
outline-hidden
p-2
ring-primary-400
rounded-full
size-4
transition-all

focus:ring-2

hover:bg-primary-100 
hover:text-primary-600
`;

export const PillContainerStyles = oneLine`
flex
flex-wrap
gap-2.5
pb-2.5
w-[calc(100%-3.5rem)]
`;

export const PillStyles = oneLine`
bg-neutral-secondary-900
combo-box-selection-item
gap-1.5
inline-flex
items-center
px-1.5
py-0.5
ring-2
ring-neutral-secondary-600
rounded
text-neutral-primary-400
`;

export const TriggerStyles = oneLine`
-translate-y-1/2
absolute
combo-box-trigger
cursor-pointer
duration-200
right-4
top-1/2
transition-colors

hover:text-primary-400

data-disabled:text-neutral-secondary-600

data-invalid:hover:text-red-400
`;
