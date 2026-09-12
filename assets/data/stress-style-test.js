export const STRESS_STYLE_QUESTIONS = [
  {
    prompt: 'True or false: Little physical aches and twinges grab my attention more than they probably should.',
    options: [
      { text: 'True', w: 'HW' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: When something feels physically off, my mind jumps straight to worst-case explanations.',
    options: [
      { text: 'True', w: 'HW' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: There are stretches where I feel low, unmotivated, or like things just aren\u2019t clicking for me.',
    options: [
      { text: 'True', w: 'HH' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I\u2019ve lost interest in things that used to bring me joy, for phases at a time.',
    options: [
      { text: 'True', w: 'HH' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: Under real emotional stress, my body reacts before my brain catches up \u2014 headaches, nausea, that kind of thing.',
    options: [
      { text: 'True', w: 'BT' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I\u2019m good at putting on a normal face and carrying on, even when something is actually bothering me.',
    options: [
      { text: 'True', w: 'BT' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: Rules and expectations often feel like they\u2019re there to be pushed against, not followed.',
    options: [
      { text: 'True', w: 'RB' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I\u2019ve butted heads with authority figures or institutions more than once, and I don\u2019t always regret it.',
    options: [
      { text: 'True', w: 'RB' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: My interests and tastes don\u2019t really line up with what\u2019s \u201ctypical\u201d for my gender, and that\u2019s fine by me.',
    options: [
      { text: 'True', w: 'FE' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I express whatever I\u2019m feeling or into, without worrying if it reads as masculine or feminine.',
    options: [
      { text: 'True', w: 'FE' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I often suspect people have hidden motives, even without clear evidence.',
    options: [
      { text: 'True', w: 'WO' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I feel like I get unfairly blamed or singled out more than other people do.',
    options: [
      { text: 'True', w: 'WO' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: My brain likes to loop on small mistakes way longer than they probably deserve.',
    options: [
      { text: 'True', w: 'OT' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I like to double- and triple-check things before I can let myself feel okay about them.',
    options: [
      { text: 'True', w: 'OT' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I get lost in daydreams or my own imagination so vividly that I lose track of time.',
    options: [
      { text: 'True', w: 'VI' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: My thoughts and ideas often go in directions other people find hard to follow, or a little unconventional.',
    options: [
      { text: 'True', w: 'VI' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: When I get excited about something, my mind can race with ideas faster than I can keep up.',
    options: [
      { text: 'True', w: 'LW' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: I take on a big pile of projects or plans impulsively, and don\u2019t always finish what I start.',
    options: [
      { text: 'True', w: 'LW' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: Given the choice, I\u2019d take a quiet night alone over a group hangout most of the time.',
    options: [
      { text: 'True', w: 'QR' },
      { text: 'False' }
    ]
  },
  {
    prompt: 'True or false: Being around a big group of people for too long leaves me feeling drained rather than energized.',
    options: [
      { text: 'True', w: 'QR' },
      { text: 'False' }
    ]
  }
];

// Keyed by short internal code
export const STRESS_STYLE_INFO = {
  HW: { name: 'The Health Watcher', short: 'Body-aware, health-alert', blurb: 'You stay closely tuned in to what your body is telling you, and it doesn\u2019t take much for a small twinge to spiral into a bigger worry.' },
  HH: { name: 'The Heavy-Hearted', short: 'Feels low tides deeply', blurb: 'Low moods and flat stretches hit you harder and linger longer than they seem to for other people \u2014 you feel the dips fully.' },
  BT: { name: 'The Bottler', short: 'Holds it together, holds it in', blurb: 'Stress tends to show up in your body before it shows up in your words. You\u2019d rather push through and look fine than unpack what\u2019s actually wrong.' },
  RB: { name: 'The Rule-Breaker', short: 'Pushes back on the box', blurb: 'Rules and expectations feel more like a cage than a guide. You don\u2019t mind ruffling feathers to do things your own way.' },
  FE: { name: 'The Free Expresser', short: 'Unbothered by the norms', blurb: 'You don\u2019t feel boxed in by what your interests or emotions are \u201csupposed\u201d to look like \u2014 you just go with what actually feels like you.' },
  WO: { name: 'The Wary One', short: 'Keeps an eye out', blurb: 'You stay alert to hidden motives, and it doesn\u2019t take much for you to wonder if someone\u2019s got an angle on you.' },
  OT: { name: 'The Overthinker', short: 'Double-checks everything', blurb: 'Your mind likes to loop, double-check, and replay \u2014 \u201cgood enough\u201d rarely feels like enough for you.' },
  VI: { name: 'The Vivid Imaginer', short: 'Runs on a rich inner world', blurb: 'Your inner world runs rich and a little unconventional \u2014 daydreams, ideas, and connections that don\u2019t always match the room around you.' },
  LW: { name: 'The Live Wire', short: 'Big bursts of energy', blurb: 'Energy comes in big bursts for you \u2014 new plans, big ideas, and a restlessness that\u2019s hard to switch off once it\u2019s on.' },
  QR: { name: 'The Quiet Recharger', short: 'Recharges alone', blurb: 'Crowds drain you faster than they fill you up \u2014 quiet time or one close person does more for your battery than a room full of people.' }
};

// Same 10 styles, shaped for the guide/grid table
export const STRESS_STYLE_GUIDE = [
  { type: 'The Health Watcher', focus: 'Body-awareness and health vigilance', high: 'Notices every ache, worries it means something serious.', low: 'Barely registers physical discomfort, pragmatic about health.' },
  { type: 'The Heavy-Hearted', focus: 'How deeply low moods land', high: 'Low energy, self-critical, flat stretches that linger.', low: 'Steady optimism, quick to bounce back from a bad day.' },
  { type: 'The Bottler', focus: 'How stress shows up in the body vs. words', high: 'Physical symptoms under stress, prefers to look fine and carry on.', low: 'Names what\u2019s wrong directly instead of pushing through it.' },
  { type: 'The Rule-Breaker', focus: 'Comfort with rules and authority', high: 'Impulsive, allergic to being told what to do.', low: 'Comfortable with structure and following the process.' },
  { type: 'The Free Expresser', focus: 'Freedom from traditional expectations', high: 'Interests and expression don\u2019t follow a script.', low: 'Comfortable with more conventional, expected roles.' },
  { type: 'The Wary One', focus: 'Trust and suspicion of others\u2019 motives', high: 'Quick to suspect hidden agendas, feels singled out.', low: 'Trusting by default, gives people the benefit of the doubt.' },
  { type: 'The Overthinker', focus: 'Anxiety, perfectionism, rumination', high: 'Replays small mistakes, checks and rechecks things.', low: 'Decisive, calm under pressure, lets things go quickly.' },
  { type: 'The Vivid Imaginer', focus: 'Unconventional inner world', high: 'Rich, unusual inner life; ideas others find hard to follow.', low: 'Grounded, practical, thinks in straight lines.' },
  { type: 'The Live Wire', focus: 'Energy, impulsivity, restlessness', high: 'Racing ideas, big plans, hard to slow down.', low: 'Low-key energy, steady pace, rarely impulsive.' },
  { type: 'The Quiet Recharger', focus: 'Social energy and solitude', high: 'Drained by crowds, recharges alone or one-on-one.', low: 'Energized by people, seeks out social contact.' }
];
