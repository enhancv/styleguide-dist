import React from "react";
export type TooltipPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "right";
export interface TooltipProps extends Omit<React.ComponentPropsWithoutRef<"span">, "content"> {
    content: React.ReactNode;
    placement?: TooltipPlacement;
    arrow?: boolean;
    labelsTrigger?: boolean;
    delay?: number;
    maxWidth?: number;
    openOnTapWhenCoarse?: boolean;
    children: React.ReactNode;
}
export declare const Tooltip: {
    ({ content, placement, arrow, labelsTrigger, delay, maxWidth, openOnTapWhenCoarse, children, className, ...rest }: TooltipProps): React.JSX.Element;
    displayName: string;
};
