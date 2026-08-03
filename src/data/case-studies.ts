export interface CaseStudyMetaItem {
  label: string;
  name: string;
  href?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  supporting: string;
  role: CaseStudyMetaItem[];
  team: CaseStudyMetaItem[];
  press: CaseStudyMetaItem[];
  impact: string[];
  problem: string[];
  explorations: string[];
  solution: string[];
  takeaway: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'benefits-hub',
    title: 'Duis non rutrum elit, sed ultricies nisl aliquam',
    supporting:
      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.',
    role: [
      { label: 'Lead designer', name: 'Miles Anderson' },
      { label: 'Design strategist', name: 'Miles Anderson' },
    ],
    team: [
      { label: 'Product', name: 'Jane Doe' },
      { label: 'Engineering', name: 'John Smith' },
      { label: 'Research', name: 'Alex Johnson' },
    ],
    press: [
      {
        label: 'Fast Company',
        name: 'How one team reimagined employee benefits',
        href: '#',
      },
      { label: 'Design Week', name: 'Benefits Hub case study', href: '#' },
    ],
    impact: [
      'Increased enrollment completion by 34% across pilot markets within the first quarter after launch.',
      'Reduced support tickets related to benefits selection by 28% year over year.',
    ],
    problem: [
      'Employees struggled to understand their benefits options during open enrollment. The existing experience was fragmented across multiple tools, with dense legal copy and little guidance on which plans fit their needs.',
      'Internal stakeholders needed a single source of truth that could scale across regions while still allowing HR teams to customize offerings. The legacy flow had not been redesigned in over a decade.',
    ],
    explorations: [
      'Early concepts focused on a guided wizard that walked employees through each decision point. Usability testing revealed that users wanted to compare options side by side before committing to a path.',
      'We iterated toward a hub model: a dashboard that surfaced personalized recommendations, plan comparisons, and educational content in one place. Low-fidelity prototypes helped align product and legal on what could ship in phase one.',
    ],
    solution: [
      'The final design centered on a personalized benefits hub with clear plan cards, inline education, and a progress tracker for enrollment. We introduced plain-language summaries vetted by legal and a comparison view for medical, dental, and vision plans.',
      'A modular content system let regional HR teams configure offerings without engineering support. The experience launched on web and mobile, with analytics built in to measure drop-off at each step.',
    ],
    takeaway: [
      'Complex enterprise workflows benefit from progressive disclosure. Breaking enrollment into scannable sections with clear next steps reduced cognitive load more than a single long form.',
      'Cross-functional alignment early—especially with legal and HR—saved rework later. Co-design sessions with support staff surfaced edge cases we would have missed in the lab.',
    ],
  },
  {
    slug: 'placeholder-two',
    title: 'Placeholder project two',
    supporting:
      'Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.',
    role: [{ label: 'Lead designer', name: 'Placeholder Name' }],
    team: [{ label: 'Product', name: 'Placeholder Name' }],
    press: [{ label: 'Publication', name: 'Placeholder article', href: '#' }],
    impact: [
      'Placeholder impact statement describing a measurable outcome from the project.',
      'Second placeholder impact statement with another key result.',
    ],
    problem: [
      'Placeholder problem statement describing the user or business challenge this project addressed.',
      'Second paragraph expanding on context, constraints, and why the problem mattered.',
    ],
    explorations: [
      'Placeholder exploration notes on early concepts and directions considered during the design process.',
      'Second paragraph on iteration, feedback, and how the team narrowed toward a solution.',
    ],
    solution: [
      'Placeholder solution summary describing the final design approach and key features shipped.',
      'Second paragraph on implementation details, rollout, and how the solution addressed the problem.',
    ],
    takeaway: [
      'Placeholder takeaway reflecting on what worked well and what the team learned.',
      'Second takeaway on lessons that could apply to future projects.',
    ],
  },
  {
    slug: 'placeholder-three',
    title: 'Placeholder project three',
    supporting:
      'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo.',
    role: [{ label: 'Lead designer', name: 'Placeholder Name' }],
    team: [{ label: 'Engineering', name: 'Placeholder Name' }],
    press: [{ label: 'Publication', name: 'Placeholder article', href: '#' }],
    impact: [
      'Placeholder impact statement describing a measurable outcome from the project.',
      'Second placeholder impact statement with another key result.',
    ],
    problem: [
      'Placeholder problem statement describing the user or business challenge this project addressed.',
      'Second paragraph expanding on context, constraints, and why the problem mattered.',
    ],
    explorations: [
      'Placeholder exploration notes on early concepts and directions considered during the design process.',
      'Second paragraph on iteration, feedback, and how the team narrowed toward a solution.',
    ],
    solution: [
      'Placeholder solution summary describing the final design approach and key features shipped.',
      'Second paragraph on implementation details, rollout, and how the solution addressed the problem.',
    ],
    takeaway: [
      'Placeholder takeaway reflecting on what worked well and what the team learned.',
      'Second takeaway on lessons that could apply to future projects.',
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
