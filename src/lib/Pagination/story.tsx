// Packages
import { useState } from "react";

// Components
import Pagination from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function PaginationStory(props: Props) {
  const [page, setPaged] = useState(1);

  return (
    <>
      <Pagination
        {...props}
        onPageChange={(details) => setPaged(details.page)}
        page={page}
      />
      <p className={SubHeadingStyles}>Binding Check</p>
      <p className={PararaphStyles}>{page}</p>
    </>
  );
}
