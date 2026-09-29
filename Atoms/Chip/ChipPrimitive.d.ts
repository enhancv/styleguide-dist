import React from "react";
import "../../tokens/components/chip.css";
import type { ChipColorToken } from "../../tokens/components/chip";
import type { UiIconName } from "../Icon/Icon";
/** The Figma Size axis: 24 / 32 / 40px pills. */
export type ChipSize = "sm" | "md" | "lg";
/** The Figma Style axis (`style` is React's CSS prop). */
export type ChipVariant = "subtle" | "solid" | "ghost";
/** Clickable=True → button; Clickable=False (and InputChip while editing) → span. */
export type ChipElement = "button" | "span";
/** The axes every public chip forwards: the Chip collection mode + Size + Style. */
export interface ChipVisualProps {
    /** Chip collection mode (Figma variable mode). Default `"neutral"`. */
    color?: ChipColorToken;
    /** Default `"md"` (32px). */
    size?: ChipSize;
    /** Default `"subtle"`. */
    variant?: ChipVariant;
    /**
     * For sentence-length labels (a suggestion, an answer): drops the
     * 200 / 224 / 256px label cap, so the chip grows with its text and only
     * truncates (with the tooltip) when its container is narrower.
     */
    fullLabel?: boolean;
}
export type ChipButtonAttributes = Omit<React.ComponentPropsWithoutRef<"button">, "color" | "children" | "type">;
export type ChipSpanAttributes = Omit<React.ComponentPropsWithoutRef<"span">, "color" | "children" | "onClick">;
/** Clickable=True: a `<button>` with every Figma State. */
export interface ChipClickableProps extends ChipButtonAttributes {
    /** Figma Clickable. Default `true`. */
    clickable?: true;
    /** Native `disabled`: no hover, press, focus or click. */
    disabled?: boolean;
    /** A chip never submits a form — always `type="button"`. */
    type?: never;
    ref?: React.Ref<HTMLButtonElement>;
}
/** Clickable=False: a static `<span>` — only Default and Disabled. */
export interface ChipStaticProps extends ChipSpanAttributes {
    clickable: false;
    /** Visual only (`data-disabled`); the parent carries `aria-disabled`. */
    disabled?: boolean;
    onClick?: never;
    type?: never;
    ref?: React.Ref<HTMLSpanElement>;
}
/** `forwardRef` can't narrow the ref per branch; the wrappers cast to this. */
export type ChipComponent<Props> = ((props: Props) => React.ReactElement | null) & {
    displayName?: string;
};
export interface ChipPrimitiveProps extends ChipVisualProps, Omit<React.ButtonHTMLAttributes<HTMLElement>, "color" | "children"> {
    element: ChipElement;
    /** The label text (tooltip, action names and editing all need a string). */
    label: string;
    iconStart?: UiIconName;
    /** FilterChip Selected: the check takes the leading slot, replacing iconStart. */
    selected?: boolean;
    /** `"chevron"`: FilterChip dropdown. `"action"`: an empty icon box InputChip's action sits over. */
    trailing?: "chevron" | "action";
    /** InputChip's editor, rendered in place of the label (sets data-editing). */
    editor?: React.ReactNode;
    /** Visually hidden text after the label (FilterChip "selected"). */
    hiddenText?: string;
}
export declare const ChipPrimitive: React.ForwardRefExoticComponent<ChipPrimitiveProps & React.RefAttributes<HTMLElement>>;
