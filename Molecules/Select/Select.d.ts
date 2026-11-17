import React from "react";
import "../../tokens/components/input.css";
import type { FieldProps } from "../../Atoms/Field/Field";
import type { UiIconName } from "../../Atoms/Icon/Icon";
/** Figma Size: SM 32, MD 40, LG 48, the Input sizes. */
export type SelectSize = "sm" | "md" | "lg";
export interface SelectProps extends Pick<FieldProps, "label" | "description" | "error"> {
    /** Figma Size. Default `"md"`. */
    size?: SelectSize;
    /**
     * What the field shows. Default: the labels of the `selected` rows,
     * comma-separated; give it when a row's label isn't the text the field
     * should show.
     */
    value?: React.ReactNode;
    /** Shown in text/tertiary while nothing is chosen. */
    placeholder?: string;
    /** Figma Invalid without a message: the red outline and `aria-invalid`. `error` sets it too. */
    invalid?: boolean;
    /** Figma State = Disabled. */
    disabled?: boolean;
    /** Figma Icon Leading: a glyph before the value. */
    iconStart?: UiIconName;
    /**
     * Several choices: the rows are Checkbox rows and the menu stays open on
     * each pick (the Dropdown's `selectionMode="multiple"`).
     */
    multiple?: boolean;
    /**
     * The field is a text box while open: typing hides the rows with
     * `selected` whose text doesn't contain it, and Enter picks the first one
     * left. Rows without `selected` (actions) always stay.
     */
    filterable?: boolean;
    /** Shown when filtering leaves no choice. Default `"No matches"`. */
    emptyText?: React.ReactNode;
    /** Fill the container. Default `true`. */
    fullWidth?: boolean;
    /** The field's id; the label points at it. Generated when omitted. */
    id?: string;
    /** Without a `label`, name the field and its menu. */
    "aria-label"?: string;
    /** Goes to the button (the text box when `filterable`). */
    "data-test-id"?: string;
    /** Fires when the menu opens or closes. */
    onOpenChange?: (open: boolean) => void;
    /**
     * The menu's rows: `Dropdown.Item` with `selected` and `onSelect` for each
     * choice, plus any `Dropdown.Item` action, `Dropdown.Group` and
     * `Dropdown.Separator`.
     */
    children: React.ReactNode;
    /** Goes to the outer Field, with `style`. */
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Figma's Select: a labelled field, styled like Input, that opens a
 * Dropdown. The rows are Dropdown parts: a `Dropdown.Item` with `selected`
 * and `onSelect` per choice, and any action item, group or separator. The
 * field shows the selected rows' labels, or `value`. `className` and `style`
 * go to the outer Field; the ref to the button or the text box.
 */
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLElement>>;
