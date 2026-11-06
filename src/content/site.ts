/**
 * The site's own words: navigation, the Seven Levels, the three-tier path,
 * offers, FAQ and page copy.
 *
 * Edit freely. The community's NAME and LOGO are not here: they come from the
 * platform (`GET /site-api/site`), so a rename in the community dashboard shows
 * up without a Publish. Use `{name}` in any string below for the community name.
 *
 * Voice: warm, reflective, unhurried. "We" by default, "you" only for a direct
 * reflective invitation. No contractions, no urgency, no hype.
 *
 * Search this file for `PLACEHOLDER` to find made-up copy, links and quotes
 * that the owner should replace before publishing.
 */

export interface NavItem {
  label: string;
  href: string;
  /** One line under the label in menus. */
  note?: string;
}

/** Links that point to the community app (plain `<a href>`, never a client route). */
export const LINKS = {
  join: '/join',
  login: '/login',
  community: '/feeds',
  // PLACEHOLDER: point these at the real checkout or course pages once they exist
  // in the community (e.g. `/paywall/<id>/checkout` or `/courses/<id>`).
  challenge: '/join',
  beyondResolution: '/join',
  childrensBook: '/join',
  kitPurchase: '/join',
  certificationInterest: '/join',
  email: 'hello@namasteintl.com',
};

/** The three-tier path, in order. Used by the header menu, the footer and /your-path. */
export const PATH_PAGES: NavItem[] = [
  {label: 'Your path', href: '/your-path', note: 'Three ways to begin'},
  {label: '7-Day Challenge', href: '/challenge', note: 'Free · Explore'},
  {label: 'Beyond Resolution', href: '/beyond-resolution', note: 'Free · Explore'},
  {label: 'The Seven Steps to Peace', href: '/childrens-book', note: 'Free · Explore'},
  {label: 'Conflict Exploration Kit', href: '/conflict-exploration-kit', note: 'Build skills'},
  {label: 'Practitioner Certification', href: '/certification', note: 'Go deep'},
];

/**
 * Top navigation. `children` opens a menu. Every href is a page of THIS site or
 * an App page (`/feeds`, `/login`…): all plain links.
 */
export const NAV: (NavItem & {children?: NavItem[]})[] = [
  {label: 'What is CIQ?', href: '/what-is-conflict-intelligence'},
  {label: 'Seven Levels', href: '/seven-levels'},
  {label: 'Your path', href: '/your-path', children: PATH_PAGES},
  {label: 'Community', href: '/community'},
  {label: 'Resources', href: '/blog'},
  {label: 'About', href: '/about'},
  {label: 'Contact', href: '/contact'},
];

export const FOOTER: {label: string; items: NavItem[]}[] = [
  {
    label: 'Understand',
    items: [
      {label: 'Home', href: '/'},
      {label: 'What is Conflict Intelligence?', href: '/what-is-conflict-intelligence'},
      {label: 'The Seven Levels Framework', href: '/seven-levels'},
      {label: 'Blog and resources', href: '/blog'},
    ],
  },
  {label: 'Your path', items: PATH_PAGES},
  {
    label: 'Connect',
    items: [
      {label: 'Community', href: '/community'},
      {label: 'About Ian Renaud', href: '/about'},
      {label: 'Contact', href: '/contact'},
      {label: 'Join the community', href: '/join'},
      {label: 'Log in', href: '/login'},
    ],
  },
];

/* ------------------------------------------------------------ the levels -- */

export interface Level {
  n: number;
  slug: string;
  name: string;
  color: string;
  /** One line, used on cards and the mandala legend. */
  short: string;
  /** Two or three sentences for the framework page. */
  body: string;
  /** What we explore at this level. */
  explores: string[];
  /** A reflective question to sit with. */
  question: string;
}

// Draft descriptions of each level, written for the owner to refine.
export const LEVELS: Level[] = [
  {
    n: 1,
    slug: 'space',
    name: 'Space',
    color: '#E60012',
    short: 'The felt sense of safety of everyone present.',
    body: 'Before any word is spoken, each person present is sensing whether it is safe to be here. At the level of Space we attend to that felt sense of safety, in ourselves and in everyone involved, and notice how it opens or closes what becomes possible in a conflict.',
    explores: ['The felt sense of safety', 'Safety for everyone present, not only ourselves', 'Signs that someone feels unsafe', 'The pause before a response'],
    question: 'What might help everyone present feel safe enough to stay?',
  },
  {
    n: 2,
    slug: 'emotions',
    name: 'Emotions',
    color: '#F47324',
    short: 'What we feel, and what our feelings are telling us.',
    body: 'Emotions arrive before reasons do. At the level of Emotions we learn to recognize what is moving in us and in others, and to treat feelings as information rather than obstacles. This is where emotional intelligence and Conflict Intelligence meet.',
    explores: ['Naming emotions with precision', 'Regulation and co-regulation', 'Triggers and their history', 'Emotions as signals of need'],
    question: 'What is this feeling trying to tell us?',
  },
  {
    n: 3,
    slug: 'identity',
    name: 'Identity',
    color: '#B99C0A',
    short: 'How conflict touches who we believe we are.',
    body: 'Many conflicts are not really about the issue on the table; they are about who we are allowed to be. At the level of Identity we explore roles, values and the stories we tell about ourselves, and how a disagreement can feel like a threat to the self.',
    explores: ['Roles and self-image', 'Values under pressure', 'Belonging and exclusion', 'The stories we tell about ourselves'],
    question: 'Which part of who we are feels at stake here?',
  },
  {
    n: 4,
    slug: 'relationships',
    name: 'Relationships',
    color: '#419A5C',
    short: 'The patterns, history and power between people.',
    body: 'Conflict lives between people, not only within them. At the level of Relationships we look at trust, history, power and the patterns that repeat across conversations, and we ask what a relationship needs in order to hold a difficult moment.',
    explores: ['Trust and repair', 'Power and position', 'Recurring patterns', 'Interdependence'],
    question: 'What does this relationship need in order to hold this conversation?',
  },
  {
    n: 5,
    slug: 'expression',
    name: 'Expression',
    color: '#51A8E7',
    short: 'How we speak, listen and are heard.',
    body: 'At the level of Expression we attend to language, tone, silence and listening. What we say, and how it lands, can open or close a conversation. Here we practise speaking honestly without wounding, and listening deeply without losing ourselves.',
    explores: ['Deep listening', 'Language that invites', 'Tone, silence and the unsaid', 'Asking reflective questions'],
    question: 'What is wanting to be said, and how might it be heard?',
  },
  {
    n: 6,
    slug: 'intuition',
    name: 'Intuition',
    color: '#6075AB',
    short: 'The felt sense beneath what is spoken.',
    body: 'Beneath every conversation runs a quieter one. At the level of Intuition we learn to notice the felt sense, the hunch, the shift in the room, and to hold it with curiosity rather than certainty. Intuition is a skill we can refine, not a gift only some possess.',
    explores: ['The felt sense in the body', 'Reading the room', 'Holding hunches lightly', 'Knowing when to wait'],
    question: 'What do we sense that we have not yet named?',
  },
  {
    n: 7,
    slug: 'spirituality',
    name: 'Spirituality',
    color: '#935EB2',
    short: 'The deeper unity beyond conflict.',
    body: 'At the deepest level, every conflict rests within something larger. At the level of Spirituality we explore the deeper unity beyond conflict: what connects us even while we disagree. This level is open to every tradition and to none.',
    explores: ['The unity beneath difference', 'Compassion and forgiveness', 'Connection beyond the self', 'A shared whole that holds us all'],
    question: 'What unites us beyond this conflict?',
  },
];

/* --------------------------------------------------------------- the path -- */

export interface Offer {
  title: string;
  href: string;
  meta: string;
  body: string;
  image: string;
}

export const TIERS = [
  {
    key: 'explore',
    label: 'Explore',
    badge: 'Free',
    title: 'Begin with curiosity',
    body: 'Gentle, free ways to discover what Conflict Intelligence might mean in our own lives and work.',
    offers: [
      {title: '7-Day Conflict Prevention Challenge', href: '/challenge', meta: 'Free · 7 days · nine videos'},
      {title: 'Beyond Resolution', href: '/beyond-resolution', meta: 'Free · Three live sessions for practitioners'},
      {title: 'The Seven Steps to Peace', href: '/childrens-book', meta: 'Free · 18-page illustrated picture book'},
    ],
  },
  {
    key: 'build',
    label: 'Build skills',
    badge: '$147',
    title: 'Practise with real tools',
    body: 'A physical card deck, a companion workbook and a live webinar for exploring conflict through the seven levels.',
    offers: [{title: 'Conflict Exploration Kit', href: '/conflict-exploration-kit', meta: '$147 USD · Card deck, companion workbook and live webinar'}],
  },
  {
    key: 'deep',
    label: 'Go deep',
    badge: 'Certification',
    title: 'Become a practitioner',
    body: 'Fourteen live sessions across all seven levels, with specializations in mediation and conflict coaching.',
    offers: [{title: 'Seven Levels Practitioner Certification', href: '/certification', meta: '42 hours · 14 Thursday sessions · Virtual'}],
  },
] as const;

/* -------------------------------------------------------------- audiences -- */

export const AUDIENCES = [
  {
    title: 'For practitioners',
    body: 'Mediators, coaches, ombuds, HR and conflict professionals who sense there is more beneath the surface of the conflicts they hold.',
    href: '/beyond-resolution',
    link: 'Explore Beyond Resolution',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=70',
    alt: 'Two colleagues in conversation across a meeting table',
  },
  {
    title: 'For people-first leaders',
    body: 'Leaders who would rather understand tension in a team than smooth it over, and who want to lead through difficulty with steadiness.',
    href: '/conflict-exploration-kit',
    link: 'See the Exploration Kit',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=70',
    alt: 'Two colleagues celebrating together at a desk',
  },
  {
    title: 'For anyone in a conflict right now',
    body: 'If a conflict is weighing on you today, you are welcome here. We might begin with one small, quiet step at a time.',
    href: '/challenge',
    link: 'Begin the free challenge',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=800&q=70',
    alt: 'Two empty chairs facing the sea on a quiet beach',
  },
  {
    title: 'For parents and educators',
    body: 'A gentle picture book that helps children find words for big feelings and practise making peace, one step at a time.',
    href: '/childrens-book',
    link: 'Read the children’s book',
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=800&q=70',
    alt: 'A parent sitting on a sofa with two young children and a tablet',
  },
];

/* ----------------------------------------------------------- testimonials -- */

// PLACEHOLDER: sample testimonials, invented for layout. `sample: true`
// shows a "Sample" tag on the page. Replace with real words (with permission)
// and set `sample: false`, or delete them.
export const TESTIMONIALS = [
  {
    quote: 'The Seven Levels gave me language for what I had sensed in the room for years but could never name.',
    who: 'Mediator, workplace practice',
    sample: true,
  },
  {
    quote: 'I came in the middle of a painful family conflict. I did not find quick answers. I found a slower, kinder way to ask the questions.',
    who: 'Challenge participant',
    sample: true,
  },
  {
    quote: 'Our team uses the cards at the start of hard conversations. Something softens when we begin with a question instead of a position.',
    who: 'Director of people and culture',
    sample: true,
  },
];

/* -------------------------------------------------------------------- FAQ -- */

/** The definition answer engines should quote. Keep it to one or two sentences. */
export const CIQ_DEFINITION =
  'Conflict Intelligence (CIQ) is the capacity to perceive, understand and engage with conflict wisely, so that conflict becomes a source of insight, growth and connection rather than harm. As emotional intelligence (EQ) is to emotions, Conflict Intelligence (CIQ) is to conflict.';

export const CIQ_FAQ = [
  {
    q: 'What is Conflict Intelligence (CIQ)?',
    a: CIQ_DEFINITION,
  },
  {
    q: 'How is Conflict Intelligence different from conflict resolution?',
    a: 'Conflict resolution focuses on ending a dispute. Conflict Intelligence focuses on understanding what a conflict is made of: the felt sense of safety of everyone present, the emotions and identities it touches, the relationships it moves through, how it is expressed, what we sense beneath it and the deeper unity beyond it. Resolution may follow, yet the aim is wisdom and connection, not only agreement.',
  },
  {
    q: 'How is Conflict Intelligence related to emotional intelligence?',
    a: 'Emotional intelligence (EQ) is the capacity to recognize and work with emotions. Conflict Intelligence (CIQ) includes that capacity, and extends it to everything else that is present when people disagree: safety, identity, relationship, expression, intuition and the deeper unity beyond conflict. EQ is to emotions as CIQ is to conflict.',
  },
  {
    q: 'Can Conflict Intelligence be learned?',
    a: 'Yes. Conflict Intelligence is a set of capacities that grow with practice and reflection, much like emotional intelligence. We develop it by slowing down, noticing what is present at each level of a conflict, and practising new responses in a supportive community.',
  },
  {
    q: 'What is the Seven Levels Framework?',
    a: 'The Seven Levels Framework is the map we use to explore and develop Conflict Intelligence. It describes seven levels present in every conflict: Space, Emotions, Identity, Relationships, Expression, Intuition and Spirituality. Moving through the levels helps us see a conflict more fully and respond with more care.',
  },
  {
    q: 'Who is Conflict Intelligence for?',
    a: 'Conflict Intelligence is for anyone who meets conflict: mediators, coaches, ombuds, HR and conflict professionals; leaders who put people first; individuals working through a personal conflict; and parents and educators helping children find their way to peace.',
  },
  {
    q: 'How might we begin developing Conflict Intelligence?',
    a: 'A gentle place to begin is the free 7-Day Conflict Prevention Challenge: seven days and nine videos, one for each of the seven levels with an introduction and an integration. Practitioners might begin with Beyond Resolution, a free series of three live sessions, and parents and educators with the free picture book, The Seven Steps to Peace.',
  },
  {
    q: 'Is there a certification in Conflict Intelligence?',
    a: 'Yes. The Seven Levels Practitioner Certification is 42 hours of live, virtual learning across 14 Thursday sessions, covering all seven levels with specializations in mediation and conflict coaching. Graduates become Certified Seven Levels Practitioners and are listed in the Practitioners Directory.',
  },
];

/* ---------------------------------------------------------- certification -- */

export const CERT = {
  hours: 42,
  sessions: 14,
  price: '$2,646',
  instalments: '7 payments of $378 USD',
  registrationOpens: 'November 2026',
  cohorts: [
    {name: 'Winter/Spring cohort', dates: 'January 21 – April 22, 2027', note: 'First cohort'},
    // Dates as supplied. Note: September 11 and December 11 do not fall on a
    // Thursday in 2026 or 2027; confirm the dates and the year.
    {name: 'Fall cohort', dates: 'September 11 – December 11', note: 'Dates to be confirmed'},
  ],
  curriculum: [
    {label: 'Opening session', count: 1, body: 'We arrive, meet one another and set the ground for fourteen weeks of shared practice.'},
    {label: 'The Seven Levels', count: 7, body: 'One session for each level, from Space to Spirituality, with live practice and reflection.'},
    {label: 'Mediation specialization', count: 2, body: 'Bringing the Seven Levels into the mediation room: preparation, presence and the moments that turn a conversation.'},
    {label: 'Conflict coaching specialization', count: 2, body: 'Working one to one: helping a client explore their own conflict through each level.'},
    {label: 'Closing and open conversation', count: 2, body: 'Integration, a closing circle and an open ask-me-anything session with Ian.'},
  ],
  includes: [
    'A physical Conflict Exploration Kit card deck, shipped before session one',
    'A physical copy of Resolving From Within, shipped before session one',
    'Six complimentary months in the Community of Practice after the final session',
    'A listing in the Practitioners Directory as a Certified Seven Levels Practitioner',
    'Live, virtual sessions with a small cohort of fellow practitioners',
  ],
};

export const CERT_FAQ = [
  {
    q: 'Who is the certification for?',
    a: 'The certification is designed for mediators, coaches, ombuds, HR and conflict professionals, and for leaders who hold conflict as part of their work. No prior training in the Seven Levels is required.',
  },
  {
    q: 'What happens if we miss a session?',
    // PLACEHOLDER: confirm the recording and attendance policy.
    a: 'Life happens. Sessions are recorded for registered participants, and we will talk together about how to complete any missed practice. Attendance requirements for certification will be shared at registration.',
  },
  {
    q: 'What time are the sessions?',
    // PLACEHOLDER: add the session time and time zone.
    a: 'Sessions take place on Thursdays, three hours each. The exact time and time zone will be shared when registration opens in November 2026.',
  },
  {
    q: 'Can we pay in instalments?',
    a: 'Yes. The certification is $2,646 USD in full, or seven monthly payments of $378 USD.',
  },
];

/* ------------------------------------------------------------------ about -- */

// Draft biography: Ian, please rewrite in your own words.
export const ABOUT = {
  title: 'About Ian Renaud',
  lede: 'Author, guide and the voice behind Conflict Intelligence Training.',
};

/** Fill `{name}` with the community's name. */
export function withName(text: string, name: string): string {
  return text.replaceAll('{name}', name);
}
