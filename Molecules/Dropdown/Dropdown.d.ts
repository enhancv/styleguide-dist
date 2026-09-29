import React from "react";
import type { DropdownPlacement } from "./dropdownPosition";
export type { DropdownItemProps } from "./DropdownItem";
export type { DropdownSeparatorProps } from "./DropdownSeparator";
export type { DropdownCoords, DropdownPlacement } from "./dropdownPosition";
/** Why the menu opened or closed — `"arrow"` is an ArrowDown/ArrowUp on the trigger. */
export type DropdownOpenChangeReason = "trigger" | "arrow" | "select" | "escape" | "outside" | "scroll" | "tab";
export interface DropdownState {
    open: boolean;
}
/**
 * Spread onto the trigger's root element. It must be a real focusable element
 * that forwards its ref — FilterChip, Button, IconButton or a plain button.
 */
export interface DropdownTriggerProps {
    ref: React.RefCallback<HTMLElement>;
    id: string;
    onClick: React.MouseEventHandler<HTMLElement>;
    onKeyDown: React.KeyboardEventHandler<HTMLElement>;
    "aria-haspopup": "menu";
    "aria-expanded": boolean;
    /** Only while open — the panel is not in the DOM when closed. */
    "aria-controls"?: string;
}
export interface DropdownProps {
    /** Renders the trigger; spread `props` on it. FilterChip's chevron follows the injected aria-expanded. */
    trigger: (props: DropdownTriggerProps, state: DropdownState) => React.ReactElement;
    /** `Dropdown.Item` and `Dropdown.Separator`. */
    children: React.ReactNode;
    /** Controlled open state; omit for uncontrolled. */
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean, reason: DropdownOpenChangeReason) => void;
    /** Preferred placement; the panel flips to the other side when there is no room. */
    placement?: DropdownPlacement;
    /** Gap between trigger and panel, in px. */
    offset?: number;
    /**
     * `"auto"`: as wide as its content, at least 200px. A number or `"trigger"`
     * sets the exact width (no minimum).
     */
    width?: number | "trigger" | "auto";
    /** Close when the page scrolls (the job tracker's behaviour); `false` makes the panel follow its trigger instead. */
    closeOnScroll?: boolean;
    /** Close after an item is selected. Defaults to `true`, or `false` when `selectionMode="multiple"`. */
    closeOnSelect?: boolean;
    /** Items with `selected` become radio (single) or checkbox (multiple) items. */
    selectionMode?: "single" | "multiple";
    /** On screens ≤768px the panel becomes a centred sheet over a backdrop, like the app; `"anchored"` keeps the menu placement everywhere. */
    mobile?: "sheet" | "anchored";
    /**
     * Names the menu; by default it is labelled by the trigger. Set it when the
     * trigger's text carries state (a selected FilterChip reads "Sort by selected").
     */
    "aria-label"?: string;
    /** Extra class on the panel. */
    className?: string;
    /** Base id for the trigger and the panel; defaults to a generated one. */
    id?: string;
}
/**
 * An anchored menu in the job tracker's style: portalled, opening below the
 * trigger and flipping above when there is no room, clamped to the viewport,
 * keyboard-complete (arrows, Home/End, typeahead, Escape, Tab back to the
 * trigger), a centred sheet with a backdrop on small screens. The trigger is a
 * render prop so any button — a `FilterChip` with `dropdown`, a `Button`, an
 * `IconButton` — can own it.
 */
export declare const Dropdown: {
    ({ trigger, children, open, defaultOpen, onOpenChange, placement, offset, width, closeOnScroll, closeOnSelect, selectionMode, mobile, "aria-label": ariaLabel, className, id, }: DropdownProps): React.JSX.Element;
    displayName: string;
} & {
    Item: React.ForwardRefExoticComponent<import("./DropdownItem").DropdownItemProps & React.RefAttributes<HTMLButtonElement>>;
    Separator: {
        ({ className, ...rest }: import("./DropdownSeparator").DropdownSeparatorProps): React.JSX.Element;
        displayName: string;
    };
};
