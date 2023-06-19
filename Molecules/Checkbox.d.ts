import React from "react";
export interface Props {
    checked: boolean;
    id?: string;
    label?: string;
    name?: string;
    className?: string;
    defaultChecked?: boolean;
    onClick?: () => void;
}
export declare const Checkbox: ({ checked, label, onClick, name, id, defaultChecked, className, }: Props) => React.JSX.Element;
