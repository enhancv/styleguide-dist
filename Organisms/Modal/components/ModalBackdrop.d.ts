import React, { ReactNode } from "react";
interface Props {
    className?: string;
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export default function ModalBackdrop({ className, children, onClick }: Props): React.JSX.Element;
export {};
