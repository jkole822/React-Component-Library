import { oneLine } from "common-tags";

export const ContainerStyles = `
input-container
relative
w-full
`;

export const InputStyles = ({ hasValue }: { hasValue?: boolean }) => oneLine`
bg-transparent
duration-200
ease-[cubic-bezier(0.4,0,0.2,1)]
input-input
outline-hidden
p-4
ring-[1.5px]
ring-neutral-primary-200
rounded-lg
text-neutral-primary-200
transition-all
w-full

disabled:cursor-not-allowed
disabled:ring-neutral-primary-600

[&:disabled_~_label]:text-neutral-primary-600

placeholder:text-transparent!

focus:ring-primary-500

focus:placeholder:text-neutral-primary-500!

[&:focus_~_label]:-translate-y-[55%]
[&:focus_~_label]:bg-neutral-secondary-800
[&:focus_~_label]:px-1
[&:focus_~_label]:scale-[0.8]
[&:focus_~_label]:text-primary-500

[&[type=date]_~_label]:-translate-y-[55%]
[&[type=date]_~_label]:bg-neutral-secondary-800
[&[type=date]_~_label]:px-1
[&[type=date]_~_label]:ring-primary-500
[&[type=date]_~_label]:scale-[0.8]
[&[type=date]_~_label]:text-neutral-primary-200

[&[type=date]:focus_~_label]:text-primary-500

[&::-webkit-calendar-picker-indicator]:[filter:invert(100%)_sepia(16%)_saturate(716%)_hue-rotate(181deg)_brightness(96%)_contrast(88%)]
[&::-webkit-calendar-picker-indicator]:cursor-pointer
[&::-webkit-calendar-picker-indicator]:outline-offset-2
[&::-webkit-calendar-picker-indicator]:rounded-sm

[&::-webkit-datetime-edit-day-field]:cursor-pointer
[&::-webkit-datetime-edit-day-field]:rounded-sm   
  
[&::-webkit-datetime-edit-day-field:focus]:bg-transparent
[&::-webkit-datetime-edit-day-field:focus]:ring-2
[&::-webkit-datetime-edit-day-field:focus]:ring-primary-500
[&::-webkit-datetime-edit-day-field:focus]:text-neutral-primary-200

[&::-webkit-datetime-edit-month-field]:cursor-pointer
[&::-webkit-datetime-edit-month-field]:ml-0.5
[&::-webkit-datetime-edit-month-field]:rounded-sm

[&::-webkit-datetime-edit-month-field:focus]:bg-transparent
[&::-webkit-datetime-edit-month-field:focus]:ring-2
[&::-webkit-datetime-edit-month-field:focus]:ring-primary-500
[&::-webkit-datetime-edit-month-field:focus]:text-neutral-primary-200
[&::-webkit-datetime-edit-month-field]:cursor-pointer

[&::-webkit-datetime-edit-year-field]:cursor-pointer
[&::-webkit-datetime-edit-year-field]:rounded-sm

[&::-webkit-datetime-edit-year-field:focus]:bg-transparent
[&::-webkit-datetime-edit-year-field:focus]:ring-2
[&::-webkit-datetime-edit-year-field:focus]:ring-primary-500
[&::-webkit-datetime-edit-year-field:focus]:text-neutral-primary-200

data-invalid:ring-red-500

[&[data-invalid]:focus_~_label]:text-red-500

[&[data-invalid][type=date]_~_label]:text-red-500

[&[data-invalid][type=date]:focus_~_label]:text-red-500

[&[data-invalid]::-webkit-datetime-edit-day-field:focus]:ring-red-500
[&[data-invalid]::-webkit-datetime-edit-month-field:focus]:ring-red-500
[&[data-invalid]::-webkit-datetime-edit-year-field:focus]:ring-red-500
${
  hasValue
    ? `
    ring-primary-500

    [&_~_label]:-translate-y-[55%]
    [&_~_label]:bg-neutral-secondary-800
    [&_~_label]:px-1
    [&_~_label]:scale-[0.8]
    [&_~_label]:text-primary-500

    [&[data-invalid]_~_label]:text-red-500
    `
    : ``
}
`;

export const LabelStyles = oneLine`
absolute
duration-200
ease-[cubic-bezier(0.4,0,0.2,1)]
input-label
left-4
pointer-events-none
text-neutral-primary-500
translate-y-4
transition-all
`;
