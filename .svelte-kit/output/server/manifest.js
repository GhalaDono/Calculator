export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Calculator/_app",
	assets: new Set([".nojekyll","calculator.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DxzfBgtb.js","app":"_app/immutable/entry/app.C1ig6QS9.js","imports":["_app/immutable/entry/start.DxzfBgtb.js","_app/immutable/chunks/entry.RYcuQs0M.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.C1ig6QS9.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DXxVPHTT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
