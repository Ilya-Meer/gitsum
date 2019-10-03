import posTagger from 'wink-pos-tagger';

/**
 * 
 * @param {string} text Corpus that will be broken down into part of speech templates
 * @returns {array} Array of arrays - 
 * Top level entries correspond to each sentence in the corpus passed in.
 * Lower level entries are comprised of Penn Treebank annotations for every 
 * word in the sentence.
 * This is made possible with the 
 * {@link https://www.npmjs.com/package/wink-pos-tagger Wink Pos Tagger} package.
 */
const getPOSTemplatesFromText = text => {
  const tagger = posTagger();

  const sentences = text
    .split('.')
    .filter(sentence => !!sentence);

  const POStemplates = sentences.map(sentence => {
    const arrayOfTags = tagger.tagSentence(sentence);
    const template = arrayOfTags.map(tagObject => tagObject.pos);
    return template;
  })

  return POStemplates;
}

export default getPOSTemplatesFromText;