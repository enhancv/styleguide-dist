import { HTMLAttributes, ReactNode } from "react";
export declare enum ColorType {
    Green = "green",
    Purple = "purple",
    Red = "red",
    Grey = "grey"
}
declare enum SizeType {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
declare type Props = {
    className?: string;
    color?: `${ColorType}`;
    primary?: boolean;
    fluid?: boolean;
    size?: `${SizeType}`;
    children: ReactNode;
    [index: string]: any;
} & HTMLAttributes<HTMLButtonElement>;
export declare const Button: ({ className, primary, fluid, size, children, color, ...props }: Props) => JSX.Element;
export {};
