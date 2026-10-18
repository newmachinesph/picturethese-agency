import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KeyframeCarousel from "@/components/KeyframeCarousel";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Plainweather Skin — PictureThese sample",
  description: "A fictional PictureThese concept showing strategy, social creative, writing, short-form video, and email for one skincare brand.",
};

const serviceSummary = [
  ["Strategy", "Own routine relief, not miracle-skin language."],
  ["Social + paid", "Turn the position into organic posts and ads people understand at a glance."],
  ["Writing", "Explain sensitive-skin choices without sounding clinical or coy."],
  ["Video", "Show the order, texture, and thinking in under forty seconds."],
  ["Email", "Send a weekly note worth keeping because it lowers the noise."],
];

const pillars = [
  ["Less, but chosen", "A smaller routine is not a compromise when every step earns its place."],
  ["Name the trade-off", "Say what a formula does, what it does not do, and who may prefer something else."],
  ["Keep skin in real life", "Talk about weather, travel, late nights, shaving, and other ordinary sources of irritation."],
];

const sequence = [
  ["0:00–0:03", "The complete range on the bathroom shelf. On-screen: Your skin does not need another hobby."],
  ["0:04–0:12", "Three product close-ups. Voiceover names the job of each."],
  ["0:13–0:26", "Cleanser, serum, cream. Texture and finish, shown at an honest pace."],
  ["0:27–0:34", "Return to the full range. Three steady steps. Then get on with your morning."],
];

const videoKeyframes = [
  {
    scene: "A",
    move: "Slow push",
    start: "/assets/video/plainweather/scene-a-opening-shelf/start.png",
    end: "/assets/video/plainweather/scene-a-opening-shelf/end.png",
  },
  {
    scene: "B",
    move: "Product track",
    start: "/assets/video/plainweather/scene-b-product-track/start.png",
    end: "/assets/video/plainweather/scene-b-product-track/end.png",
  },
  {
    scene: "C",
    move: "Texture drift",
    start: "/assets/video/plainweather/scene-c-texture-drift/start.png",
    end: "/assets/video/plainweather/scene-c-texture-drift/end.png",
  },
  {
    scene: "D",
    move: "Final return",
    start: "/assets/video/plainweather/scene-d-final-return/start.png",
    end: "/assets/video/plainweather/scene-d-final-return/end.png",
  },
];

const videoExports = [
  {
    label: "34s master",
    src: "/assets/video/plainweather/plainweather-master.mp4",
    note: "The full film. Four scenes, hard cuts, copy on A, C, and D.",
    loop: false,
  },
  {
    label: "15s cutdown",
    src: "/assets/video/plainweather/plainweather-15s.mp4",
    note: "Scenes A, C, and D at native speed, for paid placements.",
    loop: false,
  },
  {
    label: "6s loop",
    src: "/assets/video/plainweather/plainweather-loop-6s.mp4",
    note: "Silent hero hold from Scene D, built to repeat.",
    loop: true,
  },
];

const copySamples = [
  {
    label: "ORGANIC CAPTION",
    title: "A routine can be complete without becoming a collection.",
    body: "Quiet Cleanse washes without the squeak. Holding Serum puts water back where the day took it. Weather Cream keeps it there. Three jobs. Three products. Nothing waiting in the wings.",
    close: "Save this for the next time a new step starts sounding essential.",
  },
  {
    label: "PAID PRIMARY TEXT",
    title: "Sensitive skin has enough to manage.",
    body: "Plainweather is a complete three-step routine for skin that prefers fewer variables: a gentle cleanser, a cushioning serum, and a cream that stays put.",
    close: "Meet the Daily Three.",
  },
  {
    label: "PRODUCT PAGE INTRO",
    title: "Weather Cream does one job well.",
    body: "A dense, low-fuss barrier cream for mornings when the room is warm, the air outside is not, and your skin notices first.",
    close: "50 ml / fragrance-free / made for daily use",
  },
];

const emailFlow = [
  ["WELCOME / 01", "The line stops at three", "Brand position + the role of each product"],
  ["FIELD NOTE / 06", "Your routine can change with the weather", "Useful observation + Weather Cream route"],
  ["POST-PURCHASE / 02", "Give the serum a damp surface", "One application adjustment, no cross-sell"],
];

type SampleImageProps = {
  src: string;
  alt: string;
  label: string;
  note: string;
  className?: string;
  priority?: boolean;
  sizes: string;
};

function SampleImage({ src, alt, label, note, className = "", priority = false, sizes }: SampleImageProps) {
  return (
    <figure className={`sample-media ${className}`.trim()}>
      <div className="sample-media__frame">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} />
      </div>
      <figcaption>
        <span>{label}</span>
        <p>{note}</p>
      </figcaption>
    </figure>
  );
}

export default function SamplePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main" className="sample-page">
        <section className="sample-hero" id="top" aria-labelledby="sample-title">
          <div className="sample-hero__copy reveal">
            <span className="sample-kicker">PICTURETHESE SAMPLE / FICTIONAL BRAND</span>
            <h1 id="sample-title" className="sample-brand-lockup">
              <span>Plainweather Skin</span>
              <Image
                src="/assets/images/plainweather-logo-lockup-v1.webp"
                alt=""
                width={1987}
                height={330}
                priority
              />
            </h1>
            <p className="sample-hero__line">Skin, without the second job.</p>
            <p className="sample-hero__intro">A content system for a founder-led barrier-care brand with three products, a skeptical customer, and no interest in twelve-step theatre.</p>
          </div>
          <div className="sample-hero__meta reveal">
            <span>Category</span><p>Sensitive-skin care</p>
            <span>Range</span><p>Quiet Cleanse, Holding Serum, Weather Cream</p>
            <span>Status</span><p>Fictional concept; no client or performance claims</p>
          </div>
          <SampleImage
            className="sample-media--hero reveal"
            src="/assets/images/plainweather-campaign-hero-v3.webp"
            alt="Branded Plainweather cleanser, serum, and cream on a grey limestone bathroom ledge in soft post-shower light"
            label="Campaign still / The Daily Three"
            note="One range, photographed in the place it has to earn its keep."
            priority
            sizes="(max-width: 1920px) 100vw, 1800px"
          />
          <div className="sample-material-strip reveal" aria-label="Plainweather creative direction">
            <div><span>Voice</span><p>Plain. Practical. Willing to stop.</p></div>
            <div><span>Materials</span><p>Soft-touch white, smoked glass, matte porcelain.</p></div>
            <div><span>Camera</span><p>Grey daylight, close detail, product only.</p></div>
            <div className="sample-palette" aria-label="Bone, mineral green, charcoal, and muted clay color palette">
              <i /><i /><i /><i />
            </div>
          </div>
          <nav className="sample-jump-links" aria-label="Sample deliverables">
            <span>DELIVERABLES</span>
            <a href="#strategy">Strategy</a>
            <a href="#social">Social</a>
            <a href="#ads">Ads</a>
            <a href="#copy">Copy</a>
            <a href="#video">Video</a>
            <a href="#email">Email</a>
          </nav>
        </section>

        <section className="sample-section sample-brief" aria-labelledby="sample-brief-title">
          <div className="sample-section__head reveal">
            <span className="sample-kicker">BRIEF</span>
            <h2 id="sample-brief-title">Make a quiet skincare brand impossible to confuse with a timid one.</h2>
          </div>
          <div className="sample-brief__body reveal">
            <p className="sample-lede">Plainweather makes a cleanser, serum, and cream for skin that gets overwhelmed easily. The work has to lower the temperature of the category without becoming vague, precious, or anti-science.</p>
            <div className="sample-tension">
              <div><span>Audience</span><p>Ingredient-aware adults who have tried too much and trust too little.</p></div>
              <div><span>Commercial job</span><p>Make a three-step routine feel like considered relief, not a starter bundle.</p></div>
              <div><span>Voice</span><p>Plainspoken, observant, calm enough to admit a trade-off.</p></div>
            </div>
          </div>
        </section>

        <section className="sample-section sample-system" aria-labelledby="system-title">
          <div className="sample-section__head reveal">
            <span className="sample-kicker">SYSTEM</span>
            <h2 id="system-title">Five services. One argument.</h2>
            <p>Every channel answers the same question: how can skincare take up less mental space and still feel trustworthy?</p>
          </div>
          <div className="sample-service-list">
            {serviceSummary.map(([name, detail]) => (
              <div className="sample-service-row reveal" key={name}>
                <h3>{name}</h3><p>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sample-section sample-strategy" id="strategy" aria-labelledby="strategy-title">
          <div className="sample-section__head reveal">
            <span className="sample-kicker">STRATEGY</span>
            <h2 id="strategy-title">Own the relief of a routine that has stopped expanding.</h2>
            <p>The strategy avoids “clean,” “glow,” and vague confidence language. It gives the brand a sharper territory: fewer decisions, clear formula roles, and honest expectations.</p>
          </div>
          <div className="sample-pillars">
            {pillars.map(([name, detail]) => (
              <article className="sample-pillar reveal" key={name}>
                <h3>{name}</h3><p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="sample-calendar reveal">
            <span className="sample-kicker">ONE EDITORIAL WEEK</span>
            <p><strong>Monday</strong> Brand note: why the line stops at three products.</p>
            <p><strong>Wednesday</strong> Carousel: what “barrier support” means on an ordinary Tuesday.</p>
            <p><strong>Friday</strong> Short video: the complete morning routine, in real time.</p>
            <p><strong>Sunday</strong> Email: a field note on changing routines when the weather changes.</p>
          </div>
        </section>

        <section className="sample-section sample-social" id="social" aria-labelledby="social-title">
          <div className="sample-section__head reveal">
            <span className="sample-kicker">SOCIAL POSTS</span>
            <h2 id="social-title">Four ready-to-publish graphics.</h2>
            <p>Four publishable artboards, each carrying the same restrained palette, exact product family, and refusal to overstate the case.</p>
          </div>
          <div className="sample-social-grid">
            <figure className="sample-post reveal">
              <div className="sample-post__canvas">
                <Image
                  src="/assets/images/plainweather-social-cover-v1.png"
                  alt="Plainweather carousel cover reading Your skin does not need another hobby"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <figcaption><span>Carousel cover</span><p>The position, stated before the product appears.</p></figcaption>
            </figure>

            <figure className="sample-post reveal">
              <div className="sample-post__canvas">
                <Image
                  src="/assets/images/plainweather-social-product-v1.png"
                  alt="Plainweather product post showing the complete branded routine and the line Three products. Three jobs"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <figcaption><span>Product post</span><p>The complete routine in one frame.</p></figcaption>
            </figure>

            <figure className="sample-post reveal">
              <div className="sample-post__canvas">
                <Image
                  src="/assets/images/plainweather-social-education-v1.png"
                  alt="Plainweather education post explaining Wash, Hold, and Seal as the three routine steps"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <figcaption><span>Education post</span><p>A complete routine, readable without the caption.</p></figcaption>
            </figure>

            <figure className="sample-post reveal">
              <div className="sample-post__canvas">
                <Image
                  src="/assets/images/plainweather-social-texture-v1.png"
                  alt="Plainweather texture post comparing the cleanser satin, serum slip, and cream cushion"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <figcaption><span>Texture post</span><p>Describe what a formula feels like before promising what it fixes.</p></figcaption>
            </figure>
          </div>
        </section>

        <section className="sample-section sample-paid" id="ads" aria-labelledby="paid-title">
          <div className="sample-section__head reveal">
            <span className="sample-kicker">PAID ADS</span>
            <h2 id="paid-title">The ad makes the same argument. It just gets there sooner.</h2>
            <p>One prospecting unit introduces the system. One consideration unit makes the formulas easy to compare. Neither invents urgency the brand would not use organically.</p>
          </div>
          <div className="sample-ad-grid">
            <figure className="sample-ad sample-ad--system reveal">
              <div className="sample-ad__canvas">
                <div className="sample-ad__image"><Image src="/assets/images/plainweather-product-portrait-v1.webp" alt="The branded Plainweather Daily Three" fill sizes="(max-width: 760px) 100vw, 58vw" /></div>
                <div className="sample-ad__copy">
                  <span>THE DAILY THREE</span>
                  <h3>Three steady steps. Then get on with your morning.</h3>
                  <b>Meet the routine <i>→</i></b>
                </div>
              </div>
              <figcaption><span>Prospecting / 4:5</span><p>Position first. Product system second. One clear action.</p></figcaption>
            </figure>

            <figure className="sample-ad sample-ad--texture reveal">
              <div className="sample-ad__canvas">
                <Image src="/assets/images/plainweather-texture-study-v3.webp" alt="Plainweather formula textures and branded package details" fill sizes="(max-width: 760px) 100vw, 42vw" />
                <div className="sample-ad__panel">
                  <span>FOR SKIN THAT PREFERS FEWER VARIABLES</span>
                  <h3>Wash.<br />Hold.<br />Seal.</h3>
                  <p>A complete barrier-care routine, without the expanding shelf.</p>
                  <b>See all three <i>→</i></b>
                </div>
              </div>
              <figcaption><span>Consideration / 1:1</span><p>Product roles do the persuasion; no discount required.</p></figcaption>
            </figure>
          </div>
          <div className="sample-ad-copy reveal">
            <div><span>PRIMARY TEXT</span><p>Sensitive skin has enough to manage. Meet three products with three clear jobs—and no fourth step waiting in the wings.</p></div>
            <div><span>HEADLINE</span><p>Skin, without the second job.</p></div>
            <div><span>CTA</span><p>Meet the Daily Three</p></div>
          </div>
        </section>

        <section className="sample-section sample-writing" id="copy" aria-labelledby="writing-title">
          <div className="sample-section__head reveal">
            <span className="sample-kicker">COPY</span>
            <h2 id="writing-title">One voice, written to fit the job.</h2>
            <p>The tone does not become louder when the format gets shorter. It becomes more exact.</p>
          </div>
          <div className="sample-writing-body">
            <article className="sample-article reveal">
              <span className="sample-kicker">BRAND NOTE</span>
              <h3>We stopped developing product four.</h3>
              <p>It was a good formula. That was not enough reason to ask you to add another bottle.</p>
              <p>The useful question was whether it did a job our cleanser, serum, and cream could not already do. After six months, the honest answer was no. So we stopped.</p>
              <p>Plainweather is not a promise that three products will solve every skin concern. It is a promise that each product must justify the space it takes—in your bathroom and in your head.</p>
              <Link className="text-link" href="/#brief">This is the voice we would carry <span>↗</span></Link>
            </article>
            <div className="sample-copy-suite">
              {copySamples.map((sample) => (
                <article className="sample-copy-sample reveal" key={sample.label}>
                  <span>{sample.label}</span>
                  <h3>{sample.title}</h3>
                  <p>{sample.body}</p>
                  <b>{sample.close}</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sample-section sample-video" id="video" aria-labelledby="video-title">
          <div className="sample-section__head reveal">
            <span className="sample-kicker">VIDEO</span>
            <h2 id="video-title">TikTok-ready direction, shot and cut.</h2>
            <p>Three finished exports, generated from the keyframe pairs below and assembled with the typography added in the edit.</p>
          </div>
          <div className="sample-video-players">
            {videoExports.map((clip) => (
              <figure className="sample-video-player reveal" key={clip.src}>
                <video
                  controls
                  playsInline
                  preload="none"
                  loop={clip.loop}
                  muted={clip.loop}
                  poster="/assets/video/plainweather/poster.jpg"
                >
                  <source src={clip.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <figcaption>
                  <span>{clip.label}</span>
                  <p>{clip.note}</p>
                  <a href={clip.src} download>Download <span>↓</span></a>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="sample-video-layout">
            <div className="sample-video-keyframes reveal" aria-label="Veo start and end keyframes">
              <KeyframeCarousel shots={videoKeyframes} />
            </div>
            <div className="sample-video-direction">
              <div className="sample-sequence">
                {sequence.map(([time, action]) => <div className="sample-sequence__row reveal" key={time}><span>{time}</span><p>{action}</p></div>)}
              </div>
              <div className="sample-video-spec reveal">
                <div><span>FORMAT</span><p>9:16 / 1080 × 1920 / 24 fps</p></div>
                <div><span>SOUND</span><p>Room tone, cap click, pump. No trend audio.</p></div>
                <div><span>EXPORTS</span><p>34s master, 15s cutdown, 6s loop</p></div>
                <a href="/assets/video/plainweather/video-brief.md" download>Video brief <span>↓</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="sample-section sample-email" id="email" aria-labelledby="email-title">
          <div className="sample-section__head reveal">
            <span className="sample-kicker">EMAIL</span>
            <h2 id="email-title">A useful note with a product at the edge of it.</h2>
            <p>The weekly email earns attention with one observation, one practical adjustment, and one quiet route to the product.</p>
          </div>
          <div className="sample-email-sheet reveal">
            <div className="sample-email-sheet__top">
              <div className="sample-email-brand">
                <Image src="/assets/images/plainweather-logo-lockup-v1.webp" alt="Plainweather" width={1987} height={330} />
                <span>FIELD NOTE</span>
              </div>
              <span>SUNDAY, 8:10 AM</span>
            </div>
            <p className="sample-email-subject">Subject: Your routine can change with the weather.</p>
            <p className="sample-email-preheader">Preheader: Change one variable before you replace the whole routine.</p>
            <div className="sample-email-image"><Image src="/assets/images/plainweather-campaign-hero-v3.webp" alt="The branded Plainweather Daily Three" fill sizes="(max-width: 760px) 100vw, 60vw" /></div>
            <h3>The bathroom was warm. The air outside was not.</h3>
            <p>Skin does not experience products in a vacuum. A cream that felt right in August may feel brief by November. Before you replace the whole routine, change one variable: use the same cream on slightly damp skin, then give it a week.</p>
            <p>If that still leaves your skin tight by lunch, the formula may simply be too light for the season. No failure. No purge. Just useful information.</p>
            <a href="#sample-cta">See the Weather Cream <span>→</span></a>
          </div>
          <div className="sample-email-flow">
            {emailFlow.map(([name, subject, job]) => (
              <article className="sample-email-flow__row reveal" key={name}>
                <span>{name}</span><h3>{subject}</h3><p>{job}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sample-section sample-close" id="sample-cta" aria-labelledby="sample-close-title">
          <figure className="sample-close__image reveal">
            <Image
              src="/assets/images/plainweather-packaging-detail-v1.webp"
              alt="Close view of Plainweather cleanser, serum, and cream showing the wordmark and logomark packaging system"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </figure>
          <div className="sample-section__head reveal">
            <span className="sample-kicker">WRAP</span>
            <h2 id="sample-close-title">The formats change. The judgment stays in one place.</h2>
            <p>Plainweather Skin is fictional. The strategy, campaign direction, copy, social system, film treatment, and email show how the PictureThese Content Studio carries one position across all five services.</p>
            <Link className="button" href="/#brief">Build your own starter brief</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
