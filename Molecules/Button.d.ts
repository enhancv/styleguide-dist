import React, { HTMLAttributes, ReactNode } from "react";
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
    leftIcon?: string;
    rightIcon?: string;
    color?: `${ColorType}`;
    primary?: boolean;
    fluid?: boolean;
    size?: `${SizeType}`;
    children?: ReactNode;
    preserveCasing?: boolean;
    [index: string]: any;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
export declare const Button: ({ className, primary, fluid, size, children, color, leftIcon, rightIcon, preserveCasing, href, ...props }: ButtonProps) => React.JSX.Element;
export {};
