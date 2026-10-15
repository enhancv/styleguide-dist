import React from "react";
import type { UiIconName } from "../../Atoms/Icon/Icon";
import type { BadgeColorToken } from "../../tokens/components/badge";
import type { ChipColorToken } from "../../tokens/components/chip";
/**
 * The Figma Type axis. Action runs a command; Checkbox toggles one setting
 * (the box leads the row); Radio picks one option of a group (a check on the
 * trailing edge); Switch toggles a setting that applies at once (the switch
 * trails). Boxes lead; the current value and switches trail.
 */
export type DropdownItemType = "action" | "checkbox" | "radio" | "switch";
export interface DropdownItemProps extends Omit<React.ComponentPropsWithoutRef<"button">, "type" | "role" | "onClick" | "onSelect" | "tabIndex" | "aria-checked" | "children"> {
    children: React.ReactNode;
    /**
     * Figma Type. Default: `"action"` without `selected`; with `selected`,
     * `"radio"` (the menu's `selectionMode="single"`) or `"checkbox"`
     * (`"multiple"`).
     */
    type?: DropdownItemType;
    /**
     * Figma Selected: the checked state of a Checkbox, Radio or Switch row
     * (`aria-checked`). A Radio row keeps its check's column when unselected, so
     * labels never shift.
     */
    selected?: boolean;
    /** Figma Icon Leading: a 16px glyph before the label, in icon/secondary. */
    icon?: UiIconName;
    /**
     * Figma Icon Trailing: a 16px glyph after the label, on Action and Checkbox
     * rows (the Radio check and the switch take the trailing edge).
     */
    trailingIcon?: UiIconName;
    /**
     * Figma Dot: a status dot (Badge, size SM) in a 16px column before the
     * label. The label still names the status, so colour is never the only signal.
     * A Badge colour draws the Badge; a Chip colour draws the same 6px dot in
     * that chip's solid border colour, so a status menu matches the chips it
     * sets (`neutral` is the Badge's).
     */
    dot?: BadgeColorToken | ChipColorToken;
    /**
     * Figma Inset: reserves a 16px leading column on Action, Radio and Switch
     * rows so their labels line up with Checkbox rows in the same group.
     */
    inset?: boolean;
    onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Per-item override of the menu's `closeOnSelect`. Without either, Checkbox
     * and Switch rows keep the menu open.
     */
    closeOnSelect?: boolean;
}
/**
 * One row of a Dropdown: Figma's DropdownItem. A `<button>` with the menu
 * role its Type needs (`menuitem`, `menuitemcheckbox`, `menuitemradio`);
 * Checkbox and Switch rows draw the decorative CheckboxPrimitive and
 * SwitchPrimitive, so the row owns the state, the hover and the focus.
 * Disabled rows are skipped by the arrow keys and type-ahead, and assistive
 * tech still announces them as unavailable.
 */
export declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps & React.RefAttributes<HTMLButtonElement>>;
