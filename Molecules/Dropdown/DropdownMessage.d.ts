import React from "react";
export interface DropdownEmptyProps {
    /** Figma Empty text. Default `"No results"`. */
    children?: React.ReactNode;
}
/** A list or a search with nothing to show. */
export declare const DropdownEmpty: {
    ({ children }: DropdownEmptyProps): React.JSX.Element;
    displayName: string;
};
export interface DropdownLoadingProps {
    /** Figma Loading text. Default `"Loading…"`. */
    children?: React.ReactNode;
}
/** The options are still loading: the library Loader and a short text. */
export declare const DropdownLoading: {
    ({ children }: DropdownLoadingProps): React.JSX.Element;
    displayName: string;
};
export interface DropdownErrorProps {
    /** Figma Error text. Default `"Couldn’t load the list"`. */
    children?: React.ReactNode;
    /**
     * Adds a separator and a "Try again" row (refresh-cw) under the message,
     * described by it; the menu stays open.
     */
    onRetry?: () => void;
    /** The retry row's label. Default `"Try again"`. */
    retryLabel?: React.ReactNode;
}
/** The options failed to load, with an optional Try again row. */
export declare const DropdownError: {
    ({ children, onRetry, retryLabel, }: DropdownErrorProps): React.JSX.Element;
    displayName: string;
};
