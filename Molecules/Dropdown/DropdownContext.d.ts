import React from "react";
export interface DropdownContextValue {
    /** Items with `selected` render as menuitemradio (single) or menuitemcheckbox (multiple). */
    selectionMode: "single" | "multiple";
    /**
     * Called by an item after its own `onSelect`, with its `closeOnSelect` and
     * whether its Type keeps the menu open (Checkbox, Switch); the menu decides.
     */
    onItemSelect: (closeOnSelect?: boolean, keepsOpen?: boolean) => void;
}
export declare const DropdownContext: React.Context<DropdownContextValue>;
