/**
 * Do not edit directly, this file was auto-generated
 * by tokens/build.mjs from tokens/input/ (level: semantic).
 */
export declare const body: {
    readonly xl: {
        readonly font: "var(--body-xl-font)";
        readonly weight: "var(--body-xl-weight)";
        readonly size: "var(--body-xl-size)";
        readonly lineHeight: "var(--body-xl-line-height)";
        readonly tracking: "var(--body-xl-tracking)";
    };
    readonly l: {
        readonly font: "var(--body-l-font)";
        readonly weight: "var(--body-l-weight)";
        readonly size: "var(--body-l-size)";
        readonly lineHeight: "var(--body-l-line-height)";
        readonly tracking: "var(--body-l-tracking)";
    };
    readonly m: {
        readonly font: "var(--body-m-font)";
        readonly weight: "var(--body-m-weight)";
        readonly size: "var(--body-m-size)";
        readonly lineHeight: "var(--body-m-line-height)";
        readonly tracking: "var(--body-m-tracking)";
    };
    readonly s: {
        readonly font: "var(--body-s-font)";
        readonly weight: "var(--body-s-weight)";
        readonly size: "var(--body-s-size)";
        readonly lineHeight: "var(--body-s-line-height)";
        readonly tracking: "var(--body-s-tracking)";
    };
    readonly xs: {
        readonly font: "var(--body-xs-font)";
        readonly weight: "var(--body-xs-weight)";
        readonly size: "var(--body-xs-size)";
        readonly lineHeight: "var(--body-xs-line-height)";
        readonly tracking: "var(--body-xs-tracking)";
    };
};
export declare const display: {
    readonly xl: {
        readonly font: "var(--display-xl-font)";
        readonly weight: "var(--display-xl-weight)";
        readonly size: "var(--display-xl-size)";
        readonly lineHeight: "var(--display-xl-line-height)";
        readonly tracking: "var(--display-xl-tracking)";
    };
    readonly l: {
        readonly font: "var(--display-l-font)";
        readonly weight: "var(--display-l-weight)";
        readonly size: "var(--display-l-size)";
        readonly lineHeight: "var(--display-l-line-height)";
        readonly tracking: "var(--display-l-tracking)";
    };
};
export declare const heading: {
    readonly xl: {
        readonly font: "var(--heading-xl-font)";
        readonly weight: "var(--heading-xl-weight)";
        readonly size: "var(--heading-xl-size)";
        readonly lineHeight: "var(--heading-xl-line-height)";
        readonly tracking: "var(--heading-xl-tracking)";
    };
    readonly l: {
        readonly font: "var(--heading-l-font)";
        readonly weight: "var(--heading-l-weight)";
        readonly size: "var(--heading-l-size)";
        readonly lineHeight: "var(--heading-l-line-height)";
        readonly tracking: "var(--heading-l-tracking)";
    };
    readonly m: {
        readonly font: "var(--heading-m-font)";
        readonly weight: "var(--heading-m-weight)";
        readonly size: "var(--heading-m-size)";
        readonly lineHeight: "var(--heading-m-line-height)";
        readonly tracking: "var(--heading-m-tracking)";
    };
    readonly s: {
        readonly font: "var(--heading-s-font)";
        readonly weight: "var(--heading-s-weight)";
        readonly size: "var(--heading-s-size)";
        readonly lineHeight: "var(--heading-s-line-height)";
        readonly tracking: "var(--heading-s-tracking)";
    };
    readonly xs: {
        readonly font: "var(--heading-xs-font)";
        readonly weight: "var(--heading-xs-weight)";
        readonly size: "var(--heading-xs-size)";
        readonly lineHeight: "var(--heading-xs-line-height)";
        readonly tracking: "var(--heading-xs-tracking)";
    };
};
export declare const layout: {
    readonly container: "var(--layout-container)";
};
export declare const radius: {
    readonly control: "var(--radius-control)";
    readonly card: "var(--radius-card)";
    readonly overlay: "var(--radius-overlay)";
    readonly pill: "var(--radius-pill)";
};
export declare const spacing: {
    readonly 0: "var(--spacing-0)";
    readonly 4: "var(--spacing-4)";
    readonly 8: "var(--spacing-8)";
    readonly 12: "var(--spacing-12)";
    readonly 16: "var(--spacing-16)";
    readonly 20: "var(--spacing-20)";
    readonly 24: "var(--spacing-24)";
    readonly 28: "var(--spacing-28)";
    readonly 32: "var(--spacing-32)";
    readonly 36: "var(--spacing-36)";
    readonly 40: "var(--spacing-40)";
    readonly 48: "var(--spacing-48)";
    readonly 56: "var(--spacing-56)";
    readonly 64: "var(--spacing-64)";
    readonly 72: "var(--spacing-72)";
    readonly 80: "var(--spacing-80)";
    readonly 96: "var(--spacing-96)";
    readonly 112: "var(--spacing-112)";
    readonly 128: "var(--spacing-128)";
};
export declare const stroke: {
    readonly none: "var(--stroke-none)";
    readonly default: "var(--stroke-default)";
    readonly strong: "var(--stroke-strong)";
    readonly heavy: "var(--stroke-heavy)";
};
type Leaves<T> = T extends string ? T : {
    [K in keyof T]: Leaves<T[K]>;
}[keyof T];
export type SemanticToken = Leaves<typeof body | typeof display | typeof heading | typeof layout | typeof radius | typeof spacing | typeof stroke>;
export {};
