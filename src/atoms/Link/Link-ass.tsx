import React, { ReactNode, FC } from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps {
  activeClassName?: string;
  className?: string;
  children: ReactNode;
  'data-id'?: string;
  onClick?: () => void;
  partiallyActive?: boolean;
  target?: string;
  to: string;
}

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link: FC<LinkProps> = ({
  children,
  className,
  to,
  activeClassName,
  'data-id': dataId = 'link',
  onClick,
  partiallyActive,
  target,
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        activeClassName={activeClassName}
        className={className}
        data-id={dataId}
        onClick={onClick}
        partiallyActive={partiallyActive}
        to={to}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a
      className={className}
      href={to}
      data-id={dataId}
      onClick={onClick}
      target={target || ''}
    >
      {children}
    </a>
  );
};

export default Link;
