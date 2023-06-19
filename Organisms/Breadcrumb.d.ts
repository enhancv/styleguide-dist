import React from "react";
interface Path {
    name: string;
    url: string;
}
export interface BreadcrumbProps {
    paths: Path[];
    className?: string;
    eventParams?: {};
}
declare const Breadcrumb: ({ paths, className, eventParams, }: BreadcrumbProps) => React.JSX.Element;
export default Breadcrumb;
