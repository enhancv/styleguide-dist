import React from "react";
declare enum SizeType {
    sm = "sm",
    md = "md",
    lg = "lg"
}
export interface Props {
    checked: boolean;
    id?: string;
    label?: string | React.ReactNode;
    name?: string;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    partialChecked?: boolean;
    size?: `${SizeType}`;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
