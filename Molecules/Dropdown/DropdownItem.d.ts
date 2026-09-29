import React from "react";
import type { UiIconName } from "../../Atoms/Icon/Icon";
export interface DropdownItemProps extends Omit<React.ComponentPropsWithoutRef<"button">, "type" | "role" | "onClick" | "onSelect" | "tabIndex" | "aria-checked" | "children"> {
    children: React.ReactNode;
    /**
     * Defined → the row is a radio/checkbox item (`aria-checked`) with the check
     * column always rendered, so labels never shift when the choice changes.
     * Omit it on plain action items.
     */
    selected?: boolean;
    /** Leading glyph (the job tracker's status icon), 16px, in the text colour. */
    icon?: UiIconName;
    onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Per-item override of the menu's `closeOnSelect`. */
    closeOnSelect?: boolean;
    /**
     * A plain action item (no `selected`) that shares a menu with radio or
     * checkbox items: reserves the empty check column so its icon and label line
     * up with theirs (e.g. "Remove" under a list of choices).
     */
    inset?: boolean;
}
export declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps & React.RefAttributes<HTMLButtonElement>>;
