import { ReactElement, ReactNode } from "react";
import { SizeType } from "../Modal";
export interface DialogProps {
    title?: string;
    description?: string;
    image?: ReactElement;
    buttons?: ReactElement;
    size?: `${SizeType}`;
    className?: string;
    animationOpening?: string;
    animationClosing?: string;
    onClose: () => void;
    children?: ReactNode;
}
declare const DialogModal: ({ title, description, buttons, size, className, animationOpening, animationClosing, onClose, children, }: DialogProps) => JSX.Element;
export default DialogModal;
