import React from "react";
export interface AnchoredSize {
    width: number;
    height: number;
}
export interface UseAnchoredPositionOptions {
    /** Re-measure on capture-phase scroll (one frame at a time) so the panel follows its anchor. */
    followScroll?: boolean;
}
/**
 * Measures an anchor and the floating panel attached to it while `open`, and
 * turns the two boxes into coordinates through `resolve` (memoise it — it is an
 * effect dependency). Measures in a layout effect so the first paint is already
 * placed, again on the next frame (fonts, async content), on window resize, on
 * panel/anchor size changes and, optionally, on scroll. Returns `null` while
 * closed or unmeasured — paint the panel `visibility: hidden` until then.
 */
export declare const useAnchoredPosition: <Coords extends object>(open: boolean, anchorRef: React.RefObject<HTMLElement>, panelRef: React.RefObject<HTMLElement>, resolve: (anchor: DOMRect, panel: AnchoredSize) => Coords, { followScroll }?: UseAnchoredPositionOptions) => Coords | null;
