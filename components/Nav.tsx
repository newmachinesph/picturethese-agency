"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  ["Services", "/#services"],
  ["The Studio", "/#studio"],
  ["Sample", "/sample"],
  ["Approach", "/#approach"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const followMobileLink = (href: string) => {
    if (!href.includes("#")) {
      window.scrollTo({ top: 0, left: 0 });
    }
    setOpen(false);
  };

  useEffect(() => {
    document.body.dataset.menu = open ? "open" : "closed";

    if (!open) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const focusable = menuPanelRef.current?.querySelectorAll<HTMLElement>("a[href]");
    const lastLink = focusable?.[focusable.length - 1];
    const focusFrame = window.requestAnimationFrame(() => menuButton?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuButton || !lastLink) {
        return;
      }

      if (event.shiftKey && document.activeElement === menuButton) {
        event.preventDefault();
        lastLink.focus();
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        menuButton.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      menuButton?.focus();
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  return (
    <>
      <header className="site-nav">
        <Link className="wordmark" href="/" aria-label="PictureThese home">
          <Image
            className="wordmark__lockup"
            src="/assets/images/logo-picturethese-lockup-v1.png"
            alt=""
            width={2172}
            height={724}
            priority
            sizes="176px"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
          <Link className="nav-action" href="/#brief">Start a conversation</Link>
        </nav>

        <button
          className="menu-button"
          type="button"
          ref={menuButtonRef}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="menu-button__icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          ref={menuPanelRef}
        >
          <div className="mobile-menu__inner">
            <p id="mobile-menu-title" className="mobile-menu__label">Explore PictureThese</p>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <Link
                  href={href}
                  key={href}
                  scroll={href.includes("#")}
                  onClick={() => followMobileLink(href)}
                >
                  {label}
                </Link>
              ))}
              <Link href="/#brief" onClick={() => followMobileLink("/#brief")}>Start a conversation</Link>
            </nav>
            <div className="mobile-menu__foot">
              <p>Ideas, beautifully carried.</p>
              <span>Content &amp; creative agency</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
