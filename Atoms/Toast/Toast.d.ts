import React from "react";
import "../../tokens/components/toast.css";
/** The Figma Type axis. */
export type ToastType = "neutral" | "success" | "error" | "warning" | "info" | "loading";
export interface ToastAction {
    /** The button label: a verb for what happens ("Undo", "Retry now"). */
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * The action's keyboard equivalent, displayed as text beside the button
     * ("⌘Z", "Ctrl + Z"). Display-only: binding the key is the caller's.
     */
    shortcut?: string;
}
interface ToastOwnProps {
    /** Figma Type: the tone, the status glyph and the announcement politeness. Default `"neutral"`. */
    type?: ToastType;
    /** What happened, in the words of the action that triggered it. */
    title: React.ReactNode;
    /** What it means or what to do next. Figma "Show description". */
    description?: React.ReactNode;
    /** One action at most, rendered as a small secondary neutral Button. Figma "Show action". */
    action?: ToastAction;
    /** Figma "Show close". Default `true`; turn it off for previews only. */
    dismissible?: boolean;
    /** Fires from the close button. */
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
    /** The close button's accessible name. Default `"Dismiss"`. */
    dismissLabel?: string;
    /**
     * Figma "Show progress": a determinate bar, 0–1 (clamped). Meant for
     * `type="loading"`; omit it and a Loading toast shows only its spinner.
     */
    progress?: number;
}
export type ToastProps = ToastOwnProps & Omit<React.ComponentPropsWithoutRef<"div">, keyof ToastOwnProps | "children">;
/**
 * Brief, non-blocking feedback about something the person just did: Figma's
 * Toast set. Presentational only. Queueing, stacking, placement, timers and
 * focus return belong to the app's toast region.
 */
export declare const Toast: React.ForwardRefExoticComponent<ToastOwnProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | keyof ToastOwnProps> & React.RefAttributes<HTMLDivElement>>;
export {};
