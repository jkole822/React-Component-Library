import { oneLine } from "common-tags";

export const TextStyles = oneLine`
tooltip-text
`;

export const TooltipStyles = oneLine`
bg-primary-400
font-medium
p-3
max-w-40
rounded-lg
shadow-[0_0_1em_.25em_var(--color-primary-300),_0_0_3em_0.5em_var(--color-primary-500),_inset_0_0_.75em_.25em_var(--color-primary-300)]
text-primary-50
tooltip-tooltip
z-10
md:max-w-60

data-[state=closed]:animate-popover-fade-out
data-[state=open]:animate-popover-fade-in
`;

export const TriggerStyles = oneLine`
outline-hidden
tooltip-trigger
w-fit
`;
