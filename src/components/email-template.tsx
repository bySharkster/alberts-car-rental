interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  text: string;
}

const containerStyle: React.CSSProperties = {
  fontFamily: "Arial, sans-serif",
  background: "#f9f9f9",
  padding: "32px",
  borderRadius: "8px",
  maxWidth: "500px",
  margin: "0 auto",
  color: "#222",
};

const headingStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "16px",
};

const labelStyle: React.CSSProperties = {
  fontWeight: 600,
};

const infoStyle: React.CSSProperties = {
  marginBottom: "8px",
};

export default function EmailTemplate({
  firstName,
  lastName,
  phoneNumber,
  email,
  text,
}: EmailTemplateProps) {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Nuevo contacto recibido</h1>
      <div style={infoStyle}>
        <span style={labelStyle}>Nombre:</span> {firstName} {lastName}
      </div>
      <div style={infoStyle}>
        <span style={labelStyle}>Teléfono:</span> {phoneNumber}
      </div>
      <div style={infoStyle}>
        <span style={labelStyle}>Correo electrónico:</span> {email}
      </div>
      <div style={{ margin: "24px 0 8px 0", fontWeight: 600 }}>Mensaje:</div>
      <pre
        style={{
          background: "#fff",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          padding: "12px",
          fontFamily: "inherit",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontSize: "15px",
        }}
      >
        {text}
      </pre>
      <div style={{ marginTop: "32px", fontSize: "13px", color: "#888" }}>
        Este correo fue generado automáticamente desde el formulario de contacto
        de Albert&apos;s Car Rental.
      </div>
    </div>
  );
}
