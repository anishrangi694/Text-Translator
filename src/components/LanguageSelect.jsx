
function LanguageSelect({ lang, setLang }) {
  const languages = [
    { code: "hi", name: "Hindi" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "ja", name: "Japanese" },
  ];

  return (
    <select
      className="border rounded-lg p-2"
      value={lang}
      onChange={(e) => setLang(e.target.value)}
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>{l.name}</option>
      ))}
    </select>
  );
}

export default LanguageSelect;
