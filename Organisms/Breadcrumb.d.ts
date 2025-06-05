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
 * On mobile (xs breakpoint) with more than 2 items, shows only the second-to-last item with a back chevron
 * Otherwise shows the full breadcrumb path
 */
declare const Breadcrumb: ({ paths, className, eventParams, }: BreadcrumbProps) => React.JSX.Element | null;
export default Breadcrumb;
