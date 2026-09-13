export const DISC_QUESTIONS = [
  {
    prompt: 'When faced with a sudden, high-stakes problem at work or in a project, your first instinct is to:',
    options: [
      { text: 'Take charge immediately, make a firm decision, and drive straight to results.', w: 'D' },
      { text: 'Rally the team, keep morale high, and talk through creative ideas together.', w: 'I' },
      { text: 'Support the team, keep things calm, and ensure everyone works together safely.', w: 'S' },
      { text: 'Step back, analyze the data carefully, and find the most logical, error-free solution.', w: 'C' }
    ]
  },
  {
    prompt: 'In group discussions and meetings, you are naturally:',
    options: [
      { text: 'Direct, concise, and focused on the bottom line.', w: 'D' },
      { text: 'Expressive, enthusiastic, and focused on building relationships.', w: 'I' },
      { text: 'Patient, listening carefully, and encouraging others before speaking.', w: 'S' },
      { text: 'Objective, precise, and asking detailed questions about processes and facts.', w: 'C' }
    ]
  },
  {
    prompt: 'What kind of environment allows you to perform at your absolute best?',
    options: [
      { text: 'A fast-paced environment where I hold authority and can overcome challenges.', w: 'D' },
      { text: 'A dynamic, social environment with plenty of collaboration and new ideas.', w: 'I' },
      { text: 'A stable, predictable environment with clear roles and strong mutual trust.', w: 'S' },
      { text: 'A structured, organized environment where high standards and accuracy matter.', w: 'C' }
    ]
  },
  {
    prompt: 'When an uncomfortable disagreement occurs between you and a colleague:',
    options: [
      { text: 'I address it head-on and push for a quick, decisive resolution.', w: 'D' },
      { text: 'I try to smooth things over with charm, humor, and open conversation.', w: 'I' },
      { text: 'I seek compromise and maintain harmony to avoid damaging the relationship.', w: 'S' },
      { text: 'I rely on facts, rules, and objective logic to determine who is correct.', w: 'C' }
    ]
  },
  {
    prompt: 'When making important decisions, you rely most heavily on:',
    options: [
      { text: 'Speed, intuition, and immediate practical impact.', w: 'D' },
      { text: 'Inspiration, personal feelings, and how it impacts people\u2019s energy.', w: 'I' },
      { text: 'Past experience, group consensus, and overall stability.', w: 'S' },
      { text: 'Data, thorough research, and systematic risk analysis.', w: 'C' }
    ]
  },
  {
    prompt: 'How do you handle unexpected changes to plans or schedules?',
    options: [
      { text: 'I adapt quickly and re-route to keep pushing toward the main goal.', w: 'D' },
      { text: 'I embrace it with enthusiasm as a fresh, exciting adventure.', w: 'I' },
      { text: 'I prefer advance notice; I feel stressed if routines are disrupted suddenly.', w: 'S' },
      { text: 'I evaluate the impact on quality and adjust procedures to maintain standards.', w: 'C' }
    ]
  },
  {
    prompt: 'What frustrates you most in a team environment?',
    options: [
      { text: 'Inefficiency, indecisiveness, and slow progress.', w: 'D' },
      { text: 'Overly rigid rules, isolation, and lack of enthusiasm.', w: 'I' },
      { text: 'Chaos, aggressive arguments, and unpredictable behavior.', w: 'S' },
      { text: 'Careless mistakes, lack of standards, and sloppy execution.', w: 'C' }
    ]
  },
  {
    prompt: 'When given a complex new assignment, you prioritize:',
    options: [
      { text: 'Getting it done as fast as possible to see immediate results.', w: 'D' },
      { text: 'Brainstorming exciting possibilities and delegating details.', w: 'I' },
      { text: 'Establishing a steady, manageable pace to ensure smooth completion.', w: 'S' },
      { text: 'Creating a detailed plan to ensure everything is done correctly.', w: 'C' }
    ]
  },
  {
    prompt: 'You feel most valued when people recognize your:',
    options: [
      { text: 'Achievements, leadership, and ability to get results.', w: 'D' },
      { text: 'Creativity, optimism, and interpersonal influence.', w: 'I' },
      { text: 'Loyalty, reliability, and supportive team spirit.', w: 'S' },
      { text: 'Expertise, attention to detail, and high quality of work.', w: 'C' }
    ]
  },
  {
    prompt: 'In a project team, you naturally step into the role of:',
    options: [
      { text: 'The Driver: setting goals, demanding progress, and taking control.', w: 'D' },
      { text: 'The Promoter: energizing the team, pitching ideas, and networking.', w: 'I' },
      { text: 'The Anchor: helping everyone, keeping peace, and providing steady work.', w: 'S' },
      { text: 'The Analyst: quality checking, organizing systems, and maintaining standards.', w: 'C' }
    ]
  },
  {
    prompt: 'Your natural working speed can be described as:',
    options: [
      { text: 'Fast, urgent, and focused on pushing boundaries.', w: 'D' },
      { text: 'Fast, expressive, and moving quickly between interactive tasks.', w: 'I' },
      { text: 'Steady, methodical, and consistent over long periods.', w: 'S' },
      { text: 'Deliberate, thorough, and careful to avoid errors.', w: 'C' }
    ]
  },
  {
    prompt: 'When under extreme pressure, you tend to become:',
    options: [
      { text: 'Overly demanding, blunt, or autocratic.', w: 'D' },
      { text: 'Overly emotional, disorganized, or talkative.', w: 'I' },
      { text: 'Overly passive, hesitant, or reluctant to change.', w: 'S' },
      { text: 'Overly critical, perfectionistic, or withdrawn.', w: 'C' }
    ]
  }
];

// Keyed by trait letter
export const DISC_INFO = {
  D: { name: 'Dominance (D)', short: 'Results, action, power', blurb: 'You\u2019re direct, assertive, and decisive \u2014 obstacles are just things to push through on the way to a result. You want the bottom line, a fast pace, straight feedback, and room to run things your own way.' },
  I: { name: 'Influence (I)', short: 'People, enthusiasm, recognition', blurb: 'You\u2019re outgoing, persuasive, and full of energy \u2014 bringing people together and keeping morale high comes naturally. You thrive in interactive teams, love talking things through, and want your ideas noticed.' },
  S: { name: 'Steadiness (S)', short: 'Cooperation, stability, loyalty', blurb: 'You\u2019re patient, dependable, and calm under pressure \u2014 keeping the team steady matters more to you than moving fast. You want a predictable pace, clear expectations, and as little conflict as possible.' },
  C: { name: 'Conscientiousness (C)', short: 'Accuracy, quality, logic', blurb: 'You\u2019re analytical, detail-oriented, and precise \u2014 getting it right matters more than getting it fast. You want structured processes, solid data behind decisions, and the autonomy to hold your own high standards.' }
};

// Same 4 traits, shaped for the guide/grid table
export const DISC_GUIDE = [
  { type: 'Dominance (D)', focus: 'Results, action, power, and overcoming obstacles', high: 'Direct, assertive, decisive, competitive, risk-tolerant', style: 'Prefers bottom-line results, fast pace, direct feedback, and high autonomy.' },
  { type: 'Influence (I)', focus: 'People, enthusiasm, social recognition, collaboration', high: 'Outgoing, persuasive, optimistic, charismatic, high energy', style: 'Prefers interactive teams, verbal expression, social recognition, and fast pacing.' },
  { type: 'Steadiness (S)', focus: 'Cooperation, stability, loyalty, and harmony', high: 'Patient, supportive, dependable, predictable, calm', style: 'Prefers steady pace, clear expectations, team collaboration, and minimizing conflict.' },
  { type: 'Conscientiousness (C)', focus: 'Accuracy, quality, expertise, and logic', high: 'Analytical, detail-oriented, systematic, precise, objective', style: 'Prefers structured processes, data-backed decisions, autonomy, and high standards.' }
];
