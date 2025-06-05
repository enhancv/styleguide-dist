import React from "react";
interface Path {
    name: string;
    url: string;
    isHome?: boolean;
}
export interface BreadcrumbProps {
    paths: Path[];
    className?: string;
    eventParams?: {};
}
/**
 * Renders a responsive breadcrumb navigation component
 * Uses CSS classes for responsive behavior instead of isInBreakpoint because it's causing errors in the website/app build:
 * - Full view is shown on larger screens (hidden-xs)
 * - Compact view is shown on mobile (hidden-sm hidden-mxl) only when items > 2
 */
declare const Breadcrumb: ({ paths, className, eventParams, }: BreadcrumbProps) => React.JSX.Element | null;
export default Breadcrumb;
