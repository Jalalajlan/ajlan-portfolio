import LocalizedStrings from "react-localization";
import { useLangContext } from "./useLangContext";
import localization from "../localization";

const useTranslation = () => {
  const { lang } = useLangContext();
  let translation = new LocalizedStrings(localization);

  translation.setLanguage(lang);
  return translation;
};

export default useTranslation;
