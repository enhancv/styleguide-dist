import React from "react";
import type { DropdownPlacement } from "./dropdownPosition";
import type { DropdownDensityToken } from "../../tokens/components/dropdown-density";
export type { DropdownItemProps, DropdownItemType } from "./DropdownItem";
export type { DropdownGroupProps, DropdownLabelProps } from "./DropdownLabel";
export type { DropdownEmptyProps, DropdownErrorProps, DropdownLoadingProps } from "./DropdownMessage";
export type { DropdownSeparatorProps } from "./DropdownSeparator";
export type { DropdownCoords, DropdownPlacement } from "./dropdownPosition";
/** Why the menu opened or closed — `"arrow"` is an ArrowDown/ArrowUp on the trigger. */
export type DropdownOpenChangeReason = "trigger" | "arrow" | "select" | "escape" | "outside" | "scroll" | "tab";
export interface DropdownState {
    open: boolean;
}
/**
 * The Figma Density axis (the Dropdown Density collection): 36px rows
 * (`"default"`), 32px (`"compact"`) or 48px (`"touch"`, which the mobile
 * sheet always uses).
 */
export type DropdownDensity = DropdownDensityToken;
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
    /**
     * `Dropdown.Item` rows, with `Dropdown.Group` / `Dropdown.Label`,
     * `Dropdown.Separator`, and `Dropdown.Empty` / `Loading` / `Error`.
     */
    children: React.ReactNode;
    /** Figma Density: 36 / 32px rows. The mobile sheet always uses Touch (48px). Default `"default"`. */
    density?: Exclude<DropdownDensity, "touch">;
    /** Controlled open state; omit for uncontrolled. */
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean, reason: DropdownOpenChangeReason) => void;
    /** Preferred placement; the panel flips to the other side when there is no room. */
    placement?: DropdownPlacement;
    /** Gap between trigger and panel, in px. */
    offset?: number;
    /**
     * `"auto"`: as wide as its content, from dropdown/min-width (200px) to
     * dropdown/max-width (360px; longer labels end in an ellipsis). A number or
     * `"trigger"` sets the exact width, without limits.
     */
    width?: number | "trigger" | "auto";
    /**
     * The panel's max height. Default: dropdown/max-height (8 rows and a
     * separator), where longer lists scroll. A number sets it in px; `"none"`
     * lets a short menu with several groups (an account menu) show every row,
     * limited only by the room on screen.
     */
    maxHeight?: number | "none";
    /**
     * Move focus into the menu when it opens (the checked row, or the first).
     * Default `true`. `false` suits a menu opened on hover: focus stays where
     * it is, and ArrowDown on the trigger still moves into the rows.
     */
    focusOnOpen?: boolean;
    /** Close when the page scrolls (the job tracker's behaviour); `false` makes the panel follow its trigger instead. */
    closeOnScroll?: boolean;
    /**
     * Close after an item is selected. Defaults to `true`; `false` in a
     * `selectionMode="multiple"` menu and on Checkbox and Switch rows. An item's
     * own `closeOnSelect` wins.
     */
    closeOnSelect?: boolean;
    /** Items with `selected` become radio (single) or checkbox (multiple) items. */
    selectionMode?: "single" | "multiple";
    /**
     * On screens ≤768px the panel becomes a bottom sheet over a backdrop: the
     * screen minus 8px on each side, Touch density (48px rows). `"anchored"`
     * keeps the menu placement everywhere.
     */
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
 * An anchored menu: Figma's Dropdown. Portalled, opening below the trigger
 * and flipping above when there is no room, clamped to the viewport,
 * keyboard-complete (arrows, Home/End, typeahead, Escape, Tab back to the
 * trigger), and a bottom sheet with a backdrop on small screens. The trigger
 * is a render prop so any button — a `FilterChip` with `dropdown`, a
 * `Button`, an `IconButton` — can own it.
 */
export declare const Dropdown: {
    ({ trigger, children, density, open, defaultOpen, onOpenChange, placement, offset, width, maxHeight, focusOnOpen, closeOnScroll, closeOnSelect, selectionMode, mobile, "aria-label": ariaLabel, className, id, }: DropdownProps): React.JSX.Element;
    displayName: string;
} & {
    Item: React.ForwardRefExoticComponent<import("./DropdownItem").DropdownItemProps & React.RefAttributes<HTMLButtonElement>>;
    Group: {
        ({ label, children, ...rest }: import("./DropdownLabel").DropdownGroupProps): React.JSX.Element;
        displayName: string;
    };
    Label: {
        ({ className, children, ...rest }: import("./DropdownLabel").DropdownLabelProps): React.JSX.Element;
        displayName: string;
    };
    Separator: {
        ({ className, ...rest }: import("./DropdownSeparator").DropdownSeparatorProps): React.JSX.Element;
        displayName: string;
    };
    Empty: {
        ({ children }: import("./DropdownMessage").DropdownEmptyProps): React.JSX.Element;
        displayName: string;
    };
    Loading: {
        ({ children }: import("./DropdownMessage").DropdownLoadingProps): React.JSX.Element;
        displayName: string;
    };
    Error: {
        ({ children, onRetry, retryLabel, }: import("./DropdownMessage").DropdownErrorProps): React.JSX.Element;
        displayName: string;
    };
};
