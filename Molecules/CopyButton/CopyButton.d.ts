import React, { HTMLAttributes } from "react";
declare enum SizeType {
    sm = "sm",
    md = "md"
}
export type Props = {
    className?: string;
    copyContent: string;
    size?: `${SizeType}`;
    onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;
export declare const CopyButton: ({ size, onClick, ...props }: Props) => React.JSX.Element;
export {};
