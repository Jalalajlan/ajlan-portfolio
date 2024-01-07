import { LangContext, LangContextData } from "../contexts/LangContext";
import { useContext } from "react";

export const useLangContext = (): LangContextData => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("Lang context must be used within a context provider.");
  }
  return context;
};
