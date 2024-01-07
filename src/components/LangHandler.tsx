import { useLangContext } from "../hooks/useLangContext";
import React from "react";

const LangHandler: React.FC = () => {
  const { lang, changeLang } = useLangContext();

  const langNames = {
    en: "EN",
    ja: "日本語",
  };

  const langList = Object.entries(langNames);

  const renderLang = (langCode: string, langName: string, isLast: boolean) => (
    <React.Fragment key={langCode}>
      {langCode == lang ? (
        <b onClick={() => changeLang(langCode)}>{langName}</b>
      ) : (
        <p onClick={() => changeLang(langCode)}>{langName}</p>
      )}
      {!isLast && <span>&nbsp;/&nbsp;</span>}
    </React.Fragment>
  );

  return (
    <div className="lang-section">
      {langList.map(([langCode, langName], index) =>
        renderLang(langCode, langName, index === langList.length - 1)
      )}
    </div>
  );
};

export default LangHandler;
