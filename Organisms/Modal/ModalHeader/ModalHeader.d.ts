import { ReactNode } from "react";
export interface ModalHeaderProps {
    children: ReactNode;
    className?: string;
    onClose?: () => void;
}
declare const ModalHeader: ({ children, className, onClose }: ModalHeaderProps) => JSX.Element;
export default ModalHeader;
