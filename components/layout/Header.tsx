"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
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
  Megaphone,
  Menu,
  Network,
  ServerCog,
  UserCheck2,
  Users,
  Video,
  X,
} from "lucide-react";

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
        label: "Ministry",
        href: "/ministry",
        description: "Ministerial information for MeitY leadership.",
        icon: Users,
      },
      {
        label: "Organization Chart",
        href: "/organization-chart",
        description: "Official organizational hierarchy and reporting structure.",
        icon: BriefcaseBusiness,
      },
      {
        label: "Headquarters Personnel",
        href: "/headquarters-personnel",
        description: "Headquarters officials and contact directory.",
        icon: Users,
      },
      {
        label: "State Personnel",
        href: "/state-personnel",
        description: "State unit personnel and regional contact information.",
        icon: Users,
      },
      {
        label: "Work Allocation",
        href: "/work-allocation",
        description: "Division and section wise responsibility mapping.",
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
        label: "National Projects",
        href: "/national-projects",
        description: "Projects delivered across India for public institutions.",
        icon: GanttChartSquare,
      },
      {
        label: "State Projects",
        href: "/state-projects",
        description: "State-specific e-Governance implementation projects.",
        icon: GanttChartSquare,
      },
      {
        label: "MeitY Projects",
        href: "/meity-projects",
        description: "Projects aligned to MeitY programs and initiatives.",
        icon: GanttChartSquare,
      },
      {
        label: "PBD Projects",
        href: "/pbd-projects",
        description: "Projects under PBD and related delivery segments.",
        icon: GanttChartSquare,
      },
      {
        label: "International Projects",
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
      {
        label: "NGC Platform",
        href: "/ngc-cloud",
        description: "National Government Cloud onboarding and service access platform.",
        icon: ServerCog,
      },
    ],
  },
  {
    label: "NICSI Centre of Excellence",
    description: "Innovation, standards, enablement and specialized domain capability initiatives.",
    items: [
      {
        label: "NICSI Centre of Excellence",
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
        label: "Active Tenders",
        href: "/active-tenders",
        description: "Current open tenders available for participation.",
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
        label: "Forms",
        href: "/forms",
        description: "Downloadable application and process forms.",
        icon: Network,
      },
      {
        label: "Reports",
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
        label: "Events",
        href: "/events",
        description: "Conferences, workshops, and official events.",
        icon: CalendarDays,
      },
      {
        label: "Photo Gallery",
        href: "/photo-gallery",
        description: "Event photographs and official image gallery.",
        icon: Images,
      },
      {
        label: "Video Gallery",
        href: "/video-gallery",
        description: "Official videos and multimedia content.",
        icon: Video,
      },
      {
        label: "Archive",
        href: "/archive",
        description: "Archived press, news, and media records.",
        icon: Download,
      },
    ],
  },
  {
    label: "Quick Links",
    description: "Direct access to key portals and statutory information pages.",
    items: [
      {
        label: "NIC Official Website",
        href: "https://www.nic.gov.in/",
        description: "National Informatics Centre official portal.",
        icon: Network,
        external: true,
      },
      {
        label: "RTI",
        href: "/rti",
        description: "Right to Information details and disclosures.",
        icon: FileCheck2,
      },
      {
        label: "CSR",
        href: "/csr",
        description: "Corporate Social Responsibility initiatives.",
        icon: Building2,
      },
      {
        label: "GST Particulars",
        href: "/gst-particulars",
        description: "GST registration and related particulars.",
        icon: FileBadge2,
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Official contact points and office details.",
        icon: Users,
      },
    ],
  },
];

const topStripOpportunitiesItems = [
  { label: "Career", href: "/career", icon: BriefcaseBusiness },
  { label: "Internship", href: "/internship", icon: UserCheck2 },
  { label: "Capacity Building Training", href: "/capacity-building-training", icon: CalendarDays },
];

const utilityLinks = [
  { label: "Sitemap", href: "/about" },
  {
    label: "Opportunities",
    href: "/career",
    items: topStripOpportunitiesItems,
  },
  { label: "Contact", href: "/contact" },
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroupIndex, setOpenGroupIndex] = useState<number | null>(null);
  const [mobileOpenGroupIndex, setMobileOpenGroupIndex] = useState<number | null>(null);
  const groupButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const groupItemRefs = useRef<Array<Array<HTMLAnchorElement | null>>>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setMobileOpenGroupIndex(0);
      return;
    }
    setMobileOpenGroupIndex(null);
  }, [open]);

  const focusGroupButton = (index: number) => {
    groupButtonRefs.current[index]?.focus();
  };

  const openGroupAndFocusItem = (groupIndex: number, itemIndex = 0) => {
    setOpenGroupIndex(groupIndex);
    window.setTimeout(() => {
      groupItemRefs.current[groupIndex]?.[itemIndex]?.focus();
    }, 0);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-lg"
          : "bg-white"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#003A8C] px-6 py-1.5 text-xs text-white">
        <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 leading-none">
          <Image src="/icons/india-flag.svg" alt="India Flag" width={20} height={14} className="h-4 w-5 rounded-[1px]" />
          Government of India
          <span className="inline-flex items-center rounded-sm bg-white px-1 py-0.5">
            <Image src="/logos/digital-india.png" alt="Digital India" width={96} height={24} className="h-5 w-auto" />
          </span>
          <Image
            src="/logos/swachh-bharat.png"
            alt="Swachh Bharat"
            width={84}
            height={20}
            className="h-5 w-auto brightness-0 invert"
          />
        </span>
        <div className="hidden items-center gap-4 md:flex">
          {utilityLinks.map((item) =>
            item.items?.length ? (
              <div key={item.label} className="group relative">
                <Link href={item.href} className="inline-flex items-center gap-1 text-white/90 transition hover:text-white">
                  <span>{item.label}</span>
                  <ChevronDown size={12} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute right-0 top-full z-50 mt-2 w-60 rounded-md border border-blue-100 bg-white p-1 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.items.map((subItem) => (
                    <Link key={subItem.label} href={subItem.href} className="block rounded px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-[#003A8C]">
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
          <span className="text-white/80">Secure ERP Access Portal</span>
        </div>
        <span className="md:hidden">ERP Portal</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="relative flex items-center border-b border-blue-100 px-4 py-4 pr-14 md:pr-6 md:px-6">

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

        <nav className="ml-auto hidden items-center justify-end gap-4 text-[13px] font-semibold tracking-normal text-gray-700 md:flex">
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
            className="rounded-md bg-[#003A8C] px-5 py-2 text-white transition hover:bg-[#0052CC]"
          >
            Login
          </Link>
        </nav>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-gray-200 bg-white p-1.5 text-gray-700 md:static md:ml-auto md:translate-y-0 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden max-h-[calc(100vh-8.5rem)] overflow-y-auto border-t bg-white px-4 py-4">
          <Link
            href="/"
            className="mb-3 flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 font-semibold text-[#003A8C]"
            aria-label="Home"
            onClick={() => setOpen(false)}
          >
            <House size={16} />
            Home
          </Link>
          {menuGroups.map((group, groupIndex) => (
            <div key={group.label} className="mb-2 rounded-md border border-gray-200">
              <button
                type="button"
                onClick={() => setMobileOpenGroupIndex((prev) => (prev === groupIndex ? null : groupIndex))}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold text-gray-800"
              >
                <span>{group.label}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    mobileOpenGroupIndex === groupIndex ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div className={`border-t border-gray-100 px-3 py-2 ${mobileOpenGroupIndex === groupIndex ? "block" : "hidden"}`}>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`inline-flex min-h-9 items-center rounded-full border px-3 py-1.5 text-sm font-medium leading-5 transition ${
                        pathname === item.href
                          ? "border-[#003A8C] bg-[#003A8C] text-white"
                          : "border-blue-200 bg-white text-[#1F2937] hover:bg-blue-50 hover:text-[#003A8C]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/login"
            className="mt-2 block rounded-md bg-[#003A8C] px-3 py-2 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
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
      className="relative group text-gray-700 hover:text-[#003A8C] transition"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F58220] transition-all group-hover:w-full"></span>
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
        className="relative flex items-center gap-1 text-gray-700 transition hover:text-[#003A8C]"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={`mega-panel-${groupIndex}`}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onFocus={onOpen}
        onKeyDown={onTriggerKeyDown}
      >
        <span>{label}</span>
        <ChevronDown size={14} className="mt-[1px]" />
        <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#F58220] transition-all ${isOpen ? "w-full" : "w-0"}`}></span>
      </button>
      {isOpen && (
        <div
          ref={panelRef}
          id={`mega-panel-${groupIndex}`}
          role="menu"
          aria-labelledby={`mega-trigger-${groupIndex}`}
          style={{ left: `${panelLeft}px` }}
          className="absolute top-full z-50 w-[min(52rem,calc(100vw-2rem))] rounded-xl border border-gray-200 bg-white p-4 shadow-2xl"
        >
          <div className={`grid gap-3 sm:grid-cols-2 ${label === "Profile" ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
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
                  className="rounded-xl border border-gray-100 bg-white p-3.5 transition hover:border-blue-200 hover:bg-blue-50/40"
                  onKeyDown={(event) => onItemKeyDown(itemIndex, event)}
                  onClick={onClose}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-[#F4F7FB] p-2 text-[#003A8C] ring-1 ring-blue-100">
                      <Icon size={16} />
                    </span>
                    <span className="block text-sm font-semibold leading-5 text-gray-800">{item.label}</span>
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
