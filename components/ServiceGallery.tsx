"use client";

import { useState } from "react";

const services = [
  {
    name: "Content strategy",
    short: "Decide what is worth repeating.",
    detail: "We decide what the brand can credibly own, what the audience needs next, and what to leave alone. The calendar comes after the point of view.",
    outputs: ["Editorial direction", "Recurring themes", "Monthly priorities"],
    format: "MAP",
  },
  {
    name: "Social creatives",
    short: "Recognizable, without looking stamped out.",
    detail: "We build a visual language with enough discipline to feel familiar and enough range to keep the feed from becoming a wall of templates.",
    outputs: ["Carousels", "Campaign systems", "Channel templates"],
    format: "FRAME",
  },
  {
    name: "Writing",
    short: "Edited closely. Never ghostwritten into beige.",
    detail: "We listen for your actual phrases, tensions, and convictions, then shape them into copy that feels considered rather than outsourced.",
    outputs: ["Founder articles", "Scripts and captions", "Campaign copy"],
    format: "VOICE",
  },
  {
    name: "Short-form video",
    short: "Cut around the thought, not the trend.",
    detail: "A quick opening, a clean argument, and captions that help rather than shout. We turn interviews and existing footage into short videos with a point.",
    outputs: ["Founder-led edits", "Interview cutdowns", "Useful captions"],
    format: "CUT",
  },
  {
    name: "Email marketing",
    short: "A reason to open, not another reminder.",
    detail: "We give each send a job: share useful thinking, add product context, or move the reader forward without borrowed urgency or filler.",
    outputs: ["Founder newsletters", "Welcome sequences", "Launch emails"],
    format: "SEND",
  },
];

export default function ServiceGallery() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <div className="service-gallery">
      <div className="service-index" role="tablist" aria-label="PictureThese capabilities">
        {services.map((item, index) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="service-panel"
            id={`service-${index}`}
            onClick={() => setActive(index)}
          >
            <span>
              <strong>{item.name}</strong>
              <small>{item.short}</small>
            </span>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      <div
        id="service-panel"
        className="service-panel"
        role="tabpanel"
        aria-labelledby={`service-${active}`}
        aria-live="polite"
        key={service.name}
      >
        <span className="utility">CAPABILITY / {service.format}</span>
        <p>{service.detail}</p>
        <div className="output-list">
          {service.outputs.map((output) => <span key={output}>{output}</span>)}
        </div>
        <div className="service-specimen" aria-hidden="true">
          <span className="specimen-kicker">PICTURE / THESE</span>
          <strong>{service.short}</strong>
          <div className="specimen-line" />
          <span className="specimen-format">{service.format}</span>
        </div>
      </div>
    </div>
  );
}
