The Big Five (OCEAN / BFI-2) model evaluates five fundamental dimensions of human personality. Unlike categorical personality tests, the Big Five measures traits along continuous spectrums to capture individual behavioral tendencies.

### Big Five (OCEAN) Trait Breakdown

**TraitTrait NamePrimary FocusHigh Score CharacteristicsLow Score CharacteristicsOOpenness to Experience**Intellectual curiosity, creativity, and preference for noveltyImaginative, adventurous, curious, open to abstract ideasPractical, conventional, prefers routine, grounded**CConscientiousness**Self-discipline, organization, and goal-directed behaviorOrganized, dutiful, thorough, disciplined, reliableSpontaneous, flexible, disorganized, careless with details**EExtraversion**Social energy, assertiveness, and positive emotionalityOutgoing, energetic, talkative, assertive, socialReserved, reflective, quiet, enjoys solitude, independent**AAgreeableness**Interpersonal harmony, empathy, and cooperationCompassionate, trusting, helpful, empathetic, politeCritical, competitive, skeptical, challenging, direct**NNeuroticism**Emotional reactivity and vulnerability to stressAnxious, moody, self-conscious, sensitive to stressEmotionally stable, calm under pressure, resilient, relaxed

### Software & Scoring Implementation Plan

#### 1\. Mathematical Scoring Engine

The screening test uses a 5-point Likert scale (1 = Strongly Disagree to 5 = Strongly Agree).

$$\\text{Scale Ratings: } x\_i \\in \\{1, 2, 3, 4, 5\\}$$

Reverse-coded items ($R$) must be inverted prior to scoring using the formula:

$$x\_{\\text{transformed}} = 6 - x\_{\\text{raw}}$$

For each trait dimension ($D \\in \\{O, C, E, A, N\\}$), sum the transformed item scores to compute the dimension total score:

$$Score(D) = \\sum\_{i \\in D} x\_{i,\\text{transformed}}$$

Percentage intensity per dimension is calculated as:

$$\\text{Intensity}(D) = \\left( \\frac{Score(D) - Score\_{min}}{Score\_{max} - Score\_{min}} \\right) \\times 100\\%$$

#### 2\. Score Normalization Thresholds

*   **Low:** 0% – 33%

*   **Moderate:** 34% – 66%

*   **High:** 67% – 100%


### 15-Item Diagnostic Screening Assessment

**Rating Scale for All Items:**

1 = Strongly Disagree | 2 = Disagree | 3 = Neutral | 4 = Agree | 5 = Strongly Agree

#### Openness to Experience (O)

*   **Q1:** I am fascinated by abstract ideas, artistic expression, and complex theories. \[O + Standard\]

*   **Q2:** I prefer keeping my routine traditional and predictable rather than exploring novel experiences. \[O + Reverse\]

*   **Q3:** I have a vivid imagination and enjoy brainstorming creative possibilities. \[O + Standard\]


#### Conscientiousness (C)

*   **Q4:** I keep my workspace organized, plan my tasks carefully, and meet deadlines early. \[C + Standard\]

*   **Q5:** I tend to act spontaneously without creating detailed plans or to-do lists. \[C + Reverse\]

*   **Q6:** I take my responsibilities seriously and complete tasks thoroughly. \[C + Standard\]


#### Extraversion (E)

*   **Q7:** I feel energized and enthusiastic when interacting in large groups of people. \[E + Standard\]

*   **Q8:** I prefer to remain quiet and keep to myself in social settings. \[E + Reverse\]

*   **Q9:** I easily initiate conversations with new people and enjoy being active. \[E + Standard\]


#### Agreeableness (A)

*   **Q10:** I am deeply empathetic toward others and go out of my way to help them. \[A + Standard\]

*   **Q11:** I tend to be skeptical of people's intentions and challenge their points of view directly. \[A + Reverse\]

*   **Q12:** I prioritize cooperation, harmony, and kindness in my daily interactions. \[A + Standard\]


#### Neuroticism (N)

*   **Q13:** I frequently worry about potential problems and feel stressed easily. \[N + Standard\]

*   **Q14:** I remain calm, emotionally stable, and relaxed even in high-pressure situations. \[N + Reverse\]

*   **Q15:** My mood changes quickly, and minor setbacks affect my emotional state. \[N + Standard\]
