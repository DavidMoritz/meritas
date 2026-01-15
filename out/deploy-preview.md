# Task: Deploy Preview [Optional]

**Status:** Pending

## Objective

Deploy the site to a temporary URL for team review before final deployment.

## Team Reviewers

- Drew
- Jess
- [Your name]

## Deployment Options

### Option 1: Vercel
```bash
npm run build
npx vercel --prod
```

### Option 2: Netlify
```bash
npm run build
npx netlify deploy --prod
```

### Option 3: GitHub Pages
- Build and deploy static version
- May require SSR configuration changes

### Option 4: Traditional Hosting
- Build production bundle
- Upload to staging server

## Steps

1. **Prepare for Deployment**:
   - Run `npm run check` to verify code quality
   - Run `npm run build` to test production build
   - Test production build locally with `npm run preview`

2. **Choose Deployment Platform**:
   - Consider team's existing infrastructure
   - Check what's easiest for temporary preview

3. **Deploy**:
   - Follow platform-specific deployment steps
   - Ensure environment variables are set correctly
   - Verify SSR is working if applicable

4. **Share with Team**:
   - Send preview URL to Drew, Jess, and team
   - Include list of what to review
   - Set expectations on timeline

5. **Gather Feedback**:
   - Create `out/preview-feedback.md` for tracking
   - Incorporate feedback before final deployment

## Environment Variables to Configure

Check `src/env.ts` for required variables:
- `SERVER_URL`
- `VITE_APP_TITLE`
- Any other production-specific vars

## Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms display properly (even if not functional)
- [ ] Images load
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Fast page loads

## Timeline

- Preview deployment: Before final deployment
- Final deployment: Tonight or tomorrow morning

## Commit Message

```
Add deployment configuration for preview environment
```

## Notes

This task is optional but recommended for team alignment before going live.
