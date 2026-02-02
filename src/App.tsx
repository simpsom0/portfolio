import Header from '@/components/header/header';
import Body from '@/components/body/body';
import './App.scss';
import ThemeProvider from '@/components/shared/theme/theme-provider';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Body />
    </ThemeProvider>
  );
}

export default App;
