import { Props as IconProps } from "../../Atoms/Icon";
import { HTMLAttributes } from "react";
declare type InputIcon = {
    position?: "left" | "right";
} & IconProps;
declare type Props = {
    name?: string;
    label?: string;
    className?: string;
    fluid?: boolean;
    error?: string;
    icon?: InputIcon;
    size?: "medium" | "large" | "fluid";
    [index: string]: any;
} & HTMLAttributes<HTMLInputElement>;
export default function Input({ name, label, className, fluid, error, size, icon, ...props }: Props): JSX.Element;
export {};
