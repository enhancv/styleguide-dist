import React, { ReactNode } from "react";
export interface Props {
    defaultValue?: Options;
    label?: string | JSX.Element;
    onChange: (value: Options) => void;
    className?: string;
    options: Options[];
    fullWidth?: boolean;
    small?: boolean;
    children?: ReactNode;
}
export interface Options {
    value: string | number;
    text: string | number;
}
declare const SelectDropdown: ({ defaultValue, onChange, className, options, fullWidth, label, children, }: Props) => React.JSX.Element;
export default SelectDropdown;
