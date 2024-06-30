export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Calculator/_app",
	assets: new Set([".nojekyll","calculator.png","click.mp3","click1.wav"]),
	mimeTypes: {".png":"image/png",".mp3":"audio/mpeg",".wav":"audio/wav"},
	_: {
		client: {"start":"_app/immutable/entry/start.BLlFMGiW.js","app":"_app/immutable/entry/app.D4KzB6ne.js","imports":["_app/immutable/entry/start.BLlFMGiW.js","_app/immutable/chunks/entry.BiyDPLWK.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.D4KzB6ne.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DlXuueEN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
