import { useState } from "react";
import { useApp } from "../AppContext";
import { I } from "./icons";
import ExploringHeader from "./ExploringHeader";
import PlaceImage from "./PlaceImage";
import "./styles/Trip.css";

export default function Trip() {
  const { tripData, businessList } = useApp();
  const [view, setView] = useState("form");
  const [days, setDays] = useState("");
  const [money, setMoney] = useState("");

  const d = parseInt(days, 10) || 14;
  const fmt = (n) => n.toLocaleString("en-US");
  const valid = days.trim() !== "" && money.trim() !== "" && Number(days) > 0 && Number(money) > 0;

  if (view === "form") {
    return (
      <div className="screen trip">
        <ExploringHeader />
        <div className="trip-form">
          <h2 className="display trip-form-title">Enter Number of Travel Days and Estimated Trip Budget</h2>
          <div className="trip-form-inner">
            <div className="trip-label display">No of Days</div>
            <input className="trip-input" type="number" min="1" placeholder="Enter No of Days" value={days} onChange={(e) => setDays(e.target.value)} />
            <div className="trip-label display">Money</div>
            <input className="trip-input" type="number" min="0" placeholder="Enter Your Budget" value={money} onChange={(e) => setMoney(e.target.value)} />
          </div>
          <button className="trip-cta" onClick={() => setView("result")}>
            Click here to See personalized recommendations for your budget.
          </button>
        </div>
      </div>
    );
  }

  const order = ["eat", "stay", "do", "shop"];
  const CAT = { eat: "Eat", stay: "Stay", do: "Do", shop: "Shop" };
  const imgsFor = (key) => businessList.filter((b) => b.category === CAT[key]).slice(0, 2);
  const html = (key) => {
    const c = tripData[key];
    let h = c.html;
    if (key === "stay" && c.rates) {
      const [r1, r2, r3] = c.rates;
      h = h.replace("{d}", d).replace("{single}", fmt(r1 * d)).replace("{double}", fmt(r2 * d)).replace("{twobed}", fmt(r3 * d));
    }
    return h;
  };

  return (
    <div className="screen trip">
      <button className="trip-back" onClick={() => setView("form")}>{I.back}</button>
      <ExploringHeader />
      <div className="trip-result">
        <h1 className="display trip-result-title">Trip</h1>
        {!valid ? (
          <div className="trip-empty display">please go back and enter no of days and money</div>
        ) : (
          order.map((key) => {
            return (
              <div className="trip-card" key={key}>
                <div className="trip-imgs">
                  {imgsFor(key).map((e) => (
                    <div className="trip-img" key={e.id}><PlaceImage entity={e} enlargeable /></div>
                  ))}
                </div>
                <p className="trip-text display" dangerouslySetInnerHTML={{ __html: html(key) }} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
