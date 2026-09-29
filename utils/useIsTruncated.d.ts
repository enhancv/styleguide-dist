import React from "react";
/**
 * Whether an element's text is cut off (`scrollWidth > clientWidth`). Measures
 * before paint, again whenever `content` changes, when the box resizes
 * (ResizeObserver) and once web fonts settle. The element must be a
 * non-inline box with `overflow: hidden` — an inline box has no clientWidth.
 */
export declare const useIsTruncated: <T extends HTMLElement>(content: unknown) => [React.RefCallback<T>, boolean];
