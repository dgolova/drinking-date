    export const ARCHETYPE_GUIDE_F = [
      { type: 'Queen', need: 'Respect, dignity, partnership', fear: 'Humiliation, loss of value', love: 'When she is treated as an equal and her opinion and boundaries are respected.' },
      { type: 'Lover / Muse', need: 'Passion, beauty, emotional closeness', fear: 'Indifference, loss of attractiveness', love: 'Admiration, attention, romance, being desired by her partner.' },
      { type: 'Mother / Caregiver', need: 'To care for others, create safety', fear: 'Being unneeded', love: 'Gratitude, and the chance to care without feeling used.' },
      { type: 'Maiden / Explorer', need: 'Freedom, growth, discovery', fear: 'Being limited', love: 'When her independence and curiosity are supported.' },
      { type: 'Wise Woman', need: 'Understanding, depth, meaning', fear: 'Superficiality, her experience being ignored', love: 'Intellectual respect and genuine interest in her thoughts.' },
      { type: 'Warrior', need: 'Independence, strength, achievement', fear: 'Helplessness', love: 'When her competence is recognized and no one tries to suppress her.' },
      { type: 'Creator', need: 'Self-expression', fear: 'Routine, being unable to create', love: 'When her ideas inspire others and her uniqueness is valued.' },
      { type: 'Wild Woman', need: 'Authenticity, emotional freedom', fear: 'Losing herself, living someone else\u2019s life', love: 'When she can be her true self nearby, without masks or judgment.' }
    ];

    export const ARCHETYPE_INFO_F = {
      W1: { name: 'The Queen', short: 'Respect, dignity, partnership', blurb: 'You carry yourself with quiet authority and expect to be met as an equal. Feeling disrespected or diminished cuts deep \u2014 what you need is a partner who honors your opinion and your boundaries without question.' },
      W2: { name: 'The Lover / Muse', short: 'Passion, beauty, emotional closeness', blurb: 'You\u2019re wired for intensity \u2014 romance, beauty, feeling truly desired. Indifference is the real wound; what makes you feel alive is attention, admiration, and a partner who still chases you.' },
      W3: { name: 'The Mother / Caregiver', short: 'Nurturing, creating safety', blurb: 'You build the warm, safe space everyone else gets to land in. Being taken for granted stings more than almost anything \u2014 what you need is gratitude, and care that flows both ways.' },
      W4: { name: 'The Maiden / Explorer', short: 'Freedom, growth, discovery', blurb: 'You\u2019re happiest mid-adventure, always reaching for what\u2019s next. Feeling boxed in is your quiet fear; what you need is a partner who cheers on your curiosity instead of trying to contain it.' },
      W5: { name: 'The Wise Woman', short: 'Depth, understanding, meaning', blurb: 'Surface-level doesn\u2019t hold your attention for long \u2014 you want real conversation and real understanding. Having your experience dismissed is painful; genuine intellectual respect is what makes you feel seen.' },
      W6: { name: 'The Warrior', short: 'Independence, strength, achievement', blurb: 'You\u2019d rather handle it yourself than feel helpless. What you need most is for your competence to be recognized \u2014 not managed, not rescued, just respected.' },
      W7: { name: 'The Creator', short: 'Self-expression', blurb: 'Routine flattens you fast \u2014 you need to be making something, always. When your ideas inspire someone and your originality is genuinely valued, that\u2019s when you feel most like yourself.' },
      W8: { name: 'The Wild Woman', short: 'Authenticity, emotional freedom', blurb: 'Performing a version of yourself for other people\u2019s comfort wears you down. What you need is a space \u2014 and a person \u2014 where you can be completely unfiltered, without judgment.' }
    };

    export const ARCHETYPE_QUESTIONS_F = [
      { prompt: 'What drives you most deeply in life right now?', options: [
        { text: 'Maintaining my self-respect, building an equal partnership, and commanding my space.', w: 'W1' },
        { text: 'Experiencing deep passion, romantic connection, and living in sensory beauty.', w: 'W2' },
        { text: 'Nurturing my loved ones and creating a safe, cozy environment for them to thrive.', w: 'W3' },
        { text: 'Discovering new paths, growing continuously, and exploring life without limits.', w: 'W4' },
        { text: 'Seeking truth, understanding life\u2019s deeper meaning, and expanding my knowledge.', w: 'W5' },
        { text: 'Achieving my goals, proving my strength, and staying completely self-reliant.', w: 'W6' },
        { text: 'Expressing my inner vision through original ideas, art, or creative projects.', w: 'W7' },
        { text: 'Living with total emotional freedom and remaining raw, real, and uninhibited.', w: 'W8' }
      ]},
      { prompt: 'Which scenario causes you the most internal distress or pain?', options: [
        { text: 'Being humiliated, disrespected, or having my boundaries crossed.', w: 'W1' },
        { text: 'Facing emotional indifference, feeling unappealing, or losing romance.', w: 'W2' },
        { text: 'Finding out that my care isn\u2019t needed or that I\u2019m being taken for granted.', w: 'W3' },
        { text: 'Feeling trapped, stifled, or forced into a small, restricted life.', w: 'W4' },
        { text: 'Being surrounded by superficial noise and having my experience ignored.', w: 'W5' },
        { text: 'Feeling helpless, weak, or dependent on someone else to save me.', w: 'W6' },
        { text: 'Falling into a grey, repetitive routine where my imagination dies.', w: 'W7' },
        { text: 'Losing my true self, living a fake life, or wearing a mask to please society.', w: 'W8' }
      ]},
      { prompt: 'You feel most deeply cherished in a romantic relationship when your partner\u2026', options: [
        { text: 'Treats me as an equal, respects my opinion, and honors my boundaries.', w: 'W1' },
        { text: 'Admires me, showers me with romantic attention, and desires me deeply.', w: 'W2' },
        { text: 'Receives my care with sincere gratitude and makes me feel valued.', w: 'W3' },
        { text: 'Supports my independence and encourages my personal curiosity.', w: 'W4' },
        { text: 'Shows genuine interest in my thoughts and engages in deep conversations.', w: 'W5' },
        { text: 'Recognizes my competence and strength without trying to dominate me.', w: 'W6' },
        { text: 'Is inspired by my original ideas and appreciates my creative spirit.', w: 'W7' },
        { text: 'Accepts me completely as I am \u2014 raw, untamed, and without judgment.', w: 'W8' }
      ]},
      { prompt: 'When a major argument or disagreement breaks out, how do you respond?', options: [
        { text: 'I step back with composure, set clear boundaries, and demand respect.', w: 'W1' },
        { text: 'I express my emotions intensely to restore intimacy and closeness quickly.', w: 'W2' },
        { text: 'I try to soften the tension, protect everyone\u2019s feelings, and bring peace.', w: 'W3' },
        { text: 'I look for new perspectives or give myself space to clear my mind.', w: 'W4' },
        { text: 'I analyze the root cause calmly and draw on past experience to resolve it.', w: 'W5' },
        { text: 'I stand my ground firmly, state my points directly, and fight back.', w: 'W6' },
        { text: 'I look for an imaginative, unconventional way to transform the situation.', w: 'W7' },
        { text: 'I speak my raw, uncensored truth without sugarcoating anything.', w: 'W8' }
      ]},
      { prompt: 'How do you most enjoy spending your personal downtime?', options: [
        { text: 'Curating an elegant environment, hosting an intimate gathering, or managing long-term plans.', w: 'W1' },
        { text: 'Getting dressed up, going on a romantic date, or indulging in self-care and beauty rituals.', w: 'W2' },
        { text: 'Cooking, taking care of home, or spending quality time comforting loved ones.', w: 'W3' },
        { text: 'Booking a spontaneous trip, learning a new skill, or trying an unfamiliar activity.', w: 'W4' },
        { text: 'Reading a profound book, journaling, or contemplating complex life topics.', w: 'W5' },
        { text: 'Hitting a tough physical workout, tackling a complex challenge, or mastering a hard skill.', w: 'W6' },
        { text: 'Painting, writing, designing, or making something completely new.', w: 'W7' },
        { text: 'Spending time alone in nature, dancing, or doing whatever feels instinct-driven.', w: 'W8' }
      ]},
      { prompt: 'What is your natural role when collaborating with others?', options: [
        { text: 'The Leader: setting the standard, delegating tasks, maintaining dignity and order.', w: 'W1' },
        { text: 'The Inspirer: bringing energy, passion, and emotional heart to the group.', w: 'W2' },
        { text: 'The Provider: ensuring everyone feels comfortable, safe, and looked after.', w: 'W3' },
        { text: 'The Catalyst: bringing fresh energy, asking questions, and seeking new approaches.', w: 'W4' },
        { text: 'The Advisor: providing deep insights, objective perspective, and wisdom.', w: 'W5' },
        { text: 'The Defender: pushing execution forward, tackling hard tasks, and protecting the goal.', w: 'W6' },
        { text: 'The Visionary: designing the concept, branding, and creative direction.', w: 'W7' },
        { text: 'The Truth-Teller: stripping away pretenses, exposing flaws, and keeping it real.', w: 'W8' }
      ]},
      { prompt: 'What would make you leave a partner or close friend fastest?', options: [
        { text: 'Condescension, disrespect, or treating me like a subordinate.', w: 'W1' },
        { text: 'Coldness, lack of affection, or living like roommates without passion.', w: 'W2' },
        { text: 'Taking my generosity for granted or using me as a free servant.', w: 'W3' },
        { text: 'Possessiveness, clinginess, or trying to restrict my personal freedom.', w: 'W4' },
        { text: 'Shallow small talk, mind games, or ignoring my experience.', w: 'W5' },
        { text: 'Attempts to undermine my independence or make me feel weak.', w: 'W6' },
        { text: 'Trying to force me into a rigid, conventional mold that kills my creativity.', w: 'W7' },
        { text: 'Expecting me to alter my personality, act "proper," or hide my true nature.', w: 'W8' }
      ]},
      { prompt: 'How do you navigate major transitions or challenges in your life?', options: [
        { text: 'I maintain my self-control, formulate a strategic plan, and hold my head high.', w: 'W1' },
        { text: 'I lean into my intuition, feelings, and the support of deep emotional bonds.', w: 'W2' },
        { text: 'I focus on keeping things stable and protecting the well-being of those around me.', w: 'W3' },
        { text: 'I view it as an exciting new adventure and a chance to evolve.', w: 'W4' },
        { text: 'I step back to gain perspective, searching for the lesson behind the challenge.', w: 'W5' },
        { text: 'I brace myself, take charge of the problem, and push through with sheer force.', w: 'W6' },
        { text: 'I channel the turbulence into art, projects, or creative self-expression.', w: 'W7' },
        { text: 'I trust my wild instincts, strip away what no longer serves me, and start fresh.', w: 'W8' }
      ]},
      { prompt: 'Which environment or atmosphere makes you feel most in your element?', options: [
        { text: 'An elegant, well-ordered space where everything reflects refinement and standards.', w: 'W1' },
        { text: 'A romantic, beautifully lit space filled with art, music, and sensual textures.', w: 'W2' },
        { text: 'A warm, welcoming home filled with comfort, soft light, and good food.', w: 'W3' },
        { text: 'An open road, a bustling airport, or a vibrant place full of new possibilities.', w: 'W4' },
        { text: 'A quiet library, cozy study, or tranquil space surrounded by books and nature.', w: 'W5' },
        { text: 'A crisp, functional setting focused on action, strength, and clear goals.', w: 'W6' },
        { text: 'A studio or workshop overflowing with materials, mood boards, and projects in progress.', w: 'W7' },
        { text: 'Raw nature \u2014 the ocean, forests, firelight, or anywhere far from social expectations.', w: 'W8' }
      ]},
      { prompt: 'When you reflect on your life, what do you want to be remembered for?', options: [
        { text: 'Carrying myself with grace, establishing high standards, and leaving a proud legacy.', w: 'W1' },
        { text: 'Loving intensely, inspiring others, and filling the world with beauty and emotion.', w: 'W2' },
        { text: 'Being a pillar of warmth, safety, and unconditional care for my family and friends.', w: 'W3' },
        { text: 'Living a rich life of freedom, continuous growth, and bold exploration.', w: 'W4' },
        { text: 'Offering wisdom, deep understanding, and meaningful clarity to those in search of it.', w: 'W5' },
        { text: 'Fighting for what is right, conquering obstacles, and standing strong.', w: 'W6' },
        { text: 'Creating unique, original work that expressed my soul and outlasts me.', w: 'W7' },
        { text: 'Living completely authentically, true to my wild spirit, without a single compromise.', w: 'W8' }
      ]}
    ];
