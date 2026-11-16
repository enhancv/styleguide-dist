import React from "react";
import "../../tokens/components/input.css";
import type { FieldProps } from "../../Atoms/Field/Field";
export type PromptBarSize = "sm" | "md";
interface PromptBarOwnProps extends Pick<FieldProps, "label" | "description" | "error"> {
    /** Figma Size. SM follows Input SM: Body S text, 8px above and below, a Body XS helper and error. Default `"md"`. */
    size?: PromptBarSize;
    /**
     * Figma State = Loading: three dots in the submit, same size and colour.
     * The text stays and can't be edited, focus stays in the field, and
     * nothing submits.
     */
    loading?: boolean;
    /** Announced politely while `loading`. Default `"Working…"`. */
    loadingLabel?: string;
    /** Figma Invalid without a message: the red outline and `aria-invalid`. `error` sets it too. */
    invalid?: boolean;
    /** The field grows with the text up to this many lines, then scrolls. Default `6`. */
    maxRows?: number;
    /** Fill the container. Default `true`. */
    fullWidth?: boolean;
}
interface PromptBarFooterProps {
    /**
     * Figma Footer. `false` drops the row under the text, the submit and
     * `actions` with it, for a field the page submits with its own button:
     * Enter then adds a line. Default `true`.
     */
    footer?: true;
    /** Enter (not Shift+Enter, not mid-composition) or the submit button, with the current text. */
    onSubmit?: (value: string) => void;
    /** Figma Submit = Text: a word on the button ("Add job") instead of the arrow. */
    submitText?: string;
    /** The arrow's accessible name. Default `"Send"`. */
    submitLabel?: string;
    /** Submit with an empty field, for prompts where the text is optional. */
    allowEmpty?: boolean;
    /** While `loading`, the submit becomes a Stop button that calls this. */
    onStop?: () => void;
    /** The Stop button's accessible name. Default `"Stop"`. */
    stopLabel?: string;
    /** Figma Footer's Cancel: buttons before the submit, in the row under the text. */
    actions?: React.ReactNode;
    /** Extra attributes for the submit button, such as a `data-test-id`. */
    submitProps?: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "disabled" | "type" | "children"> & {
        "data-test-id"?: string;
    };
}
type PromptBarNoFooterProps = {
    footer: false;
} & {
    [Key in Exclude<keyof PromptBarFooterProps, "footer">]?: never;
};
export type PromptBarProps = PromptBarOwnProps & (PromptBarFooterProps | PromptBarNoFooterProps) & Omit<React.ComponentPropsWithoutRef<"textarea">, keyof PromptBarOwnProps | keyof PromptBarFooterProps | "rows">;
/**
 * Figma's PromptBar: one field for writing to the AI or pasting a job. It
 * starts at one line, grows with the text up to `maxRows`, then scrolls. The
 * submit sits in the row under the text, after any `actions`. Enter submits,
 * Shift+Enter adds a line. `footer={false}` drops that row for a field the
 * page submits with its own button, and Enter adds a line. Built on Field, so `label`,
 * `description` and `error` work as on Input and Textarea; without a label,
 * pass `aria-label`. `className` and `style` go to the outer Field; the ref
 * and every other prop to the `<textarea>`.
 */
export declare const PromptBar: React.ForwardRefExoticComponent<PromptBarProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
