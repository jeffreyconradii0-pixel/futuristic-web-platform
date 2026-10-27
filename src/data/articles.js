export const homeLayout = {
  cards: ['next-wave-of-ai', 'on-device-ai', 'future-of-transportation'],
  latest: ['gpt-5-unveiled', 'nasa-life', 'ai-robots-work', 'research-agents'],
  feature: 'ai-powered-future',
}

export const lenses = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'machines', label: 'Machines' },
  { id: 'space', label: 'Space' },
  { id: 'energy', label: 'Energy' },
  { id: 'science', label: 'Science' },
]

const articles = [
  {
    slug: 'next-wave-of-ai',
    title: 'The Next Wave of AI: How Generative Models Are Changing the World',
    excerpt:
      'Generative models are moving from novelty demos into the software people already use. The shift is less about a single chatbot and more about who gets to build with one.',
    category: 'AI News',
    categorySlug: 'ai-news',
    kicker: 'AI',
    author: 'Futuristic World Desk',
    date: '2026-10-22',
    displayDate: 'Oct 22, 2026',
    readTime: '8 min read',
    cover: 'ai',
    tags: ['ChatGPT', 'AI Tools', 'Generative AI'],
    body: [
      'A year ago, most readers met generative AI through a blank chat box. That interface is still here, but the more important change is happening inside tools people already pay for: design suites, office software, code editors, customer support desks, and lab notebooks.',
      'Futuristic World tracks that shift as a product story, not a magic story. A model is useful when it can hold context, cite a source, refuse a bad request, and finish a task without a person rewriting every paragraph. Those are engineering problems, and they are being solved unevenly.',
      'The next wave also changes who participates. Smaller teams can draft, translate, summarize, and prototype without staffing a full department for each job. That does not remove the need for editors, lawyers, or engineers. It changes where their time goes.',
      'We will keep covering model releases, but the stories that matter on futuristicworld.us are the ones that show a workflow before and after. If a tool does not change the work, it is a demo. If it does, it belongs in the record.',
    ],
  },
  {
    slug: 'future-of-transportation',
    title: 'The Future of Transportation: Electric, Autonomous and Beyond',
    excerpt:
      'Electric drivetrains are already on the road. Autonomy is still a supervised product. The interesting question is which jobs change first.',
    category: 'Latest Tech',
    categorySlug: 'latest-tech',
    kicker: 'TECH',
    author: 'Tech Journal',
    date: '2026-10-20',
    displayDate: 'Oct 20, 2026',
    readTime: '7 min read',
    cover: 'transport',
    tags: ['Transportation', 'Autonomy', 'Latest Tech'],
    body: [
      'Transportation stories tend to jump straight to a city of flying vehicles. The nearer change is quieter: electric cars, buses, and delivery vans replacing a drivetrain that dominated a century, while software takes a larger share of the driving task in limited conditions.',
      'Autonomy is not one product. Highway assistance, warehouse robots, port cranes, and robotaxis are different bets with different safety cases. Grouping them into a single countdown clock hides the work that is actually shipping.',
      'Energy is the constraint under the paint color. Charging, grid capacity, and battery materials decide whether an electric fleet is a local success or a press release. Cities that treat curbs, depots, and power as one system will move faster than cities that only count vehicle sales.',
      'Futuristic World will cover the demos. We will also cover the depots, the maps, and the insurance questions, because that is where the future either arrives or stalls.',
    ],
  },
  {
    slug: 'gpt-5-unveiled',
    title: 'OpenAI Unveils GPT-5: Smarter, Faster, More Human',
    excerpt:
      'Every flagship model launch raises the same reader questions: what is actually better, what still fails, and what it costs to use.',
    category: 'AI News',
    categorySlug: 'ai-news',
    kicker: 'AI',
    author: 'Futuristic World Desk',
    date: '2026-10-24',
    displayDate: 'Oct 24, 2026',
    readTime: '5 min read',
    cover: 'gpt',
    tags: ['ChatGPT', 'AI Tools', 'OpenAI'],
    body: [
      'Flagship model names are marketing as much as engineering. “Smarter, faster, more human” is the shape of almost every launch note. Readers still need a translation layer between that sentence and a Tuesday afternoon at work.',
      'Smarter should mean fewer invented citations, better instruction following, and a longer useful memory of the task at hand. Faster should mean the answer arrives inside the workflow, not after a person has already done the job themselves. More human should not mean more flattery. It should mean clearer uncertainty.',
      'Futuristic World treats a model unveiling as the start of a review, not the end of one. We look at availability, price, data controls, and the tasks a careful user can hand over. Personality is the least interesting part of the demo.',
      'If you use these tools, keep a before-and-after example from your own work. That private benchmark will tell you more than a leaderboard screenshot.',
    ],
  },
  {
    slug: 'nasa-life',
    title: "NASA's New Mission Could Unlock the Secrets of Alien Life",
    excerpt:
      'The search for life beyond Earth is a measurement problem: atmospheres, chemistry, and instruments that can tell a signal from a wish.',
    category: 'Latest Tech',
    categorySlug: 'latest-tech',
    kicker: 'Space',
    author: 'Space Desk',
    date: '2026-10-22',
    displayDate: 'Oct 22, 2026',
    readTime: '7 min read',
    cover: 'nasa',
    tags: ['Space Tech', 'NASA', 'Science'],
    body: [
      'Stories about alien life often skip the instrument. The real work is slower: telescopes and probes that can read the chemistry of a distant atmosphere, or sample an ocean world closely enough to know what the chemistry means.',
      'A biosignature is not a postcard. It is a combination of gases, context, and the absence of a better non-living explanation. Missions that chase that standard are engineering programs with a scientific question attached. They slip, they stretch budgets, and they still justify themselves when the data comes home.',
      'Futuristic World covers space as technology. Launch vehicles, sensors, communications, and ground systems decide whether a beautiful mission concept becomes a dataset. The romance survives contact with a thermal vacuum chamber, or it does not.',
      'We will not dress a concept study up as a discovery. When a mission can actually constrain the question of life, it belongs on the homepage. Until then, the honest headline is about the instrument being built.',
    ],
  },
  {
    slug: 'ai-robots-work',
    title: "AI Robots Are Coming to Work — Here's What to Expect",
    excerpt:
      'Humanoid demos travel well on video. Warehouses, hospitals, and factory floors will adopt the robots that repeat a boring task safely.',
    category: 'Future Trends',
    categorySlug: 'future-trends',
    kicker: 'Future Tech',
    author: 'Futuristic World Desk',
    date: '2026-10-21',
    displayDate: 'Oct 21, 2026',
    readTime: '5 min read',
    cover: 'robots',
    tags: ['Robotics', 'AI Tools', 'Work'],
    body: [
      'The robot that arrives at work first will probably not look like a person. It will look like a cart, an arm, a scanner, or a machine that already had a job and just received a better camera. Humanoid prototypes are real, and so is the gap between a stage demo and a Tuesday shift.',
      'What changes for workers is task mix. Robots take repetitive motion in structured spaces. People still handle exceptions, judgment, and the awkward corner of the building that nobody modeled. Pretending otherwise produces bad policy and bad product design.',
      'Futuristic World expects a decade of uneven deployment. Logistics will move first. Care settings will move where the robot can fetch, lift, or document without pretending to be a clinician. Offices will feel the software side of this wave long before they feel a metal colleague.',
      'The useful expectation is specific: which task, which building, which fallback when the robot stops. Anything broader is a trailer.',
    ],
  },
  {
    slug: 'ai-powered-future',
    title: 'The AI-Powered Future: 5 Industries Set for Massive Transformation',
    excerpt:
      "From healthcare to education, AI is not just a tool — it's a revolution. Here's how it will reshape our world.",
    category: 'Future Trends',
    categorySlug: 'future-trends',
    kicker: 'FUTURE TRENDS',
    author: 'Futuristic World Desk',
    date: '2026-10-19',
    displayDate: 'Oct 19, 2026',
    readTime: '10 min read',
    cover: 'chip',
    tags: ['AI Tools', 'Healthcare', 'Education', 'Clean Energy'],
    body: [
      'Five industries keep coming up because the work is expensive, repetitive, and full of documents: healthcare, education, finance, transportation, and energy. AI does not replace those systems. It changes the cost of a first draft, a first reading, and a first routing decision.',
      'In healthcare, the near-term gains are clerical: notes, coding suggestions, inbox triage, and a second look at an image that a specialist still signs. The risk is automation that sounds confident when the chart is incomplete. Deployment has to keep a person accountable for the decision.',
      'Education is already feeling draft-and-tutor tools. The transformation is not a chatbot that writes the essay. It is feedback that arrives while a student is still stuck, and assessments that measure something a model cannot quietly finish. Schools that ignore that second half will grade the software.',
      'Finance, transportation, and energy share a pattern. Models help with forecasting, exception handling, and control systems, but the regulated action stays gated. Futuristic World will judge each industry by the handoff: what the model prepares, and what a person or a control room still owns.',
    ],
  },
  {
    slug: 'on-device-ai',
    title: 'On-Device Models Are the Quiet AI Story',
    excerpt:
      'Cloud models get the keynote. Smaller models running on a phone or laptop change privacy, latency, and which features work on a plane.',
    category: 'AI News',
    categorySlug: 'ai-news',
    kicker: 'AI',
    author: 'Futuristic World Desk',
    date: '2026-10-18',
    displayDate: 'Oct 18, 2026',
    readTime: '6 min read',
    cover: 'gpt',
    tags: ['AI Tools', 'On-device', 'Privacy'],
    body: [
      'A model that never leaves the device is a different product from a model that phones home. It can be slower to improve and smaller in capability, and it can still be the one a person trusts with a photo, a recording, or a draft they do not want in a log.',
      'The engineering trade is memory, heat, and battery against quality. Chip designers are treating that trade as a first-class workload. That is why the AI story now shows up in laptop launches as often as in research blogs.',
      'Futuristic World will keep a simple scoreboard: which features work offline, which ones quietly fall back to a server, and whether the settings screen tells the truth.',
    ],
  },
  {
    slug: 'research-agents',
    title: 'Research Agents Still Need an Editor',
    excerpt:
      'Agent demos can browse, click, and file a report. They can also cite a page they misunderstood. The desk still needs a human close.',
    category: 'AI News',
    categorySlug: 'ai-news',
    kicker: 'AI',
    author: 'Futuristic World Desk',
    date: '2026-10-16',
    displayDate: 'Oct 16, 2026',
    readTime: '7 min read',
    cover: 'ai',
    tags: ['AI Tools', 'Agents', 'ChatGPT'],
    body: [
      'An agent that can operate software is a real step past a chat box. It is also a new way to be confidently wrong at scale. The failure mode is not a typo. It is a tidy memo built on a misread source.',
      'Newsrooms, law firms, and research teams testing agents should measure time saved after the checking, not before. A ten-minute draft that costs an hour of verification is a loss, even if the demo looked fluent.',
      'The editorial rule at Futuristic World is unchanged: a tool can gather, a person publishes. We will cover agents that shorten the gathering without blurring that line.',
    ],
  },
  {
    slug: 'battery-leap',
    title: 'Battery Chemistry Is the Real Device Story',
    excerpt:
      'Range, charge time, and supply chains decide which electric products become normal. The chemistry is less photogenic than the vehicle and more decisive.',
    category: 'Latest Tech',
    categorySlug: 'latest-tech',
    kicker: 'Tech',
    author: 'Tech Journal',
    date: '2026-10-15',
    displayDate: 'Oct 15, 2026',
    readTime: '7 min read',
    cover: 'energy',
    tags: ['Clean Energy', 'Batteries', 'Latest Tech'],
    body: [
      'Consumer electronics taught people to think of batteries as a thin disappointment inside a beautiful object. Electric transport and grid storage make the battery the product. Chemistry, manufacturing yield, and raw-material contracts set the timeline more honestly than a concept car.',
      'New chemistries are announced often. Fewer of them survive cost, safety, cycle life, and the factory that has to build them every day. Futuristic World looks for pilot lines and purchase agreements, not only lab charts.',
      'The reader payoff is practical. Better cells show up as cheaper miles, backup power that is actually installed, and devices that age more slowly. That is the tech story hiding under the paint.',
    ],
  },
  {
    slug: 'spatial-computing',
    title: 'Spatial Computers Need a Job, Not a Keynote',
    excerpt:
      'Headsets get lighter every cycle. They still have to earn a place in a workday that already has a phone and a laptop.',
    category: 'Latest Tech',
    categorySlug: 'latest-tech',
    kicker: 'Tech',
    author: 'Tech Journal',
    date: '2026-10-12',
    displayDate: 'Oct 12, 2026',
    readTime: '6 min read',
    cover: 'transport',
    tags: ['Spatial Computing', 'Latest Tech', 'Devices'],
    body: [
      'Spatial computing is convincing in a demo room and easy to abandon on a desk. The hardware curve is real: more pixels, less weight, better passthrough. The adoption curve depends on a repeated task where a floating workspace beats a monitor.',
      'Training, design review, field service, and entertainment are the usual candidates. Each one has a different tolerance for friction. A film can ask for a headset. A nurse on a shift cannot.',
      'Futuristic World will cover the devices, then ask a blunt question: what job gets faster in week two, after the novelty has left the building?',
    ],
  },
  {
    slug: 'quantum-roadmap',
    title: 'Quantum Computing’s Roadmap Is a Hardware Story',
    excerpt:
      'Qubits make headlines. Error correction, cryogenics, and software that can survive noise decide whether the roadmap is a product plan.',
    category: 'Future Trends',
    categorySlug: 'future-trends',
    kicker: 'Future Trends',
    author: 'Futuristic World Desk',
    date: '2026-10-13',
    displayDate: 'Oct 13, 2026',
    readTime: '8 min read',
    cover: 'quantum',
    tags: ['Quantum Computing', 'Future Trends', 'Hardware'],
    body: [
      'Quantum computing is often described as a single breakthrough waiting to happen. The people building machines describe a stack: qubits, control electronics, error correction, and algorithms that still have to beat the best classical methods on a useful problem.',
      'That stack is why timelines slip without the field being fake. A lab can double a qubit count and still be far from a fault-tolerant machine. Readers deserve both facts at once.',
      'Futuristic World will not treat every processor announcement as the end of encryption or the end of drug discovery. We will track error rates, logical qubits, and the narrow problems where a quantum device is actually in the loop.',
    ],
  },
  {
    slug: 'grid-of-tomorrow',
    title: 'Clean Energy Meets Software on the Grid',
    excerpt:
      'Solar and wind changed generation. Software, storage, and transmission decide whether the grid can use what those plants produce.',
    category: 'Future Trends',
    categorySlug: 'future-trends',
    kicker: 'Future Trends',
    author: 'Tech Journal',
    date: '2026-10-11',
    displayDate: 'Oct 11, 2026',
    readTime: '7 min read',
    cover: 'energy',
    tags: ['Clean Energy', 'Grid', 'Future Trends'],
    body: [
      'Clean energy is no longer a speculative sidebar. The constraint has moved. Plenty of regions can build generation faster than they can connect it, store it, or move it to the hour when people need it.',
      'Software shows up in forecasting, inverter control, demand response, and the unglamorous queues where projects wait for interconnection. Storage shows up as the buffer that lets weather and demand disagree for a while.',
      'Futuristic World covers this as infrastructure, not as a slogan. A megawatt that cannot reach a city is a press release. A megawatt that shows up at dinner time is a trend you can measure.',
    ],
  },
  {
    slug: 'biotech-tools',
    title: 'Biotech’s New Tools Are Lab Software as Much as Biology',
    excerpt:
      'Models that propose proteins or parse literature change the speed of a lab’s first guess. The bench still has to run the experiment.',
    category: 'Future Trends',
    categorySlug: 'future-trends',
    kicker: 'Biotech',
    author: 'Futuristic World Desk',
    date: '2026-10-09',
    displayDate: 'Oct 9, 2026',
    readTime: '8 min read',
    cover: 'quantum',
    tags: ['Biotech', 'AI Tools', 'Science'],
    body: [
      'Biology is absorbing the same software wave as other lab sciences. Models suggest candidates, summarize papers, and help design an experiment. They do not sign the result. A plate, a patient, or a trial still has to agree.',
      'The hopeful version is a shorter path from idea to test. The sloppy version is a generated paragraph that sounds like a finding. Futuristic World will distinguish those every time we cover a biotech tool.',
      'Readers should watch for reproducibility, data rights, and whether a lab can explain a model’s suggestion to a regulator. Those are the gates between a demo and a medicine.',
    ],
  },
  {
    slug: 'guide-read-a-briefing',
    title: 'How to Pull the Point Out of a Technology Story',
    excerpt:
      'Most tech stories bury the decision. This guide shows how to leave with one sentence you can actually use.',
    category: 'Guides',
    categorySlug: 'guides',
    kicker: 'Guide',
    author: 'Futuristic World Desk',
    date: '2026-10-18',
    displayDate: 'Oct 18, 2026',
    readTime: '6 min read',
    cover: 'guide',
    tags: ['AI Tools', 'Briefing', 'Guides'],
    steps: [
      {
        title: 'Name the system',
        text: 'Say what the story is actually about: a model, a robot, a battery, a telescope, a grid. If you cannot name the system, you are still reading the trailer.',
      },
      {
        title: 'Separate shipped from staged',
        text: 'A demo, a paper, and a product in someone’s hands are three different facts. Write down which one the piece is describing.',
      },
      {
        title: 'Keep the constraint',
        text: 'Every real system has a limit: power, data, safety, cost, or a person who still has to sign the decision. A story without a constraint is an advertisement.',
      },
      {
        title: 'Leave with one sentence',
        text: 'Finish with “This matters because…” If you cannot finish that sentence, the piece did not earn a place in your week.',
      },
    ],
    body: [
      'Futuristic World is built so you can do this in one sitting. The homepage desk already writes the “why it matters” line. Your job is to check whether you agree.',
      'A smarter reading habit is not more tabs. It is a shorter path from headline to judgment.',
    ],
  },
  {
    slug: 'guide-generative-ai',
    title: 'A Starter Guide to Generative AI Tools',
    excerpt:
      'You do not need a lab to use these tools well. You need a task, a source of truth, and a habit of checking the output.',
    category: 'Guides',
    categorySlug: 'guides',
    kicker: 'Guide',
    author: 'Futuristic World Desk',
    date: '2026-10-15',
    displayDate: 'Oct 15, 2026',
    readTime: '7 min read',
    cover: 'guide',
    tags: ['AI Tools', 'ChatGPT', 'Guides'],
    steps: [
      {
        title: 'Pick one recurring task',
        text: 'Choose a job you already do every week: summarizing notes, rewriting a paragraph, or drafting an outline. Skip the abstract tour of every model.',
      },
      {
        title: 'Bring the source with you',
        text: 'Paste the notes, the spec, or the article you want used. A tool that has to invent your context will invent it.',
      },
      {
        title: 'Ask for a checkable shape',
        text: 'Request an outline, a table, or a list of claims. Those are easier to verify than a smooth essay.',
      },
      {
        title: 'Keep the last look',
        text: 'You publish, send, or ship. The tool drafts. If you cannot explain the result, do not send it.',
      },
    ],
    body: [
      'Generative tools are ordinary software with an unusual interface. Treat them that way and they become useful faster. Treat them as an oracle and they will eventually embarrass you.',
      'Futuristic World’s AI desk uses these tools to brainstorm questions and to outline explainers. The published sentences still pass through a person who is accountable for them.',
    ],
  },
  {
    slug: 'guide-reading-trends',
    title: 'How to Tell a Real Technology Trend from a Trailer',
    excerpt:
      'Demos are cheap. Deployment has paperwork, invoices, and unhappy edge cases. Here is a filter you can reuse.',
    category: 'Guides',
    categorySlug: 'guides',
    kicker: 'Guide',
    author: 'Tech Journal',
    date: '2026-10-10',
    displayDate: 'Oct 10, 2026',
    readTime: '5 min read',
    cover: 'guide',
    tags: ['Future Trends', 'Robotics', 'Space Tech', 'Quantum Computing'],
    steps: [
      {
        title: 'Ask what shipped',
        text: 'A trailer shows a best case. A trend has customers, a price, and a version number someone can install or book.',
      },
      {
        title: 'Ask who is stuck with it',
        text: 'Operators, clinicians, drivers, teachers, and grid engineers reveal constraints that a keynote will not.',
      },
      {
        title: 'Ask what breaks',
        text: 'Every real system has a failure mode. If the coverage cannot name one, you are reading a brochure.',
      },
    ],
    body: [
      'Futuristic World likes ambitious technology. We also like the second article, the one after the demo, when maintenance and cost show up. Use this filter on our pages and on everyone else’s.',
    ],
  },
  {
    slug: 'guide-weekly-briefing',
    title: 'Build a Weekly Technology Briefing Habit',
    excerpt:
      'You do not need to read everything. You need four desks, one notebook, and a half hour that stays on the calendar.',
    category: 'Guides',
    categorySlug: 'guides',
    kicker: 'Guide',
    author: 'Futuristic World Desk',
    date: '2026-10-08',
    displayDate: 'Oct 8, 2026',
    readTime: '4 min read',
    cover: 'guide',
    tags: ['AI Tools', 'Robotics', 'Clean Energy', 'Guides'],
    steps: [
      {
        title: 'Follow four lanes',
        text: 'AI, machines, space, and energy. That is the map of this site, and it is enough for a generalist.',
      },
      {
        title: 'Save three stories',
        text: 'Not thirty. Three pieces you could explain out loud. If you cannot explain one, it does not count.',
      },
      {
        title: 'Write five lines',
        text: 'What changed, why it matters, and what you will ignore next week. The ignoring is the skill.',
      },
    ],
    body: [
      'futuristicworld.us is built for that half hour. Start at the homepage, open one featured briefing, and leave with a sentence you can repeat. That is the whole product.',
    ],
  },
]

const judgments = {
  'next-wave-of-ai': ['ai', 'The change that matters is inside tools people already open, not a new blank chat box.'],
  'future-of-transportation': ['machines', 'Autonomy arrives as a supervised job in a specific place, not as a city of flying cars.'],
  'gpt-5-unveiled': ['ai', 'Judge a flagship model by the task it finishes, the controls it offers, and what it still gets wrong.'],
  'nasa-life': ['space', 'A claim about life is only as strong as the instrument that can rule a lifeless explanation out.'],
  'ai-robots-work': ['machines', 'The first useful robots will take a repeated task, and they will rarely look like a person.'],
  'ai-powered-future': ['ai', 'Five industries change where a model prepares the work and a person still owns the decision.'],
  'on-device-ai': ['ai', 'A model that stays on the device is a privacy and latency product, not a smaller demo.'],
  'research-agents': ['ai', 'An agent is useful only after you count the time spent checking its confident mistakes.'],
  'battery-leap': ['energy', 'Chemistry, factories, and materials decide the timeline more honestly than a concept vehicle.'],
  'spatial-computing': ['machines', 'A headset earns a desk only when week two is faster than a monitor.'],
  'quantum-roadmap': ['science', 'Qubit counts are not a product. Error correction is the part that decides the roadmap.'],
  'grid-of-tomorrow': ['energy', 'Clean generation matters when software and storage can deliver it at dinner time.'],
  'biotech-tools': ['science', 'A model can suggest the experiment. The bench still has to agree before it is a result.'],
  'guide-read-a-briefing': ['ai', 'Leave every story with one sentence that starts “This matters because.”'],
  'guide-generative-ai': ['ai', 'Bring your own source, ask for a checkable shape, and keep the last look.'],
  'guide-reading-trends': ['machines', 'A trend has customers and a failure mode. A trailer has neither.'],
  'guide-weekly-briefing': ['ai', 'Four lanes and three stories you can explain out loud beat a folder of unread tabs.'],
}

for (const article of articles) {
  const [focus, insight] = judgments[article.slug] || ['ai', article.excerpt]
  article.focus = focus
  article.insight = insight
}

function sortByDate(list) {
  return [...list].sort((a, b) => b.date.localeCompare(a.date))
}

export function getAllArticles() {
  return sortByDate(articles)
}

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug)
}

export function articlesByCategory(slug) {
  return sortByDate(articles.filter((article) => article.categorySlug === slug))
}

export function searchArticles(query) {
  const needle = query.trim().toLowerCase()
  if (!needle) return []
  return sortByDate(
    articles.filter((article) => {
      const haystack = [
        article.title,
        article.excerpt,
        article.insight,
        article.author,
        article.category,
        ...(article.tags || []),
        ...(article.body || []),
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(needle)
    }),
  )
}

export function storiesForLens(lens) {
  const pool = getAllArticles().filter((article) => article.categorySlug !== 'guides')
  if (lens === 'all') {
    const bySlug = articleBySlugMap()
    return {
      cards: homeLayout.cards.map((slug) => bySlug[slug]),
      latest: homeLayout.latest.map((slug) => bySlug[slug]),
      feature: bySlug[homeLayout.feature],
      insights: homeLayout.cards.map((slug) => bySlug[slug]),
    }
  }
  const preferred = pool.filter((article) => article.focus === lens)
  const rest = pool.filter((article) => article.focus !== lens)
  const ordered = [...preferred, ...rest]
  return {
    cards: ordered.slice(0, 3),
    latest: ordered.slice(3, 7),
    feature: preferred[0] || ordered[0],
    insights: (preferred.length ? preferred : ordered).slice(0, 3),
  }
}

export function relatedArticles(article, count = 3) {
  const others = articles.filter((item) => item.slug !== article.slug)
  const same = others.filter((item) => item.categorySlug === article.categorySlug)
  const rest = others.filter((item) => item.categorySlug !== article.categorySlug)
  return [...same, ...rest].slice(0, count)
}

export function articleBySlugMap() {
  return Object.fromEntries(articles.map((article) => [article.slug, article]))
}
