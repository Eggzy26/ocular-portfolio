import { c as createComponent } from './astro-component_KDZwuC4I.mjs';
import 'piccolore';
import { o as renderHead, k as renderTemplate } from './entrypoint_DTmpa8MZ.mjs';
import 'clsx';

const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.request.method === "POST") {
    const form = await Astro2.request.formData();
    const password = form.get("password");
    if (password === "0cUl5r2026!@") {
      const headers = new Headers({
        "Set-Cookie": `admin_session=authenticated; HttpOnly; Path=/admin; Max-Age=86400; SameSite=Lax`,
        Location: "/admin"
      });
      return new Response(null, { status: 302, headers });
    } else {
      return new Response(null, {
        status: 302,
        headers: { Location: "/admin/login?error=1" }
      });
    }
  }
  const error = Astro2.url.searchParams.get("error");
  return renderTemplate`<html lang="en" data-astro-cid-rf56lckb> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin Login | Ocular</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-rf56lckb> <div class="wrap" data-astro-cid-rf56lckb> <div class="card" data-astro-cid-rf56lckb> <span class="logo" data-astro-cid-rf56lckb>Ocular</span> <h1 data-astro-cid-rf56lckb>Admin</h1> <p data-astro-cid-rf56lckb>Enter your password to access the dashboard.</p> ${error && renderTemplate`<p class="error" data-astro-cid-rf56lckb>Incorrect password. Try again.</p>`} <form method="POST" data-astro-cid-rf56lckb> <input type="password" name="password" placeholder="Password" autofocus required data-astro-cid-rf56lckb> <button type="submit" data-astro-cid-rf56lckb>Sign In</button> </form> <a href="/" class="back" data-astro-cid-rf56lckb>← Back to site</a> </div> </div></body></html>`;
}, "/Users/yllanaglocelellevera/Documents/Operation 15/ocular-portfolio/src/pages/admin/login.astro", void 0);
const $$file = "/Users/yllanaglocelellevera/Documents/Operation 15/ocular-portfolio/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
