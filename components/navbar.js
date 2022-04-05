import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function navbar() {
  const router = useRouter();
  return (
    <>
      <div className="navContainer">
        <div className="logoContainer">
          <Link href="/#heroSection" passHref>
            <a className="logoLink">
              <img src="cangeo_inc.svg" alt="cangeo" />
            </a>
          </Link>
        </div>
        <nav className="navLinksContainer">
          <Link passHref href="/#heroSection">
            <a isactive={router.asPath == "/#heroSection" ? "active" : ""}>Home</a>
          </Link>
          <Link passHref href="/about">
            <a isactive={router.pathname == "/about" ? "active" : ""}>About</a>
          </Link>
          <Link passHref href="/pricing">
            <a isactive={router.pathname == "/pricing" ? "active" : ""}>
              Pricing
            </a>
          </Link>
          <Link passHref href="/#contact">
            <a isactive={router.asPath == "/#contact" ? "active" : ""}>
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
}
