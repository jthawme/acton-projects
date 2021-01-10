import React, { useCallback } from "react";

interface InternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const InternalLink: React.FC<InternalLinkProps> = ({ children, ...props }) => {
  const onLinkClick = useCallback((e) => {
    const getAnchor = (el, tries = 0) => {
      if (tries > 5) {
        return false;
      }

      return el.href ? el : getAnchor(el.parentElement, tries + 1);
    };

    const el = getAnchor(e.target);

    if (!e.metaKey && el) {
      e.preventDefault();
      const id = el.href.split("#").pop();

      if (id) {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <a onClick={onLinkClick} {...props}>
      {children}
    </a>
  );
};

export { InternalLink };
