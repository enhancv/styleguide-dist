import { ReactNode } from "react";
export interface ModalBodyProps {
    children: ReactNode;
    className?: string;
    onClose?: () => void;
}
declare const ModalBody: ({ children, className }: ModalBodyProps) => JSX.Element;
export default ModalBody;
