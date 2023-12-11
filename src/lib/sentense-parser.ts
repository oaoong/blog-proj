function extractAndCombineFirstSentences(text: string) {
  const regex = /(^|\n)(#){1,3} [^\n]+/g
  let match
  let combinedSentences = ''

  while ((match = regex.exec(text)) !== null) {
    let endOfSentence = text.indexOf('.', match.index)
    if (endOfSentence !== -1) {
      combinedSentences += text.substring(match.index, endOfSentence + 1) + ' '
    }
  }

  return combinedSentences.replace(/(^|\n)(#){1,3} /g, '')
}

export { extractAndCombineFirstSentences }
