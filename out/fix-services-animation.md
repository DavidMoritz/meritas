# Task: Fix Services Page Animation

**Status:** Pending

## Objective

Remove extra animation on load from the services page. The animation should only happen on initial site load, not when navigating to the services page.

## Problem

Currently, there's an animation that plays every time you navigate to the services page. This should only happen on the initial site load.

## Steps

1. Locate the services page animation code
   - Check `src/routes/services.tsx` or equivalent
   - Check services template components in `src/components/_templates/`

2. Identify the animation trigger mechanism
   - Is it using Motion (Framer Motion)?
   - Is it CSS animations?
   - Is it triggered by component mount?

3. Implement solution to only animate on initial page load:
   - Option 1: Use sessionStorage to track if initial load has occurred
   - Option 2: Use router state to detect direct page load vs navigation
   - Option 3: Conditional animation based on navigation type

4. Test the fix:
   - Hard refresh should show animation
   - Navigating from another page should NOT show animation
   - Navigating back to services should NOT show animation

## Files to Review

- `src/routes/services.tsx` or services route
- Services template components
- Any shared animation utilities

## Testing

- Test initial page load (hard refresh on `/services`)
- Test navigation from home → services
- Test navigation from other pages → services
- Test browser back button behavior

## Commit Message

```
Fix services page animation to only trigger on initial site load
```
