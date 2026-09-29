import SocialIcons from "@/components/SocialIcons";

const CONTACT_EMAIL = "hussain.digosewala@gmail.com";
const CONTACT_PHONE_DISPLAY = "+91 7507835194";
const CONTACT_PHONE_HREF = "+917507835194";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-bold text-text">
            HUSSAIN DIGOSEWALA<span className="text-accent">.</span>
          </p>
          <p className="mt-1 font-body text-sm text-muted">
            Graphic Designer, Content Creator &amp; NFT Artist
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body text-sm text-accent-soft underline-offset-4 transition-colors hover:underline focus-visible:underline focus-visible:outline-none"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE_HREF}`}
              className="font-body text-sm text-muted underline-offset-4 transition-colors hover:text-text hover:underline focus-visible:underline focus-visible:outline-none"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <SocialIcons />
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl font-body text-xs text-muted">
        © {new Date().getFullYear()} Hussain Digosewala. All rights reserved.
      </p>
    </footer>
  );
}