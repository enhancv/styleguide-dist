import React from "react";
export interface SliderProps {
    min?: number;
    max?: number;
    defaultValue?: number;
    value?: number;
    title?: string;
    onChange?: (value: number) => void;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
