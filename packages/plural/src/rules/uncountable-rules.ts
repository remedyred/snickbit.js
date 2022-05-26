import {PluralRuleMatch} from '../pluralize'
import pluralRules from './plural-rules'
import singularRules from './singular-rules'

export const uncountables = [
	// Singular words with no plurals.
	'adulthood',
	'advice',
	'agenda',
	'aid',
	'aircraft',
	'alcohol',
	'ammo',
	'analytics',
	'anime',
	'athletics',
	'audio',
	'bison',
	'blood',
	'bream',
	'buffalo',
	'butter',
	'carp',
	'cash',
	'chassis',
	'chess',
	'clothing',
	'cod',
	'commerce',
	'cooperation',
	'corps',
	'debris',
	'diabetes',
	'digestion',
	'elk',
	'energy',
	'equipment',
	'excretion',
	'expertise',
	'firmware',
	'flounder',
	'fun',
	'gallows',
	'garbage',
	'graffiti',
	'hardware',
	'headquarters',
	'health',
	'herpes',
	'highjinks',
	'homework',
	'housework',
	'information',
	'jeans',
	'justice',
	'kudos',
	'labour',
	'literature',
	'machinery',
	'mackerel',
	'mail',
	'mews',
	'moose',
	'music',
	'mud',
	'manga',
	'news',
	'only',
	'personnel',
	'pike',
	'plankton',
	'pliers',
	'police',
	'pollution',
	'premises',
	'rain',
	'research',
	'rice',
	'salmon',
	'scissors',
	'series',
	'sewage',
	'shambles',
	'shrimp',
	'software',
	'staff',
	'swine',
	'tennis',
	'traffic',
	'transportation',
	'trout',
	'tuna',
	'wealth',
	'welfare',
	'whiting',
	'wildebeest',
	'wildlife',
	'you',
	/pok[eé]mon$/i,
	// Regexes.
	/[^aeiou]ese$/i, // "chinese", "japanese"
	/deer$/i, // "deer", "reindeer"
	/fish$/i, // "fish", "blowfish", "angelfish"
	/measles$/i,
	/o[iu]s$/i, // "carnivorous"
	/pox$/i, // "chickenpox", "smallpox"
	/sheep$/i
]

const uncountableRules: string[] = []

for (let uncountable of uncountables) {
	if (typeof uncountable === 'string') {
		uncountableRules.push(uncountable.toLowerCase())
		continue
	}

	pluralRules.push([sanitizeRule(uncountable), '$&'])
	singularRules.push([sanitizeRule(uncountable), '$&'])
}

function sanitizeRule(rule: PluralRuleMatch | string): RegExp {
	if (typeof rule === 'string') {
		return new RegExp(`^${rule}$`, 'i')
	}

	return rule
}

export default uncountableRules
