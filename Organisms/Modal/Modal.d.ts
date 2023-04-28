import { ReactNode } from "react";
export declare enum SizeType {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl"
}
export interface ModalProps {
    size?: `${SizeType}`;
    className?: string;
    animationOpening?: string;
    animationClosing?: string;
    isCloseButtonHidden?: boolean;
    onClose: () => void;
    children?: ReactNode;
}
declare const Modal: ({ size, className, animationOpening, animationClosing, onClose, isCloseButtonHidden, children, }: ModalProps) => JSX.Element;
export default Modal;
