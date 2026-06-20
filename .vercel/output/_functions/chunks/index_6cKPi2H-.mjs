import { c as createComponent } from './astro-component_KDZwuC4I.mjs';
import 'piccolore';
import { o as renderHead, k as renderTemplate, h as addAttribute } from './entrypoint_DTmpa8MZ.mjs';
import 'clsx';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  "https://rlixasgfulzlmzgeudtc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsaXhhc2dmdWx6bG16Z2V1ZHRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTg2ODkzOCwiZXhwIjoyMDk3NDQ0OTM4fQ.QATovG_zEcWcdIeomKR1Rx3YwyYPaSCwboXkPVl525w"
);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const cookie = Astro2.request.headers.get("cookie") ?? "";
  const authenticated = cookie.includes("admin_session=authenticated");
  if (!authenticated) {
    return Astro2.redirect("/admin/login");
  }
  if (Astro2.request.method === "POST") {
    const form = await Astro2.request.formData();
    const action = form.get("action");
    const id = form.get("id");
    if (action === "delete" && id) {
      await supabaseAdmin.from("contacts").delete().eq("id", id);
    }
    if (action === "toggle_read" && id) {
      const { data } = await supabaseAdmin.from("contacts").select("read").eq("id", id).single();
      await supabaseAdmin.from("contacts").update({ read: !data?.read }).eq("id", id);
    }
    return Astro2.redirect("/admin");
  }
  const { data: contacts, error } = await supabaseAdmin.from("contacts").select("*").order("created_at", { ascending: false });
  const unread = contacts?.filter((c) => !c.read).length ?? 0;
  return renderTemplate`<html lang="en" data-astro-cid-u2h3djql> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin Dashboard | Ocular</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-u2h3djql> <header data-astro-cid-u2h3djql> <div class="header-inner" data-astro-cid-u2h3djql> <div class="header-left" data-astro-cid-u2h3djql> <a href="/" class="logo" data-astro-cid-u2h3djql>Ocular</a> <span class="divider" data-astro-cid-u2h3djql>/</span> <span class="page-title" data-astro-cid-u2h3djql>Admin</span> </div> <a href="/admin/logout" class="logout" data-astro-cid-u2h3djql>Sign Out</a> </div> </header> <main data-astro-cid-u2h3djql> <div class="container" data-astro-cid-u2h3djql> <div class="top-row" data-astro-cid-u2h3djql> <div data-astro-cid-u2h3djql> <h1 data-astro-cid-u2h3djql>Contact Submissions</h1> <p class="sub" data-astro-cid-u2h3djql>${contacts?.length ?? 0} total &nbsp;·&nbsp; ${unread} unread</p> </div> </div> ${error && renderTemplate`<p class="err" data-astro-cid-u2h3djql>Error loading contacts: ${error.message}</p>`} ${!contacts?.length ? renderTemplate`<div class="empty" data-astro-cid-u2h3djql> <p data-astro-cid-u2h3djql>No submissions yet. Share your contact page and check back.</p> </div>` : renderTemplate`<div class="table-wrap" data-astro-cid-u2h3djql> <table data-astro-cid-u2h3djql> <thead data-astro-cid-u2h3djql> <tr data-astro-cid-u2h3djql> <th data-astro-cid-u2h3djql></th> <th data-astro-cid-u2h3djql>Name</th> <th data-astro-cid-u2h3djql>Email</th> <th data-astro-cid-u2h3djql>Subject</th> <th data-astro-cid-u2h3djql>Message</th> <th data-astro-cid-u2h3djql>Date</th> <th data-astro-cid-u2h3djql>Actions</th> </tr> </thead> <tbody data-astro-cid-u2h3djql> ${contacts.map((c) => renderTemplate`<tr${addAttribute(!c.read ? "unread" : "", "class")} data-astro-cid-u2h3djql> <td data-astro-cid-u2h3djql> ${!c.read && renderTemplate`<span class="dot" title="Unread" data-astro-cid-u2h3djql></span>`} </td> <td class="name" data-astro-cid-u2h3djql>${c.name}</td> <td data-astro-cid-u2h3djql> <a${addAttribute(`mailto:${c.email}`, "href")} class="email-link" data-astro-cid-u2h3djql>${c.email}</a> </td> <td class="subject" data-astro-cid-u2h3djql>${c.subject || "—"}</td> <td class="message-cell" data-astro-cid-u2h3djql> <span class="message-preview"${addAttribute(c.message, "title")} data-astro-cid-u2h3djql>${c.message}</span> </td> <td class="date" data-astro-cid-u2h3djql> ${new Date(c.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} </td> <td class="actions" data-astro-cid-u2h3djql> <form method="POST" style="display:inline" data-astro-cid-u2h3djql> <input type="hidden" name="action" value="toggle_read" data-astro-cid-u2h3djql> <input type="hidden" name="id"${addAttribute(c.id, "value")} data-astro-cid-u2h3djql> <button type="submit" class="action-btn"${addAttribute(c.read ? "Mark unread" : "Mark read", "title")} data-astro-cid-u2h3djql> ${c.read ? "○" : "●"} </button> </form> <a${addAttribute(`mailto:${c.email}?subject=Re: ${c.subject || "Your message"}`, "href")} class="action-btn reply-btn" title="Reply" data-astro-cid-u2h3djql>↩</a> <form method="POST" style="display:inline" onsubmit="return confirm('Delete this submission?')" data-astro-cid-u2h3djql> <input type="hidden" name="action" value="delete" data-astro-cid-u2h3djql> <input type="hidden" name="id"${addAttribute(c.id, "value")} data-astro-cid-u2h3djql> <button type="submit" class="action-btn delete-btn" title="Delete" data-astro-cid-u2h3djql>✕</button> </form> </td> </tr>`)} </tbody> </table> </div>`} </div> </main></body></html>`;
}, "/Users/yllanaglocelellevera/Documents/Operation 15/ocular-portfolio/src/pages/admin/index.astro", void 0);

const $$file = "/Users/yllanaglocelellevera/Documents/Operation 15/ocular-portfolio/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
