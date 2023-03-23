import { Props as IconProps } from "../../Atoms/Icon";
import React, { HTMLAttributes } from "react";
type InputIcon = {
    position?: "left" | "right";
} & IconProps;
type Props = {
    name?: string;
    label?: string;
    className?: string;
    fluid?: boolean;
    error?: string;
    icon?: InputIcon;
    size?: "medium" | "large" | "fluid";
    [index: string]: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>;
export default function Input({ name, label, className, fluid, error, size, icon, ...props }: Props): JSX.Element;
export {};
