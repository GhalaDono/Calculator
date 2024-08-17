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
		client: {"start":"_app/immutable/entry/start.DcSpbDR8.js","app":"_app/immutable/entry/app.B3GuIgPB.js","imports":["_app/immutable/entry/start.DcSpbDR8.js","_app/immutable/chunks/entry.pBXam4Fh.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.B3GuIgPB.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DlXuueEN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
