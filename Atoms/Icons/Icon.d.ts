import React from "react";
export interface Props {
    icon: string;
    className?: string;
    style?: object;
}
declare const Icon: ({ icon, className, style }: Props) => React.JSX.Element;
export default Icon;
