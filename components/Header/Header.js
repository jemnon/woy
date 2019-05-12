import React from 'react';
import PropTypes from 'prop-types';
import ActiveLink from './ActiveLink';
import Divider from './Divider';
import Logo from './Logo';
import MobileButton from './MobileButton';
import HEADER_HEIGHT from '../../utils/constants';

const links = [
  { id: 'blog', label: 'blog', url: '/blog' },
  { id: 'divider' },
  { id: 'about', label: 'about', url: '/about' },
  { id: 'divider' },
  { id: 'contact', label: 'contact', url: '/contact' },
];

const Header = ({ pathname }) => {
  const linkStyles = 'dib black ttu no-underline relative';
  return (
    <header
      className="header h3 ph3 flex justify-between items-center"
      style={{ height: HEADER_HEIGHT }}
    >
      <Logo />
      <nav>
        <ul className="pl0 ma0 list dn flex-l items-center tracked">
          {links.map((link, key) => (
            <li
              key={`${link.id}-${key}`}
              className="self-stretch flex items-center"
            >
              {link.label && link.url ? (
                <a
                  className={linkStyles}
                  href={link.url}
                  style={{ fontSize: '0.75rem', fontWeight: '700' }}
                >
                  <span>{link.label}</span>
                  {pathname === link.url ? <ActiveLink /> : null}
                </a>
              ) : null}
              {link.id === 'divider' ? <Divider /> : null}
            </li>
          ))}
          <li className="ml3">
            <a
              className="no-underline black inline-flex items-center f3 nl1 nr1"
              href="https://www.instagram.com/whisperofyum/?hl=en"
              rel="noopener noreferrer"
              style={{ marginTop: '0.125rem' }}
              target="_blank"
            >
              <i className="icon-instagram" />
            </a>
          </li>
        </ul>
        <MobileButton />
      </nav>
    </header>
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
