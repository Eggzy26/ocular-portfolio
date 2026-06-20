import { c as createComponent } from './astro-component_KDZwuC4I.mjs';
import 'piccolore';
import './entrypoint_DTmpa8MZ.mjs';
import 'clsx';

const prerender = false;
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const headers = new Headers({
    "Set-Cookie": `admin_session=; HttpOnly; Path=/admin; Max-Age=0; SameSite=Lax`,
    Location: "/admin/login"
  });
  return new Response(null, { status: 302, headers });
}, "/Users/yllanaglocelellevera/Documents/Operation 15/ocular-portfolio/src/pages/admin/logout.astro", void 0);

const $$file = "/Users/yllanaglocelellevera/Documents/Operation 15/ocular-portfolio/src/pages/admin/logout.astro";
const $$url = "/admin/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logout,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
