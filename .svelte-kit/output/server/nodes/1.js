

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Dy6Icj61.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DlXuueEN.js","_app/immutable/chunks/entry.BiyDPLWK.js"];
export const stylesheets = [];
export const fonts = [];
