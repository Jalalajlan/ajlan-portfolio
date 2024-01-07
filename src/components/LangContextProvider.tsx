import { LangContext, LangContextData } from "../contexts/LangContext";
import { ReactNode, useState } from "react";

interface LangContextProviderProps {
  children: ReactNode;
}

const LangContextProvider: React.FC<LangContextProviderProps> = ({
  children,
}) => {
  const [lang, setLang] = useState<string>("en");

  const changeLang = (newLanguage: string) => {
    setLang(newLanguage);
  };

  const contextValues: LangContextData = {
    lang: lang,
    changeLang: changeLang,
  };

  return (
    <LangContext.Provider value={contextValues}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
