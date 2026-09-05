const S = (w = 20) => ({ width: w, height: w, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" });

export const I = {
  sun: (w) => <svg {...S(w || 22)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /></svg>,
  moon: (w) => <svg {...S(w || 22)}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>,
  chevDown: <svg {...S(16)}><path d="M6 9l6 6 6-6" /></svg>,
  chevRight: <svg {...S(18)}><path d="M9 6l6 6-6 6" /></svg>,
  search: (w) => <svg {...S(w || 18)}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.2-3.2" /></svg>,
  star: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9z" /></svg>,
  back: <svg {...S(20)}><path d="M19 12H6M11 6l-6 6 6 6" /></svg>,
  pin: (w) => <svg {...S(w || 16)}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>,
  person: (w) => <svg {...S(w || 20)}><circle cx="12" cy="8" r="3.6" /><path d="M5 20c0-3.8 3.2-5.8 7-5.8s7 2 7 5.8" /></svg>,
  lock: <svg {...S(20)}><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 7-2.6" /></svg>,
  mail: <svg {...S(20)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>,
  compass: <svg {...S(22)}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg>,
  bookmark: (w) => <svg {...S(w || 22)}><path d="M7 4h10v16l-5-3.4L7 20z" /></svg>,
  bookmarkOn: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10v16l-5-3.4L7 20z" /></svg>,
  tripPin: <svg {...S(22)}><circle cx="12" cy="12" r="9" /><path d="M3.2 12h17.6" /><path d="M12 3c2.7 2.6 2.7 15.4 0 18M12 3c-2.7 2.6-2.7 15.4 0 18" /></svg>,
  google: (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.8-6.8C35.6 2.4 30.2 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.9 6.1C12.2 13.2 17.6 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 3-2.2 5.5-4.7 7.2l7.3 5.7c4.3-3.9 6.8-9.7 6.8-17.4z" />
      <path fill="#FBBC05" d="M10.4 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-7.9-6.1C.9 16.5 0 20.1 0 24s.9 7.5 2.5 10.7l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2 1.4-4.7 2.3-8.6 2.3-6.4 0-11.8-3.7-13.6-8.9l-7.9 6.1C6.4 42.6 14.6 48 24 48z" />
    </svg>
  ),
  pencil: (w) => <svg {...S(w || 18)}><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
  check: (w) => <svg {...S(w || 20)}><path d="M20 6 9 17l-5-5" /></svg>,
  close: (w) => <svg {...S(w || 20)}><path d="M18 6 6 18M6 6l12 12" /></svg>,
};
