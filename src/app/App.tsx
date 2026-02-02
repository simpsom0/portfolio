import './App.scss';
import ThemeProvider from '@/hooks/theme/theme-provider';
import LandingSection from '@/features/landing-section/landing-section';
import ThemeButton from '@/components/theme-button/theme-button';
import { GithubIcon } from '@/features/tech-stack/components/icons/etc/github';
import { LinkedinIcon } from '@/features/tech-stack/components/icons/etc/linkedin';
import TechStack from '@/features/tech-stack/tech-stack';
import IconActivityProvider from '@/hooks/icon-activity/icon-activity-provider';

function App() {
  return (
    <ThemeProvider>
      {/* header */}
      <div className="header-container">
        <ThemeButton />
        <div className="divider"></div>
        <div className="links">
          <a id="github" target="_blank" href="https://github.com/simpsom0">
            <GithubIcon />
          </a>
          <a
            id="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/simmichaeld"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>

      {/* body */}
      <div className="body-container">
        <LandingSection />
        <IconActivityProvider>
          <div className="experience-container">
            <TechStack />
          </div>
        </IconActivityProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
