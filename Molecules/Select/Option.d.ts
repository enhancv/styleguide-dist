import React, { ReactNode } from "react";
export interface Props {
    children: ReactNode;
    onClick: () => void;
}
declare const Option: ({ children, onClick }: Props) => React.JSX.Element;
export default Option;
