import { useState } from "react";
import axios from "axios";

const API_HOST = "text-translator5.p.rapidapi.com";
const API_URL = `https://${API_HOST}/translate`;

function useTranslator() {
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const translateText = async (text, targetLang) => {
    if (!text.trim()) return;
    setLoading(true);

    try {
      const response = await axios.get(API_URL, {
        params: {
          text: text,
          target_lang: targetLang,
        },
        headers: {
          "x-rapidapi-key": "2d5f72d557msh363a306b5fdf7f1p17ed1cjsnabea13876e12",//key which i fetch 
          "x-rapidapi-host": API_HOST,
        },
      });

      const translated = response.data?.translation;
      setTranslatedText(translated || "Could not find translation");
    } catch (error) {
      console.error("Translation error:", error.response?.data || error.message);
      setTranslatedText("Translation failed");
    } finally {
      setLoading(false);
    }
  };

  return { 
    translatedText, 
    loading, 
    translateText 
  };
}

export default useTranslator;


