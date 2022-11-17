import { HTMLAttributes, ReactNode } from "react";
declare enum SizeType {
    sm = "sm",
    md = "md"
}
export type Props = {
    className?: string;
    primary?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    title?: string;
    size?: `${SizeType}`;
} & HTMLAttributes<HTMLButtonElement>;
export declare const IconButton: ({ className, primary, children, disabled, title, size, ...props }: Props) => JSX.Element;
export {};
