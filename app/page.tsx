import Image from "next/image";
import Link from "next/link";
import BriefBuilder from "@/components/BriefBuilder";
import HeroFlight from "@/components/HeroFlight";
import Nav from "@/components/Nav";
import ServiceGallery from "@/components/ServiceGallery";
import SiteFooter from "@/components/SiteFooter";

const problems = [
  "A month of useful ideas is sitting in voice notes and half-finished docs.",
  "LinkedIn sounds like one company. Email sounds like another.",
  "Publishing stops whenever client work or product work gets busy.",
  "More output is easy to buy. Work that sounds unmistakably yours is not.",
];

const studioIncludes = [
  ["Direction", "A focused editorial plan built from current business priorities"],
  ["Making", "Writing, design, and short-form edits produced by one team"],
  ["Relationship", "A recurring email that gives the audience a reason to return"],
  ["Operations", "One workspace, consolidated feedback, and named approvals"],
  ["Learning", "A monthly read on what to repeat, retire, or take further"],
];

const process = [
  ["Discover", "We listen to the people closest to the work and mark the phrases worth keeping."],
  ["Shape", "We choose the argument, audience, and channel before anything enters production."],
  ["Carry", "We write, design, and edit with one person holding the voice across every piece."],
  ["Learn", "We look beyond reach alone and decide what to repeat, retire, or take further."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-stage">
          <div className="hero-copy reveal">
            <span className="eyebrow"><i /> Content &amp; creative agency</span>
            <h1>Ideas, beautifully carried.</h1>
            <p className="hero-lede">
              You know the subject. You say the sharp thing in meetings. We turn
              that thinking into social, video, articles, and email—without flattening the voice behind it.
            </p>
            <div className="hero-actions">
              <a className="button" href="#studio">See how the Studio works</a>
              <a className="text-link" href="#brief">Build a starter brief <span>↓</span></a>
            </div>
            <p className="tagline">A monthly content team that learns how your brand thinks.</p>
          </div>
          <HeroFlight />
          </div>
        </section>

        <section className="problem section" aria-labelledby="problem-title">
          <div className="section-marker section-marker--light">
            <span>THE PROBLEM</span><span>FOUNDER REALITY</span>
          </div>
          <div className="problem-grid">
            <div className="problem-title reveal">
              <span className="utility">THE REAL BOTTLENECK</span>
              <h2 id="problem-title">The thinking is there. The publishing rhythm is not.</h2>
              <p>Good material already lives in sales calls, founder interviews, customer questions, and unfinished notes. Turning it into clear work every week is the part that keeps slipping.</p>
            </div>
            <div className="problem-list">
              {problems.map((problem, index) => (
                <div className="problem-row reveal" key={problem} style={{ "--i": index } as React.CSSProperties}>
                  <span className="problem-mark" aria-hidden="true" />
                  <p>{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="services" aria-labelledby="services-title">
          <div className="section-marker section-marker--light">
            <span>SERVICES</span><span>ONE CONNECTED SYSTEM</span>
          </div>
          <div className="section-intro reveal">
            <span className="utility">STRATEGY / SOCIAL / WRITING / VIDEO / EMAIL</span>
            <h2 id="services-title">One point of view, made for every channel.</h2>
            <p>The same team stays close to the idea from angle to final edit. That is how a carousel, a founder video, and a newsletter end up sounding like the same brand.</p>
          </div>
          <figure className="section-plate section-plate--services reveal">
            <Image
              src="/assets/images/services-idea-system-v1.png"
              alt="A studio worktable showing one idea translated into several content formats"
              width={1536}
              height={1024}
              sizes="(min-width: 1200px) 1180px, 100vw"
            />
          </figure>
          <ServiceGallery />
        </section>

        <section className="studio section" id="studio" aria-labelledby="studio-title">
          <div className="section-marker section-marker--light">
            <span>THE CONTENT STUDIO</span><span>MONTHLY PARTNERSHIP</span>
          </div>
          <div className="studio-grid">
            <div className="studio-heading reveal">
              <span className="utility">THE PICTURETHESE CONTENT STUDIO</span>
              <h2 id="studio-title">A small content team that learns how you think.</h2>
              <p>We plan, write, design, edit, and organize the month in one working rhythm. You see what is being made, why it matters, and where your input is needed.</p>
              <a className="button" href="#brief">Build your starter brief</a>
            </div>
            <div className="studio-sheet reveal">
              <div className="studio-sheet__head">
                <Image
                  className="studio-bird"
                  src="/assets/images/logo-hummingbird-v1.png"
                  alt=""
                  width={1254}
                  height={1254}
                  sizes="72px"
                />
                <span className="utility">STUDIO SCOPE / MONTHLY</span>
              </div>
              {studioIncludes.map(([label, detail]) => (
                <div className="studio-line" key={label}>
                  <span>{label}</span>
                  <p>{detail}</p>
                </div>
              ))}
              <p className="studio-note">We shape the scope around what the brand needs and what your team can thoughtfully review. No post-count theatre.</p>
            </div>
          </div>
        </section>

        <section className="route section" aria-labelledby="route-title">
          <div className="section-marker section-marker--light">
            <span>REPURPOSING</span><span>ONE IDEA / FIVE FORMS</span>
          </div>
          <div className="route-copy reveal">
            <span className="utility">A SAMPLE JOURNEY</span>
            <h2 id="route-title">One useful conversation can carry a week.</h2>
            <p>We find the claim at the center, then remake it for each channel instead of pasting the same caption everywhere.</p>
          </div>
          <div className="route-track">
            {[
              ["SOURCE", "Founder conversation"],
              ["WRITE", "Point-of-view article"],
              ["FRAME", "Educational carousel"],
              ["CUT", "Three short videos"],
              ["SEND", "Founder newsletter"],
            ].map(([label, value], index) => (
              <div className="route-stop reveal" key={label} style={{ "--i": index } as React.CSSProperties}>
                <span className="route-dot" />
                <span className="utility">{label}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <div className="sample-note">
            <p>Illustrative workflow—not a client result.</p>
            <a className="text-link" href="/sample">See the full skincare sample <span>↗</span></a>
          </div>
        </section>

        <section className="approach section" id="approach" aria-labelledby="approach-title">
          <div className="section-marker section-marker--light">
            <span>PROCESS</span><span>CALM PROCESS / LIVELY WORK</span>
          </div>
          <div className="approach-head reveal">
            <span className="utility">HOW THE STUDIO MOVES</span>
            <h2 id="approach-title">No mystery between the idea and the publish button.</h2>
          </div>
          <figure className="section-plate section-plate--process reveal">
            <Image
              src="/assets/images/process-review-v1.png"
              alt="Hands calmly reviewing and arranging a sequence of creative frames"
              width={1536}
              height={1024}
              sizes="(min-width: 1200px) 1180px, 100vw"
            />
          </figure>
          <div className="process-list">
            {process.map(([name, detail], index) => (
              <article className="process-item reveal" key={name} style={{ "--i": index } as React.CSSProperties}>
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fit section" aria-labelledby="fit-title">
          <div className="section-marker section-marker--light">
            <span>FIT CHECK</span><span>THE RIGHT PARTNERSHIP</span>
          </div>
          <div className="fit-grid">
            <div className="fit-heading reveal">
              <span className="utility">THE STUDIO WORKS BEST WHEN</span>
              <h2 id="fit-title">You care how the work sounds, not only how often it ships.</h2>
            </div>
            <div className="fit-columns">
              <div className="fit-column reveal">
                <h3>A strong fit</h3>
                <p>Founder-led brands with an established offer, useful expertise, and people willing to share what they know.</p>
              </div>
              <div className="fit-column fit-column--quiet reveal">
                <h3>Probably not</h3>
                <p>Brands seeking bulk posts, guaranteed virality, or an always-on reactive social desk.</p>
              </div>
            </div>
            <div className="fit-sample-mark fit-sample-mark--top reveal" aria-hidden="true">
              <Image
                src="/assets/images/plainweather-logo-lockup-v1.webp"
                alt=""
                width={1987}
                height={330}
              />
            </div>
            <div className="fit-sample reveal">
              <div>
                <span className="utility">SAMPLE / PLAINWEATHER SKIN</span>
                <p>See one position carried across strategy, social, writing, short-form video, and email.</p>
              </div>
              <Link className="button button--paper" href="/sample">View the skincare sample</Link>
            </div>
          </div>
        </section>

        <section className="brief section" id="brief" aria-labelledby="brief-title">
          <div className="brief-heading reveal">
            <span className="utility">START WITH WHAT YOU KNOW</span>
            <h2 id="brief-title">What should your brand be known for?</h2>
            <p>Give us the brand, the change you need, and where the work should travel. The builder turns it into a note you can copy. Nothing is sent or stored.</p>
          </div>
          <BriefBuilder />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
