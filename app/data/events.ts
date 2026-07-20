export type Event = {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  status: "Upcoming" | "Past";
};


export const events: Event[] = [

  {
    title: "Maulid Nabiyyi 2026",
    date: "24 January 2026",
    location: "Sabon Zongo, Penny Wise",
    image: "/images/event-maulid.jpg",
    description:
      "Annual Maulid Nabiyyi celebration organized by Zawiyatu Shabaab Nasrullah, bringing the community together to honor the life and teachings of Prophet Muhammad ﷺ.",
    status: "Past",
  },


  {
    title: "Tahniya Recitation Program",
    date: "January 2026",
    location: "Sabon Zongo, Accra",
    image: "/images/about-zawiya.jpg",
    description:
      "A spiritual gathering featuring Tahniya recitation and community remembrance.",
    status: "Past",
  },


  {
    title: "Islamic Lecture Program",
    date: "Monthly Program",
    location: "Sabon Zongo, Penny Wise",
    image: "/images/about-zawiya.jpg",
    description:
      "Educational sessions focused on Islamic knowledge, spiritual growth, and community development.",
    status: "Upcoming",
  },


  {
    title: "Ramadan Program 2027",
    date: "Ramadan 2027",
    location: "Sabon Zongo, Accra",
    image: "/images/about-zawiya.jpg",
    description:
      "Special Ramadan programs including spiritual lectures, community activities, and gatherings.",
    status: "Upcoming",
  },

];