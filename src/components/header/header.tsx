import './header.scss';
import Github from '@components/shared/links/github/github';
import Linkedin from '@components/shared/links/linkedin/linkedin';
import ThemeButton from '@components/shared/theme/theme-button/theme-button';

function Header() {
  return (
    <div className="header">
      <ThemeButton />
      <div className="divider"></div>
      <div className="links">
        <Github />
        <Linkedin />
      </div>
    </div>
  );
}

export default Header;
