# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML/CSS/JS site — no build step, no framework, no dependencies. Open `index.html` directly in a browser to run it.

## Architecture

The site has two content layers that must be kept manually in sync:

**Principle pages** (`principles/*.html`) — one page per core principle (empathy-tone, clarity-brevity, conflict-resolution, situational-awareness, principled-negotiation, influencing-without-authority). Each contains reference content and a "Playbook entries" section listing links to relevant playbook entries.

**Playbook entries** (`playbook/*.html`) — situation-specific guidance pages. Each tags 1–3 applicable principles and links back to them. The connections between playbook entries and principle pages are maintained by hand — there is no automated linking.

**Shared assets:** `css/styles.css` is a single shared stylesheet used by all pages. `js/main.js` handles only active nav highlighting. All pages use the same header/footer structure with relative paths adjusted for depth (`../` for pages in subdirectories).

## Adding a New Playbook Entry

Follow `new-scenario-checklist.md`:

1. Copy `playbook/_template.html` to `playbook/[situation-slug].html`
2. Fill in all six sections: Situation, Applicable Principles, What to Avoid, Recommended Approach, Example Language, Follow-Up
3. Update the `<title>` tag to `[Situation Title] — Communications Skill Builder`
4. For each principle tagged, open its page in `principles/` and manually add a link in the "Playbook entries" section

## Conventions

- Path depth matters: root pages use `css/styles.css` and `js/main.js`; pages in subdirectories use `../css/styles.css` and `../js/main.js`
- CSS variables are defined in `:root` in `styles.css` — use them rather than hardcoding colours
- The accent colour is `--color-accent: #3d5a80`
- Page titles follow the pattern: `[Page Title] — Communications Skill Builder`
- Update the `<!-- Last updated: YYYY-MM-DD -->` comment in README.md when making content changes

## Git

- Do not include `Co-Authored-By` lines in commit messages
