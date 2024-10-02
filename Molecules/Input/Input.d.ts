import { Props as IconProps } from "../../Atoms/Icons/Icon";
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
    size?: "medium" | "large" | "small";
    disabled?: boolean;
    [index: string]: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>;
export default function Input({ name, label, className, fluid, error, size, icon, color, disabled, ...props }: Props): React.JSX.Element;
export {};
