"use client";

import { useEffect, useMemo, useState } from "react";
import { Fragment } from "react";
import PageTitle from "../../components/layout/PageTitle";

type VendorRow = {
  id: string;
  vendor_address: string;
  agreement_empanelment: string;
  contact_email_id: string;
  contact_person_name: string;
  description: string;
  effective_from: string;
  empanelment_category: string;
  empanelment_no: string;
  empanelment_scope_type: string;
  valid_up_to: string;
  vendor_category: string;
  vendor_name: string;
};

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function normalizeText(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix: number[][] = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i += 1) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }
  return matrix[a.length][b.length];
}

function fuzzyTokenMatch(input: string, target: string): boolean {
  const a = normalizeText(input);
  const b = normalizeText(target);
  if (!a || !b) return false;
  if (a.includes(b) || b.includes(a)) return true;
  if (a.length <= 3 || b.length <= 3) return false;
  const maxDist = Math.max(a.length, b.length) >= 8 ? 2 : 1;
  return levenshtein(a, b) <= maxDist;
}

function getDynamicSuggestions(query: string, values: string[], max = 10): string[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const qTokens = tokenize(q);

  return values
    .map((value) => {
      const lowerValue = value.toLowerCase();
      const valueTokens = tokenize(lowerValue);
      let score = 0;

      if (lowerValue.includes(q)) {
        score += 8;
      }

      qTokens.forEach((token) => {
        if (lowerValue.includes(token)) score += 3;
        if (valueTokens.some((v) => v.startsWith(token) || token.startsWith(v))) score += 2;
        if (valueTokens.some((v) => fuzzyTokenMatch(token, v))) score += 2;
      });

      return { value, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.value.localeCompare(b.value))
    .slice(0, max)
    .map((item) => item.value);
}

const intentRules = [
  {
    keywords: [
      "react", "angular", "vue", "frontend", "backend", "fullstack", "website", "web", "portal", "ui", "ux",
      "developer", "development", "app dev", "application", "software", "programmer", "coding", "customization",
      "bug fix", "enhancement", "tester", "testing", "qa", "quality assurance", "test engineer", "uat", "sit",
      "mobile app", "android", "ios", "flutter", "node", "java", "dotnet", "php", "python",
    ],
    scopeHints: ["Application and Website Development"],
  },
  {
    keywords: [
      "security", "cyber", "cybersecurity", "audit", "vapt", "vulnerability", "penetration", "soc", "siem",
      "waf", "hardening", "secure network", "network security", "compliance", "risk", "cert-in", "pentest",
      "infosec", "information security", "suraksha", "security audit", "application audit",
    ],
    scopeHints: ["Cyber Security", "Application Security Audit", "Secured Network Environment", "CERT-In Empanelled UIDAI"],
  },
  {
    keywords: [
      "call center", "call centre", "contact center", "contact centre", "helpline", "support desk", "toll free",
      "customer support", "citizen support", "grievance call", "voice support", "inbound", "outbound",
    ],
    scopeHints: ["CALL CENTRE"],
  },
  {
    keywords: [
      "sms", "otp", "message", "messaging", "notification", "alerts", "bulk sms", "msg gateway", "whatsapp",
      "voice call alert", "transaction alert", "communication gateway",
    ],
    scopeHints: ["SMS Gateway", "Message Gateway Services"],
  },
  {
    keywords: ["email", "mail", "gov mail", "official mail", "secure email", "mail server", "nic mail"],
    scopeHints: ["Email services"],
  },
  {
    keywords: [
      "digitization", "digitisation", "scanning", "scan", "document", "archive", "record", "dms", "ocr",
      "metadata extraction", "file conversion", "paperless", "legacy records", "passport digitization",
    ],
    scopeHints: ["SCANNING AND DIGITIZATION", "Digitisation of Passport", "Feature Extraction of Data"],
  },
  {
    keywords: [
      "consultant", "consulting", "strategy", "advisory", "policy", "digital transformation", "roadmap",
      "governance consulting", "domain consultant", "technical consulting", "business consulting",
    ],
    scopeHints: ["Strategy Consulting for Digital India", "Technology Development and Sectoral Consultancy", "Consultancy for Digital India"],
  },
  {
    keywords: [
      "training", "capacity building", "workshop", "bootcamp", "knowledge transfer", "kt", "hands-on",
      "skill development", "orientation", "user training",
    ],
    scopeHints: ["Training Services"],
  },
  {
    keywords: [
      "office support", "eoffice", "e-office", "efile", "file management", "rollout support", "pmu",
      "project management", "deployment support", "field support", "manpower support", "onsite support",
      "office automation",
    ],
    scopeHints: ["NIC's eOffice Support", "OFFICE SUPPORT AND PROJECT MANAGEMENT SUPPORT & ROLLOUT SERVICES", "Facility Management Services"],
  },
  {
    keywords: [
      "video", "vc", "webcast", "conference", "live streaming", "townhall", "broadcast", "event stream",
      "virtual meeting", "hybrid event",
    ],
    scopeHints: ["Webcast and VC Services", "Webcasting of Polling and Counting"],
  },
  {
    keywords: [
      "event", "event management", "summit", "expo", "seminar", "conference management", "stall setup",
      "branding", "media planning", "creative support", "digital campaign",
    ],
    scopeHints: ["2024-NeGD", "Event Management", "Social Media Services 2021-03 CATEGORY 1", "Social Media Services 2021-03 CATEGORY 2"],
  },
  {
    keywords: [
      "social media", "twitter", "facebook", "instagram", "youtube", "campaign", "digital outreach",
      "content studio", "creative agency",
    ],
    scopeHints: ["Social Media Services 2021-03 CATEGORY 1", "Social Media Services 2021-03 CATEGORY 2"],
  },
  {
    keywords: [
      "network", "nkn", "pop", "bandwidth", "connectivity", "routing", "switching", "lan", "wan",
      "network infra", "leased line", "infra",
    ],
    scopeHints: ["NKN-Basic Infra", "NKN-PoP", "Secured Network Environment"],
  },
  {
    keywords: ["pki", "digital certificate", "certificate", "signing", "crypto", "smart card", "chip card", "token"],
    scopeHints: ["PKI Setup", "Smart Card-DL and RC"],
  },
  {
    keywords: ["hospital", "ehospital", "health", "medical workflow", "patient system"],
    scopeHints: ["eHospital Rollout"],
  },
  {
    keywords: ["library", "egranthalaya", "book system", "catalog", "library automation"],
    scopeHints: ["eGranthalaya Services"],
  },
  {
    keywords: ["passport", "epassport", "personalization", "immigration docs"],
    scopeHints: ["e-Personalization of Passport", "Digitisation of Passport"],
  },
  {
    keywords: ["tax", "account", "financial consultant", "accounts support", "billing consultant"],
    scopeHints: ["TAX CUM ACCOUNT CONSULTANT"],
  },
  {
    keywords: ["staff", "operator", "support person", "facility", "fms", "housekeeping it", "l1 support"],
    scopeHints: ["Facility Management Services"],
  },
  {
    keywords: ["satellite", "gis", "imagery", "remote sensing", "geo data"],
    scopeHints: ["Procurement of Satellite Data"],
  },
  {
    keywords: ["government professional", "egov expert", "domain expert", "project professional"],
    scopeHints: ["eGov Professionals"],
  },
] as const;

function getSuggestedScopeTypes(query: string, allScopeTypes: string[]): string[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const matchedHints = new Set<string>();

  intentRules.forEach((rule) => {
    const qTokens = tokenize(q);
    const matched = rule.keywords.some((keyword) => {
      if (q.includes(keyword)) return true;
      const keyTokens = tokenize(keyword);
      return keyTokens.some((keyToken) => qTokens.some((qToken) => fuzzyTokenMatch(qToken, keyToken)));
    });
    if (matched) {
      rule.scopeHints.forEach((hint) => matchedHints.add(hint.toLowerCase()));
    }
  });

  const ruleBasedMatches = allScopeTypes.filter((scope) => {
    const lowerScope = scope.toLowerCase();
    return Array.from(matchedHints).some((hint) => lowerScope.includes(hint));
  });

  const dynamicMatches = getDynamicSuggestions(q, allScopeTypes, 12);

  return Array.from(new Set([...ruleBasedMatches, ...dynamicMatches]));
}

export default function EmpanelledvendorsPage() {
  const [vendorRows, setVendorRows] = useState<VendorRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(100);
  const [loadingData, setLoadingData] = useState(true);
  const [dataError, setDataError] = useState("");
  const [vendorCategory, setVendorCategory] = useState("");
  const [empanelmentCategory, setEmpanelmentCategory] = useState("");
  const [agreementType, setAgreementType] = useState("");
  const [scopeType, setScopeType] = useState("");
  const [validity, setValidity] = useState<"all" | "active" | "expired" | "expiring">("all");
  const [smartMatch, setSmartMatch] = useState(true);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [openVendorId, setOpenVendorId] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<{
    vendorCategories: string[];
    empanelmentCategories: string[];
    agreementTypes: string[];
    scopeTypes: string[];
  }>({
    vendorCategories: [],
    empanelmentCategories: [],
    agreementTypes: [],
    scopeTypes: [],
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 300);
    return () => window.clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, vendorCategory, empanelmentCategory, agreementType, scopeType, validity]);

  useEffect(() => {
    const controller = new AbortController();

    const loadRows = async () => {
      setLoadingData(true);
      setDataError("");
      try {
        const useSmartDataset = smartMatch && Boolean(debouncedSearch);
        const params = new URLSearchParams();
        params.set("page", useSmartDataset ? "1" : String(page));
        params.set("limit", useSmartDataset ? "500" : String(limit));
        if (debouncedSearch && !useSmartDataset) params.set("q", debouncedSearch);
        if (vendorCategory) params.set("vendorCategory", vendorCategory);
        if (empanelmentCategory) params.set("empanelmentCategory", empanelmentCategory);
        if (agreementType) params.set("agreementType", agreementType);
        if (scopeType) params.set("scopeType", scopeType);
        if (validity) params.set("validity", validity);

        const response = await fetch(`/api/empanelled-vendors?${params.toString()}`, { signal: controller.signal });
        if (!response.ok) {
          setDataError("Unable to load vendor data.");
          return;
        }
        const payload = (await response.json()) as {
          rows?: VendorRow[];
          total?: number;
          filters?: {
            vendorCategories?: string[];
            empanelmentCategories?: string[];
            agreementTypes?: string[];
            scopeTypes?: string[];
          };
        };
        setVendorRows(payload.rows ?? []);
        setTotal(payload.total ?? 0);
        setFilterOptions({
          vendorCategories: payload.filters?.vendorCategories ?? [],
          empanelmentCategories: payload.filters?.empanelmentCategories ?? [],
          agreementTypes: payload.filters?.agreementTypes ?? [],
          scopeTypes: payload.filters?.scopeTypes ?? [],
        });
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setDataError("Unable to load vendor data.");
        }
      } finally {
        setLoadingData(false);
      }
    };

    loadRows();
    return () => controller.abort();
  }, [agreementType, debouncedSearch, empanelmentCategory, limit, page, scopeType, smartMatch, validity, vendorCategory]);

  const vendorCategories = useMemo(
    () => filterOptions.vendorCategories,
    [filterOptions.vendorCategories],
  );

  const empanelmentCategories = useMemo(
    () => filterOptions.empanelmentCategories,
    [filterOptions.empanelmentCategories],
  );
  const agreementTypes = useMemo(
    () => filterOptions.agreementTypes,
    [filterOptions.agreementTypes],
  );
  const scopeTypes = useMemo(
    () => filterOptions.scopeTypes,
    [filterOptions.scopeTypes],
  );

  const suggestedScopeTypes = useMemo(
    () => getSuggestedScopeTypes(search, scopeTypes),
    [scopeTypes, search],
  );
  const suggestedEmpanelmentCategories = useMemo(
    () => getDynamicSuggestions(search, empanelmentCategories, 10),
    [search, empanelmentCategories],
  );

  const filteredRows = useMemo(() => {
    const query = debouncedSearch.toLowerCase();
    const queryTokens = tokenize(query);
    const normalizedSelectedScope = normalizeText(scopeType);
    const normalizedSuggestedScopes = suggestedScopeTypes.map((item) => normalizeText(item));

    const getScore = (row: VendorRow) => {
      if (!query) return 1;
      if (!smartMatch) {
        const plainMatch =
          row.vendor_name.toLowerCase().includes(query) ||
          row.empanelment_no.toLowerCase().includes(query) ||
          row.contact_person_name.toLowerCase().includes(query) ||
          row.contact_email_id.toLowerCase().includes(query) ||
          row.vendor_address.toLowerCase().includes(query);
        return plainMatch ? 1 : 0;
      }

      const rowTokens = tokenize(
        `${row.vendor_name} ${row.description} ${row.empanelment_category} ${row.empanelment_scope_type} ${row.vendor_address}`,
      );
      let score = 0;
      queryTokens.forEach((token) => {
        if (row.vendor_name.toLowerCase().includes(token)) score += 6;
        if (row.empanelment_category.toLowerCase().includes(token)) score += 4;
        if (row.empanelment_scope_type.toLowerCase().includes(token)) score += 3;
        if (row.description.toLowerCase().includes(token)) score += 2;
        if (rowTokens.includes(token)) score += 1;
        if (rowTokens.some((rowToken) => fuzzyTokenMatch(token, rowToken))) score += 2;
      });
      const normalizedRowScope = normalizeText(row.empanelment_scope_type);
      if (
        normalizedSelectedScope &&
        (normalizedRowScope.includes(normalizedSelectedScope) || normalizedSelectedScope.includes(normalizedRowScope))
      ) {
        score += 10;
      }
      if (
        normalizedSuggestedScopes.some(
          (suggested) => normalizedRowScope.includes(suggested) || suggested.includes(normalizedRowScope),
        )
      ) {
        score += 8;
      }
      return score;
    };

    return vendorRows
      .filter((row) => getScore(row) > 0)
      .map((row) => ({
        row,
        score: getScore(row),
      }))
      .sort((a, b) => b.score - a.score || a.row.vendor_name.localeCompare(b.row.vendor_name))
      .map((item) => item.row);
  }, [debouncedSearch, scopeType, smartMatch, suggestedScopeTypes, vendorRows]);

  const relatedVendors = useMemo(() => {
    const baseRow = vendorRows.find((row) => row.id === openVendorId) ?? filteredRows[0];
    if (!baseRow) return [];

    const baseTokens = new Set(tokenize(`${baseRow.vendor_name} ${baseRow.description}`));
    return vendorRows
      .filter((row) => row.id !== baseRow.id)
      .map((row) => {
        let score = 0;
        if (row.vendor_category === baseRow.vendor_category) score += 3;
        if (row.empanelment_category === baseRow.empanelment_category) score += 4;
        if (row.empanelment_scope_type === baseRow.empanelment_scope_type) score += 2;
        const rowTokens = tokenize(`${row.vendor_name} ${row.description}`);
        rowTokens.forEach((token) => {
          if (baseTokens.has(token)) score += 1;
        });
        return { row, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map((item) => item.row);
  }, [filteredRows, openVendorId]);

  return (
    <main className="pb-12">
      <PageTitle title="Empanelled Vendors" />

      <section className="mx-auto max-w-7xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Empanelled Vendors</h2>
          <p className="mt-2 text-sm text-gray-600">
            Search and filter NICSI empanelled vendors by category and empanelment type.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <select
              value={vendorCategory}
              onChange={(event) => setVendorCategory(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select Vendor Category</option>
              {vendorCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={empanelmentCategory}
              onChange={(event) => setEmpanelmentCategory(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select Empanelment Category</option>
              {empanelmentCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={agreementType}
              onChange={(event) => setAgreementType(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select Agreement Type</option>
              {agreementTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
              value={scopeType}
              onChange={(event) => setScopeType(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select Scope Type</option>
              {scopeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search vendor / scope need (e.g. react developer, cyber audit)"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <select
              value={validity}
              onChange={(event) => setValidity(event.target.value as "all" | "active" | "expired" | "expiring")}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="all">All Validity</option>
              <option value="active">Active</option>
              <option value="expired">Expired</option>
              <option value="expiring">Expiring in 60 days</option>
            </select>
            <button
              type="button"
              onClick={() => {
                setVendorCategory("");
                setEmpanelmentCategory("");
                setAgreementType("");
                setScopeType("");
                setValidity("all");
                setSmartMatch(true);
                setSearch("");
                setOpenVendorId(null);
                setPage(1);
              }}
              className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-[#003A8C] hover:bg-blue-100"
            >
              Reset Filters
            </button>
          </div>
          {suggestedScopeTypes.length > 0 && (
            <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 p-3">
              <p className="text-xs font-semibold text-emerald-800">Smart Scope Suggestions</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {suggestedScopeTypes.map((suggestedScope) => (
                  <button
                    key={suggestedScope}
                    type="button"
                    onClick={() => {
                      setScopeType(suggestedScope);
                      setSearch("");
                      setDebouncedSearch("");
                      setPage(1);
                    }}
                    className="rounded-full border border-emerald-300 bg-white px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
                  >
                    {suggestedScope}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-emerald-700">
                Suggestion based on plain-language requirement intent.
              </p>
            </div>
          )}
          {suggestedEmpanelmentCategories.length > 0 && (
            <div className="mt-3 rounded-md border border-blue-200 bg-blue-50 p-3">
              <p className="text-xs font-semibold text-[#003A8C]">Suggested Empanelment Categories</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {suggestedEmpanelmentCategories.map((suggestedCategory) => (
                  <button
                    key={suggestedCategory}
                    type="button"
                    onClick={() => {
                      setEmpanelmentCategory(suggestedCategory);
                      setSearch("");
                      setDebouncedSearch("");
                      setPage(1);
                    }}
                    className="rounded-full border border-blue-300 bg-white px-3 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                  >
                    {suggestedCategory}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-[#2F4F87]">
                Data-driven matching from all available empanelment categories.
              </p>
            </div>
          )}
          <div className="mt-3 flex items-center justify-end">
            <label className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#003A8C]">
              <input
                type="checkbox"
                checked={smartMatch}
                onChange={(event) => setSmartMatch(event.target.checked)}
                className="h-4 w-4"
              />
              Smart Match Search
            </label>
          </div>

          <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="nic-table min-w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3">S.No.</th>
                  <th className="px-4 py-3">Vendor Name</th>
                  <th className="px-4 py-3">Vendor Category</th>
                  <th className="px-4 py-3">Empanelment Category</th>
                  <th className="px-4 py-3">Empanelment No.</th>
                  <th className="px-4 py-3">Effective From</th>
                  <th className="px-4 py-3">Valid Upto</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {loadingData ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-gray-500" colSpan={8}>
                      Loading vendor records...
                    </td>
                  </tr>
                ) : dataError ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-red-600" colSpan={8}>
                      {dataError}
                    </td>
                  </tr>
                ) : filteredRows.length === 0 ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-gray-500" colSpan={8}>
                      No vendor records found for selected filters.
                    </td>
                  </tr>
                ) : (
                  filteredRows.map((row, index) => (
                    <Fragment key={row.id}>
                      <tr key={row.id}>
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3 font-medium text-[#0F172A]">{row.vendor_name}</td>
                        <td className="px-4 py-3">{row.vendor_category}</td>
                        <td className="px-4 py-3">{row.empanelment_category}</td>
                        <td className="px-4 py-3">{row.empanelment_no}</td>
                        <td className="px-4 py-3">{row.effective_from}</td>
                        <td className="px-4 py-3">{row.valid_up_to}</td>
                        <td className="px-4 py-3">
                          <button
                            type="button"
                            onClick={() => setOpenVendorId((prev) => (prev === row.id ? null : row.id))}
                            className="rounded-md border border-blue-200 bg-white px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-50"
                          >
                            {openVendorId === row.id ? "Hide Details" : "View Details"}
                          </button>
                        </td>
                      </tr>
                      {openVendorId === row.id && (
                        <tr>
                          <td colSpan={8} className="bg-[#F8FBFF] px-4 py-3">
                            <div className="grid gap-2 text-xs text-gray-700 md:grid-cols-2">
                              <p>
                                <span className="font-semibold text-[#0F172A]">Contact Person:</span> {row.contact_person_name || "-"}
                              </p>
                              <p>
                                <span className="font-semibold text-[#0F172A]">Contact Email:</span> {row.contact_email_id || "-"}
                              </p>
                              <p className="md:col-span-2">
                                <span className="font-semibold text-[#0F172A]">Address:</span> {row.vendor_address || "-"}
                              </p>
                              <p className="md:col-span-2">
                                <span className="font-semibold text-[#0F172A]">Description:</span> {row.description || "-"}
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-600">Total records: {total}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={page <= 1}
                className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${
                  page <= 1 ? "cursor-not-allowed text-gray-400" : "border-blue-200 text-[#003A8C] hover:bg-blue-50"
                }`}
              >
                Prev
              </button>
              <span className="text-xs text-gray-600">Page {page}</span>
              <button
                type="button"
                onClick={() => setPage((prev) => (prev * limit < total ? prev + 1 : prev))}
                disabled={page * limit >= total}
                className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${
                  page * limit >= total ? "cursor-not-allowed text-gray-400" : "border-blue-200 text-[#003A8C] hover:bg-blue-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
            <h3 className="text-base font-semibold text-[#0F172A]">Related Vendors</h3>
            <p className="mt-1 text-xs text-gray-600">
              Recommendations based on matching category, scope and profile similarity.
            </p>
            {relatedVendors.length === 0 ? (
              <p className="mt-3 text-sm text-gray-500">Select a vendor to view related recommendations.</p>
            ) : (
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {relatedVendors.map((row) => (
                  <button
                    key={`related-${row.id}`}
                    type="button"
                    onClick={() => setOpenVendorId(row.id)}
                    className="rounded-md border border-blue-100 bg-white px-3 py-2 text-left text-sm hover:bg-blue-50"
                  >
                    <p className="font-semibold text-[#0F172A]">{row.vendor_name}</p>
                    <p className="text-xs text-gray-600">{row.empanelment_category} | {row.vendor_category}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
