---
title: 'Thinking Simply in Engineering'
ref: basit-dusunmek
translated_by: Claude Opus 5.5
section: engineering
permalink: /en/engineering/thinking-simply-in-engineering/
description: 'An essay on looking at things simply in engineering and never forgetting the physical side of the work, from load paths to quartz crystals.'
---

Whatever branch of engineering you work in, I think there is one rule that does not change: look at things as simply as possible, and never forget that everything we do has a physical counterpart.

By simplicity I do not mean taking matters lightly. A calculation running to pages, complex mathematics, or a system made of thousands of parts does not remove the simplicity at its base.

Think of a building standing up, or a car moving. A few basic principles that Newton set out centuries ago, such as F = m·a and the balance of forces, are the starting point of all these calculations. Of course, the earthquake analysis of a building runs to pages, thousands of engineers work on the design of a car, and developing a processor can take years. I do not belittle any of this. What I want to say is this: as complexity grows, the basic principles do not change; only applying them gets harder.

One of the first concepts we learn in civil engineering is the “load path”. Think of the weight of snow falling on a roof. That load passes through the structural members to the beams, the columns, the foundation and finally the ground; it does not vanish somewhere along the way. If, when reviewing a project, you try to understand how the load reaches the ground before getting into the calculations, you can sometimes spot in a few minutes a problem you would miss after hours of calculation.

For example, if you cannot explain how a column transfers its load to the structural system below, you need to stop there and think. Perhaps there is a transfer beam, perhaps some other solution was intended. But first you must know where the load goes. I think good engineering is partly this: understanding what you are calculating before you calculate it.

It is no different in electrical work: V = I·R. Imagine you have run a hundred metres of cable to a sensor in the field and you are not getting the value you expect from it. Is the problem in the sensor, in the device’s software, in the communication? Perhaps you did not take the cable’s resistance into account. A voltage drop occurs in a conductor carrying current, and in some systems that drop can affect the measurement. Before opening the device’s manual or changing its settings, thinking about where the current flows and where the voltage drops is often the beginning of the solution.

The 4–20 mA measurement systems widely used in industry are another good example. Why not 0–20 mA? Because even when the measured quantity is zero, 4 mA flows through the line. When you see zero current, you know it is not a normal reading; a cable may have broken, the device may have lost power, or some other fault may have occurred. It is an extremely simple idea, but for years it has made countless problems easier to find in industrial automation.

When we move to software, though, we sometimes lose this habit of thinking physically. The variables, functions, files and services we see on screen feel like abstract concepts. Yet every running piece of software ultimately comes to life on a physical system. The value of a variable is represented by a physical state in memory. A file is stored through magnetic or electrical states on a storage medium. A processor computes by changing the states of transistors. We press a button on the screen, and behind it millions of physical events take place.

That is why, when an application slows down, my first question is usually: where is it waiting? Is it reading data from disk? Waiting for a reply from the network? Is the processor busy? Or are operations waiting for one another? Of course there may be more complex software causes underneath. But once you find in which resource and at which stage the problem arises, you narrow down the possible solutions considerably.

The same approach holds for computer networks. Inside a fibre-optic cable, light travels at about 200,000 kilometres per second. Imagine you want to reach a server in Frankfurt from Ankara; the distance between them is more than two thousand kilometres. Even if we assume the cable takes no detours and no device along the way adds any delay, the round trip takes at least 20 milliseconds. In reality cables follow longer routes, and the network devices in between also take time. Whatever programming language you use, you cannot make light go faster. Knowing this, you are more realistic when judging the latency of an application that works over a network: you first understand the physical limit, then look for the part you can improve.

In fact, what I am trying to say in all these examples is the same. The way to understand a complex system starts with being able to ask the simplest questions. What is happening here? What is going from where to where? Which force, which current, which data, which energy is being transferred? And perhaps most importantly: do I really know why this works the way it does?

Now I would like to ask those who work with computers a small question: how does a computer know that a second has passed? You write a program, and it tells you that an operation took 650 milliseconds. You open the stopwatch on your phone, and the seconds tick by. So how does the computer measure that one second? You can find the answer with a quick search online. But before you search, I would like you to think about it for a minute.

There is no one inside the computer who knows the time. Nor is there an abstract second that runs on its own, independent of nature. At the most basic level, we are counting a physical event that repeats at regular intervals.

One of the best-known examples of this is the quartz crystal. Quartz has an interesting property: when excited electrically, it can vibrate mechanically at certain frequencies, and electronic circuits obtain a time reference from these regular vibrations. One of the quartz crystals commonly used in clock circuits vibrates 32,768 times a second. Why 32,768? Because this number is 2 to the 15th power. By halving the frequency again and again, you arrive at one pulse per second.

Modern computers and phones also use much faster clock sources, oscillators and hardware counters. But the basic idea does not change: measuring time by counting physical events that happen regularly. Your phone corrects its clock from the network or the internet from time to time, because physical clock sources are not perfect either; temperature and other factors cause small drifts. But it keeps track of the time between two corrections with its own hardware.

Behind the way an extremely complex device measures time there is, at bottom, a regular vibration and a circuit that counts it. A stone and a counter.

This is one of the things that strikes me most in engineering. Over the years we build more complex systems, use more powerful computers and develop bigger projects. Our computing power grows, and the tools we use change. But the laws of nature do not change to suit our technology.

Perhaps maturing in engineering is not learning to think about everything in more complex ways, but being able to see the simplicity inside things that look complex.

Because before solving a problem, you need to understand it. And understanding usually begins with asking the right question.

**What is really happening here?**
