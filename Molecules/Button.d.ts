import { HTMLAttributes } from "react";
export declare enum ColorType {
    Green = "green",
    Purple = "purple",
    Red = "red"
}
declare enum SizeType {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
declare type Props = {
    className: string;
    color?: `${ColorType}`;
    primary?: boolean;
    size?: `${SizeType}`;
    label: string;
    icon?: string;
    redirectUrl?: string;
    onClick: () => void;
} & HTMLAttributes<HTMLButtonElement>;
export declare const Button: ({ className, primary, size, label, color, onClick, ...props }: Props) => JSX.Element;
export {};
