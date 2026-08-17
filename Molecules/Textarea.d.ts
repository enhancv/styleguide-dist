import React from "react";
export declare const Textarea: React.ForwardRefExoticComponent<{
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
} & React.HTMLAttributes<HTMLTextAreaElement> & React.RefAttributes<HTMLTextAreaElement>>;
