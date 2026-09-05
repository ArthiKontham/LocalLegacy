import doodle from "../assets/logo-illustration.png";

export function Wordmark({ size = 18 }) {
  return (
    <span className="row" style={{ gap: 10 }}>
      <img src={doodle} alt="" style={{ height: size + 44, width: "auto" }} />
      <span className="display" style={{ fontSize: size + 4 }}>Local Legacy</span>
    </span>
  );
}
export function TravelDoodle({ size = 165 }) {
  return <img src={doodle} alt="Local Legacy" style={{ width: size, height: "auto" }} />;
}
