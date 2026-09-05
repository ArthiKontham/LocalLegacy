import { useParams, useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import { I } from "./icons";
import { Wordmark } from "./Brand";
import PlaceImage from "./PlaceImage";
import "./styles/Detail.css";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEntity, saved, toggleSave, fire } = useApp();
  const entity = getEntity(id);
  if (!entity) return null;
  const isSaved = !!saved[entity.id];
  const place = `${entity.name} ${entity.city || ""}`.trim();
  const gmaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
  const gsearch = (suffix, img) =>
    `https://www.google.com/search?${img ? "tbm=isch&" : ""}q=${encodeURIComponent(place + " " + suffix)}`;
  const open = (url) => window.open(url, "_blank", "noopener,noreferrer");

  const directions = { label: "Directions", run: () => open(gmaps) };
  const actions = entity.guide
    ? [{ label: "Message", run: () => fire("Messaging " + entity.name) }, { label: "Reviews", run: () => open(gsearch("reviews")) }]
    : entity.category === "Eat" ? [{ label: "See Menu Here", run: () => open(gsearch("menu", true)) }, directions]
    : entity.category === "Stay" ? [{ label: "See Price Here", run: () => open(gsearch("room price booking")) }, directions]
    : entity.category === "Do" ? (entity.ticket ? [{ label: "See Tickets Here", run: () => open(entity.ticketUrl || gsearch("tickets official")) }, directions] : [directions])
    : [directions];

  return (
    <div className="screen detail">
      <div className="detail-top">
        <button className="detail-back" onClick={() => navigate(-1)}>{I.back}</button>
        <div className="detail-brand"><Wordmark size={20} /></div>
      </div>
      <div className="detail-main">
        <div className="detail-img"><PlaceImage entity={entity} enlargeable /></div>
        <div className="detail-body">
          <div className="row between">
            <h1 className="detail-name">{entity.name}</h1>
            <button className="detail-save" onClick={() => toggleSave(entity.id)} style={{ color: isSaved ? "var(--brown-dk)" : "var(--ink)" }}>
              {isSaved ? I.bookmarkOn : I.bookmark(22)}
            </button>
          </div>
          <div className="detail-meta"><span className="star">{I.star}</span> {entity.rating}({entity.reviews}) · {entity.open}</div>
          <p className="detail-desc">{entity.detail || entity.note}</p>
          {entity.guide && (
            <div className="guide-additional-details" style={{ margin: "14px 0", padding: "12px 14px", background: "#f6f5f3", borderRadius: "10px", fontSize: "13.5px", color: "var(--ink-2)", lineHeight: "1.6" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span><strong>Specialization:</strong></span>
                <span>{entity.specialization}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span><strong>Languages:</strong></span>
                <span>{Array.isArray(entity.languages) ? entity.languages.join(", ") : entity.languages}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span><strong>Contact Info:</strong></span>
                <span>{entity.contact}</span>
              </div>
            </div>
          )}
          <div className={"row detail-actions" + (actions.length === 1 ? " single" : "")}>
            {actions.length === 1 ? (
              <button className="btn btn-peach detail-single" onClick={actions[0].run}>{actions[0].label}</button>
            ) : (
              <>
                <button className="btn btn-peach" onClick={actions[0].run}>{actions[0].label}</button>
                <button className="btn btn-peach" onClick={actions[1].run}>{actions[1].label}</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
