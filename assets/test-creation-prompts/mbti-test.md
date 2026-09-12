Here is a complete, developer-ready specification and 10-question diagnostic implementation plan for a simplified Myers-Briggs Type Indicator (MBTI) assessment.

### Understanding the 4 Dichotomies

The 16 Personalities framework builds a four-letter code by evaluating individuals across four independent spectrums.

**DimensionDichotomy LettersCore FocusLow Score TraitHigh Score TraitEnergyE** vs **I**Where you direct and draw your mental energy**I (Introversion):** Inner world, reflection, deep quiet focus**E (Extraversion):** Outer world, social interaction, action-oriented**InformationS** vs **N**How you absorb, process, and trust information**S (Sensing):** Concrete facts, physical reality, practical details**N (Intuition):** Patterns, future possibilities, abstract theories**DecisionsT** vs **F**How you make decisions and handle problems**T (Thinking):** Logic, objective criteria, cause-and-effect**F (Feeling):** Human values, interpersonal harmony, empathy**LifestyleJ** vs **P**How you organize your outer environment**J (Judging):** Structure, clear plans, closure, order**P (Perceiving):** Flexibility, spontaneity, keeping options open

### Overview of 16 MBTI Types

**TypeCore StrengthsCommon WeaknessesHigh-Compatibility MatchesINTJ** (Architect)Strategic thinking, independence, high standardsOverly critical, dismissive of emotionsENFP, ENTP, INFJ**INTP** (Logician)Analytical depth, abstract problem-solvingOverthinking, procrastinating on executionENTJ, ENFJ, INTJ**ENTJ** (Commander)Efficient leadership, goal executionImpatient, perceived as blunt or domineeringINTP, INFP, ENTP**ENTP** (Debater)Innovation, intellectual agility, adaptabilityEasily bored, argumentativenessINFJ, INTJ, ENFP**INFJ** (Advocate)Insightful empathy, vision, strong valuesBurnout-prone, overly perfectionisticENFP, ENTP, INTJ**INFP** (Mediator)Deep authenticity, idealism, creative empathyHighly sensitive, practical struggle with routineENFJ, ENTJ, ENFP**ENFJ** (Protagonist)Inspiring leadership, high emotional intelligenceOverly selfless, sensitive to criticismINFP, ISFP, INFJ**ENFP** (Campaigner)Enthusiastic creativity, warm communicationUnfocused, overcommitting without follow-throughINFJ, INTJ, ENFJ**ISTJ** (Inspector)Reliability, attention to detail, strong dutyRigid adherence to rules, resistant to changeESFP, ESTP, ESTJ**ISFJ** (Protector)Loyalty, practical support, thoroughnessConflict-avoidant, reluctance to adapt quicklyESFP, ESTP, ESFJ**ESTJ** (Executive)Organization, clear logistics, directnessInflexible, intolerant of inefficiencyISFP, INFP, ISTJ**ESFJ** (Consul)Community building, warmth, practical careNeed for social approval, boundary issuesISFP, INFP, ISFJ**ISTP** (Virtuoso)Technical troubleshooting, crisis composureRisk of detachment, easily bored by theoryESTJ, ESFJ, ENTP**ISFP** (Adventurer)Artistic sense, adaptability, grounded presenceAvoiding planning, overly sensitive to criticismENFJ, ESFJ, ESTJ**ESTP** (Entrepreneur)Bold action, immediate problem-solving, charmImpulsivity, ignoring long-term consequencesISFJ, ISTJ, ESFP**ESFP** (Entertainer)Spontaneity, infectious enthusiasm, practical funShort attention span, avoiding difficult emotionsISFJ, ISTJ, ESTP

### Software Scoring & Calculation Logic

#### 1\. Point Allocation Vector

Each question increments a specific dichotomy counter by $+1$.

$$\\mathbf{Scores} = \\{ E, I, S, N, T, F, J, P \\}$$

*   **Questions 1–3:** Target **E vs I** (3 points max)

*   **Questions 4–5:** Target **S vs N** (2 points max)

*   **Questions 6–7:** Target **T vs F** (2 points max)

*   **Questions 8–10:** Target **J vs P** (3 points max)


#### 2\. Decision Logic Rule

For each pair, assign the letter based on which raw count is higher:

$$\\text{Letter}\_1 = \\begin{cases} \\mathbf{E} & \\text{if } E \\ge I \\\\ \\mathbf{I} & \\text{if } I > E \\end{cases} \\quad \\text{Letter}\_2 = \\begin{cases} \\mathbf{S} & \\text{if } S \\ge N \\\\ \\mathbf{N} & \\text{if } N > S \\end{cases}$$$$\\text{Letter}\_3 = \\begin{cases} \\mathbf{T} & \\text{if } T \\ge F \\\\ \\mathbf{F} & \\text{if } F > T \\end{cases} \\quad \\text{Letter}\_4 = \\begin{cases} \\mathbf{J} & \\text{if } J \\ge P \\\\ \\mathbf{P} & \\text{if } P > J \\end{cases}$$

### 10-Question Diagnostic Quiz Matrix

#### Q1: Social Energy Dynamics \[E / I\]

_After a long, demanding week, how do you recharge your energy best?_

*   **\[A\]** Going out, socializing, or spending active time with a group of friends. \[E +1\]

*   **\[B\]** Spending quiet time alone or with one person in a comfortable setting. \[I +1\]


#### Q2: Interaction Style \[E / I\]

_In group conversations or team meetings, you tend to:_

*   **\[A\]** Speak up early, process your thoughts out loud, and drive conversation. \[E +1\]

*   **\[B\]** Listen first, process internally, and share your thoughts once formed. \[I +1\]


#### Q3: Weekend Plans \[E / I\]

_Unexpected free time opens up on a Saturday afternoon. Your immediate impulse is to:_

*   **\[A\]** Reach out to friends or look for local events/activities to join. \[E +1\]

*   **\[B\]** Enjoy uninterrupted solo time for hobbies, reading, or relaxing. \[I +1\]


#### Q4: Processing Information \[S / N\]

_When learning a new subject or starting a project, you focus primarily on:_

*   **\[A\]** Concrete facts, realistic details, and step-by-step practical applications. \[S +1\]

*   **\[B\]** Overall concepts, underlying patterns, and future possibilities. \[N +1\]


#### Q5: Trusting Ideas \[S / N\]

_Which type of discussion holds your attention longer?_

*   **\[A\]** Discussions grounded in current real-world experience and proven methods. \[S +1\]

*   **\[B\]** Speculative discussions about abstract ideas, theories, and visions. \[N +1\]


#### Q6: Decision Making \[T / F\]

_When making a difficult decision, your primary guide is:_

*   **\[A\]** Objective logic, data, principles, and cause-and-effect analysis. \[T +1\]

*   **\[B\]** Personal values, how it affects the people involved, and harmony. \[F +1\]


#### Q7: Giving Feedback \[T / F\]

_When reviewing someone else's work, your natural communication style is to:_

*   **\[A\]** Be direct, objective, and focus on fixing errors efficiently. \[T +1\]

*   **\[B\]** Be tactful, supportive, and focus on encouraging their effort first. \[F +1\]


#### Q8: Daily Structure \[J / P\]

_How do you prefer to manage your daily tasks and schedule?_

*   **\[A\]** Having clear schedules, structured to-do lists, and set deadlines. \[J +1\]

*   **\[B\]** Keeping options open, staying flexible, and working in spontaneous bursts. \[P +1\]


#### Q9: Handling Deadlines \[J / P\]

_When working toward a major deadline, you typically:_

*   **\[A\]** Finish well in advance to avoid last-minute rush or chaos. \[J +1\]

*   **\[B\]** Work best under pressure near the deadline, adjusting as you go. \[P +1\]


#### Q10: Organization & Environment \[J / P\]

_How do you feel about unexpected changes to your carefully made plans?_

*   **\[A\]** Annoyed or stressed; you prefer predictability and clear closure. \[J +1\]

*   **\[B\]** Adaptable or excited; you treat changes as fresh opportunities. \[P +1\]
