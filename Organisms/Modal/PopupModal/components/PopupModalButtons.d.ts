import { ReactElement } from "react";
import { SizeType } from "../../Modal";
export interface Props {
    children: ReactElement;
    size: `${SizeType}`;
}
declare const PopupModalButtons: ({ children, size, }: Props) => JSX.Element;
export default PopupModalButtons;
