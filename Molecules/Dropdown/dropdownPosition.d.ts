import type { AnchoredSize } from "../../utils/useAnchoredPosition";
export type DropdownPlacement = "bottom-start" | "bottom-end" | "top-start" | "top-end";
export interface DropdownCoords {
    top: number;
    left: number;
    /** The side actually used after flipping. */
    placement: DropdownPlacement;
    /** Viewport room on the chosen side minus the margin — the panel's block-size cap. */
    maxHeight: number;
    anchorWidth: number;
}
/**
 * The job-tracker menu's placement rule, done right: decide the side
 * vertically (preferred → opposite → whichever has more room), then clamp the
 * inline position to the viewport independently — a menu shifts sideways, it
 * never flips horizontally, and it never covers its own trigger. Tooltip's
 * resolver needs both axes to fit per candidate, which is wrong for a panel
 * wider than its anchor near the viewport's edge.
 */
export declare const resolveDropdownPosition: (anchor: DOMRect, panel: AnchoredSize, preferred: DropdownPlacement, gap: number, margin?: number) => DropdownCoords;
