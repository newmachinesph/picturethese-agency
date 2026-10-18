import Image from "next/image";

export default function HeroFlight() {
  return (
    <div className="idea-field" aria-label="An idea carried across content formats">
      <Image
        className="hero-generated-photo"
        src="/assets/images/hero-founder-studio-v1.png"
        alt="A founder arranging content ideas at a studio table"
        width={1122}
        height={1402}
        priority
        sizes="(min-width: 1024px) 52vw, 100vw"
      />
      <div className="hero-photo-veil" aria-hidden="true" />
      <div className="crop crop--tl" aria-hidden="true" />
      <div className="crop crop--tr" aria-hidden="true" />
      <div className="crop crop--bl" aria-hidden="true" />
      <div className="crop crop--br" aria-hidden="true" />
      <div className="focus-reticle" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <div className="shutter-flash" aria-hidden="true" />

      <div className="source-note">
        <span className="utility">RAW NOTE / 08:42 AM</span>
        <p>What if our best idea became the thread, not just one post?</p>
        <span className="source-note__rule" />
      </div>

      <svg className="flight-path" viewBox="0 0 620 570" aria-hidden="true">
        <path d="M110 410C180 500 205 270 320 324c94 44 98-120 190-107" />
      </svg>

      <div className="flying-bird" aria-hidden="true">
        <Image
          src="/assets/images/logo-hummingbird-v1.png"
          alt=""
          width={1254}
          height={1254}
          sizes="160px"
        />
        <span className="pollen" />
      </div>

      <div className="artifact artifact--social">
        <span className="utility">CAROUSEL / 01</span>
        <strong>One clear point.</strong>
        <i />
        <i />
      </div>
      <div className="artifact artifact--video">
        <span className="utility">SHORT / 00:28</span>
        <span className="play-mark" aria-hidden="true">▶</span>
        <small>Founder voice, intact.</small>
      </div>
      <div className="artifact artifact--email">
        <span className="utility">LETTER / THU</span>
        <strong>A thought worth opening</strong>
        <i />
        <i />
        <i />
      </div>

      <div className="botanical" aria-hidden="true">
        <svg viewBox="0 0 150 180" fill="none">
          <path d="M69 178c7-56 8-106 3-150M72 96c22-14 35-34 38-61M71 122c-22-12-36-30-42-54" />
          <path d="M106 40c12-17 29-20 36-16-3 16-15 27-34 30M32 72C15 61 4 64 1 70c7 14 20 20 37 14" />
          <circle cx="72" cy="24" r="15" />
          <circle cx="72" cy="24" r="3" fill="currentColor" />
        </svg>
      </div>

      <span className="frame-label utility">FOCUS / IDEA IN TRANSIT</span>
    </div>
  );
}
