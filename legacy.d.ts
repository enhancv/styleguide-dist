/**
 * Pre-token components that lost their main-index export to a new family
 * (the buttons, the Checkbox, the text fields). Importable as `enhancv-styleguide/legacy`
 * (plus `legacy.css` next to `main.css`) for the call sites a migration
 * deliberately skips — the buttons' color="white" and hand-review queue in
 * tokens/button-migration.md, and the Checkbox's indeterminate
 * `partialChecked` select-all heads, and the text fields
 * tokens/migrate-inputs.mjs skips (type="button" triggers, `style`, clickable
 * icons, field-styling Textarea classes). Deleted when those sites are gone.
 */
export { Button, ColorType } from "./Molecules/Button";
export type { ButtonProps } from "./Molecules/Button";
export { IconButton } from "./Molecules/IconButton/IconButton";
export { LinkButton } from "./Molecules/LinkButton/LinkButton";
export { default as Icon } from "./Atoms/Icons/Icon";
export type { Props as IconProps } from "./Atoms/Icons/Icon";
export { Checkbox } from "./Molecules/Checkbox";
export type { Props as CheckboxProps } from "./Molecules/Checkbox";
export { default as Input } from "./Molecules/Input/Input";
export { default as BaseInput } from "./Molecules/Input/BaseInput";
export { default as InputError } from "./Molecules/Input/InputError";
export { default as InputGroup } from "./Molecules/Input/InputGroup";
export { default as InputLabel } from "./Molecules/Input/InputLabel";
export type { InputIcon } from "./Molecules/Input/InputIcon";
export { Textarea } from "./Molecules/Textarea";
