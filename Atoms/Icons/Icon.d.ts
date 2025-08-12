import React from "react";
export interface Props {
    icon: string;
    className?: string;
    style?: object;
    onClick?: () => void;
}
declare const Icon: ({ icon, className, style, onClick }: Props) => React.JSX.Element;
export default Icon;
