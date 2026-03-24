import './App.scss';
import ThemeProvider from '@/hooks/theme/theme-provider';
import LandingSection from '@/features/landing-section/landing-section';
import ThemeButton from '@/components/theme-button/theme-button';
import Experience from '@/features/experience-section/experience-section';
import { GithubIcon } from '@/types/icons/svgs/etc/github';
import { LinkedinIcon } from '@/types/icons/svgs/etc/linkedin';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [experienceClasses, setExperienceClasses] = useState([
    'faded-out',
    'experience-container',
  ]);
  const hasAddedFadeIn = useRef(false);

  useEffect(() => {
    if (hasAddedFadeIn.current) return;

    setTimeout(() => {
      setExperienceClasses(['experience-container', 'fade-in']);
      hasAddedFadeIn.current = true;
    }, 250);
  }, [experienceClasses, setExperienceClasses, hasAddedFadeIn]);

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
        <div className={experienceClasses.join(' ')}>
          <h2 className="title">Experience</h2>
          <div className="experience-body">
            <Experience />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
