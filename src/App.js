import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import { useState } from 'react';
import i18next from 'i18next';

function App() {

  const [lang, setLang] = useState('en');

  const { t, i18n } = useTranslation();

  const handleLanguage = () => {
    if (lang === 'en')
    {
      setLang('de');
      i18n.changeLanguage('de')
    }
    else
    {
      setLang('en');
      i18n.changeLanguage('en')
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleLanguage}>Change Language</button>
        <button onClick={() => console.log(i18next.resolvedLanguage)}>Current Language</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
      </header>
    </div>
  );
}

export default App;
