import React from "react";
export type DropdownLabelProps = Omit<React.ComponentPropsWithoutRef<"div">, "role" | "color">;
/**
 * A section header above a group of rows: Figma's DropdownLabel. Body XS
 * Medium in text/tertiary, padded so it lines up with the row labels. Not
 * interactive; keep it to a word or two. Inside a menu, prefer
 * `Dropdown.Group label`, which also names the group for assistive tech.
 */
export declare const DropdownLabel: {
    ({ className, children, ...rest }: DropdownLabelProps): React.JSX.Element;
    displayName: string;
};
export interface DropdownGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "role"> {
    /** The section header (a DropdownLabel), which also names the group. */
    label?: React.ReactNode;
    /** The group's rows. */
    children: React.ReactNode;
}
/** A labelled group of rows (`role="group"`), headed by a DropdownLabel. */
export declare const DropdownGroup: {
    ({ label, children, ...rest }: DropdownGroupProps): React.JSX.Element;
    displayName: string;
};
