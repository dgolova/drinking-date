    export const ARCHETYPE_GUIDE = [
      { type: 'King', need: 'Respect, influence, stability', fear: 'Losing authority', love: 'When they trust him, seek his advice, and acknowledge his contribution.' },
      { type: 'Warrior', need: 'Purpose, challenge, victory', fear: 'Being weak or useless', love: 'When there\u2019s someone nearby who admires his strength and supports his path.' },
      { type: 'Sage', need: 'Understanding, knowledge, freedom to think', fear: 'Stupidity, superficiality', love: 'Deep conversations, intellectual respect, the chance to teach.' },
      { type: 'Lover', need: 'Emotion, closeness, beauty', fear: 'Coldness, emotional rejection', love: 'Physical tenderness, romance, emotional openness.' },
      { type: 'Explorer', need: 'Freedom, novelty', fear: 'Being limited', love: 'When a partner doesn\u2019t try to control him and shares in the adventure.' },
      { type: 'Creator', need: 'Self-expression', fear: 'Routine and mediocrity', love: 'When his ideas inspire and his uniqueness is valued.' },
      { type: 'Caregiver', need: 'Being needed', fear: 'Becoming unneeded', love: 'When his care is accepted with gratitude, not taken advantage of.' },
      { type: 'Rebel', need: 'Independence', fear: 'Losing himself', love: 'When a partner respects his individuality and doesn\u2019t try to remake him.' }
    ];

    export const ARCHETYPE_INFO = {
      A1: { name: 'The King', short: 'Respect, influence, stability', blurb: 'You lead best when people trust your judgment and let you set the direction. Losing authority stings \u2014 what makes you feel truly valued is being consulted and having your contributions recognized.' },
      A2: { name: 'The Warrior', short: 'Purpose, challenge, victory', blurb: 'You\u2019re at your best chasing a goal worth fighting for. Feeling weak or useless is the real threat; what lands is a partner who admires your strength and stands behind your fight.' },
      A3: { name: 'The Sage', short: 'Understanding, knowledge, freedom to think', blurb: 'Depth is what draws you in \u2014 ideas, mastery, understanding how things really work. Shallow talk drains you, while real conversation and the space to teach make you feel appreciated.' },
      A4: { name: 'The Lover', short: 'Emotion, closeness, beauty', blurb: 'Connection is the whole point for you \u2014 romance, warmth, feeling something fully. Emotional distance cuts deep, while tenderness and openness make you feel completely at home.' },
      A5: { name: 'The Explorer', short: 'Freedom, novelty', blurb: 'Being boxed in is your least favorite feeling. You come alive with new experiences, and you feel loved when a partner gives you room to roam instead of holding on tight.' },
      A6: { name: 'The Creator', short: 'Self-expression', blurb: 'Routine wears you down fast \u2014 you need to make things, chase ideas, put your own stamp on the world. Having your originality noticed and encouraged is what really lands.' },
      A7: { name: 'The Caregiver', short: 'Being needed', blurb: 'Providing for the people you love is core to who you are. Feeling unnecessary is hard to sit with, so having your care met with real gratitude \u2014 not taken for granted \u2014 is what makes you feel loved.' },
      A8: { name: 'The Rebel', short: 'Independence', blurb: 'Staying true to yourself matters more than fitting in. Losing that sense of self is your biggest fear; you feel most loved when someone respects who you are instead of trying to reshape you.' }
    };

    export const ARCHETYPE_QUESTIONS = [
      { prompt: 'What gives you the greatest sense of personal fulfillment in life?', options: [
        { text: 'Building a stable empire, business, or family where my guidance leads the way.', w: 'A1' },
        { text: 'Setting ambitious goals, overcoming tough challenges, and winning.', w: 'A2' },
        { text: 'Understanding how the world works and reaching deep mastery in my field.', w: 'A3' },
        { text: 'Building deep emotional connections, sharing passion, and experiencing life\u2019s beauty.', w: 'A4' },
        { text: 'Exploring new horizons, traveling, and living without strict limitations.', w: 'A5' },
        { text: 'Bringing unique ideas to life and creating something original.', w: 'A6' },
        { text: 'Knowing that the people I care about are safe, protected, and supported by me.', w: 'A7' },
        { text: 'Breaking outdated rules, staying completely independent, and carving my own path.', w: 'A8' }
      ]},
      { prompt: 'What is your single biggest fear or stressor?', options: [
        { text: 'Losing my authority, status, or control over what I\u2019ve built.', w: 'A1' },
        { text: 'Feeling weak, helpless, or useless in a crisis.', w: 'A2' },
        { text: 'Being forced into shallow, superficial environments or feeling ignorant.', w: 'A3' },
        { text: 'Experiencing emotional coldness, rejection, or lack of connection from loved ones.', w: 'A4' },
        { text: 'Being trapped in a predictable, repetitive routine with no freedom.', w: 'A5' },
        { text: 'Being forced to conform to mediocrity and losing my creative spark.', w: 'A6' },
        { text: 'Becoming irrelevant or finding out that my care and efforts aren\u2019t needed.', w: 'A7' },
        { text: 'Losing my personal identity and letting society or a partner control me.', w: 'A8' }
      ]},
      { prompt: 'You feel most deeply loved and respected by your partner when she\u2026', options: [
        { text: 'Trusts my decisions, seeks my counsel, and acknowledges my leadership.', w: 'A1' },
        { text: 'Admires my strength, stands by my side, and respects my drive.', w: 'A2' },
        { text: 'Engages in deep intellectual conversations and respects my need to think.', w: 'A3' },
        { text: 'Shows physical tenderness, romantic openness, and emotional warmth.', w: 'A4' },
        { text: 'Gives me freedom, avoids controlling me, and joins me on spontaneous adventures.', w: 'A5' },
        { text: 'Values my unique perspective, encourages my vision, and gets inspired by my ideas.', w: 'A6' },
        { text: 'Accepts my care with genuine gratitude without taking me for granted.', w: 'A7' },
        { text: 'Respects my individuality and never attempts to change or tame me.', w: 'A8' }
      ]},
      { prompt: 'When a major conflict arises in a relationship or work setting, how do you handle it?', options: [
        { text: 'I step back, evaluate the big picture objectively, and issue a clear decision.', w: 'A1' },
        { text: 'I face it directly head-on, push through resistance, and fight for a resolution.', w: 'A2' },
        { text: 'I analyze the logic behind the disagreement and seek facts before speaking.', w: 'A3' },
        { text: 'I address the emotional heart of the issue to restore closeness and warmth.', w: 'A4' },
        { text: 'I step out of the high-pressure zone to gain perspective and protect my space.', w: 'A5' },
        { text: 'I look for an unconventional, out-of-the-box solution nobody else considered.', w: 'A6' },
        { text: 'I prioritize keeping everyone safe and supported, sacrificing my comfort if needed.', w: 'A7' },
        { text: 'I challenge the status quo directly and refuse to surrender my principles.', w: 'A8' }
      ]},
      { prompt: 'How would you choose to spend an ideal weekend?', options: [
        { text: 'Hosting a gathering of key people, reviewing long-term plans, or managing projects.', w: 'A1' },
        { text: 'Engaging in intense physical training, sports, or taking on a demanding project.', w: 'A2' },
        { text: 'Reading books, researching a passion topic, or attending a lecture or workshop.', w: 'A3' },
        { text: 'A romantic getaway, a candlelit dinner, or immersing in art and sensory experiences.', w: 'A4' },
        { text: 'Packing a bag for an unplanned road trip or outdoors expedition.', w: 'A5' },
        { text: 'Working on a personal creative design, building a prototype, or artistic project.', w: 'A6' },
        { text: 'Hosting family or close friends, cooking a big meal, and taking care of home.', w: 'A7' },
        { text: 'Going somewhere off the grid, breaking out of routine, doing things on my terms.', w: 'A8' }
      ]},
      { prompt: 'What is the core quality you bring to a romantic partnership?', options: [
        { text: 'Stability, direction, and long-term protection.', w: 'A1' },
        { text: 'Determination, loyalty, and a drive to protect and conquer goals together.', w: 'A2' },
        { text: 'Depth, wisdom, and reasoned guidance.', w: 'A3' },
        { text: 'Passion, romantic intensity, and emotional intimacy.', w: 'A4' },
        { text: 'Excitement, growth, and continuous fresh experiences.', w: 'A5' },
        { text: 'Inspiration, originality, and a unique way of looking at the world.', w: 'A6' },
        { text: 'Nurturing support, dependability, and unconditional care.', w: 'A7' },
        { text: 'Raw authenticity, freedom, and refusal to let life become boring.', w: 'A8' }
      ]},
      { prompt: 'What role do you naturally fall into within a team project?', options: [
        { text: 'The Commander: delegating responsibilities, holding accountability, directing strategy.', w: 'A1' },
        { text: 'The Executor: taking on the hardest tasks and driving execution to the finish line.', w: 'A2' },
        { text: 'The Strategist: analyzing data, troubleshooting technical flaws, providing logic.', w: 'A3' },
        { text: 'The Connector: keeping group morale high, resolving tensions, fostering empathy.', w: 'A4' },
        { text: 'The Scout: looking for new trends, untapped markets, and external opportunities.', w: 'A5' },
        { text: 'The Innovator: pitching radical new concepts, branding, and original designs.', w: 'A6' },
        { text: 'The Supporter: assisting team members, organizing resources, ensuring well-being.', w: 'A7' },
        { text: 'The Disruptor: questioning outdated methods, cutting bureaucracy, pushing boundaries.', w: 'A8' }
      ]},
      { prompt: 'How do you react when hit with strict rules, rigid protocols, or heavy bureaucracy?', options: [
        { text: 'I restructure them so I hold the authority to streamline the process.', w: 'A1' },
        { text: 'I treat it as an obstacle to overpower or bypass efficiently.', w: 'A2' },
        { text: 'I analyze the rules to see if they are logically sound; if not, I point out the flaws.', w: 'A3' },
        { text: 'I adapt if it maintains harmony, but resist if it feels cold and anti-human.', w: 'A4' },
        { text: 'I feel suffocated and immediately look for an exit route or shortcut.', w: 'A5' },
        { text: 'I ignore the formula and build my own custom solution.', w: 'A6' },
        { text: 'I comply if it keeps my loved ones or team safe and secure.', w: 'A7' },
        { text: 'I actively defy them \u2014 rules exist to be broken.', w: 'A8' }
      ]},
      { prompt: 'When you look back on your life decades from now, what matters to you most?', options: [
        { text: 'That I built something lasting and left a strong empire or legacy behind.', w: 'A1' },
        { text: 'That I fought hard, faced my battles, and won.', w: 'A2' },
        { text: 'That I gained true understanding and mastered deep knowledge.', w: 'A3' },
        { text: 'That I loved deeply, was loved in return, and felt life intensely.', w: 'A4' },
        { text: 'That I lived fully, saw the world, and experienced true freedom.', w: 'A5' },
        { text: 'That I expressed my true self and created things of original value.', w: 'A6' },
        { text: 'That I made a meaningful difference in the lives of the people I cared for.', w: 'A7' },
        { text: 'That I stayed 100% true to myself and never compromised my independence.', w: 'A8' }
      ]},
      { prompt: 'What would make you walk away from a relationship fastest?', options: [
        { text: 'Disrespect, betrayal of trust, or undermining my position.', w: 'A1' },
        { text: 'A partner who expects me to be weak, passive, or lack ambition.', w: 'A2' },
        { text: 'Superficially minded drama, lack of deep communication, or constant noise.', w: 'A3' },
        { text: 'Coldness, lack of affection, or emotional distance.', w: 'A4' },
        { text: 'Jealousy, clinginess, or attempts to restrict my freedom.', w: 'A5' },
        { text: 'A partner who tries to force me into a boring routine and stifles my ideas.', w: 'A6' },
        { text: 'Being taken for granted, unappreciated, or made to feel unnecessary.', w: 'A7' },
        { text: 'Attempts to control, tame, or force me to conform to expectations.', w: 'A8' }
      ]}
    ];
