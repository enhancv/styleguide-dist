import React from "react";
import "../../tokens/components/input.css";
import type { FieldProps } from "../../Atoms/Field/Field";
interface PromptBarOwnProps extends Pick<FieldProps, "label" | "description" | "error"> {
    /** Enter (not Shift+Enter, not mid-composition) or the submit button, with the current text. */
    onSubmit?: (value: string) => void;
    /** Figma Submit = Text: a word on the button ("Add job") instead of the arrow. */
    submitText?: string;
    /** The arrow's accessible name. Default `"Send"`. */
    submitLabel?: string;
    /** Submit with an empty field, for prompts where the text is optional. */
    allowEmpty?: boolean;
    /**
     * Figma State = Loading: three dots in the submit, same size and colour.
     * The text stays and can't be edited, focus stays in the field, and
     * nothing submits.
     */
    loading?: boolean;
    /** Announced politely while `loading`. Default `"Working…"`. */
    loadingLabel?: string;
    /** While `loading`, the submit becomes a Stop button that calls this. */
    onStop?: () => void;
    /** The Stop button's accessible name. Default `"Stop"`. */
    stopLabel?: string;
    /** Figma Invalid without a message: the red outline and `aria-invalid`. `error` sets it too. */
    invalid?: boolean;
    /** The field grows with the text up to this many lines, then scrolls. Default `6`. */
    maxRows?: number;
    /** Figma Footer: a row under the text, aligned right (Cancel). */
    actions?: React.ReactNode;
    /** Fill the container. Default `true`. */
    fullWidth?: boolean;
    /** Extra attributes for the submit button, such as a `data-test-id`. */
    submitProps?: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "disabled" | "type" | "children"> & {
        "data-test-id"?: string;
    };
}
export type PromptBarProps = PromptBarOwnProps & Omit<React.ComponentPropsWithoutRef<"textarea">, keyof PromptBarOwnProps | "rows">;
/**
 * Figma's PromptBar: one field for writing to the AI or pasting a job. It
 * starts at one line, grows with the text up to `maxRows`, then scrolls.
 * Enter submits, Shift+Enter adds a line. Built on Field, so `label`,
 * `description` and `error` work as on Input and Textarea; without a label,
 * pass `aria-label`. `className` and `style` go to the outer Field; the ref
 * and every other prop to the `<textarea>`.
 */
export declare const PromptBar: React.ForwardRefExoticComponent<PromptBarOwnProps & Omit<Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref">, "rows" | keyof PromptBarOwnProps> & React.RefAttributes<HTMLTextAreaElement>>;
export {};
