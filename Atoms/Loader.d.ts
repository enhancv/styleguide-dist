import React, { HTMLAttributes } from "react";
declare enum SizeType {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export type LoaderProps = {
    className?: string;
    size?: `${SizeType}`;
} & HTMLAttributes<HTMLSpanElement>;
export declare const Loader: ({ className, size }: LoaderProps) => React.JSX.Element;
export {};
