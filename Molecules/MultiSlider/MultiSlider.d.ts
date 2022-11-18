import React from "react";
export interface MultiSliderProps {
    options: number;
    option: number;
    onChange: (option: number, event: React.MouseEvent) => void;
    title?: string;
    labelLeft?: string;
    labelRight?: string;
    isForFontSize?: boolean;
}
declare const MultiSlider: ({ options, option, onChange, title, labelLeft, labelRight, isForFontSize }: MultiSliderProps) => JSX.Element;
export default MultiSlider;