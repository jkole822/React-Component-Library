import { oneLine } from "common-tags";

export const ArrowStyles = oneLine`
bg-neutral-secondary-950
border-neutral-secondary-700
navigation-menu-arrow
absolute
border-l-2
border-t-2
rotate-45
rounded-tl-xs
size-3
top-1

in-data-[orientation=vertical]:-rotate-45
in-data-[orientation=vertical]:-translate-y-1/2
in-data-[orientation=vertical]:left-1
in-data-[orientation=vertical]:top-1/2
`;

const ContentStyles = oneLine`
box-border
gap-y-2
grid
grid-rows-3
m-0
navigation-menu-content
outline-hidden
p-[22px]
relative
xs:grid-flow-col
xs:gap-x-2.5
xs:gap-y-0
sm:absolute
sm:left-0
sm:top-0

data-[motion=from-start]:animate-navigation-menu-enter-from-left

data-[motion=from-end]:animate-navigation-menu-enter-from-right

data-[motion=to-start]:animate-navigation-menu-exit-to-left

data-[motion=to-end]:animate-navigation-menu-exit-to-right

[&[data-orientation=vertical][data-motion=from-start]]:animate-navigation-menu-enter-from-top

[&[data-orientation=vertical][data-motion=from-end]]:animate-navigation-menu-enter-from-bottom

[&[data-orientation=vertical][data-motion=to-start]]:animate-navigation-menu-exit-to-top

[&[data-orientation=vertical][data-motion=to-end]]:animate-navigation-menu-exit-to-bottom
`;

export const ContentWithCallout = oneLine`
${ContentStyles}
grid-cols-1
w-full
sm:grid-cols-[0.75fr_1fr]
sm:w-[min(500px,_90dvw)]

[&_>_li:first-child]:row-span-3
`;

export const ContentWithoutCallout = oneLine`
${ContentStyles}
grid-cols-1
w-full
sm:grid-cols-2
sm:w-[min(600px,_90dvw)]
`;

export const IconStyles = oneLine`
navigation-menu-icon
rounded-full
size-20
`;

export const IndicatorStyles = oneLine`
[transition:transform,_width,_250ms_ease]
flex
size-3
items-end
justify-center
overflow-hidden
top-full
z-10

data-[orientation=vertical]:top-auto

data-[state=hidden]:animate-popover-fade-in
data-[state=visible]:animate-popover-fade-in
`;

export const ItemCalloutStyles = oneLine`
bg-[linear-gradient(135deg,_var(--color-primary-400)_0%,_var(--color-primary-600)_100%)]
box-border
flex
flex-col
h-full
justify-end
navigation-menu-item-callout
no-underline
outline-hidden
p-6
rounded-lg
row-span-3
select-none
w-full

focus-visible:outline-2
focus-visible:outline-primary-300

[&_.navigation-menu-item-label]:mt-4
[&_.navigation-menu-item-label]:text-xl
[&_.navigation-menu-item-label]:text-neutral-primary-50

[&_.navigation-menu-item-description]:text-neutral-primary-50

[&_>_img]:rounded-lg
[&_>_img]:size-12
`;

export const ItemDescriptionStyles = oneLine`
duration-200
ease-in-out
leading-[1.4]
navigation-menu-item-description
opacity-80
text-neutral-primary-300
text-sm
transition-colors
`;

export const ItemLabelStyles = oneLine`
duration-200
ease-in-out
font-medium
leading-[1.2]
mb-2
navigation-menu-item-label
text-lg
text-primary-500
transition-colors
`;

export const ItemStyles = oneLine`
block
duration-200
ease-in-out
leading-none
navigation-menu-item
no-underline
outline-hidden
p-3
rounded-lg
select-none
transition-colors

data-disabled:bg-neutral-800
data-disabled:cursor-not-allowed

[&_.navigation-menu-item-description]:data-disabled:text-neutral-primary-500

[&_.navigation-menu-item-label]:data-disabled:text-neutral-primary-400

focus-visible:bg-neutral-secondary-900

[&:focus-visible_.navigation-menu-item-description]:text-neutral-primary-100

[&:focus-visible_.navigation-menu-item-label]:text-primary-400

hover:bg-neutral-secondary-900

[&:hover_.navigation-menu-item-description]:text-neutral-primary-100

[&:hover_.navigation-menu-item-label]:text-primary-400
`;

export const LineStyles = oneLine`
[stroke-linecap:round]
[stroke-linejoin:round]
[transition:stroke-dasharray_600ms_cubic-bezier(0.4,_0,_0.2,_1),_stroke-dashoffset_600ms_cubic-bezier(0.4,_0,_0.2,_1)]
cursor-pointer
duration-300
ease-in-out
fill-none
navigation-menu-line
stroke-3
stroke-neutral-primary-100
transition-all

group-hover:!stroke-neutral-100
`;

export const LineTopBottomStyles = oneLine`
${LineStyles}
[stroke-dasharray:12_63]
navigation-menu-line-top-bottom
`;

export const ListStyles = oneLine`
flex
items-center
list-none
justify-center
navigation-menu-list
m-0
px-1

data-[orientation=vertical]:flex-col
[&[data-orientation=vertical]_li]:w-full
`;

export const MobileMenuButtonStyles = ({ open }: { open: boolean }) => oneLine`
cursor-pointer
navigation-menu-mobile-menu-button

[&_svg]:cursor-pointer
[&_svg]:duration-[600ms]
[&_svg]:ease-[cubic-bezier(0.4,0,0.2,1)]
[&_svg]:h-8
[&_svg]:transition-transform

${
  open
    ? `
    [&_svg]:-rotate-45
    [&_svg]:-translate-x-[0.25px]
    [&_svg]:translate-y-[0.75px]
    
    [&_svg]:[stroke-dasharray:20_300]
    
    [&_svg_.navigation-menu-line-top-bottom]:[stroke-dasharray:20_300]
    [&_svg_.navigation-menu-line-top-bottom]:[stroke-dashoffset:-32.42]
`
    : ``
}
`;

export const MobilePopoverContentStyles = oneLine`
h-[calc(100vh-112px)]!
max-w-[unset]!
navigation-menu-mobile-popover-content
outline-hidden
overflow-y-scroll
rounded-none!
top-8!
w-screen

[&_.popover-arrow]:hidden

[&_.popover-close-button]:hidden
`;

export const MobilePopoverStyles = oneLine`
duration-300
ease-in-out
group
navigation-menu-mobile-popover
outline-none!
ring-0!
rounded-lg
transition-all
sm:hidden

focus:ring-2!

[&:hover_.navigation-menu-line]:stroke-primary-500
`;

export const RootStyles = oneLine`
hidden
items-center
justify-end
navigation-menu-root

data-[orientation=vertical]:justify-center

data-[orientation=vertical]:[&_>_div:first-child]:w-full

sm:flex
`;

export const TitleContainerStyles = oneLine`
flex
gap-3
items-center
navigation-menu-title-container
outline-hidden
ring-primary-500
rounded-lg

focus-visible:ring-2

[&:hover_.navigation-menu-title]:text-primary-500
`;

export const TitleStyles = oneLine`
capitalize
duration-300
ease-in-out
navigation-menu-title
text-2xl
text-neutral-primary-50
tracking-wide
transition-all
`;

export const TriggerIndicatorStyles = oneLine`
-mx-[7.5px]
-my-1
duration-300
ease
fa-caret-down
fa-solid
navigation-menu-trigger-indicator
relative
size-[15px]
transition-transform

in-data-[state=open]:[transform:rotateX(180deg)]

in-data-[orientation=vertical]:-rotate-90
`;

export const TriggerStyles = oneLine`
appearance-none
border-none
duration-300
font-medium
gap-2
inline-flex
items-center
justify-center
leading-none
navigation-menu-trigger
no-underline
outline-hidden
px-4
py-5
text-neutral-primary-300
transition-colors
w-auto

md:bg-neutral-secondary-950

data-disabled:bg-neutral-800!
data-disabled:cursor-not-allowed
data-disabled:text-neutral-primary-500!

focus-visible:bg-neutral-secondary-900
focus-visible:text-primary-500

hover:bg-neutral-secondary-900
hover:text-primary-500
`;

export const ViewportPositionStyles = oneLine`
[perspective:2000px]
absolute
flex
justify-end
right-4
top-23.5
w-full

in-data-[orientation=vertical]:top-25
`;

export const ViewportStyles = oneLine`
[transition:width,_height,_250ms_ease]
animate-viewport-hide
bg-neutral-secondary-950
border-[1.5px]
border-neutral-secondary-700
duration-300
ease
h-[var(--radix-navigation-menu-viewport-height)]
navigation-menu-viewport
origin-top-center
overflow-hidden
relative
rounded-lg
shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1),_0_2px_4px_-2px_rgb(0_0_0_/_0.1)]
w-[var(--radix-navigation-menu-viewport-width)]
z-100

data-[state=open]:animate-viewport-show
`;
