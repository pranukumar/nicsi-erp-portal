"use client";

import Link from "next/link";
import Image from "next/image";
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
    description: "Corporate profile, leadership structure, and organizational information.",
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
        label: "NICSI Cloud",
        href: "/nicsi-cloud",
        description: "NICSI managed cloud infrastructure and support services.",
        icon: CloudCog,
      },
      {
        label: "NGC Cloud",
        href: "/ngc-cloud",
        description: "National Government Cloud related onboarding and offerings.",
        icon: ServerCog,
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
    description: "Circulars, SOPs, forms, and public reference documents.",
    items: [
      {
        label: "NICSI SOP",
        href: "/nicsi-sop",
        description: "Standard operating procedures and process guidance.",
        icon: Download,
      },
      {
        label: "Circular & Notices",
        href: "/circulars",
        description: "Official circulars, notices, and public updates.",
        icon: FileCheck2,
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
    label: "Opportunities",
    description: "Recruitment, internship, and capacity building opportunities.",
    items: [
      {
        label: "Career",
        href: "/career",
        description: "Current openings and recruitment notices.",
        icon: BriefcaseBusiness,
      },
      {
        label: "Internship",
        href: "/internship",
        description: "Internship programs for students and young professionals.",
        icon: UserCheck2,
      },
      {
        label: "Capacity Building Training",
        href: "/capacity-building-training",
        description: "Training initiatives for digital governance capability development.",
        icon: CalendarDays,
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

const fallbackAnnouncements = [
  { text: "Corrigendum issued for cloud infrastructure tender batch Q1-2026.", href: "/tenders" },
  { text: "Updated vendor document checklist published under circulars.", href: "/circulars" },
  { text: "Career opportunities open for project and security operations teams.", href: "/career" },
];

const utilityLinks = [
  { label: "Sitemap", href: "/about" },
  { label: "RTI", href: "/circulars" },
  { label: "CSR", href: "/csr" },
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [announcements, setAnnouncements] = useState(fallbackAnnouncements);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [announcementPaused, setAnnouncementPaused] = useState(false);
  const [openGroupIndex, setOpenGroupIndex] = useState<number | null>(null);
  const groupButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const groupItemRefs = useRef<Array<Array<HTMLAnchorElement | null>>>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let ignore = false;

    const loadAnnouncements = async () => {
      try {
        const response = await fetch("/api/announcements");
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { announcements?: Array<{ text: string; href: string }> };
        if (!ignore && data.announcements && data.announcements.length > 0) {
          setAnnouncements(data.announcements);
        }
      } catch {
        // Keep fallback content silently.
      }
    };

    loadAnnouncements();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (announcementPaused) {
      return;
    }

    if (!announcements.length) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [announcementPaused, announcements]);

  const goToPrevAnnouncement = () => {
    if (!announcements.length) {
      return;
    }
    setAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const goToNextAnnouncement = () => {
    if (!announcements.length) {
      return;
    }
    setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
  };

  const safeAnnouncementIndex = announcements.length > 0
    ? announcementIndex % announcements.length
    : 0;

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
          <Image src="/logos/digital-india.png" alt="Digital India" width={84} height={20} className="h-5 w-auto" />
          <Image
            src="/logos/swachh-bharat.png"
            alt="Swachh Bharat"
            width={84}
            height={20}
            className="h-5 w-auto brightness-0 invert"
          />
        </span>
        <div className="hidden items-center gap-4 md:flex">
          {utilityLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-white/90 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <span className="text-white/80">Secure ERP Access Portal</span>
        </div>
        <span className="md:hidden">ERP Portal</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-b bg-[#F4F7FB] px-4 py-2 text-sm md:px-6">
        <div className="flex min-w-0 items-center gap-2">
          <span className="rounded bg-[#003A8C] px-2 py-0.5 text-[11px] font-semibold tracking-wide text-white">
            NOTICE
          </span>
          {announcements.length > 0 && (
            <Link
              href={announcements[safeAnnouncementIndex]?.href ?? "/circulars"}
              className="truncate text-gray-700 transition hover:text-[#003A8C]"
            >
              {announcements[safeAnnouncementIndex]?.text}
            </Link>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={goToPrevAnnouncement}
            aria-label="Previous notice"
            className="rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={goToNextAnnouncement}
            aria-label="Next notice"
            className="rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100"
          >
            Next
          </button>
          <button
            type="button"
            onClick={() => setAnnouncementPaused((prev) => !prev)}
            aria-label={announcementPaused ? "Resume notice autoplay" : "Pause notice autoplay"}
            className="rounded border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-[#003A8C] hover:bg-gray-100"
          >
            {announcementPaused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-6 py-4 flex justify-between items-center border-b border-blue-100">

        <div className="flex items-center gap-4">
          <Image
            src="/logos/ashoka.png"
            alt="Ashoka"
            width={64}
            height={64}
            className="h-14 w-auto md:h-16"
          />
          <Image
            src="/logos/NICSI-logo.png"
            alt="NICSI"
            width={210}
            height={75}
            className="h-12 w-auto md:h-16"
          />
        </div>

        <nav className="hidden md:flex items-center gap-5 text-[13px] font-semibold uppercase tracking-wide text-gray-700">
          <NavLink href="/" ariaLabel="Home">
            <House size={16} />
          </NavLink>
          {(menuGroups as MegaMenuGroup[]).map((group, groupIndex) => (
            <MenuGroup
              key={group.label}
              groupIndex={groupIndex}
              totalGroups={menuGroups.length}
              label={group.label}
              description={group.description}
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
            className="bg-[#003A8C] text-white px-5 py-2 rounded-md hover:bg-[#0052CC] transition"
          >
            Login
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          <Link href="/" className="block font-medium" aria-label="Home">
            <House size={18} />
          </Link>
          {menuGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{group.label}</p>
              <div className="mt-1 space-y-1">
                {group.items.map((item) => (
                  <Link key={item.label} href={item.href} className="block text-sm text-gray-700">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/login" className="block font-medium text-[#003A8C]">Login</Link>
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
  totalGroups,
  label,
  description,
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
  totalGroups: number;
  label: string;
  description: string;
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
  const panelPositionClass =
    groupIndex >= totalGroups - 2
      ? "right-0"
      : groupIndex === 0
        ? "left-0"
        : "left-1/2 -translate-x-1/2";

  return (
    <div
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
      <div
        id={`mega-panel-${groupIndex}`}
        role="menu"
        aria-labelledby={`mega-trigger-${groupIndex}`}
        className={`absolute top-9 z-50 w-[min(46rem,calc(100vw-2rem))] rounded-xl border border-gray-200 bg-white p-4 shadow-2xl transition-all ${panelPositionClass} ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
          <div className="rounded-lg bg-[#F4F7FB] p-4">
            <p className="text-sm font-semibold text-[#003A8C]">{label}</p>
            <p className="mt-2 text-xs leading-5 text-gray-600">{description}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
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
                  className="rounded-lg border border-transparent p-3 transition hover:border-blue-100 hover:bg-blue-50/60"
                  onKeyDown={(event) => onItemKeyDown(itemIndex, event)}
                  onClick={onClose}
                >
                  <div className="flex items-start gap-3">
                    <span className="rounded-md bg-white p-2 text-[#003A8C] shadow-sm ring-1 ring-gray-200">
                      <Icon size={16} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-gray-800">{item.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-gray-600">{item.description}</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
