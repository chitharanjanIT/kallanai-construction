export default function AboutPage() {
  return (
    <main style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>
        About Us
      </h1>

      <p style={{ color: "var(--text-muted)", marginBottom: 28 }}>
        Built on trust. Strengthened by experience. Designed for the future.
      </p>

      <section style={cardStyle}>
        <p style={paraStyle}>
          Kallanai Construction Pvt. Ltd. proudly operates from{" "}
          <strong>Tirunelveli</strong>, delivering reliable construction solutions
          that turn ideas into strong, lasting structures. What began as a passion
          for building has grown into a full-service construction company trusted
          for quality, precision, and commitment.
        </p>

        <p style={paraStyle}>
          From the very first sketch to the final handover, we believe every
          building tells a story — and we make sure it’s a story of strength,
          safety, and craftsmanship.
        </p>
      </section>

      <section style={cardStyle}>
        <h2 style={sectionTitle}>What We Do</h2>

        <ul style={listStyle}>
          <li>
            <strong>Designing</strong> functional and aesthetic spaces that match
            your vision
          </li>
          <li>
            <strong>Constructing</strong> residential, commercial, and industrial
            projects with quality materials and skilled workmanship
          </li>
          <li>
            <strong>Demolishing</strong> structures safely and responsibly to make
            way for new beginnings
          </li>
        </ul>

        <p style={paraStyle}>
          No matter the size or complexity, we approach every project with the
          same dedication and attention to detail.
        </p>
      </section>

      <section style={cardStyle}>
        <h2 style={sectionTitle}>Why Choose Us</h2>

        <ul style={listStyle}>
          <li>Strong local presence in Tirunelveli</li>
          <li>Experienced team with hands-on expertise</li>
          <li>Focus on safety, quality, and timely delivery</li>
          <li>Transparent communication at every stage</li>
          <li>Commitment to long-term durability, not shortcuts</li>
        </ul>
      </section>

      <section style={cardStyle}>
        <h2 style={sectionTitle}>Our Promise</h2>

        <p style={paraStyle}>
          We don’t just build structures — <strong>we build confidence</strong>.
          Confidence that your project is in safe hands. Confidence that timelines
          are respected. Confidence that quality is never compromised.
        </p>

        <p style={{ ...paraStyle, fontWeight: 700 }}>
          Contact us for anything that says <em>BUILD</em>.
        </p>

        <p style={paraStyle}>
          Whether it’s a new dream home, a commercial space, renovation, or
          demolition — Kallanai Construction is ready to build it right.
        </p>
      </section>
    </main>
  );
}

/* --- Styles --- */

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  background: "var(--card)",
  borderRadius: 16,
  padding: 22,
  marginBottom: 24,
};

const sectionTitle: React.CSSProperties = {
  fontSize: 22,
  marginBottom: 12,
};

const paraStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.7,
  color: "var(--text)",
  marginBottom: 14,
};

const listStyle: React.CSSProperties = {
  paddingLeft: 18,
  marginBottom: 16,
  lineHeight: 1.8,
};