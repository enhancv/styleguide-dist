import React from "react";
export interface Props {
    children: React.ReactNode;
    animation: string;
    classNameWrapper?: string;
    threshold?: number;
    triggerOnce?: boolean;
    delay?: number;
    trackVisibility?: boolean;
    fallbackInView?: boolean;
    initialInView?: boolean;
    skip?: boolean;
    rootMargin?: string;
}
export default function OnScrollAnimationWrapper({ children, animation, classNameWrapper, threshold, ...props }: Props): JSX.Element;
