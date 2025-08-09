"use client";
import Link from "next/link";

function SmoothLink({ href, children, ...props }) {
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // offset in pixels (space from top)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });

        // Update URL hash without jumping
        history.pushState(null, "", href);
      }
    }
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default SmoothLink;