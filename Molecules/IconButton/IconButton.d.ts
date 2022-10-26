import { ReactNode } from "react";
declare enum SizeType {
    sm = "sm",
    md = "md"
}
export declare type Props = {
    className?: string;
    primary?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    size?: `${SizeType}`;
};
export declare const IconButton: ({ className, primary, children, disabled, size, ...props }: Props) => JSX.Element;
export {};
