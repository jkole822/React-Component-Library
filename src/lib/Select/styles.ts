import { oneLine } from "common-tags";

export const ContentStyles = oneLine`
bg-neutral-secondary-900
max-h-50
px-3
py-2
ring-1
ring-neutral-secondary-700
rounded-lg
select-content
w-[var(--radix-select-trigger-width)]

data-[state=closed]:animate-select-fade-out
data-[state=open]:animate-select-fade-in
`;

export const ItemDescriptionStyles = oneLine`
font-light
select-item-description
text-neutral-primary-400
text-sm
`;

export const ItemIndicatorStyles = oneLine`
-translate-y-1/2
absolute
right-2
select-item-indicator
text-primary-500
top-1/2

group-data-highlighted:text-primary-300
`;

export const ItemLabelStyles = oneLine`
select-item-label
font-medium
`;

export const ItemStyles = oneLine`
cursor-pointer
duration-200
group
mx-0.5
my-1.5
outline-none
px-2
py-1
relative
ring-primary-500
rounded-md
select-item
transition-colors

[&_>_span]:flex
[&_>_span]:flex-col

data-disabled:bg-neutral-secondary-800
data-disabled:cursor-not-allowed
data-disabled:text-neutral-secondary-500

data-highlighted:bg-neutral-secondary-950
data-highlighted:ring-1
data-highlighted:text-primary-300
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

export const ScrollIconStyles = oneLine`
cursor-default
flex
h-3
items-center
justify-center
text-neutral-primary-100
text-sm
`;

export const TriggerStyles = oneLine`
cursor-pointer
flex
justify-between
duration-200
outline-none
p-3
relative
ring-2
rounded-lg
select-control
transition-colors
w-full

data-disabled:cursor-not-allowed
data-disabled:ring-neutral-secondary-600

data-[invalid=true]:ring-red-500

data-placeholder:[&_span:first-child]:opacity-50

focus-visible:ring-primary-500
`;
