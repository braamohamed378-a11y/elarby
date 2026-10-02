<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

- The site is Arabic-first and fully RTL (`lang="ar" dir="rtl"` on `<html>`); keep all copy in Egyptian Arabic and never add a language toggle.
- Design system lives in `src/styles.css` with tokens (primary pink, sun yellow, mint, cream, ink) and playful motion utilities (anim-up, marquee-track, floaty, bob); components must use these tokens, not hardcoded colors.
- Fonts are loaded via `<link>` in `src/routes/__root.tsx` (Baloo Bhaijaan 2 display/body, IBM Plex Mono for numerals) — never @import remote CSS from styles.css.
- The homepage is a single marketing landing page whose primary conversion is a `tel:` call/delivery CTA for 01221657838; do not add an ordering backend unless asked.
