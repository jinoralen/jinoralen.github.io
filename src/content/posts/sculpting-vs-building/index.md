---
title: 'Sculpting vs building software with AI'
description: 'Building and sculpting with coding agents require the same decisions. What differs is who makes them, and when.'
date: 2026-10-23
tags: [ai-agents, software-design]
draft: false
---

Lately I keep catching myself doing something I used to avoid: asking an agent for a plan, then telling it to implement the plan without really reading it. Reviewing every decision takes time and it's tempting to keep moving. Without noticing, I've been sliding from building software to sculpting it. Either way, the same decisions have to be made. The difference is who makes them, and when.

## Building: decide, then implement

The process of building is familiar to anyone who worked on software before LLMs: you gather requirements, plan, and break the feature into smaller tasks. Then you write code for the first task, test it, review the result, and repeat for the next one. Like laying bricks, each step adds to a structure whose shape you've created in your mind beforehand.

The main advantage of this approach is predictability — the plan usually covers the important decisions, which constrains the agents implementing it so they don't wander off the specified task, and in the end most of the time you get what you asked for. Another advantage is that changes come in smaller portions and are easier to review, so you can adjust the plan early before the agent starts to deviate too much from what you have in mind. And because you made the decisions, you know how the product works under the hood.

But the cost is high — your attention. You need to discover and make those decisions upfront, review every plan, then review results to ensure that everything is on track. As models get smarter, expectations rise, and at some point you just can't keep up because the pile of all these changes can become overwhelming.

## Sculpting: implement, then react

A sculptor starts with a lump of clay or a block of stone. At first it's a rough shape where you can't see the intent, but with every move the sculptor adds detail until the final form appears.

The same principle can be applied to building projects using AI — it starts with initial prompt where we ask the agent to implement some feature or a first version of a product. The first result isn't the product yet — it's more like a lump of clay to work with. We can try it, see what's off, and then reshape it to fit our vision. Each follow-up fills in a rough part or cuts away something that shouldn't be there. Vibe coding is the careless end of this: accepting whatever comes out without a clear picture of the result. Sculpting can be just as fast, but the sculptor still has a vision and checks each result against it.

Sculpting makes it easier to start. We don't have to resolve every question upfront, and we can iterate on large changes quickly. The biggest downside is that decisions still have to be made sooner or later. If we don't make them, the agent fills the gaps while implementing the prompt: how to store data, where behavior belongs, which edge cases to handle, what to leave out. Some of those choices will match what we had in mind. Others won't, and the result can be very different from what we pictured when we wrote the prompt. And the bigger the change, the bigger the chance that something goes wrong.

## Decisions you didn't make

Agents can now automate almost any coding task, and everyone is trying to ship features and products as fast as possible. Each new model is smarter than the last, and the expected productivity gain climbs from 2x to 5x, 10x, 100x. The number of decisions to make grows with it, and so does the cognitive load. As a result, people build less and sculpt more. I understand why: my habit of approving unread plans is the same slide.

Clay has no hidden internals: what you see is all there is. Software does. When you're sculpting your next app, each broad prompt or any follow-up can ripple through the whole codebase, not only the part you're looking at. The interface gets closer to what you want, while your knowledge of the product's internals falls out of date. That gap is the risk I worry about most.

The problem is that at some point sculpting stops working. The codebase grows past what the agent can hold in context without losing important details, or the requirements get too complex to fit in a prompt. A fix in one place breaks something elsewhere. A change that sounded local turns out to affect code that was added based on several earlier choices. And at that point we have to dive into the code, figure out what's actually happening, and reconstruct decisions we never made.

## Finding balance

For now I try to keep a balance between these two ways of working. When I start something new or prototype an idea, I sculpt my way to an MVP. At that stage, it's the fastest way to get something out the door and see if it's worth investing more time in it. And when I decide that I need to deliver something production-ready, I shift toward building, to slow down entropy in the long run. That doesn't mean reviewing 100% of every plan, spec, and line of code. It means making more of the decisions myself, leaving fewer of them implicit for the agent, and staying as close to the codebase as I can.

Another way around the limits of current models is to deliberately build small tools that do one or two things well. But usually it's really hard to say "stop" when the next feature is one prompt away. As long as the product keeps growing, with current models I think it's only a matter of time before fixing everything with "just one more prompt" will stop working.

Both approaches can get you to the same product, because the same decisions have to be made either way. Sculpting borrows speed by leaving them to the agent; building pays the debt back by taking them back before the codebase gets too tangled to change. That's what works for me for now. The balance will probably shift as models improve and help sort out which decisions matter now and which can wait.

What do you think? When do you switch from sculpting to building?
