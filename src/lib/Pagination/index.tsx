// Packages
import { Pagination as ArkPagination } from "@ark-ui/react/pagination";

// Styles
import { ButtonStyles, ContainerStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Pagination({
  className = "",
  hideNextButton,
  hidePreviousButton,
  ...rest
}: Props) {
  return (
    <ArkPagination.Root {...rest} className={`${className} ${ContainerStyles}`}>
      {!hidePreviousButton && (
        <ArkPagination.PrevTrigger className={ButtonStyles}>
          Previous
        </ArkPagination.PrevTrigger>
      )}
      <ArkPagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <ArkPagination.Item
                className={ButtonStyles}
                key={index}
                {...page}
              >
                {page.value}
              </ArkPagination.Item>
            ) : (
              <ArkPagination.Ellipsis
                className={`pagination-ellipsis ${ButtonStyles}`}
                key={index}
                index={index}
              >
                &#8230;
              </ArkPagination.Ellipsis>
            )
          )
        }
      </ArkPagination.Context>
      {!hideNextButton && (
        <ArkPagination.NextTrigger className={ButtonStyles}>
          Next
        </ArkPagination.NextTrigger>
      )}
    </ArkPagination.Root>
  );
}
