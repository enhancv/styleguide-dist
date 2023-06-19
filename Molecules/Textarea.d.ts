import React, { HTMLAttributes } from "react";
type Props = {
    required: boolean;
    label?: string;
    labelFor?: string;
    labelClassName?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    resize?: boolean;
    value?: string;
    rows?: number;
    maxLength?: number;
} & HTMLAttributes<HTMLTextAreaElement>;
export declare const Textarea: ({ required, label, labelFor, labelClassName, name, className, placeholder, resize, value, rows, maxLength, ...props }: Props) => React.JSX.Element;
export {};
