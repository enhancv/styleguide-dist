/// <reference types="react" />
interface Props {
    options: number;
    setOptionLocal: (index: number) => void;
}
declare function Bars({ options, setOptionLocal }: Props): JSX.Element;
export default Bars;
