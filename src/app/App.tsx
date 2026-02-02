import './App.scss';
import ThemeProvider from '@/hooks/theme/theme-provider';
import LandingSection from '@/features/landing-section/landing-section';
import ThemeButton from '@/components/theme-button/theme-button';
import Linkedin from '@/components/links/linkedin/linkedin';
import Github from '@/components/links/github/github';

function App() {
  return (
    <ThemeProvider>
      {/* header */}
      <div className="header-container">
        <ThemeButton />
        <div className="divider"></div>
        <div className="links">
          <Github />
          <Linkedin />
        </div>
      </div>

      {/* body */}
      <div className="body-container">
        <LandingSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
