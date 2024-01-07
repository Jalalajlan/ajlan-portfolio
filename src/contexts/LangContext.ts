import { createContext } from "react";

export interface LangContextData {
  lang: string;
  changeLang: (newLang: string) => void;
}

export const LangContext = createContext<LangContextData | null>(null);
