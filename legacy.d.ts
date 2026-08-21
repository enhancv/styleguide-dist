/**
 * Pre-token components that lost their main-index export to the new button
 * family. Importable as `enhancv-styleguide/legacy` (plus `legacy.css` next
 * to `main.css`) for the call sites the migration deliberately skips —
 * color="white" and the hand-review queue in tokens/button-migration.md.
 * Deleted when those sites are gone.
 */
export { Button, ColorType } from "./Molecules/Button";
export type { ButtonProps } from "./Molecules/Button";
export { IconButton } from "./Molecules/IconButton/IconButton";
export { LinkButton } from "./Molecules/LinkButton/LinkButton";
