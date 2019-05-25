import React from 'react';
import PropTypes from 'prop-types';
import ActiveLink from './ActiveLink';
import Divider from './Divider';
import Logo from './Logo';
import MobileButton from './MobileButton';
import { HEADER_HEIGHT } from '../../utils/constants';

const links = [
  { id: 'blog', label: 'blog', url: '/' },
  { id: 'about', label: 'about', url: '/about' },
  { id: 'contact', label: 'contact', url: '/contact' },
];

const Header = ({ isEnabled, pathname }) => {
  const linkStyles =
    'inline-flex self-stretch items-center black ttu no-underline relative';
  return (
    <header
      className={`header ${
        isEnabled ? 'o-100' : 'o-0'
      } fixed top-0 left-0 bg-ss-cream w-100 z-5 h3 ph3 flex justify-between items-center bb b--black-10`}
      data-id="header"
      style={{
        transform: `translate3D(0, ${isEnabled ? '0' : '-100%'}, 0)`,
        height: HEADER_HEIGHT,
        transition: 'all .47s ease',
      }}
    >
      <div
        className="flex self-stretch items-center"
        style={{ width: '11.75rem' }}
      >
        <Logo />
      </div>
      <nav className="flex self-stretch items-center">
        <ul className="pl0 ma0 list dn flex-l items-center self-stretch tracked">
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
              {key !== links.length - 1 ? <Divider /> : null}
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
  isEnabled: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isEnabled: false,
};

export default Header;
