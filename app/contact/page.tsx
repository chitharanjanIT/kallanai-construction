import Link from "next/link";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Contact Us</h1>

      <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
        Get in touch with Kallanai Construction Pvt. Ltd. for enquiries, site visits,
        or project discussions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        {/* Contact Details */}
        <div
          style={{
            border: "1px solid var(--border)",
            background: "var(--card)",
            borderRadius: 16,
            padding: 20,
          }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>
            Our Office
          </h2>

          <div style={{ marginBottom: 16 }}>
            <div style={labelStyle}>Address</div>
            <div style={valueStyle}>
              H12, RTO office 100ft road,
              <br />
              Thamirapathi Colony,
              <br />
              Thiyagaraja Nagar,
              <br />
              Tirunelveli, Tamil Nadu 627011,
              <br />
              India
            </div>
          </div>

          <div>
            <div style={labelStyle}>Phone</div>
            <div style={valueStyle}>
              <Link
                href="tel:+918111011711"
                style={{
                  textDecoration: "none",
                  color: "var(--brand-blue)",
                  fontWeight: 700,
                }}
              >
                +91 81110 11711
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          style={{
            border: "1px solid var(--border)",
            background: "var(--bg)",
            borderRadius: 16,
            padding: 20,
          }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>
            Need a Quote?
          </h2>

          <p style={{ color: "var(--text-muted)", marginBottom: 20 }}>
            Tell us about your project and we’ll get back to you shortly.
          </p>

          <Link
            href="/quote"
            style={{
              display: "inline-flex",
              padding: "12px 18px",
              borderRadius: 14,
              background: "var(--brand-blue)",
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  color: "var(--text-muted)",
  marginBottom: 4,
};

const valueStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.6,
};