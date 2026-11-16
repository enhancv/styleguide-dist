import React from "react";
import "../../tokens/components/input.css";
import type { FieldProps } from "../../Atoms/Field/Field";
import type { UiIconName } from "../../Atoms/Icon/Icon";
/** Figma Size: SM 32, MD 40, LG 48, the Input sizes. */
export type SelectSize = "sm" | "md" | "lg";
export interface SelectOptionProps {
    /** What `value` and `onValueChange` carry. */
    value: string;
    /** The option's label, shown in the menu and, once chosen, in the field. */
    children: React.ReactNode;
    /** The label as plain text, for type-to-jump and filtering, when `children` isn't a string. */
    textValue?: string;
    /** Skipped by the arrow keys and type-ahead; still announced. */
    disabled?: boolean;
    /** A 16px glyph before the label, in the menu only. */
    icon?: UiIconName;
}
/** One option of a Select. Renders nothing itself: the Select draws its rows. */
export declare const SelectOption: {
    (_props: SelectOptionProps): null;
    displayName: string;
};
interface SelectOwnProps extends Pick<FieldProps, "label" | "description" | "error"> {
    /** Figma Size. Default `"md"`. */
    size?: SelectSize;
    /** Shown in text/tertiary while nothing is chosen. */
    placeholder?: string;
    /** Figma Invalid without a message: the red outline and `aria-invalid`. `error` sets it too. */
    invalid?: boolean;
    /** Figma State = Disabled. */
    disabled?: boolean;
    /** Sets `required` on the hidden form inputs, with no visual marker. */
    required?: boolean;
    /** Figma Icon Leading: a glyph before the value. */
    iconStart?: UiIconName;
    /**
     * The field is a text box while open: typing narrows the options to those
     * containing the text, and Enter picks the highlighted one.
     */
    filterable?: boolean;
    /** Shown when filtering leaves no option. Default `"No matches"`. */
    emptyText?: React.ReactNode;
    /** Fill the container. Default `true`. */
    fullWidth?: boolean;
    /** Submits the value with a form, through hidden inputs. */
    name?: string;
    /** The field's id; the label points at it. Generated when omitted. */
    id?: string;
    /** Without a `label`, name the field. */
    "aria-label"?: string;
    /** Fires when the menu opens or closes. */
    onOpenChange?: (open: boolean) => void;
    /** `Select.Option` elements. */
    children: React.ReactNode;
    /** Goes to the outer Field, with `style`. */
    className?: string;
    style?: React.CSSProperties;
}
interface SelectSingleProps {
    /** Pick one option. */
    multiple?: false;
    /** Controlled: the chosen option's value, or `null` while nothing is chosen. */
    value?: string | null;
    /** Uncontrolled: the value chosen at first. */
    defaultValue?: string | null;
    onValueChange?: (value: string) => void;
}
interface SelectMultipleProps {
    /** Pick several: Checkbox rows, and the menu stays open on each pick. */
    multiple: true;
    /** Controlled: the chosen values, in option order. */
    value?: string[];
    /** Uncontrolled: the values chosen at first. */
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
}
export type SelectProps = SelectOwnProps & (SelectSingleProps | SelectMultipleProps);
export declare const Select: ((props: SelectProps & React.RefAttributes<HTMLElement>) => React.ReactElement | null) & {
    displayName?: string;
} & {
    Option: {
        (_props: SelectOptionProps): null;
        displayName: string;
    };
};
export {};
