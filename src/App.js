import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {

  const MY_NAME = 'Paul';

  const { t, i18n } = useTranslation('translation');

  const handleLanguage = () => {
    if (i18next.resolvedLanguage === 'en')
    {
      i18n.changeLanguage('fr');
    }
    else
    {
      i18n.changeLanguage('en');
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleLanguage}>Change Language</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t("welcome.title")}</h1>
        <h3>{t("hello", { name: MY_NAME })}</h3>
        <p>{t("unread_msg", { count: 1 })}</p>
      </header>
    </div>
  );
}

export default App;
