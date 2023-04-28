import { ReactElement } from "react";
import { SizeType } from "../../Modal";
export interface Props {
    buttons: ReactElement;
    size: `${SizeType}`;
}
declare const PopupModalButtons: ({ buttons, size, }: Props) => JSX.Element;
export default PopupModalButtons;
