import React, { HTMLAttributes, ReactNode } from "react";
declare enum SizeType {
    sm = "sm",
    md = "md",
    lg = "lg"
}
declare enum TitlePositionType {
    top = "top",
    left = "left",
    right = "right",
    bottom = "bottom"
}
export type Props = {
    className?: string;
    primary?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    title?: string;
    size?: `${SizeType}`;
    titlePosition?: `${TitlePositionType}`;
    href?: string;
    /** Not a prop — use `href`; internal paths render the injected router Link automatically. */
    to?: never;
    [index: string]: any;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
export declare const IconButton: ({ className, primary, children, disabled, title, titlePosition, size, href, to, ...props }: Props) => React.JSX.Element;
export {};
