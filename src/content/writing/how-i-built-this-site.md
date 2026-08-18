---
title: "How I Built This Site"
description: "The tools, the process, and the honest story of turning a two-week sprint into two months — and what actually did the design work."
date: 2026-08-18
featured: true
---

I haven't had a live portfolio site in over a decade.

Not for lack of caring. Building one myself meant learning a level of front-end development I never had reason to pick up, and paying someone else to build a site I'd designed felt like the wrong trade for a personal project. So I did what a lot of designers do: I got away with a Keynote deck. Rebuild it every couple of years, walk someone through it on a call, set it aside. It worked well enough that I never felt real pressure to change it.

At this stage of my career, with a genuine interest in learning AI-assisted coding, that stopped being a good enough reason. This felt like the right project to actually test what tools like Claude and Cursor could do, not as a novelty, but as a real way to close a skill gap I'd been avoiding for years.

I'd also seen good advice on LinkedIn about treating a portfolio less like a finished deliverable and more like a product. Ship the smallest real version first. Get it in front of people. Iterate from there. That approach solved two problems at once: I didn't need a polished case study before I could publish anything, and I could start applying for roles immediately, on the theory that a hiring manager might care more about seeing real evidence of shipped work than reading a deep case study on day one. Case studies can come one at a time, alongside new projects, as the job search continues.

I set a plan to deliver this in two weeks. This turned into two months, because kids aren't well versed in agile methodologies. As with all things in life, I had to be flexible. The shape of the project remained strong, though, so once I was able to focus, I got to work.

## Starting in Figma, staying light on purpose

I began with a lightweight pass in Figma: wireframe, type scale, spacing system, color direction. I deliberately didn't over-polish it there. Part of the exercise was seeing how much I could resolve in the browser, with real components and real constraints, instead of perfecting a static comp before writing a line of code. That decision paid off. The sidebar layout, the reading measure for long-form text, even the final color palette, mostly took shape after seeing an early build, not before it. A Figma file can't tell you how a paragraph reads at 640 pixels. Building can.

To be direct about where the actual design thinking lived: every layout decision, every color, every spacing choice traces back to something I decided, in Figma or in the browser. Cursor executed it. It didn't design anything on my behalf.

## The stack, and why

The site runs on Astro, styled with plain CSS and a token-driven design system: variables for spacing, type, line-height, and color, all traceable back to Figma. No component framework, nothing between me and understanding exactly what every line does. Since sharpening my own fluency was half the point, that mattered more than reaching for something trendier.

Content lives in Markdown, structured as content collections for anything meant to scale, case studies and writing posts especially. That distinction mattered once I decided to publish incrementally. A content collection meant dropping in a new file with just a title and a description, and the page handles whatever content exists, nothing more. GitHub for version control, Vercel for deployment. Push to main, live in about thirty seconds.

## Claude and Cursor, and why both

I used them deliberately, not interchangeably.

Claude was my editorial director: copy, structure, sprint planning, a sounding board for decisions I was working through out loud. Every word on this site started as mine, dictated out loud most of the time, then refined with Claude until it read the way I'd actually say it rather than the way a resume says it. The thinking, the stories, the voice, all mine. Claude's job was making sure the words matched.

Cursor did the building. It has direct access to my files and a terminal, which means it can create and edit code across the whole project, run commands, and produce something concrete instead of describing what I should do myself. Claude can tell me how to structure a token system I'd already designed. Cursor writes the file.

The workflow settled fast: describe the change specifically, review rather than accept blindly, refine with another specific prompt if something was off. Vague prompts got vague results. Specific ones, grounded in a system I'd already agreed on, usually landed close to right the first time.

It wasn't friction-free. Cursor defaulted to new git branches instead of committing to main more than once, which meant changes I thought were live simply weren't. A frozen terminal needed a fresh panel, not a fix. An Astro upgrade silently broke how content collections loaded. None of it was fatal, but all of it was a reminder that AI-assisted doesn't mean debugging goes away. It just shows up in different places.

## What I'd tell another designer considering this

Build the shell before you write a word of real copy. I did navigation, footer, and design tokens first, and that order was right, real content should shape your templates, not the other way around. And don't wait for perfect. This site went live as a V1: a handful of projects with just enough detail to be honest, full case studies to follow as I write them. That's closer to how the work actually happens than waiting six more months for something that would never quite feel finished.
