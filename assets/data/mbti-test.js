export const MBTI_QUESTIONS = [
  {
    prompt: 'After a long, demanding week, how do you recharge your energy best?',
    options: [
      { text: 'Going out, socializing, or spending active time with a group of friends.', w: 'E' },
      { text: 'Spending quiet time alone or with one person in a comfortable setting.', w: 'I' }
    ]
  },
  {
    prompt: 'In group conversations or team meetings, you tend to:',
    options: [
      { text: 'Speak up early, process your thoughts out loud, and drive conversation.', w: 'E' },
      { text: 'Listen first, process internally, and share your thoughts once formed.', w: 'I' }
    ]
  },
  {
    prompt: 'Unexpected free time opens up on a Saturday afternoon. Your immediate impulse is to:',
    options: [
      { text: 'Reach out to friends or look for local events or activities to join.', w: 'E' },
      { text: 'Enjoy uninterrupted solo time for hobbies, reading, or relaxing.', w: 'I' }
    ]
  },
  {
    prompt: 'When learning a new subject or starting a project, you focus primarily on:',
    options: [
      { text: 'Concrete facts, realistic details, and step-by-step practical applications.', w: 'S' },
      { text: 'Overall concepts, underlying patterns, and future possibilities.', w: 'N' }
    ]
  },
  {
    prompt: 'Which type of discussion holds your attention longer?',
    options: [
      { text: 'Discussions grounded in current real-world experience and proven methods.', w: 'S' },
      { text: 'Speculative discussions about abstract ideas, theories, and visions.', w: 'N' }
    ]
  },
  {
    prompt: 'When making a difficult decision, your primary guide is:',
    options: [
      { text: 'Objective logic, data, principles, and cause-and-effect analysis.', w: 'T' },
      { text: 'Personal values, how it affects the people involved, and harmony.', w: 'F' }
    ]
  },
  {
    prompt: 'When reviewing someone else\u2019s work, your natural communication style is to:',
    options: [
      { text: 'Be direct, objective, and focus on fixing errors efficiently.', w: 'T' },
      { text: 'Be tactful, supportive, and focus on encouraging their effort first.', w: 'F' }
    ]
  },
  {
    prompt: 'How do you prefer to manage your daily tasks and schedule?',
    options: [
      { text: 'Having clear schedules, structured to-do lists, and set deadlines.', w: 'J' },
      { text: 'Keeping options open, staying flexible, and working in spontaneous bursts.', w: 'P' }
    ]
  },
  {
    prompt: 'When working toward a major deadline, you typically:',
    options: [
      { text: 'Finish well in advance to avoid last-minute rush or chaos.', w: 'J' },
      { text: 'Work best under pressure near the deadline, adjusting as you go.', w: 'P' }
    ]
  },
  {
    prompt: 'How do you feel about unexpected changes to your carefully made plans?',
    options: [
      { text: 'Annoyed or stressed; you prefer predictability and clear closure.', w: 'J' },
      { text: 'Adaptable or excited; you treat changes as fresh opportunities.', w: 'P' }
    ]
  }
];

// Keyed by 4-letter type code
export const MBTI_TYPES = {
  INTJ: { name: 'Architect', strengths: 'Strategic thinking, independence, high standards', weaknesses: 'Overly critical, dismissive of emotions', matches: 'ENFP, ENTP, INFJ' },
  INTP: { name: 'Logician', strengths: 'Analytical depth, abstract problem-solving', weaknesses: 'Overthinking, procrastinating on execution', matches: 'ENTJ, ENFJ, INTJ' },
  ENTJ: { name: 'Commander', strengths: 'Efficient leadership, goal execution', weaknesses: 'Impatient, perceived as blunt or domineering', matches: 'INTP, INFP, ENTP' },
  ENTP: { name: 'Debater', strengths: 'Innovation, intellectual agility, adaptability', weaknesses: 'Easily bored, argumentativeness', matches: 'INFJ, INTJ, ENFP' },
  INFJ: { name: 'Advocate', strengths: 'Insightful empathy, vision, strong values', weaknesses: 'Burnout-prone, overly perfectionistic', matches: 'ENFP, ENTP, INTJ' },
  INFP: { name: 'Mediator', strengths: 'Deep authenticity, idealism, creative empathy', weaknesses: 'Highly sensitive, practical struggle with routine', matches: 'ENFJ, ENTJ, ENFP' },
  ENFJ: { name: 'Protagonist', strengths: 'Inspiring leadership, high emotional intelligence', weaknesses: 'Overly selfless, sensitive to criticism', matches: 'INFP, ISFP, INFJ' },
  ENFP: { name: 'Campaigner', strengths: 'Enthusiastic creativity, warm communication', weaknesses: 'Unfocused, overcommitting without follow-through', matches: 'INFJ, INTJ, ENFJ' },
  ISTJ: { name: 'Inspector', strengths: 'Reliability, attention to detail, strong duty', weaknesses: 'Rigid adherence to rules, resistant to change', matches: 'ESFP, ESTP, ESTJ' },
  ISFJ: { name: 'Protector', strengths: 'Loyalty, practical support, thoroughness', weaknesses: 'Conflict-avoidant, reluctance to adapt quickly', matches: 'ESFP, ESTP, ESFJ' },
  ESTJ: { name: 'Executive', strengths: 'Organization, clear logistics, directness', weaknesses: 'Inflexible, intolerant of inefficiency', matches: 'ISFP, INFP, ISTJ' },
  ESFJ: { name: 'Consul', strengths: 'Community building, warmth, practical care', weaknesses: 'Need for social approval, boundary issues', matches: 'ISFP, INFP, ISFJ' },
  ISTP: { name: 'Virtuoso', strengths: 'Technical troubleshooting, crisis composure', weaknesses: 'Risk of detachment, easily bored by theory', matches: 'ESTJ, ESFJ, ENTP' },
  ISFP: { name: 'Adventurer', strengths: 'Artistic sense, adaptability, grounded presence', weaknesses: 'Avoiding planning, overly sensitive to criticism', matches: 'ENFJ, ESFJ, ESTJ' },
  ESTP: { name: 'Entrepreneur', strengths: 'Bold action, immediate problem-solving, charm', weaknesses: 'Impulsivity, ignoring long-term consequences', matches: 'ISFJ, ISTJ, ESFP' },
  ESFP: { name: 'Entertainer', strengths: 'Spontaneity, infectious enthusiasm, practical fun', weaknesses: 'Short attention span, avoiding difficult emotions', matches: 'ISFJ, ISTJ, ESTP' }
};

// Same 16 rows, shaped for the guide/grid table
export const MBTI_GUIDE = [
  { type: 'INTJ \u2014 Architect', strengths: 'Strategic thinking, independence, high standards', weaknesses: 'Overly critical, dismissive of emotions', matches: 'ENFP, ENTP, INFJ' },
  { type: 'INTP \u2014 Logician', strengths: 'Analytical depth, abstract problem-solving', weaknesses: 'Overthinking, procrastinating on execution', matches: 'ENTJ, ENFJ, INTJ' },
  { type: 'ENTJ \u2014 Commander', strengths: 'Efficient leadership, goal execution', weaknesses: 'Impatient, perceived as blunt or domineering', matches: 'INTP, INFP, ENTP' },
  { type: 'ENTP \u2014 Debater', strengths: 'Innovation, intellectual agility, adaptability', weaknesses: 'Easily bored, argumentativeness', matches: 'INFJ, INTJ, ENFP' },
  { type: 'INFJ \u2014 Advocate', strengths: 'Insightful empathy, vision, strong values', weaknesses: 'Burnout-prone, overly perfectionistic', matches: 'ENFP, ENTP, INTJ' },
  { type: 'INFP \u2014 Mediator', strengths: 'Deep authenticity, idealism, creative empathy', weaknesses: 'Highly sensitive, practical struggle with routine', matches: 'ENFJ, ENTJ, ENFP' },
  { type: 'ENFJ \u2014 Protagonist', strengths: 'Inspiring leadership, high emotional intelligence', weaknesses: 'Overly selfless, sensitive to criticism', matches: 'INFP, ISFP, INFJ' },
  { type: 'ENFP \u2014 Campaigner', strengths: 'Enthusiastic creativity, warm communication', weaknesses: 'Unfocused, overcommitting without follow-through', matches: 'INFJ, INTJ, ENFJ' },
  { type: 'ISTJ \u2014 Inspector', strengths: 'Reliability, attention to detail, strong duty', weaknesses: 'Rigid adherence to rules, resistant to change', matches: 'ESFP, ESTP, ESTJ' },
  { type: 'ISFJ \u2014 Protector', strengths: 'Loyalty, practical support, thoroughness', weaknesses: 'Conflict-avoidant, reluctance to adapt quickly', matches: 'ESFP, ESTP, ESFJ' },
  { type: 'ESTJ \u2014 Executive', strengths: 'Organization, clear logistics, directness', weaknesses: 'Inflexible, intolerant of inefficiency', matches: 'ISFP, INFP, ISTJ' },
  { type: 'ESFJ \u2014 Consul', strengths: 'Community building, warmth, practical care', weaknesses: 'Need for social approval, boundary issues', matches: 'ISFP, INFP, ISFJ' },
  { type: 'ISTP \u2014 Virtuoso', strengths: 'Technical troubleshooting, crisis composure', weaknesses: 'Risk of detachment, easily bored by theory', matches: 'ESTJ, ESFJ, ENTP' },
  { type: 'ISFP \u2014 Adventurer', strengths: 'Artistic sense, adaptability, grounded presence', weaknesses: 'Avoiding planning, overly sensitive to criticism', matches: 'ENFJ, ESFJ, ESTJ' },
  { type: 'ESTP \u2014 Entrepreneur', strengths: 'Bold action, immediate problem-solving, charm', weaknesses: 'Impulsivity, ignoring long-term consequences', matches: 'ISFJ, ISTJ, ESFP' },
  { type: 'ESFP \u2014 Entertainer', strengths: 'Spontaneity, infectious enthusiasm, practical fun', weaknesses: 'Short attention span, avoiding difficult emotions', matches: 'ISFJ, ISTJ, ESTP' }
];
