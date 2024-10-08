import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Addition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6v12m6-6H6"></path></svg>`;
});
const Divide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="6" r="1" fill="currentColor"></circle><circle cx="12" cy="18" r="1" fill="currentColor"></circle><path d="M5 12h14"></path></g></svg>`;
});
const Equals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 9h12M6 15h12"></path></svg>`;
});
const Minus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="-5 -11 24 24"><path fill="currentColor" d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></path></svg>`;
});
const Multiply = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A.997.997 0 0 1 7 18"></path><path fill="currentColor" d="M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18"></path></svg>`;
});
const Backsp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7.92 5a2 2 0 0 0-1.519.698l-4.285 5a2 2 0 0 0 0 2.604l4.285 5A2 2 0 0 0 7.92 19H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM15 10l-4 4m0-4l4 4"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let equation = "";
  return `${$$result.head += `<!-- HEAD_svelte-e3awfh_START -->${$$result.title = `<title>Calculator</title>`, ""}<!-- HEAD_svelte-e3awfh_END -->`, ""}  <div class="bg-[#fdfefe] rounded-3xl max-w-[16rem] grid grid-cols-4 gap-2 p-6 font-extrabold shadow-xl"><div id="output" class="bg-[#2386fe] rounded-xl col-span-4 min-h-11 flex items-center px-2 mb-2 text-white justify-end text-right break-all transition-all">${escape(equation)}</div> <button id="Delete" class="bg-[#f3f6fd]" data-svelte-h="svelte-1jt08zj">AC</button> <button id="Backspace" class="bg-[#f3f6fd]">${validate_component(Backsp, "Backsp").$$render($$result, {}, {}, {})}</button> <button id="%" class="bg-[#f3f6fd]" data-svelte-h="svelte-1wxlmxw">%</button> <button id="+" class="bg-[#5de16f] text-white shadow-[0_1px_6px_0_#b4fbbe]">${validate_component(Addition, "Addition").$$render($$result, {}, {}, {})}</button> <button id="7" data-svelte-h="svelte-1m53j6y">7</button> <button id="8" data-svelte-h="svelte-1cct72b">8</button> <button id="9" data-svelte-h="svelte-118d48k">9</button> <button id="-" class="bg-[#fb4557] text-white shadow-[0px_01px_6px_0px_#f97d8a]">${validate_component(Minus, "Minus").$$render($$result, {}, {}, {})}</button> <button id="4" data-svelte-h="svelte-qwbnjr">4</button> <button id="5" data-svelte-h="svelte-10p2vc">5</button> <button id="6" data-svelte-h="svelte-w8vvvd">6</button> <button id="/" class="bg-[#2386fe] text-white shadow-[0_1px_6px_0_#a5cbf9]">${validate_component(Divide, "Divide").$$render($$result, {}, {}, {})}</button> <button id="1" data-svelte-h="svelte-4xxku4">1</button> <button id="2" data-svelte-h="svelte-nech8d">2</button> <button id="3" data-svelte-h="svelte-1u5rqqm">3</button> <button id="*" class="bg-[#fac901] text-white shadow-[0_2px_6px_0px_#f6df85]">${validate_component(Multiply, "Multiply").$$render($$result, {}, {}, {})}</button> <button id="0" data-svelte-h="svelte-128xbfv">0</button> <button id="." data-svelte-h="svelte-wwwfc1">.</button> <button id="=" class="bg-[#f3f6fd] col-span-2">${validate_component(Equals, "Equals").$$render($$result, {}, {}, {})}</button></div>`;
});
export {
  Page as default
};
