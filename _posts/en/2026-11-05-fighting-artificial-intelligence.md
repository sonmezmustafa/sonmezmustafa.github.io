---
title: 'Fighting Artificial Intelligence'
ref: yapay-zeka
translated_by: Claude Opus 5.5
description: 'An essay on resistance to new technology, from writing and the printing press to steamboats, calculators and cash machines, on a SAP2000 lesson I never forgot, and on what an engineer should do about AI.'
---

I chose the wrong title, on purpose. This is not a field to fight or go to war with. If you insist on fighting, let me tell you what your weapon is: the pen. The pen is mightier than the sword.

Mind you, this weapon was once seen as a threat too. In Plato’s *Phaedrus*, Socrates tells an old Egyptian story about the invention of writing. Theuth, the god who invented writing, presents his discovery to King Thamus and says people will become more knowledgeable and their memories stronger. The king disagrees. In his view writing will lead people away from using their memories; instead of learning, they will rely on what is written down, and they will have not wisdom itself but its appearance. These words, spoken about two thousand four hundred years ago, are not much different from what is said about artificial intelligence today.

So let us look at some earlier wars and see what history tells us.

In Turkey we all learned at school why the printing press came late to the Ottoman Empire: the sultans banned it, the calligraphers resisted so as not to lose their livelihood, and we fell behind. The historian Kathryn Schwartz went after this story and could not find a single reliable source that said it had seen a decree banning printing on pain of death. Jews had set up presses in Istanbul in the 1490s, and Armenian and Greek presses followed. İbrahim Müteferrika received permission in 1727 and printed his first book in 1729. So the technology was in Istanbul, but it did not spread. There is no single reason for that. Arabic letters change shape depending on where they sit in a word, which made typesetting with movable type difficult. The manuscript tradition ran deep. The economy, the number of readers and the preferences of institutions played a part as well. The lesson I take from this is that having a technology within reach is not enough. You have to understand it, fit it to your own work and, if necessary, change your habits.

For centuries, transport on the water in Istanbul was by rowing boat. The boatmen were a trade of thousands, organised in guilds. In the middle of the nineteenth century steamers began to run on the Bosphorus, and people called them “istimbot”, a corruption of “steamboat”. Şirket-i Hayriye, founded in 1851 as the first joint-stock company in the Ottoman Empire, linked the two shores of the Bosphorus with regular services. There is a story told about this. When the company decided to run Suhulet, its first steamer carrying carriages, between Üsküdar and Kabataş, the boatmen feared they would lose their livelihood and tied their boats in front of the Üsküdar pier to stop it from docking. Gunners were put on board, and the boatmen were told their boats would be fired upon if they did not move them within three minutes. The boatmen pulled back. I understand their anger. But they could not stop the steamer by blocking the pier.

There was a similar fight over the calculator. In 1986 a group of maths teachers in the United States picketed against calculators coming into lessons. Their worry was that children would come to depend on the machine before learning arithmetic. I don’t think they were entirely wrong. Even today we would not think it right for a child who does not know the multiplication table to use a calculator, or for an engineer who does not know basic mathematics to leave all the calculation to a computer. But the answer was not to ban the calculator either. The point was to separate what must be learned from what can be left to the machine. The debate about artificial intelligence largely comes down to the same knot.

Of course, not every story ends so neatly. When cash machines spread in the United States, fewer tellers were needed per branch. But because opening a branch became cheaper, banks opened more branches; overall, the number of tellers did not fall as expected, only the job itself changed. In later years that number appears to have declined along with digital banking. Some professions change, some disappear. Ignoring new technology protects no one; thinking it will be good for everyone is naive.

On this subject there is something I learned from a course I took at university, long before anyone was talking about artificial intelligence.

We had a professor, Çetin Yılmaz, God bless him. We were in our final year. An elective called *Computer Applications for Civil Engineers* had been opened. Five or six curious, slightly crazy students, me among them, had signed up for it.

One day the professor came to class with a stack of paper. They were SAP2000 printouts: pages of calculations, stresses, forces, moments, tables. He put them in front of us and asked us to examine them. We looked. The numbers were in place, the calculations done, the results neat. Looks fine, we said.

Without a word, the professor gathered up the papers and threw them in the bin. Then he told us:

“There was a building going up in Ankara, around Portakal Çiçeği. Passing by with a friend, we were looking at its foundation. The reinforcement was so dense that we said to each other, ‘Man, how is concrete going to get into this foundation?’”

It turned out the values had been entered into SAP2000 incorrectly. The program had calculated with whatever it was given, and out came, if you will forgive the expression, a monstrous amount of reinforcement. What is more, that reinforcement did not stay on paper; it was built. When it came to pouring, getting the concrete in between the bars became a problem in its own right.

The computer had done its calculation and produced pages of output. What was wrong were the inputs, and the computer had no idea.

The professor then went to the board and drew a cross-section that looked like no geometric shape we knew. “Come on,” he said, “write the program that calculates its moment of inertia.” We looked at each other; for a while no one could move a pen. Yet the mathematics we had learned in first year was right there: integrals, Gauss’s theorem, line integrals... But we did not know how to set up the problem with them, or how to turn that into an algorithm. We were talking about writing a program, but we could not set up the calculation the program was supposed to do.

What the professor said that day still rings in my ears:

> Never write the software for a job you don’t know how to do.

Years have passed. I have worked on very different things, from construction to software, from enterprise systems to industrial automation. The languages changed, the computers changed, the methods changed. That sentence never did. Even before artificial intelligence, computers calculated fast and printed neat tables. The question was never whether the computer could calculate; it was whether we understood what the calculation meant.

Plenty of people say artificial intelligence “will change the world”, and plenty say “it is useless”. In debates like this I like to look at measurements.

Its benefits have been measured. Erik Brynjolfsson and his colleagues studied 5,179 customer support agents: with AI assistance, the number of issues resolved per hour rose by 14 percent on average, and for newcomers the increase reached 34 percent. In an experiment by Shakked Noy and Whitney Zhang of MIT with 453 people, writing tasks took 40 percent less time and quality rose by 18 percent.

A study by Harvard and Boston Consulting Group with 758 consultants shows the other side. On work AI is good at, the consultants’ performance rose considerably. But on a task where AI got it wrong, those who used it found the right answer 19 points less often than those who did not. Neat-looking output can lead you to the wrong conclusion. Like the papers Professor Çetin threw in the bin.

METR ran a study in early 2025 that concerns software developers. When experienced open-source developers used AI tools on projects they knew well, their work took 19 percent longer on average. The odd thing is that, although they had slowed down, they thought they had become about 20 percent faster. The result is limited to the tools of that time and to those developers; we cannot say the same of every system today. But one thing is certain: feeling that a tool saves you time does not mean it really does.

Developing software for different sectors at Codigno today, I run into the same thing. Enterprise software, ERP, industrial automation, systems that talk to devices: the technology changes, the basic problem usually stays the same. What the customer asks for is not always [what they need](/en/posts/starting-to-program/). They ask for a report, and the problem turns out to be that the data is collected wrongly. They ask for a more powerful server, and the solution turns out to be fixing a badly written query. AI can solve a badly described problem very fast too, and the code it writes looks spotless at first glance. Professor Çetin’s lesson sits right at the centre of the work I do today.

So what should an engineer do?

First, not put down the pen. By the pen I mean thinking, questioning, being able to describe the problem. For that there is [a question I care about a great deal](/en/posts/ask-why-first/): why? Someone who gives AI instructions without asking it ends up solving the wrong problem very fast.

Then, not let go of the fundamentals. To calculate the moment of inertia of the section Professor Çetin drew on the board, you first had to know the mathematics; the programming language came after. Today too, a software developer needs to know algorithms, data structures and databases, an electrical engineer the circuit, and a civil engineer the balance of forces. However complex the calculation, the concrete will in the end have to get between those bars. [Everything we do has a counterpart in the real world](/en/posts/thinking-simply-in-engineering/). Someone who does not know the fundamentals often cannot see why the result in front of them might be wrong.

Measure. You may be writing code faster with AI. But how long do testing that code, debugging it and maintaining it take? Productivity is not measured by how fast the first output arrives. Where AI is good and where it is poor also has to be learned by trying, again and again.

Then there is responsibility. The engineer signs the project; whoever does the calculation, the responsibility is theirs. The one who entered the wrong value into SAP2000, the one who put the resulting reinforcement into the project and the ones who built it were all people. The computer had only calculated what it was told. When production stops at a factory or a customer’s work is disrupted, you cannot say “the AI said so”.

Once, “computer” was the name not of a machine but of a job. At NACA, the predecessor of NASA, that is what the women who did flight calculations by hand were called. Dorothy Vaughan was one of them, and in 1949 she became head of her group. When electronic computers arrived, she saw that the calculations they had been doing for years would now be done by machines. She did not oppose the machines. She taught herself FORTRAN, then taught it to the women in her group. What moves me most in this story is that she taught her group what she had learned.

In software, especially for young people, we are going through a similar period. In the past, even a simple job meant reading documentation, getting errors and trying again. Now a working solution arrives in a few seconds. That is a great opportunity. But finding the solution to a problem and learning how the problem is solved are different things. I am not against a young developer using AI. But I expect them to be able to explain what their code does, why they chose that approach and where the system might break. That the biggest gains in Brynjolfsson’s study went to newcomers matters for this reason too; with the right guidance, AI can speed up their learning.

Professor Çetin putting those printouts in front of us and then throwing them in the bin was a way of teaching too. He had taught us not how to use SAP2000 but to question why we trust the result a computer gives. Everyone who trains young engineers today faces the same task. The generation that uses new tools fastest must not be the one with the weakest fundamentals. AI can explain a subject in different ways and go over the part you do not understand again and again; it can help a great deal with learning. As long as we do not leave it the last word.

Socrates’s worry about writing was not entirely groundless either. How many of us today know the phone numbers of our closest people by heart? But without writing, the knowledge humanity has gathered could not pass from generation to generation on today’s scale. Artificial intelligence, too, will make some work easier, change some professions and put some people in a difficult position. Turning our backs on it is wrong, and so is accepting whatever it gives without question.

Sometimes I wonder: if they put the papers Professor Çetin threw in the bin in front of us today, what would we do? We would probably upload them to an AI tool and get long explanations within seconds. And to tell whether those explanations were right, we would still need to know engineering.

So the real fight is not with artificial intelligence but with ourselves. With not giving up thinking, not mistaking a fast result for a right one, and not handing the responsibility for our work over to a machine. Use AI, try it, object to it when you need to. But do not hand it your mind.

Do not put down the pen.

---

Sources

1. Plato, *Phaedrus*, 274c–275b.
2. Schwartz, K. A. (2017). “Did Ottoman Sultans Ban Print?” *Book History*.
3. Koraltürk, M. (2007). *Şirket-i Hayriye (1851–1945)*. İstanbul Deniz Otobüsleri Yayınları.
4. Bozoğlu, A. (2020). “İstanbul Sularında Araba Vapurları.” alibozoglu.com.
5. Hochman, A. (1986). “Math Teachers Stage a Calculated Protest.” *The Washington Post*.
6. Bessen, J. (2015). “Toil and Technology.” *Finance & Development*, IMF.
7. Brynjolfsson, E., Li, D. and Raymond, L. (2025). “Generative AI at Work.” *The Quarterly Journal of Economics*, 140(2), 889–942.
8. Noy, S. and Zhang, W. (2023). “Experimental evidence on the productivity effects of generative artificial intelligence.” *Science*, 381(6654), 187–192.
9. Dell’Acqua, F. et al. (2023). “Navigating the Jagged Technological Frontier.” Harvard Business School Working Paper 24-013.
10. METR (2025). “Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.”
11. Shetterly, M. L. (2016). *Hidden Figures*. William Morrow.
