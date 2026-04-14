# Frontend Wizards — Stage 1B Profile Card

A responsive, accessible, and testable profile card component built for the Stage 1B frontend task. Built with plain HTML, CSS, and vanilla JavaScript.

## Files

- `index.html` — semantic markup with all required `data-testid` attributes.
- `styles.css` — responsive styling for mobile, tablet, and desktop layouts.
- `script.js` — live epoch time display, updating every second.

## Run locally

Open `Frontend/profile-card/index.html` in your browser or preview it with a local static server (e.g. VS Code Live Server).

---

## What's included

### Profile content

| Element | testid |
|---|---|
| Card root container | `test-profile-card` |
| Name | `test-user-name` |
| Short biography | `test-user-bio` |
| Current time in milliseconds | `test-user-time` |
| Avatar image | `test-user-avatar` |
| Social links list | `test-user-social-links` |
| GitHub link | `test-user-social-github` |
| Twitter link | `test-user-social-twitter` |
| LinkedIn link | `test-user-social-linkedin` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

### Time display

The `test-user-time` element shows the current epoch time in milliseconds (`Date.now()`). It updates every 1000ms via `setInterval` and is wrapped in `aria-live="polite"` so screen readers are notified of updates without interrupting the user.

### Social links

All social links open in a new tab using `target="_blank"` with `rel="noopener noreferrer"` for security. Each link has an `aria-label` that includes "(opens in new tab)" to inform keyboard and screen reader users.

---

## Design decisions

**Consistent design system**
The profile card uses the same dark color palette and design tokens as the Stage 0/1a todo card — same background, surface, accent, border, and typography variables — so both components feel like they belong to the same product.

**Avatar left, content right on tablet and above**
On screens 540px and wider, the avatar sits to the left and all profile content flows to the right using Flexbox. On mobile it stacks vertically and centers the avatar for a cleaner small-screen layout.

**Side-by-side hobbies and dislikes**
Hobbies and dislikes are laid out in a two-column CSS Grid on tablet and desktop, collapsing to a single column on mobile. Each is a `<section>` with `aria-labelledby` pointing to its heading so screen readers announce the section context correctly.

---

## Accessibility notes

- Avatar has meaningful `alt` text describing the person.
- `<nav>` wrapping social links has `aria-label="Social media links"`.
- Both `<section>` elements (hobbies, dislikes) use `aria-labelledby` referencing their `<h3>` headings.
- Time display uses `aria-live="polite"` and `aria-atomic="true"` for live announcements.
- All links are keyboard-focusable with visible `:focus-visible` outlines.
- Color contrast meets WCAG AA — muted text (#8b90a0) on dark background (#13161e) maintains sufficient contrast for body text; accent color (#6366f1) is used for decorative elements only.

## Known limitations

- Avatar is loaded from an external URL (DiceBear API). If the URL is unreachable the browser will show a broken image — no fallback image is implemented.
- Time updates every second which generates frequent `aria-live` announcements. Users who rely on screen readers may find this verbose; the spec explicitly requires the time to be shown in milliseconds so this is a known trade-off.
- No persistence — all content is static and defined in the HTML.
