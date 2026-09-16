---
title: "Xbox Benefits Hub"
headline: "Turning an underfunded perks program into a platform-wide advantage"
description: "Design strategy and direction for Xbox's Benefits Hub, the platform-wide experience that surfaces subscriber perks across mobile, console, and PC. Rebuilt and rebranded from the ground up, with new entry points on Home and in search to help players discover the full breadth of what their subscription provides."
role:
  - "IC designer"
  - "Design architect"
releaseDate: "October 2025"
date: 2025-10-01
image: ./xbox-benefits-hub/Xbox-Benefits-Hub_Hero.png
featured: false
impact:
  - "Drove a 34% lift in weekly gameplay hours within the first three weeks of launch"
  - "Drove a 32% lift in weekly player spend over the same period"
overview: |
  After three and a half years leading the Xbox community team as a people manager, I moved into an individual contributor role as Design Architect, the most senior IC role in the design organization, reporting directly to Xbox's head of design. The idea was to use the influence I'd built as a team leader to go after specific problems directly, without needing a team to drive them, and create business impact on my own. Benefits Hub was one of the first places I was asked to apply that, because the team had found itself in a difficult spot.

  Microsoft Gaming's leadership had set aggressive growth, engagement, and retention goals for the Xbox business, with PC carrying the most aggressive targets of any surface. Partway through the year, internal projections showed the team would fall meaningfully short of expected gameplay hours, particularly though not exclusively on PC. The team also had limited budget to work with, meaning any solution needed to guard against spiraling costs.
problem: |
  A recent landmark acquisition had absorbed the budget that would normally have funded the production of new content, and in gaming, content is usually the lever that drives engagement and gameplay hours. Without it, the team needed another way to move the numbers. The Perks program, a set of subscriber benefits that had gone largely unfunded for years, offered an unlikely answer to the gap.

  The team's most engaged players were already heavy users of the program.

  ![The existing Perks page before the redesign](./xbox-benefits-hub/Xbox-Benefits-Hub_Perks-Before.png)

  The business development team hypothesized that partnering with developers of mid-tier free-to-play titles and offering subscribers access to those titles as a Perks benefit could get engaged players playing more and getting more out of each session, at no added cost to them, a potential win for players, partners, and the business at once.

  I took the effort on as the sole IC designer, tasked with figuring out how to promote these new benefits, drive players into the partner titles, and do it all without a significant development investment.
explorations: |
  Perks were consumable benefits already available to subscribers at no extra cost, things like partner access, in-game currency, or cosmetic items. But the experience holding them together had real problems.

  <div class="problem-list">
    <div class="problem-card">
      <span class="problem-card-number">01</span>
      <h4>Buried in navigation</h4>
      <p>Perks sat several levels deep in the app's navigation, and whenever a tradeoff came up between surfacing it and promoting new games, new games won.</p>
    </div>
    <div class="problem-card">
      <span class="problem-card-number">02</span>
      <h4>No promotion</h4>
      <p>Perks had no dedicated marketing or messaging pointing players toward it. Unless someone already knew to look, they were unlikely to ever find it.</p>
    </div>
    <div class="problem-card">
      <span class="problem-card-number">03</span>
      <h4>No notifications</h4>
      <p>There was no way to proactively tell players about new or expiring benefits, so discovery depended entirely on players stumbling into the feature on their own.</p>
    </div>
    <div class="problem-card">
      <span class="problem-card-number">04</span>
      <h4>Minimal instrumentation</h4>
      <p>Almost nothing about Perks usage was tracked, leaving the team with little visibility into how the program was actually performing.</p>
    </div>
  </div>

  With no shortage of issues, limited time, and limited resources, I started by digging into whatever existing research and performance data I could find on Perks. A conversation with a user researcher who'd previously studied Game Pass and Perks surfaced this:

  > Most players don't know that Perks exist. A small subset of our most engaged players use them and discuss them with other engaged players on social networks like Discord, Reddit, and X. When speaking with less engaged players, they like the idea of Perks, and wish we would highlight them more.

  That validated our initial assumptions, but left one open question: how could we maximize the number of players who knew these benefits existed, and get them into the free-to-play games we were promoting? I sketched out a few straightforward options to keep the conversation moving.

  <div class="inline-gallery">
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Sketches-1.png" alt="Home wireframe: green represents free-to-play titles being promoted on home." />
      <figcaption>Home wireframe: green represents free-to-play titles being promoted on home.</figcaption>
    </figure>
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Sketches-2.png" alt="Product details page wireframe: green represents free benefits available for subscribers" />
      <figcaption>Product details page wireframe: green represents free benefits available for subscribers</figcaption>
    </figure>
  </div>

  The design work this called for seemed straightforward at first: give the Perks page a much-needed visual refresh, add a simple flow from Home to the product details page (PDP) for visibility, and hand partners some basic guidance. Then I could move on to other work.

  After sharing these early sketches with our data science team, I learned an interesting data point: *free* was one of the most searched terms on the platform, and at the time, search only matched titles that literally had the word *free* in their name. That gave me an idea: build a dedicated page that took advantage of the query, directing players to every free-to-play title and the new benefits attached to it.

  ![Concept for a dedicated Free-to-Play page, surfacing games and their associated Perks](./xbox-benefits-hub/Xbox-Benefits-Hub_Free-To-Play-Concept.png)

  This could be produced with minimal dev support, thanks to existing page templates already available to build from.
solution: |
  Speed mattered more than a perfect system. The team needed a point of view fast enough to pitch to potential studio partners, and none of it would work unless studios saw a clear benefit for themselves, since the ask was essentially for them to give away in-game value to Xbox's most engaged players on the bet that it would drive more engagement and spend in their own titles.

  Building that connection was too costly for the timeline, which meant we couldn't automatically populate a product details page (PDP) with the benefits tied to that title. Our engineering partners were hesitant to invest in that work without first understanding the business impact. To get past that, I worked with the colleague who owned the PDP surface to get it prioritized, hardcoding benefits onto the PDPs for titles in the free-to-play program and running it as an experiment to see what impact exposing them there would have on benefit consumption and game engagement.

  ![The hardcoded Perks benefit shown on a game's product details page](./xbox-benefits-hub/Xbox-Benefits-Hub_PDP-Benefits.png)

  After working through that constraint, we turned to the other places we wanted these new benefits to surface: Home, a refreshed Perks page, and the new dedicated free-to-play page I'd proposed. Those three locations, alongside the product details page, gave customers far more ways to find the benefits available to them.

  <div class="full-bleed-gallery">
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Home-Promotion.png" alt="The Free-to-Play promotion on Home" />
      <figcaption>Home</figcaption>
    </figure>
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Perks-Page.png" alt="The refreshed Perks page" />
      <figcaption>Refreshed Perks page</figcaption>
    </figure>
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Free-To-Play-Page.png" alt="The new dedicated Free-to-Play page" />
      <figcaption>Free-to-play page</figcaption>
    </figure>
  </div>

  In support of this work, the team also planned to invest in driving search traffic to the new free-to-play page, and in notifying players not just about these new benefits, but about new Perks generally as they released.

  Once we'd pulled that full story together and aligned the internal team, our leadership, and our partners, we pitched the concept directly to studio partners, showing how the promotion would both drive visibility for their titles and funnel highly engaged players their way. With studios on board, we built and shipped.
opportunity: |
  The initial Perks investment did more than fix a short-term gap. It proved the model worked, and leadership took notice. When the broader Game Pass experience came up for a full overhaul, that credibility translated directly into ownership. I was asked to lead the redesign of the entire Benefits experience across every device Xbox shipped to.

  ![The Benefits Hub, shown across mobile, PC, and console](./xbox-benefits-hub/Xbox-Benefits-Hub_Family-Shot.png)

  This round went further than the original Perks work: a full rebrand from Perks to Benefits, a visual refresh across every surface, real product ID connections this time, and dedicated entry points on Home and in search, the exact capability the original version had to work around.

  <div class="full-bleed-gallery">
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Opportunity-1.png" alt="PC Game Pass subscriber" />
      <figcaption>PC Game Pass subscriber</figcaption>
    </figure>
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Opportunity-2.png" alt="Essential Game Pass subscriber" />
      <figcaption>Essential Game Pass subscriber</figcaption>
    </figure>
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Opportunity-3.png" alt="Premium Game Pass subscriber" />
      <figcaption>Premium Game Pass subscriber</figcaption>
    </figure>
    <figure>
      <img src="./xbox-benefits-hub/Xbox-Benefits-Hub_Opportunity-4.png" alt="Ultimate Game Pass subscriber" />
      <figcaption>Ultimate Game Pass subscriber</figcaption>
    </figure>
  </div>
takeaway: |
  What started as a scrappy, budget-constrained fix became the template for a much larger initiative. The original Perks work didn't just solve an immediate engagement gap, it earned the credibility to lead something bigger. A fast, well-targeted first attempt can open doors that a more ambitious, slower one never would have had the chance to.
---
