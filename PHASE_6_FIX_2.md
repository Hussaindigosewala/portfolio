PHASE 6-FIX-2 — Remove character card container, fix remaining tint, remove Apple logo

## 1. Remove the character card/frame entirely
Across Hero, About, Software, and Contact: remove the bounding card container around the Character component — no border, no border-radius, no background fill, no box-shadow. The character video/image should render directly on the section's own background with no visible box edge. Keep the soft ambient glow effect if one exists (that's fine, it's not a hard edge), but the rectangular card itself must go. All four sections' character assets already have a flat #0A0714 background baked in, matching the page exactly — removing the card is what makes them blend seamlessly.

## 2. Fix remaining dark/tinted character in About and Contact
About and Contact sections are still showing the character with a dark/black tinted outfit instead of its true grey color — this means the mix-blend-multiply tint removal from the previous fix did not fully apply to these two sections. Explicitly re-check About.tsx and Contact.tsx for any remaining blend-mode, filter, or overlay tint on the Character component and remove it, so the outfit renders as true grey matching Hero and Software.

## 3. Remove Apple logo from desk pose laptop
The desk pose asset (char-desk.png / loop-desk.mp4) shows a laptop with a visible Apple logo on the lid — this is a real trademark and should not ship on the live site. Since this is baked into the video/image asset itself (not something CSS can fix), flag this clearly in your report as something that needs a re-generated asset, do not attempt to code-patch or crop it — just confirm and report it so it can be regenerated later.

## Verification
After changes, confirm visually across all four sections: no visible card/box edge around any character, consistent true-grey outfit color in all four, and confirm the report explicitly calls out the Apple logo issue as an asset-level fix needed later, not a code fix.