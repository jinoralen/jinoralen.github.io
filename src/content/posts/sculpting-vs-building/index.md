---
title: 'Sculpting vs building software with AI'
description: 'Two ways to work with coding agents, the decisions each leaves to you, and why I shift between them.'
date: 2026-10-23
tags: [ai-agents, software-design]
draft: true
---

Lately I keep catching myself doing something I used to avoid: asking an agent for a plan, then telling it to implement the plan without really reading it. Reviewing every decision takes time and it's tempting to keep moving. Without even noticing, I've been sliding from one way of working to another. I’ve been sliding from building to sculpting.

## Building: decide, then implement

Process of building is familiar to anyone who has worked on software projects before LLM - you start from gathering all requirements, planning, breaking feature into smaller tasks. Then after you start writing code for first task, testing it, reviewing the result, then repeat for next task and so on. Like laying bricks, each step adds to a structure whose shape you've created in your mind beforehand.

The main advantage of such approach is predictability - usually plan covers all important and less important decisions that allow to constrain agents that implement it so they don't wander off the specified task, and in the end most of the time you get what you asked for. Other advantage of is that changes are coming in smaller portions and easier to review, so you can adjust plan early before agent starts to deviate to much from what you have in mind

But the cost is high - your attention. You need to make discover and make those decisions upfront, review every plan, then review results to ensure that everything is on track. With models getting smarter expectancy of results increase and at some point you just can’t keep up because the pile of all these changes can become overwhelming.

## Sculpting: implement, then react

Sculpting is process where artists start from lump of clay or some maybe rocks - at first it starts from rough shape where you can't see original intent but with every move sculptor adds some details here and there until you start to see the final form of sculpture. 

The same principle can be applied to building projects using AI - it starts with initial prompt where we ask the agent to implement some feature or a first version of a product. The first result isn't the product yet - it's more like a lump of clay to work with. We can try it, see what's off, and then reshape it to fit our vision. Each follow-up fills in a rough part or cuts away something that shouldn't be there.

Sculpting makes it easier to start. We don't have to resolve every question upfront, and we can iterate on large changes quickly. The biggest downside is that decisions still have to be made sooner or later. If we don't make them, the agent fills the gaps while implementing the prompt: how to store data, where behavior belongs, which edge cases to handle, what to leave out. Some of those choices will match what we had in mind. Others won't, and the result can be very different from how we pictured in mind when we wrote the prompt. And the bigger the change, the bigger the chance that something goes wrong.

## Hidden complexity

When you trying to sculpt your next app each broad prompt or any follow-up can ripple through the whole codebase, not only the part you're looking at. The interface gets closer to what you want, while the knowledge of the product internals falls out of date. That gap is the risk I worry about most. And the pressure to accept that gap keeps growing. 

Agents can now automate almost any coding task, and everyone is trying to ship features and products as fast as possible. Each new model is smarter than the last, and the expected productivity gain climbs from 2x to 5x, 10x, 100x. The number of decisions to make grows with it, and so does the cognitive load. As result people build less and sculpt more. I understand why: my habit of approving unread plans is the same slide.

The problem is that at some point sculpting stops working. The codebase grows past what the agent can hold in context without losing important details, or the requirements get too complex to fit in a prompt. A fix in one place breaks something elsewhere. A change that sounded local turns out to affect code that was added based on several earlier choices. And at that point we have to dive into the code, figure out what's actually happening, reconstruct decisions we never made.

## Finding balance

For now I try to keep a balance between these two ways of work. When I start something new or prototype an idea, I sculpt my way to an MVP. At that stage, it's the fastest way to get something out the door and see if it’s worth investing more time in it. And when I decide that I need to deliver something production-ready, I shift toward building, to slow down entropy in the long run. That doesn't mean reviewing 100% of every plan, spec, and line of code. It means making more of the decisions myself, leaving fewer of them implicit for the agent, and staying as close to the codebase as I can. 

So sculpting buys speed at the start, and building pays it back later, before the codebase gets too tangled and complicated to change something in it. That's what works for me for now. The balance will probably shift as models improve and they would allow to discover which decisions are more important right now and which can be delayed for future.

Another strategy that in my opinion allows to workaround these limitations is deliberately build small tools that do one or two thing well. But usually it's really hard to say "stop" when the next feature is one prompt away. As long as the product keeps growing, with current models I think it's only a matter of time before fixing everything with "just one more prompt" will stop working.

What do you think? Which one are you: a sculptor or a builder?
