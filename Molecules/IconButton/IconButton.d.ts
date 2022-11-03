import { HTMLAttributes, ReactNode } from "react";
declare enum SizeType {
    sm = "sm",
    md = "md"
}
export declare type Props = {
    className?: string;
    primary?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    size?: `${SizeType}`;
} & HTMLAttributes<HTMLButtonElement>;
export declare const IconButton: ({ className, primary, children, disabled, size, ...props }: Props) => JSX.Element;
export {};
