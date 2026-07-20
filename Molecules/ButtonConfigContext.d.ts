import { ComponentType } from "react";
type ButtonConfigContextType = {
    defaultPreserveCasing?: boolean;
    /**
     * Routing Link component injected by the consuming app. Receives the
     * destination path as a `to` prop — pass react-router-dom's Link directly,
     * or a small adapter mapping `to` to `href` for next/link.
     */
    Link?: ComponentType<any>;
};
declare const ButtonConfigContext: import("react").Context<ButtonConfigContextType>;
export default ButtonConfigContext;
