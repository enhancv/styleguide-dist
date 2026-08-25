import React from "react";
/**
 * Where the bubble sits relative to the trigger — the popper convention, not
 * Figma's. The Figma set names its variants after the arrow, so "Bottom
 * center" there is `top` here, and "Left" there (arrow on the bubble's left
 * edge, bubble to the right of the trigger) is `right` here.
 */
export type TooltipPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "right";
export interface TooltipProps extends Omit<React.ComponentPropsWithoutRef<"span">, "content"> {
    /** The bubble's contents. Keep it short — this is not a popover. */
    content: React.ReactNode;
    placement?: TooltipPlacement;
    /** Figma's `Property=None`. The bubble still points at nothing gracefully. */
    arrow?: boolean;
    /**
     * The tooltip *is* the trigger's accessible name. Leave this off when the
     * trigger already names itself (an IconButton's `aria-label`), or the name
     * gets announced twice.
     */
    labelsTrigger?: boolean;
    children: React.ReactNode;
}
/**
 * A hover/focus tooltip that wraps its own trigger.
 *
 * Positioned in pure CSS against the wrapper, so it can be clipped by an
 * ancestor with `overflow: hidden` and it will not flip away from a viewport
 * edge. That is the trade for having no positioning dependency; a trigger in
 * a scroller or near the edge wants a different placement rather than a
 * different component.
 */
export declare const Tooltip: {
    ({ content, placement, arrow, labelsTrigger, children, className, ...rest }: TooltipProps): React.JSX.Element;
    displayName: string;
};
