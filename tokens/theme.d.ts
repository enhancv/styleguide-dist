/**
 * Do not edit directly, this file was auto-generated
 * by tokens/build.mjs from tokens/input/ (level: theme).
 */
export declare const background: {
    readonly page: "var(--background-page)";
    readonly default: "var(--background-default)";
    readonly subtle: "var(--background-subtle)";
    readonly inverse: "var(--background-inverse)";
    readonly overlay: "var(--background-overlay)";
    readonly brand: {
        readonly subtle: "var(--background-brand-subtle)";
        readonly solid: "var(--background-brand-solid)";
        readonly solidHover: "var(--background-brand-solid-hover)";
        readonly solidActive: "var(--background-brand-solid-active)";
        readonly alpha10: "var(--background-brand-alpha-10)";
        readonly alpha20: "var(--background-brand-alpha-20)";
        readonly alpha30: "var(--background-brand-alpha-30)";
    };
    readonly success: {
        readonly subtle: "var(--background-success-subtle)";
        readonly solid: "var(--background-success-solid)";
        readonly solidHover: "var(--background-success-solid-hover)";
        readonly solidActive: "var(--background-success-solid-active)";
        readonly alpha10: "var(--background-success-alpha-10)";
        readonly alpha20: "var(--background-success-alpha-20)";
        readonly alpha30: "var(--background-success-alpha-30)";
    };
    readonly warning: {
        readonly subtle: "var(--background-warning-subtle)";
        readonly solid: "var(--background-warning-solid)";
        readonly solidHover: "var(--background-warning-solid-hover)";
        readonly solidActive: "var(--background-warning-solid-active)";
        readonly alpha10: "var(--background-warning-alpha-10)";
        readonly alpha20: "var(--background-warning-alpha-20)";
        readonly alpha30: "var(--background-warning-alpha-30)";
    };
    readonly danger: {
        readonly subtle: "var(--background-danger-subtle)";
        readonly solid: "var(--background-danger-solid)";
        readonly solidHover: "var(--background-danger-solid-hover)";
        readonly solidActive: "var(--background-danger-solid-active)";
        readonly alpha10: "var(--background-danger-alpha-10)";
        readonly alpha20: "var(--background-danger-alpha-20)";
        readonly alpha30: "var(--background-danger-alpha-30)";
    };
    readonly accent: {
        readonly subtle: "var(--background-accent-subtle)";
        readonly solid: "var(--background-accent-solid)";
        readonly solidHover: "var(--background-accent-solid-hover)";
        readonly solidActive: "var(--background-accent-solid-active)";
        readonly alpha10: "var(--background-accent-alpha-10)";
        readonly alpha20: "var(--background-accent-alpha-20)";
        readonly alpha30: "var(--background-accent-alpha-30)";
    };
    readonly neutral: {
        readonly solid: "var(--background-neutral-solid)";
        readonly solidHover: "var(--background-neutral-solid-hover)";
        readonly solidActive: "var(--background-neutral-solid-active)";
        readonly alpha30: "var(--background-neutral-alpha-30)";
    };
};
export declare const border: {
    readonly subtle: "var(--border-subtle)";
    readonly default: "var(--border-default)";
    readonly strong: "var(--border-strong)";
    readonly brandSubtle: "var(--border-brand-subtle)";
    readonly successSubtle: "var(--border-success-subtle)";
    readonly warningSubtle: "var(--border-warning-subtle)";
    readonly dangerSubtle: "var(--border-danger-subtle)";
    readonly accentSubtle: "var(--border-accent-subtle)";
    readonly brand: "var(--border-brand)";
    readonly accent: "var(--border-accent)";
    readonly success: "var(--border-success)";
    readonly warning: "var(--border-warning)";
    readonly danger: "var(--border-danger)";
    readonly neutral: "var(--border-neutral)";
};
export declare const button: {
    readonly primary: "var(--button-primary)";
    readonly primaryHover: "var(--button-primary-hover)";
    readonly primaryActive: "var(--button-primary-active)";
    readonly secondary: "var(--button-secondary)";
    readonly secondaryHover: "var(--button-secondary-hover)";
    readonly secondaryActive: "var(--button-secondary-active)";
    readonly tertiary: "var(--button-tertiary)";
    readonly tertiaryHover: "var(--button-tertiary-hover)";
    readonly tertiaryActive: "var(--button-tertiary-active)";
    readonly danger: "var(--button-danger)";
    readonly dangerHover: "var(--button-danger-hover)";
    readonly dangerActive: "var(--button-danger-active)";
    readonly warning: "var(--button-warning)";
    readonly warningHover: "var(--button-warning-hover)";
    readonly warningActive: "var(--button-warning-active)";
    readonly success: "var(--button-success)";
    readonly successHover: "var(--button-success-hover)";
    readonly successActive: "var(--button-success-active)";
    readonly neutral: "var(--button-neutral)";
    readonly neutralHover: "var(--button-neutral-hover)";
    readonly neutralActive: "var(--button-neutral-active)";
};
export declare const icon: {
    readonly brand: "var(--icon-brand)";
    readonly accent: "var(--icon-accent)";
    readonly danger: "var(--icon-danger)";
    readonly disabled: "var(--icon-disabled)";
    readonly inverse: "var(--icon-inverse)";
    readonly muted: "var(--icon-muted)";
    readonly neutral: "var(--icon-neutral)";
    readonly success: "var(--icon-success)";
    readonly warning: "var(--icon-warning)";
};
export declare const text: {
    readonly primary: "var(--text-primary)";
    readonly secondary: "var(--text-secondary)";
    readonly muted: "var(--text-muted)";
    readonly disabled: "var(--text-disabled)";
    readonly inverse: "var(--text-inverse)";
    readonly link: "var(--text-link)";
    readonly onBrand: "var(--text-on-brand)";
    readonly onAccent: "var(--text-on-accent)";
    readonly onSuccess: "var(--text-on-success)";
    readonly onWarning: "var(--text-on-warning)";
    readonly onDanger: "var(--text-on-danger)";
    readonly brand: "var(--text-brand)";
    readonly accent: "var(--text-accent)";
    readonly success: "var(--text-success)";
    readonly warning: "var(--text-warning)";
    readonly danger: "var(--text-danger)";
    readonly onNeutral: "var(--text-on-neutral)";
};
type Leaves<T> = T extends string ? T : {
    [K in keyof T]: Leaves<T[K]>;
}[keyof T];
export type ThemeToken = Leaves<typeof background | typeof border | typeof button | typeof icon | typeof text>;
export {};
