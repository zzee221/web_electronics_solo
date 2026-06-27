# High-Quality Affiliate Review Page Standard

## Purpose
This document defines what makes a "good" affiliate review page — one that ranks in organic search, earns real commissions, and can serve as a paid-ads landing page when needed.

Use this standard as both a **creation guide** and a **self-checklist** when producing review content.

---

## I. SEO Standard: The Page Must Earn Organic Traffic

### 1. Search Intent Match (Critical)
- **Informational queries** (e.g., "skyrover s1 review"): The page must answer "Is it good? What's the catch? Who's it for?" within the first 300 words.
- **Commercial queries** (e.g., "best mini drone under 250g"): The page must include a comparison table and a clear winner recommendation.
- **Transactional queries** (e.g., "buy skyrover s1"): The page must show price, availability, and a prominent purchase CTA above the fold.

**Self-check**: If a user lands on this page from Google after searching [target keyword], can they find the answer without scrolling more than one screen?

### 2. E-E-A-T Signals
- **Experience**: Include hands-on observations ("In our testing...", "After flying 20+ flights..."). Even if research-based, write with specificity.
- **Expertise**: Use correct technical terminology. Include spec tables with precise numbers.
- **Authoritativeness**: Link to official sources, independent reviews (The Verge, Reddit, B&H), and competitor specs.
- **Trustworthiness**: Include a clear disclaimer, honest cons (never 100% positive), and updated publish dates.

**Self-check**: Does this page look like it was written by someone who actually used the product, or by someone scraping Amazon bullet points?

### 3. On-Page SEO Checklist
| Element | Standard |
|---|---|
| Title Tag | Contains primary keyword + angle + brand. Under 60 chars. Example: "Skyrover S1 Review: Best Sub-249g Drone Under $300?" |
| Meta Description | Contains primary keyword, a benefit, and a hook. Under 160 chars. |
| H1 | Contains primary keyword. Only one H1 per page. |
| URL Slug | Short, keyword-rich, hyphen-separated. Example: `/review/skyrover-s1-vs-x1/` |
| Image Alt Text | Descriptive, keyword-natural. Not "image1.jpg". |
| Internal Links | Link to 2-3 related reviews or guides on the same site. |
| External Links | Link to 3-5 authoritative sources (official specs, independent reviews). |
| Structured Data | JSON-LD for Article + Product + Review + FAQPage. |
| First 100 Words | Must contain primary keyword and a clear value proposition. |
| Content Length | Minimum 1,500 words for niche products; 2,500+ for competitive keywords. |
| Table of Contents | For pages over 2,000 words. Improves CTR in SERP (jump links). |

### 4. Technical SEO
- **Page Speed**: LCP < 2.5s, CLS < 0.1, FID < 100ms. Astro static sites handle this well; watch image sizes.
- **Mobile-First**: Hero section must look good on 375px width without horizontal scrolling.
- **Canonical URL**: Must match the live URL exactly.
- **Robots**: Must be indexable (`noindex` is only for thin/tag pages).

---

## II. Conversion Standard: The Page Must Make Money

### 1. Above-the-Fold (First 600px) Must Sell
Within the first screen, the reader must see:

```
[Product Image]     [Product Name]
                    ⭐ Rating (e.g., 8.7/10)
                    💰 Price (current vs original)
                    ✓ 3 bullet-point wins
                    [🛒 CHECK PRICE / BUY NOW] — affiliate link
                    [Trust badges: Free Shipping, Warranty, Return Policy]
```

**Self-check**: If someone clicks a Google ad for "Skyrover S1 price", do they see the price and a buy button in under 2 seconds?

### 2. The "Inverted Pyramid" Content Structure
Structure information from most-important to least-important:

1. **Hero Summary** (what it is, who it's for, verdict)
2. **Quick Specs Table** (scan-friendly)
3. **The Core Question** (e.g., "Is the image quality really 4K good?")
4. **In-Depth Sections** (design, performance, battery, etc.)
5. **Comparison** (vs main competitor)
6. **Pros & Cons** (skimmable)
7. **Who Should Buy** (persona matching)
8. **FAQ** (objection handling)
9. **Final Recommendation** (budget-based table)
10. **CTA + Disclaimer**

**Why this works**: Impulse buyers convert at #1-2. Researchers convert at #3-7. Comparison shoppers convert at #5. Everyone else converts at #9.

### 3. CTA Density & Placement
| Location | CTA Type | Purpose |
|---|---|---|
| Hero section | Primary button | Capture impulse buyers |
| After 2nd paragraph | Inline text link | Capture early interest |
| After specs table | Banner/button | Capture spec-readers |
| After comparison table | Button | Capture comparison shoppers |
| After "Who Should Buy" | Button | Capture decided readers |
| End of article | Primary button + alternatives | Capture everyone else |

**Rule**: No reader should ever scroll more than 800px without seeing a clickable path to purchase.

### 4. Trust & Urgency Elements
- **Social proof**: Mention number of Amazon reviews, aggregate star rating, or "over 10,000 units sold".
- **Expert credibility**: "TechPick Editor" byline with photo. Not "admin" or no author.
- **Price anchoring**: Show original price struck through next to current price.
- **Scarcity/urgency (if true)**: "Currently on sale through [date]." Never fake urgency.
- **Risk reversal**: Mention warranty, return policy, or money-back guarantee.

### 5. The "One Job" Rule
Every section of the page must do one job:
- **Hero**: Stop the scroll and establish relevance.
- **Specs**: Answer "Does it have X feature?"
- **Deep review**: Answer "Is the marketing claim true?"
- **Comparison**: Answer "Why this one and not the other?"
- **FAQ**: Answer "What if I'm worried about Y?"
- **Final rec**: Answer "Which exact model/variant should I buy?"

If a section doesn't answer a specific buyer question, cut it.

---

## III. Ads-Ready Standard: The Page Must Work as a Paid Landing Page

### 1. Message Match (Ad → Landing Page)
| Ad Says | Landing Page Must Show |
|---|---|
| "Skyrover S1 - $249" | H1 contains "Skyrover S1", price shows "$249" |
| "40-Min Flight Time" | Spec table shows "40 min", hero bullets mention it |
| "No FAA Registration" | FAQ addresses 249g regulation |
| "Best for Beginners" | "Who Should Buy" targets beginners |

**Google Ads Quality Score Impact**: High message match = higher Quality Score = lower CPC.

### 2. Load Speed for Ads
- **Target**: Under 1.5s first contentful paint.
- **Why**: Google Ads penalizes slow landing pages with higher CPCs.
- **How**: Compress images to WebP, lazy-load below-fold images, no third-party scripts above fold.

### 3. Mobile-First for Ads
- 60%+ of Google search traffic is mobile.
- Hero section must stack vertically on mobile: image on top, text below, button full-width.
- CTA button must be thumb-friendly (min 44px height, high contrast).

### 4. No Exit Leaks (When Used as Ad Landing Page)
- Remove navigation menu or collapse it behind hamburger.
- Remove sidebar widgets.
- Remove unrelated internal links above the fold.
- Keep the user focused on THIS product.

**Note**: This applies only when actively running ads to the page. For organic SEO traffic, full navigation is fine.

### 5. Conversion Tracking Ready
- The page must have a clean, predictable URL structure so you can set up Google Ads conversion goals.
- The affiliate link click should be trackable as an event (e.g., via Google Tag Manager or a simple `onclick` data layer push).

---

## IV. Content Quality Bar: "Would You Send This to a Friend?"

### The "Friend Test"
Before publishing, imagine sending this review to a friend who is genuinely considering buying this product. Would they:
- [ ] Feel like they understand the product's real pros and cons?
- [ ] Know whether it's right for *their* specific situation?
- [ ] Trust that you're not just shilling for the brand?
- [ ] Have a clear, low-friction path to purchase if they're ready?

If any answer is "no", fix it before publishing.

### Anti-Patterns (What "Bad" Pages Look Like)
| Bad Pattern | Why It Fails |
|---|---|
| 100% positive, no cons | Reader doesn't trust it. Google detects thin affiliate content. |
| Copied specs with no analysis | Adds no value vs official page. Won't rank. |
| No competitor comparison | Misses commercial search intent. Lower conversion. |
| Affiliate link only at bottom | 80% of readers never scroll that far. Lost commissions. |
| Stock photo only, no real images | Looks generic. E-E-A-T score drops. |
| Outdated price/specs | High bounce rate. User returns to SERP quickly (bad signal). |
| Walls of text, no tables/lists | Hard to scan. Mobile users bounce. |

---

## V. Pre-Publish Self-Checklist

Use this before every page goes live.

### SEO
- [ ] Title < 60 chars, contains primary keyword
- [ ] Meta description < 160 chars, contains keyword + hook
- [ ] H1 contains primary keyword, only one H1
- [ ] URL is short and keyword-rich
- [ ] First 100 words contain primary keyword
- [ ] At least 1,500 words (2,500+ for competitive terms)
- [ ] Contains 2-3 internal links to related site content
- [ ] Contains 3-5 external links to authoritative sources
- [ ] All images have descriptive alt text
- [ ] JSON-LD structured data present

### Conversion
- [ ] Hero section shows product image + price + CTA button above the fold
- [ ] At least 6 CTA touchpoints throughout the page
- [ ] Pros and Cons sections are present (minimum 4 pros, 3 cons)
- [ ] Competitor comparison table included
- [ ] "Who Should Buy" section with clear personas
- [ ] FAQ section addresses 3+ common objections
- [ ] Final recommendation includes budget-based options
- [ ] Affiliate link is correct and functional
- [ ] Disclaimer is present

### Ads-Ready
- [ ] Page loads in under 2.5s (test on mobile)
- [ ] Hero content stacks correctly on 375px width
- [ ] CTA button is thumb-friendly and high-contrast
- [ ] Message matches the primary ad angle you would use
- [ ] No broken third-party scripts blocking render

### Technical
- [ ] `npm run build` succeeds with 0 errors
- [ ] Images exist in `dist/images/reviews/[brand]/`
- [ ] Page exists in `dist/review/[slug]/index.html`
- [ ] No `example.com` URLs anywhere in the build
- [ ] Category exists in `helpers.ts`
- [ ] Author exists in `helpers.ts`

---

## VI. Scoring Rubric (Optional)

Score your page 0-10 on each dimension. A page scoring below 6 on any dimension should be improved before promotion.

| Dimension | Weight | What "10/10" Looks Like |
|---|---|---|
| Search Intent Match | 25% | Page perfectly answers the query that brought the user |
| E-E-A-T | 20% | Feels written by a real expert with real experience |
| Conversion Design | 25% | Every reader type has a clear path to purchase |
| Content Depth | 15% | Goes deeper than competing pages on SERP page 1 |
| Technical Quality | 15% | Fast, mobile-perfect, structured data, clean code |

**Total Score Target**: 8.0+ before spending ad budget. 7.0+ acceptable for organic-only.

---

## Summary

A "good" affiliate review page is not just a collection of specs and an affiliate link. It is:

1. **An SEO asset** that earns organic traffic because it answers search intent better than competitors.
2. **A sales page** that converts because it builds trust, handles objections, and makes purchasing frictionless.
3. **An ad landing page** that can be plugged into Google Ads with minimal modification because it loads fast, message-matches, and focuses the user.

The best pages do all three at once. That is the standard.
