import { Corpus } from "tiny-tfidf";

/**
 * This module takes in a corpus and returns an array where
 * each entry is composed of a word and its frequency in
 * the corpus. 
 * @param {string} text The content of the corpus to parse.
 * @param {string} textName Name of corpus to parse.
 * This is made possible with the 
 * {@link https://www.npmjs.com/package/tiny-tfidf|tiny-tfidf} package.
 */
const getMostFrequentWords = (text, textName) => {
  const corpus = new Corpus([textName], [text]);
  const arrayOfFrequencies = corpus.getTopTermsForDocument(textName);
  return arrayOfFrequencies;
}

export default getMostFrequentWords;