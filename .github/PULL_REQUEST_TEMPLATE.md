<!-- Title: <type>(<scope>): <description>  — scope is mandatory. See pull-request-craft. -->

<Why this change exists. One or two sentences. Does not repeat the title.>

<!-- When a GitHub issue exists, add a line here reading: Closes #N
     It closes the issue on merge. Omit entirely when there is no issue. -->

## Summary

<!-- One bullet per change a reviewer would see in the diff, with concrete values.
     A change in the diff and missing here is the defect this section exists to prevent. -->

- <change>

## Test plan

<!-- Each item: an action someone performs and a result they can observe.
     Check a box only for what you actually ran. -->

Preview deploy:

- [ ] <action> -> <observable result>

After merge:

<!-- Delete this block when the change cannot reach production on its own
     (docs-only, or a path no workflow trigger covers). Never leave it empty. -->

- [ ] <action> -> <observable result>

## Out of scope

- <what someone could expect here and will not find, with the reason>
