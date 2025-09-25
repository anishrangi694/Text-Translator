import { useState } from "react";
import  useTranslator  from "../hooks/useTranslator";
import LanguageSelect from "./LanguageSelect";
import ResultBox from "./ResultBox";

function TranslatorForm() {
  const [inputText, setInputText] = useState("");
  const [lang, setLang] = useState("hi");
  const { translatedText, loading, translateText } = useTranslator();

  const handleTranslate = () => {
    translateText(inputText, lang);
  };

  return (
    <div className="text-container bg-white shadow-lg rounded-2xl p-6 h-[450px] w-[550px] ">
      <h1 className="text-2xl font-bold text-center mb-4">🌍 Text Translator</h1>

      <textarea
        className="w-full border rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="5"
        placeholder="Enter text in English..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <div className="flex items-center justify-between mt-5">
        <LanguageSelect lang={lang} setLang={setLang} />

        <button
          onClick={handleTranslate}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </div>

      <ResultBox translatedText={translatedText} />
    </div>
  );
}


export default TranslatorForm;
