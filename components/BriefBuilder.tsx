"use client";

import { FormEvent, useMemo, useState } from "react";

const goals = ["Build a consistent presence", "Launch an offer", "Clarify our voice", "Repurpose existing material"];
const channels = ["Social", "Writing", "Short-form video", "Email"];

export default function BriefBuilder() {
  const [brand, setBrand] = useState("");
  const [goal, setGoal] = useState("");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "ready" | "copying" | "copied" | "error">("idle");

  const brief = useMemo(() => {
    if (!brand.trim() || !goal || selectedChannels.length === 0) return "";
    return [
      "PICTURETHESE — STARTER BRIEF",
      `Brand: ${brand.trim()}`,
      `Primary goal: ${goal}`,
      `Channels: ${selectedChannels.join(", ")}`,
      `Context: ${note.trim() || "To discuss together."}`,
      "",
      "We'd like to explore whether the monthly PictureThese Content Studio is the right fit.",
    ].join("\n");
  }, [brand, goal, selectedChannels, note]);

  function toggleChannel(channel: string) {
    setSelectedChannels((current) =>
      current.includes(channel)
        ? current.filter((item) => item !== channel)
        : [...current, channel],
    );
    setStatus("idle");
  }

  function createBrief(event: FormEvent) {
    event.preventDefault();
    setStatus(brief ? "ready" : "error");
  }

  async function copyBrief() {
    try {
      setStatus("copying");
      await navigator.clipboard.writeText(brief);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="brief-builder">
      <form onSubmit={createBrief} noValidate>
        <div className="field">
          <label htmlFor="brand">Your brand</label>
          <input
            id="brand"
            value={brand}
            onChange={(event) => { setBrand(event.target.value); setStatus("idle"); }}
            placeholder="Brand or company name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="goal">What needs to change?</label>
          <select
            id="goal"
            value={goal}
            onChange={(event) => { setGoal(event.target.value); setStatus("idle"); }}
            required
          >
            <option value="">Choose one</option>
            {goals.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        <fieldset className="field">
          <legend>Where should the idea travel?</legend>
          <div className="checks">
            {channels.map((channel) => (
              <label key={channel}>
                <input
                  type="checkbox"
                  checked={selectedChannels.includes(channel)}
                  onChange={() => toggleChannel(channel)}
                />
                <span>{channel}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor="context">Useful context <span>(optional)</span></label>
          <textarea
            id="context"
            value={note}
            onChange={(event) => { setNote(event.target.value); setStatus("idle"); }}
            placeholder="What do you already have? Where does content get stuck?"
          />
        </div>

        <button className="button button--rose" type="submit">Make my starter brief</button>
      </form>

      <div className="brief-output" aria-live="polite">
        {status === "idle" && (
          <div className="brief-empty">
            <span className="utility">YOUR NOTE / NOT YET MADE</span>
            <p>Add your brand, one goal, and at least one channel. We’ll turn it into a clean note you can copy.</p>
          </div>
        )}
        {status === "error" && (
          <div className="brief-error" role="alert">
            <span className="utility">NEEDS ONE MORE DETAIL</span>
            <p>Complete your brand, choose a goal, and select at least one channel. If copying was blocked, select the note and copy it manually.</p>
          </div>
        )}
        {(status === "ready" || status === "copying" || status === "copied") && (
          <>
            <pre>{brief}</pre>
            <button className="text-button" type="button" onClick={copyBrief} disabled={status === "copying"}>
              {status === "copied" ? "Copied to clipboard" : status === "copying" ? "Copying…" : "Copy this brief"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
