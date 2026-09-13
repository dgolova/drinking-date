var LIKERT_OPTIONS = [
  { text: 'Strongly Disagree', value: 1 },
  { text: 'Disagree', value: 2 },
  { text: 'Neutral', value: 3 },
  { text: 'Agree', value: 4 },
  { text: 'Strongly Agree', value: 5 }
];

export const OCEAN_QUESTIONS = [
  { trait: 'O', reverse: false, prompt: 'I am fascinated by abstract ideas, artistic expression, and complex theories.', options: LIKERT_OPTIONS },
  { trait: 'O', reverse: true, prompt: 'I prefer keeping my routine traditional and predictable rather than exploring novel experiences.', options: LIKERT_OPTIONS },
  { trait: 'O', reverse: false, prompt: 'I have a vivid imagination and enjoy brainstorming creative possibilities.', options: LIKERT_OPTIONS },

  { trait: 'C', reverse: false, prompt: 'I keep my workspace organized, plan my tasks carefully, and meet deadlines early.', options: LIKERT_OPTIONS },
  { trait: 'C', reverse: true, prompt: 'I tend to act spontaneously without creating detailed plans or to-do lists.', options: LIKERT_OPTIONS },
  { trait: 'C', reverse: false, prompt: 'I take my responsibilities seriously and complete tasks thoroughly.', options: LIKERT_OPTIONS },

  { trait: 'E', reverse: false, prompt: 'I feel energized and enthusiastic when interacting in large groups of people.', options: LIKERT_OPTIONS },
  { trait: 'E', reverse: true, prompt: 'I prefer to remain quiet and keep to myself in social settings.', options: LIKERT_OPTIONS },
  { trait: 'E', reverse: false, prompt: 'I easily initiate conversations with new people and enjoy being active.', options: LIKERT_OPTIONS },

  { trait: 'A', reverse: false, prompt: 'I am deeply empathetic toward others and go out of my way to help them.', options: LIKERT_OPTIONS },
  { trait: 'A', reverse: true, prompt: 'I tend to be skeptical of people\u2019s intentions and challenge their points of view directly.', options: LIKERT_OPTIONS },
  { trait: 'A', reverse: false, prompt: 'I prioritize cooperation, harmony, and kindness in my daily interactions.', options: LIKERT_OPTIONS },

  { trait: 'N', reverse: false, prompt: 'I frequently worry about potential problems and feel stressed easily.', options: LIKERT_OPTIONS },
  { trait: 'N', reverse: true, prompt: 'I remain calm, emotionally stable, and relaxed even in high-pressure situations.', options: LIKERT_OPTIONS },
  { trait: 'N', reverse: false, prompt: 'My mood changes quickly, and minor setbacks affect my emotional state.', options: LIKERT_OPTIONS }
];

// Keyed by trait letter, in standard O-C-E-A-N order
export const OCEAN_INFO = {
  O: { name: 'Openness to Experience', focus: 'Intellectual curiosity, creativity, and a preference for novelty', highDesc: 'Imaginative, adventurous, curious, and drawn to abstract ideas.', lowDesc: 'Practical, conventional, grounded, and comfortable with routine.' },
  C: { name: 'Conscientiousness', focus: 'Self-discipline, organization, and goal-directed behavior', highDesc: 'Organized, dutiful, thorough, disciplined, and reliable.', lowDesc: 'Spontaneous, flexible, and more relaxed about details and structure.' },
  E: { name: 'Extraversion', focus: 'Social energy, assertiveness, and positive emotionality', highDesc: 'Outgoing, energetic, talkative, assertive, and socially driven.', lowDesc: 'Reserved, reflective, quiet, and recharges through solitude.' },
  A: { name: 'Agreeableness', focus: 'Interpersonal harmony, empathy, and cooperation', highDesc: 'Compassionate, trusting, helpful, empathetic, and polite.', lowDesc: 'Critical, competitive, skeptical, and direct.' },
  N: { name: 'Neuroticism', focus: 'Emotional reactivity and vulnerability to stress', highDesc: 'Anxious, moody, self-conscious, and sensitive to stress.', lowDesc: 'Emotionally stable, calm under pressure, resilient, and relaxed.' }
};

// Same 5 traits, shaped for the guide/grid table
export const OCEAN_GUIDE = [
  { type: 'Openness (O)', focus: 'Intellectual curiosity, creativity, and preference for novelty', high: 'Imaginative, adventurous, curious, open to abstract ideas', low: 'Practical, conventional, prefers routine, grounded' },
  { type: 'Conscientiousness (C)', focus: 'Self-discipline, organization, and goal-directed behavior', high: 'Organized, dutiful, thorough, disciplined, reliable', low: 'Spontaneous, flexible, disorganized, careless with details' },
  { type: 'Extraversion (E)', focus: 'Social energy, assertiveness, and positive emotionality', high: 'Outgoing, energetic, talkative, assertive, social', low: 'Reserved, reflective, quiet, enjoys solitude, independent' },
  { type: 'Agreeableness (A)', focus: 'Interpersonal harmony, empathy, and cooperation', high: 'Compassionate, trusting, helpful, empathetic, polite', low: 'Critical, competitive, skeptical, challenging, direct' },
  { type: 'Neuroticism (N)', focus: 'Emotional reactivity and vulnerability to stress', high: 'Anxious, moody, self-conscious, sensitive to stress', low: 'Emotionally stable, calm under pressure, resilient, relaxed' }
];
