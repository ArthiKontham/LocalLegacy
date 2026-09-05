import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const HUES = { Eat: 18, Stay: 205, Do: 262, Shop: 334, Guides: 158 };
function hueShift(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0xffff; return (h % 30) - 15; }
const picUrl = (slug) => `${process.env.PUBLIC_URL}/pictures/${slug}.png`;

const MOTIF = {
  Eat: (<><circle cx="200" cy="112" r="40" /><circle cx="200" cy="112" r="24" /><path d="M150 72v80" /><path d="M139 72v22h22V72" /><path d="M255 72v80" /><path d="M255 73c13 3 13 33 0 36" /></>),
  Stay: (<><path d="M116 150v-26a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12v26" /><path d="M104 150h192" /><path d="M116 124h168" /><rect x="128" y="98" width="46" height="16" rx="6" /><path d="M120 150v16M280 150v16" /></>),
  Do: (<><rect x="138" y="84" width="124" height="74" rx="12" /><rect x="170" y="72" width="34" height="16" rx="4" /><circle cx="200" cy="122" r="24" /><circle cx="200" cy="122" r="11" /></>),
  Shop: (<><path d="M150 100h100l9 64a9 9 0 0 1-9 10H150a9 9 0 0 1-9-10z" /><path d="M173 100v-7a27 27 0 0 1 54 0v7" /></>),
  Guides: (<><circle cx="200" cy="96" r="24" /><path d="M158 162a42 42 0 0 1 84 0" /></>),
};

export default function PlaceImage({ entity, alt, enlargeable }) {
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(false);
  const id = entity && (entity.id || entity.name);
  useEffect(() => { setFailed(false); }, [id]);

  const src = entity ? (entity.image || (entity.pic && !failed ? picUrl(entity.pic) : null)) : null;
  const canZoom = enlargeable && src;
  const openZoom = canZoom ? (e) => { e.stopPropagation(); setZoom(true); } : undefined;

  const overlay = zoom && createPortal(
    <div className="lightbox" onClick={() => setZoom(false)}>
      <img src={src} alt={alt || (entity && entity.name) || ""} />
    </div>,
    document.body
  );

  if (entity && entity.image && !failed)
    return (<>
      <img className="ph-fill" src={entity.image} alt={alt || entity.name} onError={() => setFailed(true)} onClick={openZoom} style={canZoom ? { cursor: "zoom-in" } : undefined} />
      {overlay}
    </>);
  if (entity && entity.pic && !failed)
    return (<>
      <img className="ph-fill" src={picUrl(entity.pic)} alt={alt || entity.name} onError={() => setFailed(true)} onClick={openZoom} style={canZoom ? { cursor: "zoom-in" } : undefined} />
      {overlay}
    </>);

  const cat = (entity && entity.category) || "Do";
  const seed = (entity && (entity.id || entity.name)) || "x";
  const base = HUES[cat] != null ? HUES[cat] : 28;
  const h = (((base + hueShift(seed)) % 360) + 360) % 360;
  const gid = "pg-" + String(seed).replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg className="ph-fill" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt || (entity && entity.name) || ""}>
      <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={`hsl(${h} 58% 64%)`} /><stop offset="1" stopColor={`hsl(${(h + 26) % 360} 55% 45%)`} /></linearGradient></defs>
      <rect width="400" height="240" fill={`url(#${gid})`} />
      <g stroke="#ffffff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">{MOTIF[cat] || MOTIF.Do}</g>
    </svg>
  );
}
