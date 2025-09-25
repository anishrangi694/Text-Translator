function ResultBox({ translatedText }) {
  if (!translatedText) return null;

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-100">
      <h2 className="font-semibold mb-2">Translated Text:</h2>
      <p className="text-gray-900">{translatedText}</p>
    </div>
  );
}

export default ResultBox;
