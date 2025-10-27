import './header.scss';
import Github from '@components/shared/links/github/github';
import Linkedin from '@components/shared/links/linkedin/linkedin';

function Header() {
  return (
    <div className="links">
      <Github />
      <Linkedin />
    </div>
  );
}

export default Header;
