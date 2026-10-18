import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="footer-lockup-link" href="#top" aria-label="PictureThese — back to top">
          <Image
            className="footer-lockup"
            src="/assets/images/logo-picturethese-lockup-v1.png"
            alt="PictureThese"
            width={2172}
            height={724}
            sizes="(min-width: 1024px) 52vw, 82vw"
          />
        </a>
        <div className="footer-aside">
          <p>Ideas, beautifully carried.</p>
          <nav className="footer-links" aria-label="Explore PictureThese">
            <Link href="/#services"><span>Services</span><span aria-hidden="true">↗</span></Link>
            <Link href="/#studio"><span>The Studio</span><span aria-hidden="true">↗</span></Link>
            <Link href="/sample"><span>Sample</span><span aria-hidden="true">↗</span></Link>
            <Link href="/#brief"><span>Start a brief</span><span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Content &amp; creative agency for founder-led brands.</p>
        <p>© 2026 PictureThese</p>
      </div>
    </footer>
  );
}
