# New Scenario Checklist

Steps to add a new situational playbook entry.

## Creating the entry

- [ ] Copy `playbook/_template.html` to `playbook/[situation-slug].html`
- [ ] Fill in all six sections: Situation, Applicable Principles, What to Avoid, Recommended Approach, Example Language, Follow-Up
- [ ] Update the `<title>` tag

## Linking it up (manual for now)

- [ ] For each principle tagged in the entry, open its page in `principles/` and add a link in the "Playbook entries" section

> **Note:** There's no automatic linking between playbook entries and principle pages — each connection has to be added by hand. If the playbook grows large, consider replacing the per-principle placeholder with a shared index (e.g. a `playbook/index.html` or a small JSON file that drives both the home page and principle pages).
