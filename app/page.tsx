import Link from "next/link";
import { projects } from "../data/projects/project";
import Image from "next/image";

function statusLabel(status: string) {
  if (status === "completed") return "Completed";
  if (status === "ongoing") return "Ongoing";
  return "Upcoming";
}

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  const btnPrimary: React.CSSProperties = {
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid var(--brand-blue)",
    background: "var(--brand-blue)",
    color: "white",
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };

  const btnSecondary: React.CSSProperties = {
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid var(--brand-green)",
    background: "var(--brand-green)",
    color: "white",
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };

  const cardStyle: React.CSSProperties = {
    border: "1px solid var(--border)",
    background: "var(--card)",
    borderRadius: 16,
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
  };

  const pillStyle: React.CSSProperties = {
    fontSize: 12,
    padding: "4px 10px",
    borderRadius: 999,
    border: "1px solid var(--border)",
    color: "var(--text-muted)",
    background: "var(--card)",
    opacity: 0.95,
  };

  return (
    <main style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      {/* Hero Section */}
      <section
        style={{
          border: "1px solid var(--border)",
          background: "var(--card)",
          borderRadius: 16,
          padding: 24,
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Image
            src="/logo.png"
            alt="Kallanai Construction Logo"
            width={48}
            height={48}
            priority
          />

          <h1 style={{ fontSize: 34, margin: 0 }}>
            Kallanai Construction Pvt. Ltd.
          </h1>
        </div>

        <p style={{ color: "var(--text-muted)", marginTop: 10, lineHeight: 1.6 }}>
          We deliver residential and commercial construction projects with a
          focus on safety, craftsmanship, and reliable timelines.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
          <Link href="/projects" style={btnPrimary}>
            View Projects →
          </Link>

          <Link href="/quote" style={btnSecondary}>
            Get a Quote →
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontSize: 22, margin: 0 }}>Featured Projects</h2>

          <Link
            href="/projects"
            style={{
              textDecoration: "none",
              fontWeight: 700,
              color: "var(--brand-blue)",
            }}
          >
            See all →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginTop: 14,
          }}
        >
          {featured.map((p) => (
            <Link key={p.id} href={`/projects/${p.slug}`} style={cardStyle}>
              <div
                style={{
                  height: 170,
                  backgroundColor: "var(--bg)",
                  backgroundImage: `url(${p.coverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div style={{ padding: 14 }}>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 10,
                    alignItems: "center",
                  }}
                >
                  <span style={pillStyle}>{statusLabel(p.status)}</span>

                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    {p.location} • {p.year}
                  </span>
                </div>

                <h3 style={{ margin: "0 0 8px 0", fontSize: 16 }}>
                  {p.title}
                </h3>

                <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {p.summary}
                </p>

                <div style={{ marginTop: 12, fontWeight: 800, color: "var(--brand-blue)" }}>
                  View details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}