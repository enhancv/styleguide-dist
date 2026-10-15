import React from "react";
export type DropdownSeparatorProps = Omit<React.ComponentPropsWithoutRef<"div">, "role" | "children">;
/**
 * A rule between groups of rows: Figma's DropdownSeparator, a 1px
 * dropdown/separator line across the full panel width with spacing/4 above
 * and below.
 */
export declare const DropdownSeparator: {
    ({ className, ...rest }: DropdownSeparatorProps): React.JSX.Element;
    displayName: string;
};
