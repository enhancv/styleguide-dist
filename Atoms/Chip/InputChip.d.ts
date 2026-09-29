import React from "react";
import type { ChipVisualProps } from "./ChipPrimitive";
import type { UiIconName } from "../Icon/Icon";
/** Why `onRemove` fired: the default × action, Backspace or Delete on a focused chip, or an empty edit. */
export type InputChipRemoveReason = "action" | "backspace" | "delete" | "edit";
export interface InputChipAction {
    /** Figma Action Icon. Default `"close"` (`"plus"` for add). */
    icon?: UiIconName;
    /** Figma Action Label — the verb of the accessible name "<label> <chip text>". Default `"Remove"`. */
    label?: string;
    /** Defaults to `onRemove("action", event)`. */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
type InputChipRootAttributes = Omit<React.ComponentPropsWithoutRef<"span">, "color" | "children" | "onClick" | "onChange" | "tabIndex" | "aria-describedby">;
/** Attributes forwarded to the edit `<input>` (maxLength, enterKeyHint, autoCapitalize…). */
export type InputChipEditorAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue" | "onChange" | "onKeyDown" | "onBlur" | "type" | "size" | "children">;
interface InputChipOwnProps extends ChipVisualProps, InputChipRootAttributes {
    /** The chip's value — the label, the tooltip when truncated and the action's name. */
    children: string;
    iconStart?: UiIconName;
    /** Disables the chip and its action. */
    disabled?: boolean;
    /** Tab index of the body (and of the edit input while editing). */
    tabIndex?: number;
    /** Tab index of the action button. */
    actionTabIndex?: number;
    /** Describes the body (e.g. a keyboard hint) — or, on a static chip, whose body is not
     *  focusable, the action. */
    "aria-describedby"?: string;
}
/** Clickable=True: the label is editable — click, Enter or F2 swaps it for an input. */
export interface InputChipEditableProps {
    clickable?: true;
    /** Fires on commit (Enter or blur), never per keystroke. Return `false` to refuse the value:
     *  after Enter the chip stays in edit mode, after blur it reverts. */
    onValueChange: (next: string) => boolean | void;
    /** Verb of the edit input's accessible name ("<editLabel> <chip text>"). Default `"Edit"`. */
    editLabel?: string;
    inputProps?: InputChipEditorAttributes;
}
/** Clickable=False: static text. The action (if any) stays active. */
export interface InputChipStaticProps {
    clickable: false;
    onValueChange?: never;
    editLabel?: never;
    inputProps?: never;
}
/** Removable: Backspace/Delete on the focused chip and an empty edit call `onRemove`; the action
 *  defaults to a × that calls it. `action={null}` keeps the keyboard removal without a button. */
export interface InputChipRemovableProps {
    onRemove: (reason: InputChipRemoveReason, event: React.SyntheticEvent<HTMLElement>) => void;
    action?: InputChipAction | null;
}
/** Not removable: an optional custom action (add, ignore…) that must say what it does — `label`
 *  is required, so it is never announced as "Remove". */
export interface InputChipCustomActionProps {
    onRemove?: undefined;
    action?: (InputChipAction & {
        onClick: React.MouseEventHandler<HTMLButtonElement>;
        label: string;
    }) | null;
}
export type InputChipEditProps = InputChipEditableProps | InputChipStaticProps;
export type InputChipActionProps = InputChipRemovableProps | InputChipCustomActionProps;
export type InputChipProps = InputChipOwnProps & InputChipEditProps & InputChipActionProps;
export declare const InputChip: React.ForwardRefExoticComponent<InputChipProps & React.RefAttributes<HTMLSpanElement>>;
export {};
