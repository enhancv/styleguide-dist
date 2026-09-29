import React from "react";
import type { InputChipFieldRejection } from "./inputChipFieldModel";
import type { ChipSize, ChipVariant } from "../../Atoms/Chip/ChipPrimitive";
import type { UiIconName } from "../../Atoms/Icon/Icon";
import type { ChipColorToken } from "../../tokens/components/chip";
export type { InputChipFieldRejection, InputChipFieldRejectReason, } from "./inputChipFieldModel";
/** What one `onChange` did. Indexes refer to the array before the change. */
export type InputChipFieldChange = 
/** One chip appended from the draft. */
{
    type: "add";
    index: number;
    value: string;
}
/**
 * Several chips inserted at `index` (a paste, or an edit whose text held a
 * separator — then `replaced` is the chip they replace).
 */
 | {
    type: "paste";
    index: number;
    values: string[];
    replaced?: string;
} | {
    type: "edit";
    index: number;
    value: string;
    previous: string;
} | {
    type: "remove";
    index: number;
    value: string;
};
/** Per-chip extras from `getChipProps`. */
export interface InputChipFieldChipProps {
    iconStart?: UiIconName;
    /**
     * Replaces the default ×. On a removable field an action without `onClick`
     * still removes (another icon, or a verb other than `removeLabel`). With
     * `onClick` it is a custom action, so it must name itself with `label`;
     * Backspace/Delete still remove on a removable field. With
     * `removable={false}` only an action with `onClick` renders. `null` hides
     * the action on this chip.
     */
    action?: {
        icon?: UiIconName;
        label?: string;
        onClick?: undefined;
    } | {
        icon?: UiIconName;
        label: string;
        onClick: React.MouseEventHandler<HTMLButtonElement>;
    } | null;
}
/**
 * Passed to the input a chip is typed into — the field's trailing draft, or
 * the inline form's typing chip. The component owns value, limits and state.
 */
export type InputChipFieldInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue" | "onChange" | "type" | "id" | "size" | "placeholder" | "maxLength" | "disabled" | "readOnly" | "children" | "aria-label" | "aria-labelledby">;
/** Exactly one way to name the field. */
type InputChipFieldLabelling = {
    label: React.ReactNode;
    "aria-label"?: never;
    "aria-labelledby"?: never;
} | {
    label?: never;
    "aria-label": string;
    "aria-labelledby"?: never;
} | {
    label?: never;
    "aria-label"?: never;
    "aria-labelledby": string;
};
interface InputChipFieldOwnProps {
    /** Controlled. Never holds the draft or "" placeholders. */
    value: readonly string[];
    /** One call per user action, with a fresh array and what happened. */
    onChange: (next: string[], change: InputChipFieldChange) => void;
    /** One Size, Style and Colour per field (ChipGroup "Consistency" rule). */
    size?: ChipSize;
    variant?: ChipVariant;
    color?: ChipColorToken;
    /** Click, Enter or F2 on a chip edits it in place. `false` → static chips. */
    editable?: boolean;
    /** A × on every chip plus Backspace/Delete. Still works when `editable={false}`. */
    removable?: boolean;
    /**
     * At the limit the field's draft turns read-only and the inline add chip
     * goes inert; both show `limitLabel`.
     */
    maxItems?: number;
    /** Per chip, enforced natively while typing; never truncates existing values. */
    maxLength?: number;
    /** Refused duplicates, over-limit and too-long values — one call per user action. */
    onReject?: (rejections: InputChipFieldRejection[]) => void;
    /** Per-chip leading icon or a trailing action other than remove. */
    getChipProps?: (value: string, index: number) => InputChipFieldChipProps;
    disabled?: boolean;
    /** Renders a static, non-focusable `ul/li` of chips — no draft, no actions. */
    readOnly?: boolean;
    /** Verb before each chip's label in the ×'s name: "Remove React". Localise it. */
    removeLabel?: string;
    /** Verb before each chip's label in its edit input's name: "Edit React". Localise it. */
    editLabel?: string;
    /**
     * Shown once `maxItems` is reached: the field's draft placeholder, or the
     * inline add chip's label (the chip stays focusable but inert). Localise it.
     */
    limitLabel?: string;
    /**
     * Visually hidden hint each chip's focusable control points
     * `aria-describedby` at: the body on an editable field, the action when the
     * chips are static. Defaults to "Enter to edit, Backspace to remove" (or
     * the half that applies); `""` renders none. Localise it.
     */
    keyboardHint?: string;
    /** Polite live-region text after a change the host accepted; `""` stays silent. */
    announce?: (change: InputChipFieldChange) => string;
    inputProps?: InputChipFieldInputProps;
    className?: string;
    style?: React.CSSProperties;
    children?: never;
}
/**
 * `field`: a bordered box ending in an always-open input. `inline`: chips as
 * content, ending in a dashed “+ Add” chip.
 */
export type InputChipFieldAppearance = "field" | "inline";
/**
 * The form. `field` (default) is a bordered box whose last item is an
 * always-open input — for forms. `inline` has no border: the chips read as
 * content and the row ends in a dashed "+ {placeholder}" chip that turns into
 * the input in place. Everything else is shared.
 */
type InputChipFieldAppearanceProps = {
    appearance?: "field";
    /** The draft's placeholder ("Add skill…"). */
    placeholder?: string;
    /** Id of the draft input (so an outside `<label htmlFor>` works); generated by default. */
    id?: string;
} | {
    appearance: "inline";
    /**
     * The add chip's label, the typing chip's placeholder and its input's
     * name — write it without an ellipsis ("Add skill"). Localise it.
     */
    placeholder: string;
    /** No input exists until the add chip opens: nothing for a `<label htmlFor>` to point at. */
    id?: never;
};
export type InputChipFieldProps = InputChipFieldOwnProps & InputChipFieldLabelling & InputChipFieldAppearanceProps;
/**
 * Turns what the user types into InputChips, in one of two forms:
 * `appearance="field"` (default) — the Figma ChipGroup "Input chips inside a
 * field" pattern (3190:3446), a bordered box ending in an always-open input,
 * for forms; `appearance="inline"` — chips as content with no border, ending
 * in a dashed "+ Add" chip that turns into the input in place. Controlled:
 * the host owns `value`; the component owns the draft, editing, focus and the
 * live region. `editable={false}` makes the chips removable only.
 */
export declare const InputChipField: React.ForwardRefExoticComponent<InputChipFieldProps & React.RefAttributes<HTMLDivElement>>;
