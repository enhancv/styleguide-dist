import React from "react";
export type DropdownSeparatorProps = Omit<React.ComponentPropsWithoutRef<"div">, "role" | "children">;
/** A rule between groups of items. */
export declare const DropdownSeparator: {
    ({ className, ...rest }: DropdownSeparatorProps): React.JSX.Element;
    displayName: string;
};
