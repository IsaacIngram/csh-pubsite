export interface TourRoom {
  id: string;
  title: string;
  photos: string[];
  description: string;
}

export const tourRooms: TourRoom[] = [
  {
    id: "dorm",
    title: "Dorm Room",
    photos: ["/tour/dorm/1"],
    description:
      "Though the walls are the same as regular dorm rooms, our rooms usually look rather different than the standard RIT room layout.",
  },
  {
    id: "research-room",
    title: "Research Room",
    photos: ["/tour/research/1", "/tour/research/2", "/tour/research/3", "/tour/research/4"],
    description:
      "The Research Room is CSH's workshop. It houses our two 3D Printers, as well as the tools and materials for members' electronics projects.",
  },
  {
    id: "user-center",
    title: "User Center",
    photos: ["/tour/usercenter/1", "/tour/usercenter/2"],
    description:
      "The User Center is a productive social room. It is often sought out as a place for members to socialize and get work done. It also serves as a meeting place, a project work room, and a technical seminar room.",
  },
  {
    id: "lounge",
    title: "Lounge",
    photos: ["/tour/lounge/1", "/tour/lounge/2"],
    description:
      "The Lounge is CSH's main social hub. This room is used to host movie nights, social events, technical seminars, company visits, and E-Board meetings.",
  },
  {
    id: "server-room",
    title: "Server Room",
    photos: ["/tour/server/1", "/tour/server/2"],
    description:
      "CSH's server room serves as a place for members to learn and practice their networking skills. It also serves as a place to host the variety of network services provided to our members.",
  },
  {
    id: "software-room",
    title: "Software Room",
    photos: ["/tour/software/1", "/tour/software/2"],
    description:
      "The Software Room is the perfect place for small group tasks. It is a quiet room that is away from the normal hustle and bustle of floor which makes it great for taking phone calls, playing board games, and working on group assignments. The Software Room also houses CSH's book collection as well as a variety of board games.",
  },
  {
    id: "library",
    title: "Library",
    photos: ["/tour/library/1", "/tour/library/2"],
    description:
      "The Library is CSH's multi-function archive and arcade. It serves as a storage place for all of our historical records and keepsakes as well as a variety of arcade machines, both vintage and custom-built.",
  },
];
