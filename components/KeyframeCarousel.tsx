"use client";

import Image from "next/image";
import { useState } from "react";

type Shot = {
  scene: string;
  move: string;
  start: string;
  end: string;
};

/**
 * One scene of start/end keyframes at a time, with dot navigation.
 *
 * Stacking all four scenes made the left column run far longer than the
 * direction copy beside it, so the pairs rotate in place instead.
 */
export default function KeyframeCarousel({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <div className="keyframe-carousel">
      <article
        className="sample-video-shot"
        id="keyframe-panel"
        role="tabpanel"
        aria-labelledby={`keyframe-tab-${active}`}
        aria-live="polite"
        key={shot.scene}
      >
        <header>
          <span>SCENE {shot.scene}</span>
          <p>{shot.move}</p>
        </header>
        <div className="sample-video-shot__frames">
          {(["START", "END"] as const).map((position) => {
            const src = position === "START" ? shot.start : shot.end;
            return (
              <figure key={position}>
                <div className="sample-video-shot__image">
                  <Image
                    src={src}
                    alt={`Plainweather Scene ${shot.scene} ${position.toLowerCase()} keyframe`}
                    fill
                    sizes="(max-width: 760px) 42vw, 22vw"
                  />
                </div>
                <figcaption>{position}</figcaption>
              </figure>
            );
          })}
        </div>
      </article>

      <div className="keyframe-dots" role="tablist" aria-label="Video scenes">
        {shots.map((item, index) => (
          <button
            key={item.scene}
            type="button"
            role="tab"
            id={`keyframe-tab-${index}`}
            aria-selected={active === index}
            aria-controls="keyframe-panel"
            aria-label={`Scene ${item.scene} — ${item.move}`}
            className={active === index ? "is-active" : undefined}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}
