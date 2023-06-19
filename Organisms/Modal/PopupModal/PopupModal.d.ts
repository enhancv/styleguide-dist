import React, { ReactElement, ReactNode } from "react";
import { SizeType } from "../Modal";
export interface PopupProps {
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
declare const PopupModal: ({ title, description, image, buttons, size, className, animationOpening, animationClosing, onClose, children, }: PopupProps) => React.JSX.Element;
export default PopupModal;
