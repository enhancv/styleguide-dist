import React from "react";
import type { TooltipPlacement } from "./Tooltip";
export interface TooltipCoords {
    top: number;
    left: number;
    placement: TooltipPlacement;
}
export declare const resolvePosition: (trigger: DOMRect, bubble: {
    width: number;
    height: number;
}, preferred: TooltipPlacement, gap: number, margin?: number) => TooltipCoords;
export declare const useTooltipPosition: (open: boolean, triggerRef: React.RefObject<HTMLElement>, bubbleRef: React.RefObject<HTMLElement>, preferred: TooltipPlacement, gap: number) => TooltipCoords | null;
