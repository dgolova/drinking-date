  export const WOUND_INFO = {
    W1: { name: 'The Caregiver', short: 'Emotional Neglect', blurb: 'You feel most valued when you\u2019re needed. When no one asks for your help, it can quietly feel like you\u2019ve become invisible to them.' },
    W2: { name: 'The Controller', short: 'Fear of Losing Control', blurb: 'Uncertainty is the hard part. When plans shift without warning, your instinct is to grab the wheel and put things back in order.' },
    W3: { name: 'The Independent One', short: 'Rejection (Distance)', blurb: 'Relying on people has felt risky before, so you keep a layer of self-sufficiency between you and getting hurt.' },
    W4: { name: 'The Romantic', short: 'Abandonment', blurb: 'Silence or distance reads as a warning sign. Part of you is always listening for the moment someone starts to pull away.' },
    W5: { name: 'The Perfectionist', short: 'Shame', blurb: 'Mistakes don\u2019t feel small — they feel like evidence. You hold yourself to a standard where "good enough" rarely feels safe.' },
    W6: { name: 'The People-Pleaser', short: 'Guilt', blurb: 'When something goes wrong nearby, your first move is to check whether it was your fault — even before the facts are in.' },
    W7: { name: 'The Skeptic', short: 'Betrayal', blurb: 'Trust has to be earned slowly. You\u2019re quick to notice inconsistencies, because being blindsided once was enough.' },
    W8: { name: 'The Justice Seeker', short: 'Systemic Injustice', blurb: 'Unfairness gets under your skin fast, especially double standards. You feel compelled to speak up when something is out of balance.' },
    W9: { name: 'The Conflict-Avoidant', short: 'Rejection (Authenticity)', blurb: 'Showing your real, unpolished opinions feels exposing, so it\u2019s often easier to agree and keep the peace.' },
    W0: { name: 'The Confident Leader', short: 'Low Vulnerability', blurb: 'Setbacks don\u2019t rattle you for long. You process things, adjust, and keep moving without much residue.' }
  };

  export const QUIZ_QUESTIONS = [
    {
      prompt: 'A close friend or partner suddenly cancels weekend plans last minute with no clear explanation. What\u2019s your immediate internal reaction?',
      options: [
        { text: 'I panic that they are pulling away or losing interest in me.', w: 'W4' },
        { text: 'I feel frustrated because my schedule is disrupted and things are out of order.', w: 'W2' },
        { text: 'I immediately wonder if they are hiding something or being dishonest with me.', w: 'W7' },
        { text: 'I worry that I did something wrong or upset them to make them cancel.', w: 'W6' },
        { text: 'I take it in stride, adjust my day smoothly, and move on.', w: 'W0' }
      ]
    },
    {
      prompt: 'Someone publicly points out a mistake you made on a project or task. How do you feel?',
      options: [
        { text: 'Deeply ashamed — like my effort meant nothing because it wasn\u2019t flawless.', w: 'W5' },
        { text: 'Uncomfortable — I\u2019d rather hide my true feelings than risk being judged.', w: 'W9' },
        { text: 'Angry — it feels deeply unfair, especially if others aren\u2019t held to the same standard.', w: 'W8' },
        { text: 'Indifferent — I prefer to rely only on myself anyway, so their opinion doesn\u2019t change much.', w: 'W3' },
        { text: 'Objective — I check if the feedback is useful and fix the mistake without taking it personally.', w: 'W0' }
      ]
    },
    {
      prompt: 'People around you handle a major crisis completely fine without asking for your help. How does that sit with you?',
      options: [
        { text: 'Unneeded or forgotten, as if my value to them disappears when I\u2019m not helping.', w: 'W1' },
        { text: 'Relieved that things are handled smoothly, and confident in the outcome.', w: 'W0' },
        { text: 'Suspicious about why they kept me out of the loop or didn\u2019t share information.', w: 'W7' },
        { text: 'Anxious that I should have offered help sooner and disappointed them.', w: 'W6' }
      ]
    },
    {
      prompt: 'Your partner or close friend goes silent and takes hours to reply to a text while out. What goes through your mind?',
      options: [
        { text: 'They are abandoning me or distancing themselves.', w: 'W4' },
        { text: 'They are lying or doing something secret behind my back.', w: 'W7' },
        { text: 'I should step back too — it\u2019s safer to keep my distance so I don\u2019t get hurt.', w: 'W3' },
        { text: 'They\u2019re probably busy; I\u2019ll catch up with them later.', w: 'W0' }
      ]
    },
    {
      prompt: 'A disagreement arises in a group setting. What\u2019s your natural tendency?',
      options: [
        { text: 'I step in to manage the situation so it doesn\u2019t spiral into chaos.', w: 'W2' },
        { text: 'I hide my real opinions and agree with others to avoid conflict or rejection.', w: 'W9' },
        { text: 'I jump in to make sure everyone is treated fairly and double standards aren\u2019t applied.', w: 'W8' },
        { text: 'I state my position clearly and work constructively toward a resolution.', w: 'W0' }
      ]
    },
    {
      prompt: 'Someone tells you, "I\u2019m really disappointed in how things turned out." How do you react?',
      options: [
        { text: 'I automatically take full responsibility and feel immense guilt for letting them down.', w: 'W6' },
        { text: 'I immediately jump into problem-solving mode to make myself useful and fix it.', w: 'W1' },
        { text: 'I feel defensive because I worked hard to do it perfectly.', w: 'W5' },
        { text: 'I assess whether the disappointment is grounded in reality before accepting responsibility.', w: 'W0' }
      ]
    },
    {
      prompt: 'When someone tries to get very close to you emotionally, what\u2019s your default defense mechanism?',
      options: [
        { text: 'I pull away or build a wall; it\u2019s safer not to rely on anyone.', w: 'W3' },
        { text: 'I feel anxious that once they really know me, they\u2019ll eventually leave.', w: 'W4' },
        { text: 'I worry that if I show my true, imperfect self, they\u2019ll reject or ridicule me.', w: 'W9' },
        { text: 'I welcome meaningful connection while maintaining healthy personal boundaries.', w: 'W0' }
      ]
    },
    {
      prompt: 'What scenario triggers you the most in a team environment?',
      options: [
        { text: 'People changing agreed-upon plans without telling me, creating disorder.', w: 'W2' },
        { text: 'Favoritism, unearned privileges, or baseless accusations against someone.', w: 'W8' },
        { text: 'Having my contributions ignored while minor flaws are singled out.', w: 'W5' },
        { text: 'Colleagues being ungrateful or acting like my effort isn\u2019t necessary.', w: 'W1' }
      ]
    },
    {
      prompt: 'When meeting new people or entering a new relationship, what\u2019s your underlying assumption?',
      options: [
        { text: 'I need to be careful — people usually hide things or break promises.', w: 'W7' },
        { text: 'I need to make myself useful so they have a reason to keep me around.', w: 'W1' },
        { text: 'I need to make sure I don\u2019t make mistakes so I stay blameless.', w: 'W5' },
        { text: 'I accept people as they are until they give me a reason not to.', w: 'W0' }
      ]
    },
    {
      prompt: 'When you feel overwhelmed by personal problems, how do you handle it?',
      options: [
        { text: 'I keep it entirely to myself because letting people in usually leads to getting hurt.', w: 'W3' },
        { text: 'I hide it behind a smile so I don\u2019t burden or upset anyone else.', w: 'W6' },
        { text: 'I try to organize and control every external detail around me to manage internal stress.', w: 'W2' },
        { text: 'I process my emotions, seek support if needed, and take action.', w: 'W0' }
      ]
    }
  ];

    export const WOUND_GUIDE = [
      { type: 'Empath, caregiver, rescuer', belief: '\u201cI\u2019m valued only if I\u2019m useful.\u201d', wound: 'Feeling unneeded / emotional neglect', trigger: 'Not expressing gratitude, not needing their help, excluding them from important matters, showing that everything works fine without them.' },
      { type: 'Controller, organizer', belief: '\u201cIf I\u2019m not in control, something bad will happen.\u201d', wound: 'Anxiety, fear of losing control', trigger: 'Being unpredictable, changing plans at the last minute, withholding information, breaking agreements, creating chaos.' },
      { type: 'Highly independent person', belief: '\u201cIt\u2019s better to keep my distance than to be hurt again.\u201d', wound: 'Rejection', trigger: 'Pushing them away, criticizing who they are, rejecting attempts to get closer, showing a lack of acceptance.' },
      { type: 'Anxiously attached, highly romantic', belief: '\u201cPeople I love will eventually leave me.\u201d', wound: 'Abandonment', trigger: 'Taking a long time to reply, becoming emotionally distant, canceling plans, saying \u201cI need space.\u201d' },
      { type: 'Perfectionist', belief: '\u201cI have to be perfect.\u201d', wound: 'Shame, injustice', trigger: 'Criticizing mistakes, comparing them to others, pointing out flaws, dismissing or minimizing their achievements.' },
      { type: 'People-pleaser', belief: '\u201cI\u2019m responsible for other people\u2019s feelings.\u201d', wound: 'Guilt', trigger: 'Saying \u201cYou upset me,\u201d expressing deep disappointment, blaming them, making them feel they\u2019ve let you down.' },
      { type: 'Jealous, suspicious person', belief: '\u201cPeople can\u2019t be trusted.\u201d', wound: 'Betrayal', trigger: 'Lying, hiding information, breaking promises, flirting with others, being secretive.' },
      { type: 'Justice seeker', belief: '\u201cEverything should be fair.\u201d', wound: 'Injustice', trigger: 'Double standards, baseless accusations, favoritism, unfair decisions.' },
      { type: 'Conflict avoidant', belief: '\u201cIf I show my true self, I\u2019ll be rejected.\u201d', wound: 'Rejection', trigger: 'Harsh criticism, ridicule, public humiliation, dismissing or invalidating their feelings.' },
      { type: 'Confident leader', belief: '\u201cI can handle this.\u201d', wound: 'May not have a dominant core wound', trigger: 'Usually doesn\u2019t have one specific trigger; reactions depend more on personality, values, and life experiences than on a single underlying wound.' }
    ];
