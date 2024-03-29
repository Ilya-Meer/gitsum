import getPOSTemplatesFromText from "./createTemplate";
import getMostFrequentWords from "./calculateWordFrequency";

const paragraph = `It was very late and everyone had left the cafe except an old man who sat in the shadow the leaves of the tree made against the electric light. In the day time the street was dusty, but at night the dew settled the dust and the old man liked to sit late because he was deaf and now at night it was quiet and he felt the difference. The two waiters inside the cafe knew that the old man was a little drunk, and while he was a good client they knew that if he became too drunk he would leave without paying, so they kept watch on him.`

console.log(getPOSTemplatesFromText(paragraph));
console.log(getMostFrequentWords(paragraph, "A Clean, Well-Lighted Place"));