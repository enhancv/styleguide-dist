import React from "react";
interface Props {
    options: number;
    onClickIcon: (index: number, event: React.MouseEvent) => void;
}
declare function Bars({ options, onClickIcon }: Props): React.JSX.Element;
export default Bars;
