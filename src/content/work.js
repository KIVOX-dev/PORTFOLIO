// Selected work, taken from the GrowALabs agency site.
// Screenshots/textures live in /public/assets/work (see texture() below for the naming).

const texture = (name, width, largeWidth) => ({
  srcSet: `/assets/work/${name}.jpg ${width}w, /assets/work/${name}-large.jpg ${largeWidth}w`,
  placeholder: `/assets/work/${name}-placeholder.jpg`,
});

export const projects = [
  {
    slug: 'global-edutech',
    title: 'Global Edutech',
    summary: 'A bright, easy-to-browse website for an education provider in Coimbatore',
    description:
      'A bright, easy-to-browse website for an education provider in Coimbatore. It presents preschool, after-school and home tuition programmes and more than 30 courses, such as Abacus, Handwriting, Vedic Maths and Phonics, with clear ways for parents to enquire.',
    category: 'Client website',
    roles: ['Design', 'Frontend', 'Education'],
    url: 'https://www.globaledutech.co.in/',
    host: 'globaledutech.co.in',
    device: 'laptop',
    shot: { name: 'globaledutech', width: 1280, largeWidth: 2560, aspect: [1280, 800] },
    alt: 'Global Edutech website homepage',
    sections: [
      {
        heading: 'The brief',
        text: [
          'Parents in Coimbatore needed one place to see what Global Edutech offers: preschool, after-school and home tuition programmes, plus more than 30 courses from Abacus and Handwriting to Vedic Maths and Phonics.',
          'The site had to feel warm and playful for families while staying quick to scan on a phone.',
        ],
      },
      {
        heading: 'What we built',
        text: [
          'A colourful, responsive website that puts programmes and courses up front, with clear ways for parents to enquire from any page.',
        ],
      },
    ],
  },
  {
    slug: 'talentsnaps',
    title: 'TalentSnaps',
    summary: 'A campus placement platform we built and run ourselves',
    description:
      'A campus placement platform we built and run ourselves. Students see the drives they are eligible for, apply in one tap and follow every round, while placement cells control access and verify offer letters.',
    category: 'Our own product',
    roles: ['Product', 'Full-stack', 'Placements'],
    url: 'https://www.talentsnaps.com/',
    host: 'talentsnaps.com',
    device: 'phone',
    shot: { name: 'talentsnaps', width: 1280, largeWidth: 2560, aspect: [1280, 800] },
    mobileShots: [
      { name: 'talentsnaps-mobile-1', width: 375, largeWidth: 750 },
      { name: 'talentsnaps-mobile-2', width: 375, largeWidth: 750 },
    ],
    alt: 'TalentSnaps landing page',
    sections: [
      {
        heading: 'Built for students, not spreadsheets',
        text: [
          'Students no longer wait outside the placement office or scroll through group chats for updates. They see every drive they are eligible for, apply in one tap and follow each round in one place.',
        ],
      },
      {
        heading: 'Control for placement cells',
        text: [
          'Placement cells decide who gets access and verify offer letters, so institutions stay in charge of their own data while students get a clear path from campus to first offer.',
        ],
      },
    ],
  },
  {
    slug: 'certificates',
    title: 'We The Leaders certificates',
    summary: 'A custom certificate tool for wetheleaders.org, delivered by QR code at events',
    description:
      'A custom certificate tool for We The Leaders. At an event, attendees scan a QR code, enter the event code and receive their certificate on their own phone, with no manual sending.',
    category: 'Custom tool for wetheleaders.org',
    roles: ['Custom tool', 'QR code', 'Events'],
    url: 'https://certificategenerator-brown.vercel.app/',
    host: 'wetheleaders.org',
    device: 'laptop',
    shot: { name: 'certificates', width: 1280, largeWidth: 2560, aspect: [1280, 800] },
    alt: 'The certificate generator asking for an event code',
    sections: [
      {
        heading: 'No more manual sending',
        text: [
          'Handing out certificates after an event used to mean collecting names and sending files one by one. Now attendees scan a QR code shown at the event, enter the event code and get their certificate on their own phone.',
        ],
      },
    ],
  },
];

export const getProject = slug => projects.find(project => project.slug === slug);

export const getTexture = shot => texture(shot.name, shot.width, shot.largeWidth);
