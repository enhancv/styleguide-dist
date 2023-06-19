import React from "react";
export interface MultiSliderProps {
    options: number;
    option: number;
    onChange: (option: number, event: React.MouseEvent | React.TouchEvent) => void;
    title?: string;
    labelLeft?: string;
    labelRight?: string;
    isForFontSize?: boolean;
}
declare const MultiSlider: ({ options, option, onChange, title, labelLeft, labelRight, isForFontSize }: MultiSliderProps) => React.JSX.Element;
export default MultiSlider;
