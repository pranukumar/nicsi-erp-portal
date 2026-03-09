# Homepage Slider Idea

Date: March 7, 2026
Project: NICSI ERP Portal

## Scan Summary
- Current homepage hero already uses an image-based slider with 3 generic slides and repeated CTAs.
- Homepage below the hero is rich in actual portal value: ministry context, project portfolio, centres of excellence, service offerings, and social channels.
- Navigation emphasizes practical user journeys: projects, cloud services, vendors, tenders, resources, media, and secure login.
- Portal messaging also highlights role-based access, workflow approvals, and integrated tenders, vendors, and project updates.

## Recommended Direction
Replace the current "broad branding banner" feel with a "mission dashboard slider" that combines one strong headline with proof points and direct task paths.

The slider should feel operational, not promotional. It should help three main audiences immediately:
- Government departments looking for services and project capability
- Vendors looking for empanelment and tender access
- Internal or authorized users looking for secure workflow/login entry

## Slider Concept
Title: `NICSI Mission Tracks`

Structure per slide:
- Left: 1 headline, 1 short paragraph, 1 primary CTA, 1 secondary CTA
- Right: 1 live-style evidence card with 2 to 4 supporting items
- Bottom: 3 quick chips linking to related pages

This keeps the hero visually bold while exposing useful routes without forcing users to scroll.

## Proposed Slides
### 1. National Digital Delivery
- Headline: `Secure ICT delivery for ministries, states, and public institutions`
- Primary CTA: `/about`
- Secondary CTA: `/national-projects`
- Evidence card:
  - `30+ years of delivery experience`
  - `30,000+ projects executed`
  - `Government-focused procurement and implementation`
- Quick chips:
  - `/state-projects`
  - `/meity-projects`
  - `/international-projects`

### 2. Procurement and Vendor Access
- Headline: `Move from requirement to empanelment, bid discovery, and execution`
- Primary CTA: `/empanelled-vendors`
- Secondary CTA: `/active-tenders`
- Evidence card:
  - `Smart vendor search`
  - `GeM bids and CPP tenders`
  - `Category-based procurement support`
- Quick chips:
  - `/nicsi-gem-bids`
  - `/vendor-search`
  - `/forms`

### 3. Cloud and Centres of Excellence
- Headline: `Cloud, cyber security, analytics, and emerging technology capability under one platform`
- Primary CTA: `/nicsi-cloud`
- Secondary CTA: `/centre-of-excellence`
- Evidence card:
  - `Cloud services`
  - `Cyber security`
  - `Data analytics`
  - `Blockchain and AI`
- Quick chips:
  - `/ngc-cloud`
  - `/centre-of-excellence`
  - `/services`

### 4. Secure Workflow and Updates
- Headline: `Role-based access, approvals, notices, and institutional updates`
- Primary CTA: `/login`
- Secondary CTA: `/news-updates`
- Evidence card:
  - `Role-based secure login`
  - `Workflow approvals with audit trail`
  - `Integrated updates across tenders and announcements`
- Quick chips:
  - `/press-releases`
  - `/faq`
  - `/contact`

## Visual Direction
- Keep the existing NICSI blue palette, but reduce dependence on full-bleed stock photos.
- Use split-layout slides with a subtle network/grid background and one focused illustration or data panel.
- Use one accent per slide:
  - Delivery: blue
  - Procurement: amber
  - Cloud/CoE: cyan
  - Workflow/Updates: indigo
- Add a thin top progress bar only if autoplay remains enabled.

## UX Rules
- Default to 4 slides maximum.
- Autoplay may stay, but it should pause on hover, focus, or touch.
- Each slide must expose distinct routes; no repeated CTA pair across slides.
- Keep text short enough that the whole hero remains readable on mobile without collapsing into a wall of copy.
- Preserve keyboard navigation and reduced-motion behavior.

## Why This Fits The Current Portal
- It matches the homepage information architecture instead of competing with it.
- It turns the hero into a gateway for the main navigation priorities already present in the header.
- It aligns with the documented homepage intent: hero, quick services, tender highlights, and media/update visibility.
- It gives the portal a more institutional and task-oriented first impression than the current generic image rotation.

## Implementation Note
If implemented, the cleanest path is to keep the existing `components/layout/Hero.tsx` interaction model and replace the hard-coded slide copy with richer slide objects that support:
- `eyebrow`
- `title`
- `description`
- `primaryCta`
- `secondaryCta`
- `highlights[]`
- `quickLinks[]`
- `theme`

This can stay static first, then later move to a service-backed content model if homepage governance is needed.
