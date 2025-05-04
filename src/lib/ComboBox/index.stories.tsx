// Packages
import { createListCollection } from "@ark-ui/react";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import ComboBox from "./story";

// Types
import {
  ComboBoxInputBehaviorEnum,
  ComboBoxSelectionBehaviorEnum,
} from "./types";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ComboBox",
  component: ComboBox,
  tags: ["autodocs"],
  args: {
    composite: true,
    defaultInputValue: "",
    defaultValue: [],
    inputBehavior: ComboBoxInputBehaviorEnum.None,
    lazyMount: false,
    loopFocus: true,
    openOnChange: true,
    openOnClick: false,
    openOnKeyPress: true,
    positioning: { placement: "bottom-start" },
    selectionBehavior: ComboBoxSelectionBehaviorEnum.Replace,
    skipAnimationOnMount: false,
    unmountOnExit: false,
  },
  argTypes: {
    allowCustomValue: {
      control: "boolean",
      description: "Whether to allow typing custom values in the input",
    },
    asChild: {
      control: "boolean",
      description:
        "Use the provided child element as the default rendered element, combining their props and behavior.",
    },
    autoFocus: {
      control: "boolean",
      description: "Whether to autofocus the input on mount",
    },
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    closeOnSelect: {
      control: "boolean",
      description: "Whether to close the combobox when an item is selected.",
    },
    collection: { table: { disable: true } },
    composite: {
      control: "boolean",
      description:
        "Whether the combobox is a composed with other composite widgets like tabs.",
    },
    defaultHighlightedValue: {
      control: "text",
      description:
        "The initial highlighted value of the combobox when rendered. Use when you don't need to control the highlighted value of the combobox.",
    },
    defaultInputValue: {
      control: "text",
      description:
        "The initial value of the combobox's input when rendered. Use when you don't need to control the value of the combobox's input.",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The initial open state of the combobox when rendered. Use when you don't need to control the open state of the combobox.",
    },
    defaultValue: {
      control: "object",
      description:
        "The initial value of the combobox's selected items when rendered. Use when you don't need to control the value of the combobox's selected items.",
    },
    description: {
      control: "text",
      description: "Field description displayed when `withField` is `true`.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the combobox is disabled.",
    },
    disableLayer: {
      control: "boolean",
      description: "Whether to disable registering this a dismissable layer",
    },
    errorMessage: {
      control: "text",
      description:
        "Field error message displayed when `withField` is true and `validationState` is `invalid`.",
    },
    form: {
      control: "text",
      description: "The associate form of the combobox.",
    },
    highlightedValue: {
      control: "text",
      description: "The controlled highlighted value of the combobox.",
    },
    id: {
      control: "text",
      description: "The unique identifier of the machine.",
    },
    ids: {
      control: "object",
      description:
        "The ids of the elements in the combobox. Useful for composition.",
    },
    immediate: {
      control: "boolean",
      description:
        "Whether to synchronize the present change immediately or defer it to the next frame.",
    },
    inputBehavior: {
      control: "select",
      description:
        "Defines the auto-completion behavior of the combobox. - `autohighlight`: The first focused item is highlighted as the user types - `autocomplete`: Navigating the listbox with the arrow keys selects the item and the input is updated.",
      options: [
        ComboBoxInputBehaviorEnum.None,
        ComboBoxInputBehaviorEnum.AutoHighlight,
        ComboBoxInputBehaviorEnum.AutoComplete,
      ],
    },
    inputValue: {
      control: "text",
      description: "The controlled value of the combobox's input.",
    },
    items: {
      control: "object",
      description: "The collection of list items"
    },
    lazyMount: {
      control: "boolean",
      description: "Whether to enable lazy mounting.",
    },
    loopFocus: {
      control: "boolean",
      description: "Whether to loop the keyboard navigation through the items.",
    },
    multiple: {
      control: "boolean",
      description:
        "Whether to allow multiple selection. **Good to know:** When `multiple` is `true`, the `selectionBehavior` is automatically set to `clear`. It is recommended to render the selected items in a separate container.",
    },
    name: {
      control: "boolean",
      description:
        "The `name` attribute of the combobox's input. Useful for form submission.",
    },
    navigate: {
      description:
        "(details: NavigateDetails) => void\nFunction to navigate to the selected item.",
    },
    onExitComplete: {
      description:
        "VoidFunction\nFunction called when the animation ends in the closed state.",
    },
    onHighlightChange: {
      description:
        "(details: HighlightChangeDetails<T>) => void\nFunction called when an item is highlighted using the pointer or keyboard navigation.",
    },
    onInputValueChange: {
      description:
        "(details: InputValueChangeDetails) => void\nFunction called when the input's value changes.",
    },
    onInteractOutside: {
      description:
        "(event: InteractOutsideEvent) => void\nFunction called when an interaction happens outside the component.",
    },
    onOpenChange: {
      description:
        "(details: OpenChangeDetails) => void\nFunction called when the popup is opened.",
    },
    onPointerDownOutside: {
      description:
        "(event: PointerDownOutsideEvent) => void\nFunction called when the pointer is pressed down outside the component.",
    },
    onRemoveItem: {
      description:
        "(value: string) => void\nFunction called when `multiple` is `true` and an item is removed from list of selected items.",
    },
    onSelect: {
      description:
        "(details: SelectionDetails) => void\nFunction called when an item is selected",
    },
    onValueChange: {
      description:
        "(details: ValueChangeDetails<T>) => void\nFunction called when a new item is selected",
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the combobox.",
    },
    openOnChange: {
      control: "boolean",
      description:
        "boolean | ((details: InputValueChangeDetails) => boolean)\nWhether to show the combobox when the input value changes.",
    },
    openOnClick: {
      control: "boolean",
      description: "Whether to open the combobox popup on initial click on the input.",
    },
    openOnKeyPress: {
      control: "boolean",
      description: "Whether to open the combobox on arrow key press."
    },
    placeholder: {
      control: "text",
      description: "The placeholder text of the combobox's input."
    },
    positioning: {
      control: "object",
      description: "PositioningOptions\nThe positioning options to dynamically position the menu"
    },
    present: {
      control: "boolean",
      description: "Whether the node is present (controlled by the user)."
    },
    readOnly: {
      control: "boolean",
      description: "Whether the combobox is readonly. This puts the combobox in a \"non-editable\" mode but the user can still interact with it."
    },
    required: {
      control: "boolean",
      description: "Whether the combobox is required."
    },
    scrollToIndexFn: {
      description: "(details: ScrollToIndexDetails) => void\nFunction to scroll to a specific index."
    },
    selectionBehavior: {
      control: "select",
      description: "The behavior of the combobox input when an item is selected - `replace`: The selected item string is set as the input value - `clear`: The input value is cleared - `preserve`: The input value is preserved.",
      options: [
        ComboBoxSelectionBehaviorEnum.Replace,
        ComboBoxSelectionBehaviorEnum.Clear,
        ComboBoxSelectionBehaviorEnum.Preserve,
      ],
    },
    skipAnimationOnMount: {
      control: "boolean",
      description: "Whether to allow the initial presence animation."
    },
    translations: {
      control: "object",
      description: "IntlTranslations\nSpecifies the localized strings that identifies the accessibility elements and their states."
    },
    unmountOnExit: {
      control: "boolean",
      description: "Whether to unmount on exit."
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    value: {
      control: "object",
      description: "The controlled value of the combobox's selected items."
    },
    withField: {
      control: "boolean",
      description:
        "Use label, description, and error message with validation state.",
    },
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    id: uuid(),
    label: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    disabled: index === 2,
    value: uuid(),
  }));

const args = {
  collection: createListCollection({
    items: generateItems(10),
  }),
  items: generateItems(10),
  name: faker.lorem.word(),
  placeholder: faker.lorem.words(2),
};

export const Single: Story = {
  args,
};

export const Multiple: Story = {
  args: {
    ...args,
    multiple: true,
    selectionBehavior: ComboBoxSelectionBehaviorEnum.Preserve,
  },
};

export const SingleWithField: Story = {
  args: {
    ...args,
    description: faker.lorem.sentence(),
    errorMessage: faker.lorem.sentence(),
    withField: true,
  },
};

export const MultipleWithField: Story = {
  args: {
    ...args,
    description: faker.lorem.sentence(),
    errorMessage: faker.lorem.sentence(),
    multiple: true,
    selectionBehavior: ComboBoxSelectionBehaviorEnum.Preserve,
    withField: true,
  },
};
