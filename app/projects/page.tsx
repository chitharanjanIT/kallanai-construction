import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects/project";

function statusLabel(status: string) {
  if (status === "completed") return "Completed";
  if (status === "ongoing") return "Ongoing";
  return "Upcoming";
}

export default function ProjectsPage() {
  return (
    <main style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Projects</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: 22 }}>
        Explore our completed, ongoing, and upcoming projects.
      </p>

      <div style={{ display: "grid", gap: 14 }}>
        {projects.map((p) => (
          <details key={p.id} style={detailsStyle}>
            <summary style={summaryStyle}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={titleStyle}>{p.title}</span>

                  <span style={pillStyle}>{statusLabel(p.status)}</span>

                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    {p.location} • {p.year}
                  </span>
                </div>

                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  Click to view details
                </span>
              </div>

              <span style={{ color: "var(--brand-blue)", fontWeight: 900 }}>+</span>
            </summary>

            <div style={contentWrapStyle}>
              <div style={imageWrapStyle}>
                <Image
                  src={p.coverImage}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 420px"
                />
              </div>

              <div>
                <p style={descStyle}>{p.summary}</p>

                <Link
                  href={`/projects/${p.slug}`}
                  style={{
                    display: "inline-flex",
                    textDecoration: "none",
                    fontWeight: 900,
                    color: "var(--brand-blue)",
                  }}
                >
                  View full project →
                </Link>
              </div>
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}

/* --- Styles --- */

const detailsStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  background: "var(--card)",
  borderRadius: 16,
  overflow: "hidden",
};

const summaryStyle: React.CSSProperties = {
  listStyle: "none",
  cursor: "pointer",
  padding: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 14,
};

const titleStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 900,
  color: "var(--text)",
};

const pillStyle: React.CSSProperties = {
  fontSize: 12,
  padding: "4px 10px",
  borderRadius: 999,
  border: "1px solid var(--border)",
  color: "var(--text-muted)",
  background: "var(--bg)",
  fontWeight: 700,
};

const contentWrapStyle: React.CSSProperties = {
  borderTop: "1px solid var(--border)",
  padding: 16,
  display: "grid",
  gridTemplateColumns: "420px 1fr",
  gap: 16,
};

const imageWrapStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: 220,
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid var(--border)",
  background: "var(--bg)",
};

const descStyle: React.CSSProperties = {
  margin: 0,
  lineHeight: 1.7,
  color: "var(--text-muted)",
  marginBottom: 12,
};