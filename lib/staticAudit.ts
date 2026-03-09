const staticAuditFlag =
  process.env.NICSI_STATIC_AUDIT === "1" || process.env.NEXT_PUBLIC_STATIC_AUDIT === "1";
const normalizeBasePath = (value: string | undefined, fallback = "") => {
  const source = value ?? fallback;
  if (source === "/" || source === "") {
    return "";
  }

  return source.startsWith("/")
    ? source.replace(/\/+$/, "")
    : `/${source.replace(/\/+$/, "")}`;
};
const runtimeBasePath = staticAuditFlag
  ? normalizeBasePath(process.env.NEXT_PUBLIC_STATIC_AUDIT_BASE_PATH, "")
  : normalizeBasePath("/nicsi");

const hiddenExactRoutes = new Set<string>();

const hiddenPrefixes: string[] = [];

function normalizeHref(href: string): string {
  const [path] = href.split(/[?#]/, 1);
  return path || href;
}

export const isStaticAuditMode = staticAuditFlag;

export function withSiteBasePath(value: string): string {
  if (
    !value ||
    value.startsWith("#") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:") ||
    /^[a-z][a-z0-9+.-]*:\/\//i.test(value) ||
    !value.startsWith("/")
  ) {
    return value;
  }

  if (!runtimeBasePath) {
    return value;
  }

  if (value === runtimeBasePath || value.startsWith(`${runtimeBasePath}/`)) {
    return value;
  }

  return `${runtimeBasePath}${value}`;
}

export function isHiddenInStaticAudit(href: string): boolean {
  if (!staticAuditFlag) {
    return false;
  }

  const normalizedHref = normalizeHref(href);
  if (hiddenExactRoutes.has(normalizedHref)) {
    return true;
  }

  return hiddenPrefixes.some(
    (prefix) => normalizedHref === prefix || normalizedHref.startsWith(`${prefix}/`),
  );
}

export function filterLinksForStaticAudit<T extends { href: string }>(items: readonly T[]): T[] {
  if (!staticAuditFlag) {
    return [...items];
  }

  return items.filter((item) => !isHiddenInStaticAudit(item.href));
}
