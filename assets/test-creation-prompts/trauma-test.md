To build a reliable diagnostic software tool, a **10-question assessment** where **each question targets a specific scenario** (allowing users to select all that apply or rank options) is the most efficient starting point.

Because people often carry multiple overlapping wounds, the software should use a weighted scoring model rather than forcing a single result.

### Scoring & Calculation Logic for Your Software

Instead of simple single-choice answers, structure each question so that every choice option maps directly to one of the 9 specific core wounds (excluding the "Confident Leader," which acts as a baseline/control).

#### 1\. Wounds Mapping Key

**IDCore WoundAssociated Personality ProfileW1Emotional Neglect / Feeling Unneeded**Empath, Caregiver, Rescuer**W2Fear of Losing Control / Anxiety**Controller, Organizer**W3Rejection (Distance-based)**Highly Independent Person**W4Abandonment**Anxiously Attached, Highly Romantic**W5Shame / Injustice (Flaws)**Perfectionist**W6Guilt**People-Pleaser**W7Betrayal**Jealous, Suspicious Person**W8Systemic Injustice**Justice Seeker**W9Rejection (Authenticity-based)**Conflict Avoidant**W0Baseline / Low Wound Vulnerability**Confident Leader

#### 2\. Calculation Formula

*   **Question Weight:** Assign each question a weight based on intensity (e.g., standard scenarios = 1 point; high-stress trigger scenarios = 2 points).

*   $$Score(W\_n) = \\sum \\text{Points earned for } W\_n$$

*   **Max Possible Score:** Calculate the maximum points achievable for any single wound ($Score\_{max}$).

*   $$Intensity(W\_n) = \\left( \\frac{Score(W\_n)}{Score\_{max}} \\right) \\times 100$$


#### 3\. Output Thresholds

*   **Primary Trauma Profile:** Highest score ($>70\\%$).

*   **Secondary / Co-Occurring Wound:** Second highest score ($50\\% - 69\\%$).

*   **Low Vulnerability / Dominant Resilience:** If all wound scores remain under $30\\%$, trigger the **Confident Leader / Minimal Active Wound** result profile.


### Diagnostic Assessment Questions

#### Question 1: Reaction to Sudden Changes

_When a close friend or partner suddenly cancels weekend plans at the last minute without a clear explanation, what is your immediate internal reaction?_

*   A. I panic that they are pulling away or losing interest in me. \[W4 - Abandonment\]

*   B. I feel frustrated because my schedule is disrupted and things are out of order. \[W2 - Fear of Losing Control\]

*   C. I immediately wonder if they are hiding something or being dishonest with me. \[W7 - Betrayal\]

*   D. I worry that I did something wrong or upset them to make them cancel. \[W6 - Guilt\]

*   E. I take it in stride, adjust my day smoothly, and move on. \[W0 - Confident Leader\]


#### Question 2: Handling Criticism

_How do you feel when someone publicly points out a mistake you made on a project or task?_

*   A. Deeply ashamed; I feel like my effort meant nothing because it wasn't flawless. \[W5 - Shame\]

*   B. Uncomfortable; I feel like hiding my true feelings so no one judges or ridicules me. \[W9 - Rejection\]

*   C. Angry; it feels deeply unfair, especially if others aren't held to the same standard. \[W8 - Systemic Injustice\]

*   D. Indifferent; I prefer to rely only on myself anyway, so their opinion doesn't change much. \[W3 - Rejection\]

*   E. Objective; I evaluate if the feedback is useful and correct the mistake without taking it personally. \[W0 - Confident Leader\]


#### Question 3: Relationship to Being Needed

_How do you feel when people around you handle a major crisis completely fine without asking for your help?_

*   A. Unneeded or forgotten, as if my value to them disappears when I'm not helping. \[W1 - Emotional Neglect\]

*   B. Relieved that things are handled smoothly, and confident in the outcome. \[W0 - Confident Leader\]

*   C. Suspicious about why they kept me out of the loop or didn't share information. \[W7 - Betrayal\]

*   D. Anxious that I should have offered help sooner and disappointed them. \[W6 - Guilt\]


#### Question 4: Communication Delays

_Your partner or close friend goes silent and takes hours to reply to a text while out. What goes through your mind?_

*   A. "They are abandoning me or distancing themselves." \[W4 - Abandonment\]

*   B. "They are lying or doing something secret behind my back." \[W7 - Betrayal\]

*   C. "I should step back too; it's safer to keep my distance so I don't get hurt." \[W3 - Rejection\]

*   D. "They're probably busy; I'll catch up with them later." \[W0 - Confident Leader\]


#### Question 5: Conflict and Self-Expression

_When a disagreement arises in a group setting, what is your natural tendency?_

*   A. I step in to fix everything and manage the situation so it doesn't spiral into chaos. \[W2 - Fear of Losing Control\]

*   B. I hide my real opinions and agree with others to avoid conflict or rejection. \[W9 - Rejection\]

*   C. I jump in to make sure everyone is treated fairly and double standards aren't applied. \[W8 - Systemic Injustice\]

*   D. I state my position clearly and work constructively toward a resolution. \[W0 - Confident Leader\]


#### Question 6: Interpersonal Guilt

_If someone tells you, "I'm really disappointed in how things turned out," how do you react?_

*   A. I automatically take full responsibility and feel immense guilt for letting them down. \[W6 - Guilt\]

*   B. I immediately jump into problem-solving mode to make myself useful and fix it. \[W1 - Emotional Neglect\]

*   C. I feel defensive because I worked hard to do it perfectly. \[W5 - Shame\]

*   D. I assess if the disappointment is grounded in reality before accepting responsibility. \[W0 - Confident Leader\]


#### Question 7: Vulnerability and Closeness

_When someone tries to get very close to you emotionally, what is your default defense mechanism?_

*   A. I pull away or build a wall; it's safer not to rely on anyone. \[W3 - Rejection\]

*   B. I feel anxious that once they really know me, they will eventually leave. \[W4 - Abandonment\]

*   C. I worry that if I show my true, imperfect self, they will reject or ridicule me. \[W9 - Rejection\]

*   D. I welcome meaningful connection while maintaining healthy personal boundaries. \[W0 - Confident Leader\]


#### Question 8: Workplace & Group Dynamics

_What scenario triggers you the most in a team environment?_

*   A. People changing agreed-upon plans without telling me, creating disorder. \[W2 - Fear of Losing Control\]

*   B. Favoritism, unearned privileges, or baseless accusations against someone. \[W8 - Systemic Injustice\]

*   C. Having my contributions ignored while minor flaws are singled out. \[W5 - Shame\]

*   D. Colleagues being ungrateful or acting like my effort isn't necessary. \[W1 - Emotional Neglect\]


#### Question 9: Trust in Others

_When meeting new people or entering a new relationship, what is your underlying assumption?_

*   A. "I need to be careful; people usually hide things or break promises." \[W7 - Betrayal\]

*   B. "I need to make myself useful so they have a reason to keep me around." \[W1 - Emotional Neglect\]

*   C. "I need to ensure I don't make mistakes so I stay blameless." \[W5 - Shame\]

*   D. "I accept people as they are until they give me a reason not to." \[W0 - Confident Leader\]


#### Question 10: Emotional Independence

_When you feel overwhelmed by personal problems, how do you handle it?_

*   A. I keep it entirely to myself because letting people in usually leads to getting hurt. \[W3 - Rejection\]

*   B. I hide it behind a smile so I don't burden or upset anyone else. \[W6 - Guilt\]

*   C. I try to organize and control every external detail around me to manage internal stress. \[W2 - Fear of Losing Control\]

*   D. I process my emotions, seek support if needed, and take action. \[W0 - Confident Leader\]


### Software Implementation Tip

When storing results in your database:

1.  Store raw counts per wound ID (W1 through W9).

2.  Normalize to percentages (0–100%).

3.  Display a **Primary Trigger Profile** along with a radar/spider chart showing secondary vulnerabilities to give users a nuanced breakdown.
