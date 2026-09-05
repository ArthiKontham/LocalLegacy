import PlaceImage from "./PlaceImage";
import { I } from "./icons";
import "./styles/ListingCard.css";

export default function ListingCard({ item, onOpen, distanceLabel }) {
  const sub = distanceLabel || item.walk;
  return (
    <div className="listing anim" onClick={() => onOpen(item.id)}>
      <div className="listing-img"><PlaceImage entity={item} /></div>
      <div className="listing-body">
        <div className="listing-name">{item.name}</div>
        <div className="listing-meta">
          <span className="star">{I.star}</span> {item.rating}({item.reviews}) · {sub}{item.kind ? " · " + item.kind : ""}
        </div>
        <div className="listing-note">{item.note}</div>
      </div>
    </div>
  );
}
