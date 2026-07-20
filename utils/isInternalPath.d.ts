/**
 * True for app-internal paths like "/plans" — the ones the injected router
 * Link can handle. Absolute URLs, protocol-relative "//…", "#…", "mailto:"
 * and other non-rooted hrefs are left to the native anchor.
 */
declare const isInternalPath: (href?: string) => href is string;
export default isInternalPath;
