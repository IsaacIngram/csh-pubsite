export interface EboardMember {
  role: string;
  photoSlug: string;
  members: { name: string; linkedin?: string }[];
  email: string;
  description: string;
}

export const eboard: EboardMember[] = [
  {
    role: "Chair",
    photoSlug: "chairperson",
    members: [{ name: "Ian Kopke", linkedin: "https://www.linkedin.com/in/ian-kopke/" }],
    email: "chair@csh.rit.edu",
    description:
      "The Chair of CSH serves as the head of E-Board, supervising the activities of the directors and presiding over our weekly house meetings. They are also the primary spokesperson for the House, representing the interests of our members in communications with RIT and the rest of the world.",
  },
  {
    role: "Evaluations",
    photoSlug: "evals",
    members: [{ name: "Mia McSwain", linkedin: "https://www.linkedin.com/in/mia-mcswain/" }],
    email: "evaluations@csh.rit.edu",
    description:
      "Evaluations is responsible for connecting with the RIT student community, as well as organizing the process of screening, accepting, and welcoming new members. Members wouldn't be here without evals! If you would like to visit or tour the floor, let the Eval Director know and they can arrange this.",
  },
  {
    role: "Financial",
    photoSlug: "financial",
    members: [{ name: "Julian Barker", linkedin: "https://www.linkedin.com/in/julian-barker-733591389/" }],
    email: "financial@csh.rit.edu",
    description:
      "Financial is responsible for managing CSH's finances, collecting semesterly member dues, and hatching new fundraising schemes. All of our money goes towards new resources and project components for members to use; CSH is a registered non-profit organization with an annual self-generated budget.",
  },
  {
    role: "House History",
    photoSlug: "history",
    members: [{ name: "Cooper Miles", linkedin: "https://www.linkedin.com/in/cooper-miles-9b1253376/" }],
    email: "history@csh.rit.edu",
    description:
      "The primary responsibility of the History director is keeping the line of communication between CSH and our alumni open. We believe members should have a well-developed understanding of House's origins and accomplishments. History keeps the past alive through the yearbook, Coredump newsletter, floor displays, archiving, updating the media database, and managing alumni relations. History also coordinates alumni storytelling nights and other traditional events.",
  },
  {
    role: "House Improvements",
    photoSlug: "imps",
    members: [{ name: "Nick Gilbert", linkedin: "https://www.linkedin.com/in/nick-gilbert-nh/" }],
    email: "houseimprovements@csh.rit.edu",
    description:
      "House Improvements is responsible for keeping our living space respectable and comfortable. They delegate projects that improve the physical aspects of floor, such as painting, cleaning, building, and organizing House's resources. While we may not be the tidiest group of people, we like to take care of our floor, and it shows.",
  },
  {
    role: "OpComm",
    photoSlug: "opcomm",
    members: [{ name: "Noah Hanford", linkedin: "https://www.linkedin.com/in/noah-hanford-9609693a8/" }],
    email: "opcomm@csh.rit.edu",
    description:
      "The OpComm director, together with a group of technically skilled members known as RTPs, is responsible for maintaining CSH's servers and network infrastructure. Becoming an RTP allows members to develop and practice skills that are essential for working in computing fields. If you have any questions about House's technical resources, the OpComm director should be your first stop!",
  },
  {
    role: "Research and Development",
    photoSlug: "rd",
    members: [
      { name: "Riley Barshak", linkedin: "https://www.linkedin.com/in/rileybarshak/" },
      { name: "Tyler Severino", linkedin: "https://www.linkedin.com/in/tyler-severino-0b741b3b9/" },
    ],
    email: "rnd@csh.rit.edu",
    description:
      "R&D is responsible for organizing seminars and assisting with technical projects, with the goal of encouraging members to learn new skills and gain experience.",
  },
  {
    role: "Social",
    photoSlug: "social",
    members: [
      { name: "Eli Mares", linkedin: "https://www.linkedin.com/in/eli-mares/" },
      { name: "Nikolai Strong", linkedin: "https://www.linkedin.com/in/nikolai-strong-267400388/" },
    ],
    email: "social@csh.rit.edu",
    description:
      "Social is responsible for planning and running social events for our members, such as Welcome Back, movie nights, and other events on floor and around Rochester.",
  },
  {
    role: "Public Relations",
    photoSlug: "pr",
    members: [{ name: "Will Hellinger", linkedin: "https://www.linkedin.com/in/will-hellinger/" }],
    email: "publicrelations@csh.rit.edu",
    description:
      "Public Relations is responsible for maintaining CSH's public facing image, primarily through the management of our various social media accounts. They work to share all information regarding the organization, and the goings-on therein, as well as contacting various outside parties, including but not limited to employers, students, and media outlets to share what we're up to!",
  },
];
