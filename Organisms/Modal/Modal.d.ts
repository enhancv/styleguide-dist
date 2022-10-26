import React, { ReactNode } from "react";
declare enum SizeType {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export interface ModalProps {
    id?: string;
    children: ReactNode;
    open: boolean;
    className?: string;
    onBackdropClick?: () => void;
    onClose?: () => void;
    maxWidth?: `${SizeType}`;
    additionalText?: string;
    showMobileVersion?: boolean;
    mobileTitle?: string;
    onClickBack?: () => void;
    header?: React.ReactNode;
    modern?: boolean;
    innerClose?: boolean;
}
declare const Modal: ({ id, children, open, className, onBackdropClick, onClose, maxWidth, additionalText, }: ModalProps) => JSX.Element | null;
export default Modal;
