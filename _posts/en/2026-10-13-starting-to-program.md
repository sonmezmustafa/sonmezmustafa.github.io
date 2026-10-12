---
title: Starting to Program
ref: programlamaya-baslamak
description: 'On understanding the problem before writing code: listening, acting the process out together, and only then designing the solution.'
---

When we start programming, we talk about which language to use and what kind of architecture to build. All of these have their place. But I think the work needs to start a little earlier: what are we trying to solve?

In the end, the program we write will do a job. It will make someone’s work easier, prevent an error, speed up a task. To be able to do these, we first need to learn how that work runs today and where it breaks down.

What is more, the problem may not be the first thing the customer tells us.

Most of the time the customer brings, along with the trouble they are having, the solution they have in mind. “We want an approval screen here,” they say. Perhaps an approval screen really is needed. But if we start drawing the screen right away, we may miss why that request came up. Are people carrying out transactions beyond their authority? Is it unclear who makes the decision? Or does no one get to hear about what was done? Each of these may call for a different solution.

That is why we need to listen first. It is hard for someone who does not listen to solve a problem anyway. If screens, tables and workflows have started forming in our heads before the other person has finished speaking, after a point we may hear only the parts that fit our own solution.

The question I find useful here is this: “The last time this problem happened, what happened? Could you tell me from the beginning?”

Because it is hard to design a program from the sentence “Our purchasing process is messy.” But we can talk about why a material that was requested last week could not be bought. Who opened the request? Whom did they inform? Where did it wait? Who noticed it was waiting? What was done then?

As the event is told, details that went unheard in the first conversation start to surface. You learn that a step said to exist in the system is actually handled by phone. You see that a rule everyone is assumed to know changes from person to person. And sometimes it turns out that what was described as the problem is the result of an earlier breakdown.

For this, we need to give the person we are talking to a setting in which they can describe the current way of working comfortably. If we correct every sentence, act surprised at every habit or immediately find a fault, the conversation changes. While wanting to learn what is really done, we may start hearing the process as it ought to be.

After listening, we should not assume we have understood, either. Here I find it useful to treat the work a little like theatre. The process that was described needs to be acted out together.

“Now you are in the warehouse. You have seen that a material is running low. What do you do first?”

“I open a request.”

“Whose desk does the request land on?”

“The department manager’s.”

“And if the manager is away that day?”

Most of the time the real conversation starts here.

Everyone can more or less describe the normal flow. But we need to ask what is done when someone is on leave, when a request is opened incorrectly, when the quantity changes or when the job is urgent. These happen in the course of daily life, and we should know that the program we write will meet these situations too.

This is exactly what I mean by theatre: the people are known, the information they hold is known, what they can do is known. Something happens and everyone does something in turn. And we move the scene forward. If necessary we stop somewhere and go back to the beginning.

“Wait a minute, how did this person learn that the request was rejected?”

If we cannot answer this question, there is a place in the flow we have not yet solved.

It is not enough to picture the process in our own minds. The customer needs to see the same thing too. Sometimes drawing a few boxes is enough, sometimes showing a sample form, sometimes simply talking a single request through from start to finish. What matters is finding out whether we are thinking of the same operation when we use the same words.

I try not to hold this conversation with the customer in technical terms. If the person in front of us does not have a technical role, they do not have to know the structure of the database or the architecture we will use. What they will judge is how their work will run.

Instead of saying “We will implement role-based authorisation”, it is clearer to say “The warehouse worker will be able to open the request, purchasing will enter the prices, and you will approve purchases above this amount.” What is more, they can object to this sentence. They can say, “No, my approval is not needed at that amount.” That response is exactly what we need.

Their listening to a technical explanation and nodding may not mean they have understood us. Sometimes they do not want to say they have not understood; sometimes they leave the detail to us. And we may take this for agreement. Then, when the program is delivered, we hear the sentence “This is not what I had in mind.”

That is why, instead of asking “Are we agreed?”, it is more useful to work through an example. Opening a transaction together, changing it, rejecting it, completing it. Watching where the user hesitates. Can they find the next step without us explaining? Can they make a decision with the information they see on the screen?

Also, the person we talk to and the person who will use the program may not always be the same. The manager wants to see the report; someone else enters that report’s data. If we design only the report without understanding the work of the person who will enter the data, we may later have to deal with missing or unreliable data. If possible, we should listen to the person who actually does the work, and even watch how they work for a while.

After all this, we should be able to write the problem down in a few sentences. What is happening today? Whom does it affect, and how? What do we expect to change once the program is in use?

The sentence “A purchasing module will be built” does not tell me much about this. But when we say “No one can see who a request is waiting with; employees call each other to find out the status”, a problem we can work on emerges. And when we evaluate the solution, we have a yardstick to look back at: do people still have to make the same phone calls?

Sometimes, at the end of this examination, we may also see that no new program is needed. Clarifying who has authority, a small change in the existing system or properly explaining a feature that is not being used may be enough. Being able to say so is also part of our job.

This is how I think about starting to program. First listening, then testing together what you have understood, and after that designing the solution. Decisions about the programming language and the architecture also rest on firmer ground with this information.

When I sit down to write code, I would like at least to be able to answer this question: what job does the person who will use this program struggle to do today, and how will what I write help them?
