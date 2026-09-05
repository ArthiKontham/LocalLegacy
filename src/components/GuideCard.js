import PlaceImage from "./PlaceImage";
import { I } from "./icons";
import "./styles/GuideCard.css";

export default function GuideCard({ guide, onOpen }) {
  return (
    <div className="guide-card anim" onClick={() => onOpen(guide.id)}>
      <div className="guide-img"><PlaceImage entity={guide} /></div>
      <div className="guide-body">
        <div className="guide-name">{guide.name}</div>
        <div className="guide-meta"><span className="star">{I.star}</span> {guide.rating}({guide.reviews})</div>
        <div className="guide-note">{guide.note}</div>
      </div>
    </div>
  );
}
