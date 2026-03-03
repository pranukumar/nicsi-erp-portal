"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import type { FormEvent, KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  CloudCog,
  FileBadge2,
  Download,
  FileCheck2,
  FileText,
  GanttChartSquare,
  House,
  Images,
  Medal,
  Megaphone,
  Menu,
  Network,
  Search,
  UserCheck2,
  Users,
  Video,
  X,
} from "lucide-react";
import TopStripAccessibilityMenu from "@/components/layout/TopStripAccessibilityMenu";

const menuGroups = [
  {
    label: "Profile",
    description: "About NICSI, Ministry, organization chart, personnel directories, work allocation, and leadership records.",
    items: [
      {
        label: "About NICSI",
        href: "/about",
        description: "Overview of NICSI mandate, mission, and role.",
        icon: Building2,
      },
      {
        label: "Organization Chart",
        href: "/organization-chart",
        description: "Official organizational hierarchy and reporting structure.",
        icon: BriefcaseBusiness,
      },
      {
        label: "Personnel & Work Allocation",
        href: "/personnel-work-allocation",
        description: "Unified view of HQ personnel, state personnel, and work allocation.",
        icon: FileText,
      },
      {
        label: "Board of Directors",
        href: "/board-of-directors",
        description: "Current board composition and member details.",
        icon: Building2,
      },
      {
        label: "List of Chairpersons",
        href: "/list-of-chairpersons",
        description: "Historical list of chairpersons.",
        icon: BriefcaseBusiness,
      },
      {
        label: "List of Managing Directors",
        href: "/list-of-managing-directors",
        description: "Historical list of managing directors.",
        icon: Users,
      },
    ],
  },
  {
    label: "Projects",
    description: "National and international project portfolios and initiatives.",
    items: [
      {
        label: "NICSI National Projects",
        href: "/national-projects",
        description: "Projects delivered across India for public institutions.",
        icon: GanttChartSquare,
      },
      {
        label: "NICSI State Projects",
        href: "/state-projects",
        description: "State-specific e-Governance implementation projects.",
        icon: GanttChartSquare,
      },
      {
        label: "NICSI MeitY Projects",
        href: "/meity-projects",
        description: "Projects aligned to MeitY programs and initiatives.",
        icon: GanttChartSquare,
      },
      {
        label: "NICSI Products",
        href: "/pbd-projects",
        description: "NICSI product initiatives and related delivery segments.",
        icon: GanttChartSquare,
      },
      {
        label: "NICSI International Projects",
        href: "/international-projects",
        description: "Overseas projects and international engagement initiatives.",
        icon: UserCheck2,
      },
    ],
  },
  {
    label: "Cloud Services",
    description: "Government cloud, hosting, and infrastructure service offerings.",
    items: [
      {
        label: "NICSI Cloud Services",
        href: "/nicsi-cloud",
        description: "Secure, scalable and managed cloud services for government entities.",
        icon: CloudCog,
      },
    ],
  },
  {
    label: "NICSI Centres of Excellence",
    description: "Innovation, standards, enablement and specialized domain capability initiatives.",
    items: [
      {
        label: "NICSI Centres of Excellence",
        href: "/centre-of-excellence",
        description: "Domain-led excellence initiatives for digital governance outcomes.",
        icon: Building2,
      },
    ],
  },
  {
    label: "Empanelled Vendors",
    description: "Approved implementation partners and solution delivery ecosystem.",
    items: [
      {
        label: "Empanelled Vendors (Smart)",
        href: "/empanelled-vendors",
        description: "Intent-based smart search and related vendor recommendations.",
        icon: Network,
      },
      {
        label: "Empanelled Vendors (Classic)",
        href: "/empanelled-vendors-classic",
        description: "Standard category and text filter based vendor listing.",
        icon: Network,
      },
    ],
  },
  {
    label: "Tenders",
    description: "Tender notices, bid opportunities, and procurement updates.",
    items: [
      {
        label: "NICSI CPP Tenders",
        href: "/active-tenders",
        description: "Current and archived CPP tenders with official eTender references.",
        icon: FileText,
      },
      {
        label: "NICSI GeM Bids",
        href: "/nicsi-gem-bids",
        description: "GeM based bid listings and procurement references.",
        icon: FileBadge2,
      },
    ],
  },
  {
    label: "Resources",
    description: "SOPs, forms, and public reference documents.",
    items: [
      {
        label: "NICSI SOP",
        href: "/nicsi-sop",
        description: "Standard operating procedures and process guidance.",
        icon: Download,
      },
      {
        label: "Download Form",
        href: "/forms",
        description: "Downloadable application and process forms.",
        icon: Network,
      },
      {
        label: "Download Annual Report",
        href: "/reports",
        description: "Annual reports and other publication records.",
        icon: Network,
      },
    ],
  },
  {
    label: "Media",
    description: "Press communication, events, galleries, and media archive.",
    items: [
      {
        label: "Photo Gallery",
        href: "/photo-gallery",
        description: "Event photographs and official image gallery.",
        icon: Images,
      },
      {
        label: "Awards & Recognition",
        href: "/awards-recognition",
        description: "Awards, honors, and recognitions received by NICSI.",
        icon: Medal,
      },
      {
        label: "Video Gallery",
        href: "/video-gallery",
        description: "Official videos and multimedia content.",
        icon: Video,
      },
      {
        label: "NICSI Events",
        href: "/events",
        description: "Conferences, workshops, and official events.",
        icon: CalendarDays,
      },
      {
        label: "Press Releases",
        href: "/press-releases",
        description: "Official press release publications.",
        icon: FileText,
      },
      {
        label: "News & Updates",
        href: "/news-updates",
        description: "Latest news, announcements, and updates.",
        icon: Megaphone,
      },
      {
        label: "Archive",
        href: "/archive",
        description: "Archived press, news, and media records.",
        icon: Download,
      },
    ],
  },
];

type TopStripMenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

type TopStripUtilityLink = {
  label: string;
  href: string;
  items?: TopStripMenuItem[];
};

const topStripOpportunitiesItems: TopStripMenuItem[] = [
  { label: "Vacancies", href: "/vacancies", icon: BriefcaseBusiness, external: false },
  { label: "Internship", href: "/internship", icon: UserCheck2, external: false },
  { label: "Capacity Building Training", href: "/capacity-building-training", icon: CalendarDays, external: false },
  { label: "Contact Us", href: "/contact", icon: Users, external: false },
];
const topStripQuickLinksItems: TopStripMenuItem[] = [
  { label: "RTI", href: "/rti", icon: FileCheck2 },
  { label: "CSR", href: "/csr", icon: Building2 },
  { label: "GST Particulars", href: "/gst-particulars", icon: FileBadge2 },
  { label: "Vendor Search", href: "/vendor-search", icon: Network },
  { label: "FAQ", href: "/faq", icon: FileText },
  { label: "Contact Us", href: "/contact", icon: Users },
];

const utilityLinks: TopStripUtilityLink[] = [
  {
    label: "Offerings",
    href: "/vacancies",
    items: topStripOpportunitiesItems,
  },
  {
    label: "Quick Links",
    href: "/contact",
    items: topStripQuickLinksItems,
  },
  { label: "Contact Us", href: "/contact" },
];

type MegaMenuItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  external?: boolean;
};

type MegaMenuGroup = {
  label: string;
  description: string;
  items: MegaMenuItem[];
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topSearch, setTopSearch] = useState("");
  const [topSearchOpen, setTopSearchOpen] = useState(false);
  const [mobileTopSearchOpen, setMobileTopSearchOpen] = useState(false);
  const [mobilePortalInfoOpen, setMobilePortalInfoOpen] = useState(false);
  const [openGroupIndex, setOpenGroupIndex] = useState<number | null>(null);
  const [mobileOpenGroupIndex, setMobileOpenGroupIndex] = useState<number | null>(null);
  const [mobileTopStripMenu, setMobileTopStripMenu] = useState<"opportunities" | "quick-links" | "accessibility" | null>(null);
  const groupButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const groupItemRefs = useRef<Array<Array<HTMLAnchorElement | null>>>([]);
  const topSearchInputRef = useRef<HTMLInputElement | null>(null);
  const mobileTopSearchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileOpenGroupIndex(null);
  };

  const toggleMobileMenu = () => {
    if (open) {
      closeMobileMenu();
      return;
    }
    setOpen(true);
    setMobileOpenGroupIndex((prev) => prev ?? 0);
  };

  const focusGroupButton = (index: number) => {
    groupButtonRefs.current[index]?.focus();
  };

  const openGroupAndFocusItem = (groupIndex: number, itemIndex = 0) => {
    setOpenGroupIndex(groupIndex);
    window.setTimeout(() => {
      groupItemRefs.current[groupIndex]?.[itemIndex]?.focus();
    }, 0);
  };

  const handleTopSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = topSearch.trim();
    router.push(q ? `/sitemap?q=${encodeURIComponent(q)}` : "/sitemap");
    setTopSearchOpen(false);
    setMobileTopSearchOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/90 shadow-[0_10px_30px_rgba(10,46,115,0.2)]"
          : "bg-white/95"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0A2E73] via-[#0F4BB8] to-[#0A2E73] px-6 py-2 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium leading-none tracking-[0.01em]">
          <a
            href="https://www.india.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-white transition hover:text-cyan-100"
          >
            <Image src="/icons/india-flag.svg" alt="India Flag" width={20} height={14} className="h-4 w-5 rounded-[1px]" />
            <span>Government of India</span>
          </a>
          <a
            href="https://www.digitalindia.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-sm bg-white px-1 py-0.5 transition hover:opacity-90"
            aria-label="Digital India"
          >
            <Image src="/logos/digital-india.png" alt="Digital India" width={96} height={24} className="h-5 w-auto" />
          </a>
          <a
            href="https://swachhbharatmission.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center transition hover:opacity-90"
            aria-label="Swachh Bharat"
          >
            <Image
              src="/logos/swachh-bharat.png"
              alt="Swachh Bharat"
              width={84}
              height={20}
              className="h-5 w-auto brightness-0 invert"
            />
          </a>
        </span>
        <div className="hidden items-center gap-4 text-[12.5px] font-medium tracking-[0.01em] lg:flex">
          {utilityLinks.map((item) =>
            item.items?.length ? (
              <div key={item.label} className="group relative">
                <Link href={item.href} className="inline-flex items-center gap-1 text-white/90 transition hover:text-white">
                  <span>{item.label}</span>
                  <ChevronDown size={12} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-cyan-100 bg-gradient-to-br from-white via-[#f6fbff] to-[#eef6ff] p-1.5 opacity-0 shadow-[0_18px_35px_rgba(10,46,115,0.22)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      target={subItem.external ? "_blank" : undefined}
                      rel={subItem.external ? "noreferrer" : undefined}
                      className="block rounded-lg border border-transparent px-3 py-2 text-[13px] font-medium text-[#1C2F57] transition hover:border-cyan-100 hover:bg-gradient-to-r hover:from-[#e9f4ff] hover:to-[#dff0ff] hover:text-[#0F4BB8]"
                    >
                      <span className="flex items-center gap-2">
                        {subItem.icon ? <subItem.icon size={14} className="text-[#003A8C]" /> : null}
                        <span>{subItem.label}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="text-white/90 transition hover:text-white">
                {item.label}
              </Link>
            ),
          )}
          <div
            className="relative ml-1"
            onMouseEnter={() => setTopSearchOpen(true)}
            onMouseLeave={() => setTopSearchOpen(false)}
            onFocusCapture={() => setTopSearchOpen(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setTopSearchOpen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={() => {
                setTopSearchOpen((prev) => !prev);
                window.setTimeout(() => topSearchInputRef.current?.focus(), 0);
              }}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/30 bg-white/10 text-cyan-100 transition hover:bg-white/20 hover:text-white"
              aria-label="Open search"
              aria-expanded={topSearchOpen}
              aria-controls="top-strip-search-panel"
            >
              <Search size={13} />
            </button>
            {topSearchOpen ? (
              <form
                id="top-strip-search-panel"
                onSubmit={handleTopSearch}
                className="absolute right-0 top-full z-50 mt-2 flex items-center rounded-md border border-cyan-100 bg-gradient-to-br from-white via-[#f6fbff] to-[#eef6ff] p-1 shadow-[0_18px_35px_rgba(10,46,115,0.22)]"
              >
                <label htmlFor="top-strip-search" className="sr-only">
                  Search
                </label>
                <input
                  ref={topSearchInputRef}
                  id="top-strip-search"
                  type="search"
                  value={topSearch}
                  onChange={(event) => setTopSearch(event.target.value)}
                  placeholder="Search..."
                  className="w-44 rounded-md border border-blue-100 bg-white px-2 py-1 text-[12px] text-[#1C2F57] placeholder:text-[#5B6F97] focus:border-[#0F4BB8] focus:outline-none"
                />
              </form>
            ) : null}
          </div>
          <TopStripAccessibilityMenu />
          <div className="group relative">
            <span
              tabIndex={0}
              className="cursor-help rounded px-1 text-white/80 outline-none transition hover:text-white focus-visible:text-white"
              aria-label="Secure ERP Access Portal features"
            >
              Secure ERP Access Portal
            </span>
            <div className="pointer-events-none invisible absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-cyan-100 bg-gradient-to-br from-white via-[#f7fbff] to-[#eef6ff] p-3 text-[12px] text-[#1C2F57] opacity-0 shadow-[0_18px_35px_rgba(10,46,115,0.22)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <p className="font-semibold text-[#0F4BB8]">Portal Features</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-4">
                <li>Role-based secure login and dashboard access</li>
                <li>Workflow approvals with audit trail visibility</li>
                <li>Integrated tenders, vendors, and project updates</li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        <div className="mx-auto mt-2 w-full max-w-7xl text-[12px] font-medium lg:hidden">
          <div className="flex flex-wrap items-center gap-2 pb-1">
          <Link href="/contact" className="shrink-0 rounded border border-white/30 bg-white/10 px-2 py-1 text-white/95">
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => {
              setMobileTopSearchOpen((prev) => !prev);
              setMobilePortalInfoOpen(false);
              setMobileTopStripMenu(null);
              window.setTimeout(() => mobileTopSearchInputRef.current?.focus(), 0);
            }}
            className="inline-flex h-[30px] w-[30px] items-center justify-center rounded border border-white/30 bg-white/10 text-white/95"
            aria-label="Open search"
            aria-expanded={mobileTopSearchOpen}
          >
            <Search size={13} />
          </button>
          <button
            type="button"
            onClick={() => {
              setMobilePortalInfoOpen((prev) => !prev);
              setMobileTopSearchOpen(false);
              setMobileTopStripMenu(null);
            }}
            className="shrink-0 rounded border border-white/30 bg-white/10 px-2 py-1 text-white/95"
            aria-expanded={mobilePortalInfoOpen}
          >
            Secure ERP Access Portal
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileTopSearchOpen(false);
              setMobilePortalInfoOpen(false);
              setMobileTopStripMenu((prev) => (prev === "opportunities" ? null : "opportunities"));
            }}
            className="shrink-0 rounded border border-white/30 bg-white/10 px-2 py-1 text-white/95"
          >
            Offerings
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileTopSearchOpen(false);
              setMobilePortalInfoOpen(false);
              setMobileTopStripMenu((prev) => (prev === "quick-links" ? null : "quick-links"));
            }}
            className="shrink-0 rounded border border-white/30 bg-white/10 px-2 py-1 text-white/95"
          >
            Quick Links
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileTopSearchOpen(false);
              setMobilePortalInfoOpen(false);
              setMobileTopStripMenu((prev) => (prev === "accessibility" ? null : "accessibility"));
            }}
            className="shrink-0 rounded border border-white/30 bg-white/10 px-2 py-1 text-white/95"
          >
            Accessibility
          </button>
          </div>

          {mobileTopSearchOpen ? (
            <form
              onSubmit={handleTopSearch}
              className="mt-2 flex items-center rounded-md border border-cyan-100 bg-gradient-to-br from-white via-[#f6fbff] to-[#eef6ff] p-1 shadow-[0_18px_35px_rgba(10,46,115,0.22)]"
            >
              <label htmlFor="top-strip-search-mobile" className="sr-only">
                Search
              </label>
              <input
                ref={mobileTopSearchInputRef}
                id="top-strip-search-mobile"
                type="search"
                value={topSearch}
                onChange={(event) => setTopSearch(event.target.value)}
                placeholder="Search..."
                className="w-full rounded-md border border-blue-100 bg-white px-2 py-1.5 text-[12px] text-[#1C2F57] placeholder:text-[#5B6F97] focus:border-[#0F4BB8] focus:outline-none"
              />
            </form>
          ) : null}

          {mobilePortalInfoOpen ? (
            <div className="mt-2 rounded-lg border border-cyan-100 bg-gradient-to-br from-white via-[#f7fbff] to-[#eef6ff] p-3 text-[12px] text-[#1C2F57] shadow-[0_18px_35px_rgba(10,46,115,0.22)]">
              <p className="font-semibold text-[#0F4BB8]">Portal Features</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-4">
                <li>Role-based secure login and dashboard access</li>
                <li>Workflow approvals with audit trail visibility</li>
                <li>Integrated tenders, vendors, and project updates</li>
              </ul>
            </div>
          ) : null}

          {mobileTopStripMenu === "opportunities" ? (
            <div className="mt-2 rounded-lg border border-cyan-100 bg-white p-1 shadow-[0_18px_35px_rgba(10,46,115,0.22)]">
              {topStripOpportunitiesItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-2 py-1.5 text-[12px] text-[#1C2F57] hover:bg-[#EDF6FF]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}

          {mobileTopStripMenu === "quick-links" ? (
            <div className="mt-2 rounded-lg border border-cyan-100 bg-white p-1 shadow-[0_18px_35px_rgba(10,46,115,0.22)]">
              {topStripQuickLinksItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="block rounded-md px-2 py-1.5 text-[12px] text-[#1C2F57] hover:bg-[#EDF6FF]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}

          {mobileTopStripMenu === "accessibility" ? (
            <TopStripAccessibilityMenu mode="panel" />
          ) : null}
        </div>
      </div>

      {/* Main Header */}
      <div className="relative flex items-center border-b border-blue-100/80 bg-white/90 px-4 py-4 pr-14 md:px-6 md:pr-6">

        <div className="min-w-0 shrink-0 flex items-center gap-2 md:gap-4">
          <Image
            src="/logos/ashoka.png"
            alt="Ashoka"
            width={64}
            height={64}
            className="h-12 w-auto md:h-16"
          />
          <Image
            src="/logos/NICSI-logo.png"
            alt="NICSI"
            width={210}
            height={75}
            className="h-10 w-auto max-w-[170px] md:h-16 md:max-w-none"
          />
        </div>

        <nav className="ml-auto hidden items-center justify-end gap-1.5 text-[15px] font-semibold tracking-[0.01em] text-[#1C2F57] lg:flex">
          <NavLink href="/" ariaLabel="Home">
            <House size={16} />
          </NavLink>
          {(menuGroups as MegaMenuGroup[]).map((group, groupIndex) => (
            <MenuGroup
              key={group.label}
              groupIndex={groupIndex}
              label={group.label}
              items={group.items}
              isOpen={openGroupIndex === groupIndex}
              setGroupButtonRef={(element) => {
                groupButtonRefs.current[groupIndex] = element;
              }}
              setGroupItemRef={(itemIndex, element) => {
                if (!groupItemRefs.current[groupIndex]) {
                  groupItemRefs.current[groupIndex] = [];
                }
                groupItemRefs.current[groupIndex][itemIndex] = element;
              }}
              onOpen={() => setOpenGroupIndex(groupIndex)}
              onClose={() => setOpenGroupIndex(null)}
              onTriggerKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  const next = (groupIndex + 1) % menuGroups.length;
                  focusGroupButton(next);
                  setOpenGroupIndex(null);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  const prev = (groupIndex - 1 + menuGroups.length) % menuGroups.length;
                  focusGroupButton(prev);
                  setOpenGroupIndex(null);
                }
                if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openGroupAndFocusItem(groupIndex, 0);
                }
                if (event.key === "Escape") {
                  event.preventDefault();
                  setOpenGroupIndex(null);
                }
                if (event.key === "Tab" && !event.shiftKey) {
                  event.preventDefault();
                  openGroupAndFocusItem(groupIndex, 0);
                }
              }}
              onItemKeyDown={(itemIndex, event) => {
                const totalItems = menuGroups[groupIndex].items.length;
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  const nextItem = (itemIndex + 1) % totalItems;
                  groupItemRefs.current[groupIndex]?.[nextItem]?.focus();
                }
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  const prevItem = (itemIndex - 1 + totalItems) % totalItems;
                  groupItemRefs.current[groupIndex]?.[prevItem]?.focus();
                }
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  const nextGroup = (groupIndex + 1) % menuGroups.length;
                  openGroupAndFocusItem(nextGroup, 0);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  const prevGroup = (groupIndex - 1 + menuGroups.length) % menuGroups.length;
                  openGroupAndFocusItem(prevGroup, 0);
                }
                if (event.key === "Escape") {
                  event.preventDefault();
                  setOpenGroupIndex(null);
                  focusGroupButton(groupIndex);
                }
                if (event.key === "Tab" && !event.shiftKey && itemIndex === totalItems - 1) {
                  setOpenGroupIndex(null);
                }
                if (event.key === "Tab" && event.shiftKey && itemIndex === 0) {
                  event.preventDefault();
                  setOpenGroupIndex(null);
                  focusGroupButton(groupIndex);
                }
              }}
            />
          ))}
          <Link
            href="/login"
            className="ml-1 rounded-md bg-gradient-to-r from-[#0A2E73] to-[#0F4BB8] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_6px_16px_rgba(10,46,115,0.28)] transition hover:brightness-110"
          >
            Login
          </Link>
        </nav>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-blue-100 bg-white p-1.5 text-[#1C2F57] lg:static lg:ml-auto lg:translate-y-0 lg:hidden"
          onClick={toggleMobileMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-main-menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div id="mobile-main-menu" className="lg:hidden max-h-[calc(100vh-8.5rem)] overflow-y-auto border-t border-blue-100 bg-white px-4 py-4">
          <Link
            href="/"
            className="mb-3 flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 font-semibold text-[#003A8C]"
            aria-label="Home"
            onClick={closeMobileMenu}
          >
            <House size={16} />
            Home
          </Link>
          {menuGroups.map((group, groupIndex) => (
            <div key={group.label} className="mb-2 overflow-hidden rounded-lg border border-blue-100 bg-white">
              <button
                type="button"
                onClick={() => setMobileOpenGroupIndex((prev) => (prev === groupIndex ? null : groupIndex))}
                className="flex w-full items-center justify-between bg-gradient-to-r from-[#edf6ff] to-[#e4f2ff] px-3 py-2.5 text-left text-sm font-semibold text-[#1C2F57]"
              >
                <span>{group.label}</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    mobileOpenGroupIndex === groupIndex ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div className={`border-t border-blue-100 px-3 py-2 ${mobileOpenGroupIndex === groupIndex ? "block" : "hidden"}`}>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium leading-5 transition ${
                        pathname === item.href
                          ? "border-[#0F4BB8] bg-gradient-to-r from-[#0A2E73] to-[#0F4BB8] text-white"
                          : "border-blue-100 bg-white text-[#1F2937] hover:bg-gradient-to-r hover:from-[#edf6ff] hover:to-[#e4f2ff] hover:text-[#0F4BB8]"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <item.icon size={15} className={pathname === item.href ? "text-white" : "text-[#003A8C]"} />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/login"
            className="mt-2 block rounded-md bg-[#003A8C] px-3 py-2 text-center text-sm font-semibold text-white"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, ariaLabel }: { href: string; children: ReactNode; ariaLabel?: string }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="group relative rounded-md border border-transparent px-2.5 py-2 text-[#1C2F57] transition hover:border-cyan-100 hover:bg-gradient-to-r hover:from-[#edf6ff] hover:to-[#e4f2ff] hover:text-[#0F4BB8]"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#12B8FF] transition-all group-hover:w-full"></span>
    </Link>
  );
}

function MenuGroup({
  groupIndex,
  label,
  items,
  isOpen,
  setGroupButtonRef,
  setGroupItemRef,
  onOpen,
  onClose,
  onTriggerKeyDown,
  onItemKeyDown,
}: {
  groupIndex: number;
  label: string;
  items: Array<{
    label: string;
    href: string;
    description: string;
    icon: LucideIcon;
    external?: boolean;
  }>;
  isOpen: boolean;
  setGroupButtonRef: (element: HTMLButtonElement | null) => void;
  setGroupItemRef: (itemIndex: number, element: HTMLAnchorElement | null) => void;
  onOpen: () => void;
  onClose: () => void;
  onTriggerKeyDown: (event: ReactKeyboardEvent<HTMLButtonElement>) => void;
  onItemKeyDown: (itemIndex: number, event: ReactKeyboardEvent<HTMLAnchorElement>) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [panelLeft, setPanelLeft] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const updatePanelPosition = () => {
      const container = containerRef.current;
      const panel = panelRef.current;
      if (!container || !panel) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const panelWidth = panel.offsetWidth;
      const viewportPadding = 8;
      const minViewportLeft = viewportPadding;
      const maxViewportLeft = Math.max(viewportPadding, window.innerWidth - panelWidth - viewportPadding);
      const centeredViewportLeft = containerRect.left + (containerRect.width / 2) - (panelWidth / 2);
      const clampedViewportLeft = Math.min(Math.max(centeredViewportLeft, minViewportLeft), maxViewportLeft);
      const nextPanelLeft = clampedViewportLeft - containerRect.left;
      setPanelLeft(nextPanelLeft);
    };

    const rafId = window.requestAnimationFrame(updatePanelPosition);
    window.addEventListener("resize", updatePanelPosition);
    window.addEventListener("scroll", updatePanelPosition, true);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updatePanelPosition);
      window.removeEventListener("scroll", updatePanelPosition, true);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative py-1"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          onClose();
        }
      }}
    >
      <button
        ref={setGroupButtonRef}
        id={`mega-trigger-${groupIndex}`}
        type="button"
        className={`relative flex h-10 items-center gap-1 rounded-md px-3 py-2 text-[14px] font-semibold tracking-[0.01em] transition ${
          isOpen
            ? "border border-cyan-100 bg-gradient-to-r from-[#e8f4ff] to-[#dff0ff] text-[#0F4BB8]"
            : "border border-transparent text-[#1C2F57] hover:border-cyan-100 hover:bg-gradient-to-r hover:from-[#edf6ff] hover:to-[#e4f2ff] hover:text-[#0F4BB8]"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={`mega-panel-${groupIndex}`}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onFocus={onOpen}
        onKeyDown={onTriggerKeyDown}
      >
        <span>{label}</span>
        <ChevronDown size={14} className={`mt-[1px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#12B8FF] transition-all ${isOpen ? "w-full" : "w-0"}`}></span>
      </button>
      {isOpen && (
        <div
          ref={panelRef}
          id={`mega-panel-${groupIndex}`}
          role="menu"
          aria-labelledby={`mega-trigger-${groupIndex}`}
          style={{ left: `${panelLeft}px` }}
          className="absolute top-full z-50 w-[min(54rem,calc(100vw-2rem))] rounded-2xl border border-cyan-100 bg-gradient-to-br from-white via-[#f7fbff] to-[#eef6ff] p-4 shadow-[0_22px_50px_rgba(10,46,115,0.22)]"
        >
          <div className={`grid gap-3.5 sm:grid-cols-2 ${label === "Profile" ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
            {items.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  ref={(element) => setGroupItemRef(itemIndex, element)}
                  role="menuitem"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="rounded-xl border border-blue-100 bg-white/95 p-3.5 transition hover:border-cyan-200 hover:bg-gradient-to-r hover:from-[#edf6ff] hover:to-[#e4f2ff]"
                  onKeyDown={(event) => onItemKeyDown(itemIndex, event)}
                  onClick={onClose}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-gradient-to-br from-[#e9f4ff] to-[#ddedff] p-2 text-[#0F4BB8] ring-1 ring-cyan-100">
                      <Icon size={16} />
                    </span>
                    <span className="block text-[14px] font-semibold leading-5 text-gray-800">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
