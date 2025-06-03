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
declare const Breadcrumb: ({ paths, className, eventParams, }: BreadcrumbProps) => React.JSX.Element;
export default Breadcrumb;
