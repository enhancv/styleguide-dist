import "../../tokens/components/card.css";
import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
/** The Figma Style axis (`style` is React's CSS prop). */
export type CardVariant = "outlined" | "elevated" | "ghost";
/**
 * The Figma Padding axis, all four sides: 4 / 8 / 16 / 24px. Comfortable
 * drops to 16px at 768px and below, like Figma's Card Breakpoint Mobile mode.
 */
export type CardPadding = "tight" | "compact" | "default" | "comfortable";
/** The Figma Border width axis: stroke/default (1px) or stroke/strong (2px). */
export type CardBorderWidth = "default" | "strong";
/**
 * A container (`div`, `section`, `article`, `li`), or the element a whole
 * card is: a link (`a`), an action (`button`), or the label of the radio /
 * checkbox inside it (`label`).
 */
export type CardElement = "div" | "section" | "article" | "li" | "a" | "button" | "label";
declare const DEFAULT_ELEMENT = "div";
interface CardOwnProps {
    /** Figma Style. Default `"outlined"`. */
    variant?: CardVariant;
    /** Figma Padding. Default `"default"` (16px). */
    padding?: CardPadding;
    /** Figma Border width: the Outlined outline and every style's Selected outline. Default `"default"` (1px). */
    borderWidth?: CardBorderWidth;
    /**
     * Figma Clickable: hover lift, pointer cursor, focus ring and Selected.
     * Default `false`, a static container. What the click does comes from the
     * element (`as="a"`, `"button"`, `"label"`) or the caller's handler.
     */
    clickable?: boolean;
    /**
     * Figma Selected: the brand outline at `borderWidth`. Clickable cards only.
     * Also set as the role's ARIA state (`aria-pressed` on a button card,
     * `aria-checked` on `role="radio"`…). A `label` card shows Selected while
     * its own radio / checkbox is checked, without this prop.
     */
    selected?: boolean;
}
export type CardProps<E extends CardElement = typeof DEFAULT_ELEMENT> = PolymorphicProps<E, CardOwnProps>;
/**
 * A self-contained surface that groups related content and actions: Figma's
 * Card set. Static by default; `clickable` adds the hover lift, focus ring and
 * Selected outline. States are CSS (`:hover`, `:focus-visible`), never props.
 */
export declare const Card: PolymorphicComponent<CardElement, typeof DEFAULT_ELEMENT, CardOwnProps>;
export {};
