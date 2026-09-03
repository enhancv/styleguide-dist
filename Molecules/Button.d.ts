import React, { HTMLAttributes, ReactNode } from "react";
import type { UiIconName } from "../Atoms/Icon/Icon";
export declare enum ColorType {
    Green = "green",
    Purple = "purple",
    Red = "red",
    Grey = "grey",
    White = "white"
}
declare enum SizeType {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export type ButtonProps = {
    className?: string;
    leftIcon?: UiIconName;
    rightIcon?: UiIconName;
    color?: `${ColorType}`;
    primary?: boolean;
    fluid?: boolean;
    size?: `${SizeType}`;
    children?: ReactNode;
    preserveCasing?: boolean;
    href?: string;
    /** Not a prop — use `href`; internal paths render the injected router Link automatically. */
    to?: never;
    [index: string]: any;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
export declare const Button: ({ className, primary, fluid, size, children, color, leftIcon, rightIcon, preserveCasing, href, to, ...props }: ButtonProps) => React.JSX.Element;
export {};
