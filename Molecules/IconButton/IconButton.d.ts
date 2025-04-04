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
} & HTMLAttributes<HTMLButtonElement>;
export declare const IconButton: ({ className, primary, children, disabled, title, titlePosition, size, ...props }: Props) => React.JSX.Element;
export {};
