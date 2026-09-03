import React, { HTMLAttributes } from "react";
import type { InputIcon } from "./InputIcon";
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
