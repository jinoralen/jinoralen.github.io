---
title: 'Sculpting vs building software with AI'
description: 'Two ways of working with coding agents. Both need the same decisions to be made; what differs is who makes them and when.'
date: 2026-10-23
updated: 2026-10-27
tags: [ai-agents, software-design]
draft: false
---

Recently I have noticed changes in my workflow: I discuss the changes I need to make with the agent, ask it to write a plan and then approve it without reading. The planning step is still there, but the plan is now something for the agent to follow rather than something for me to review.

## Building: one step at a time

Before LLMs I solved problems step by step. If a problem was too big, I decomposed it into smaller ones. I researched what I didn’t understand, tried different solutions and wrote code until the problem was solved. I chose tools and planned how the parts would fit together. Agents can now handle some of these steps, but the steps are still there - we just don’t always see them.

A lot of the work comes down to making decisions: what is important and what isn’t, how to split a task into subtasks, what to learn, what to use, how pieces should come together and so on. And then there are many smaller choices that we make without even noticing. Agents can make these decisions too but I prefer to make important decisions on my own when building software.

The advantages of this approach:

- I can keep the agent on track by discussing important decisions.
- Code produced for small tasks is easier to review.
- I still understand how the project works under the hood.
- Changes made by the agent are more predictable.

The cost is attention and time. I need to read the plan, make decisions, review the code. The agent can produce all of this faster than I can check it, so keeping up gets harder and becomes overwhelming in the long term.

## Vibe coding: decisions you didn’t make

Vibe coding feels more like sculpting to me. I describe what I want, try the result the agent produces and ask for changes. I can add details, remove things or change direction without knowing how the code works. It’s easier to decide what I want when I have something to try. But the result is the same as before - a folder with source code. The decisions are still there - we just get them in a different way now.

The agent still has to choose tools, design the structure and decide how to connect all the pieces. Some choices follow from the prompt or earlier conversation. For anything I haven’t specified explicitly - the agent makes its own choices and I may not notice them until I ask for a change.

This makes vibe coded changes hard to predict. Starting a project is easy but after some time it’s hard to tell how much time or how many attempts the next change will take. Earlier decisions may conflict with new ones or the codebase may become too large for the agent to follow. I don’t always know the cause and that makes it harder to make the project production ready.

## Why I stopped reading plans

I like building. I want to understand what I’m working on. But as agents get better and produce results faster I’m expected to get more done too. I think that’s why I stopped reading plans: I’m trying to keep working as before but I just can’t keep up with the increased cognitive load.

The decisions still need to be made. What changes is who makes them and when. I’m OK with leaving some of them to the agent but I want to know what it chose so I can change those choices if they cause problems later.
