import React, { HTMLAttributes, ReactNode } from "react";
declare enum SizeType {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export type ButtonProps = {
    className?: string;
    size?: `${SizeType}`;
    children?: ReactNode;
    preserveCasing?: boolean;
    [index: string]: any;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
export declare const LinkButton: ({ className, size, children, preserveCasing, href, ...props }: ButtonProps) => React.JSX.Element;
export {};
