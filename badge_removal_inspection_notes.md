# Badge Removal Inspection Notes

The published domain `https://jnklanding-ncppgnex.manus.space/` displays a visible bottom-right badge labeled "Made with Manus." Browser inspection shows it is present outside the main landing-page content as a separate visible element, while the development preview did not show it in the same way. The badge appears on the public Manus-hosted page, so the removal should target either the hosting-injected DOM element or a project-side rule/script that hides the injected element after page load.

The current published domain also appears to be serving an earlier visual version of the header logo than the latest checkpoint preview, which means the badge removal should be saved as a new checkpoint and the user may need to publish the latest checkpoint for the public domain to reflect all recent changes.

## Validation Update

The development preview rendered normally after the badge-removal change, with the client logo, navigation, hero section, lead form, and sticky preview notice still visible. TypeScript validation and production build both passed.

Because the public badge is injected by Manus hosting into nested open shadow DOM (`manus-content-root` containing `footer-watermark`), I added a small front-end effect that watches for that injected element and hides it without altering the landing-page layout. I also simulated the same nested shadow-DOM structure in the development preview; after the effect ran, the simulated `footer-watermark` element reported `display: none`, `pointer-events: none`, and `aria-hidden: true`, confirming the removal logic works for the observed public-page structure.
