import { EVENT_IDS } from "@/app/schedule/content";
export type GuestList = {
  [k: string]: {
    guests: {
      firstName: string;
      lastName: string;
      title?: string;
      suffix?: string;
    }[];
    events: (typeof EVENT_IDS)[number][];
    email?: string;
    phone?: string;
  };
};

export const GUESTS: GuestList = {
  MatthewCuccaro0: {
    guests: [
      {
        firstName: "Matthew",
        lastName: "Cuccaro",
        title: "Mr.",
      },
      {
        firstName: "Vanita",
        lastName: "Cuccaro",
        title: "Mrs.",
      },
      {
        firstName: "Henry",
        lastName: "Cuccaro",
      },
      {
        firstName: "Amaya",
        lastName: "Cuccaro",
      },
      {
        firstName: "Lucas",
        lastName: "Cuccaro",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "vanita.cuccaro@gmail.com",
    phone: "2016007436",
  },
  PatrickDay0: {
    guests: [
      {
        firstName: "Patrick",
        lastName: "Day",
        title: "Mr.",
      },
      {
        firstName: "Smita",
        lastName: "Day",
        title: "Mrs.",
      },
      {
        firstName: "Mckenzie",
        lastName: "Day",
      },
      {
        firstName: "Brigita",
        lastName: "Day",
      },
      {
        firstName: "Finnegan",
        lastName: "Day",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "smita.day@gmail.com",
    phone: "6462479121",
  },
  AshokPatel0: {
    guests: [
      {
        firstName: "Ashok",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Tina",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Mahek",
        lastName: "Patel",
      },
      {
        firstName: "Tia",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "tinainc2002@gmail.com",
    phone: "6477177690",
  },
  BalubhaiPatel0: {
    guests: [
      {
        firstName: "Balubhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Manisha",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Anish",
        lastName: "Patel",
      },
      {
        firstName: "Parita",
        lastName: "Patel",
      },
      {
        firstName: "Rishi",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "parita.patel1991@gmail.com",
    phone: "7062702345",
  },
  BhadreshPatel0: {
    guests: [
      {
        firstName: "Bhadresh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Dipti",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Yatish",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "dipu88m@gmail.com",
    phone: "2017363143",
  },
  ChiragPatel0: {
    guests: [
      {
        firstName: "Chirag",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Ilaben",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Payal",
        lastName: "Patel",
      },
      {
        firstName: "Pravya",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "chirag4payal@gmail.com",
    phone: "2014233763",
  },
  DivyeshPatel0: {
    guests: [
      {
        firstName: "Divyesh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Panna",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Diya",
        lastName: "Patel",
      },
      {
        firstName: "Prince",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "dvs_1111@yahoo.com",
    phone: "2018500944",
  },
  "Hansaben dahyabhaiPatel0": {
    guests: [
      {
        firstName: "Hansaben dahyabhai",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Kaushik",
        lastName: "Patel",
      },
      {
        firstName: "Hiteshi",
        lastName: "Patel",
      },
      {
        firstName: "Divita",
        lastName: "Patel",
      },
      {
        firstName: "Sunny",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kaushik.patel1982@gmail.com",
    phone: "7174253760",
  },
  MadhuPatel0: {
    guests: [
      {
        firstName: "Madhu",
        lastName: "Patel",
        title: "Ms.",
      },
      {
        firstName: "Ankur",
        lastName: "Patel",
      },
      {
        firstName: "Cynthia",
        lastName: "Clement-patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "patel.ankur.m@gmail.com",
    phone: "2016004742",
  },
  TejasPatel0: {
    guests: [
      {
        firstName: "Tejas",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Mitali",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Shanaya",
        lastName: "Patel",
      },
      {
        firstName: "Avni",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "mitali2886@yahoo.com",
    phone: "5516892104",
  },
  VarshaPatel0: {
    guests: [
      {
        firstName: "Varsha",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Praphat",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Adarsh",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "pvarsha227@gmail.com",
    phone: "9083423658",
  },
  TinaAshok0: {
    guests: [
      {
        firstName: "Tina",
        lastName: "Ashok",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
  },
  HemanMamo0: {
    guests: [
      {
        firstName: "Heman",
        lastName: "Mamo",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
  },
  AlGaras0: {
    guests: [
      {
        firstName: "Al",
        lastName: "Garas",
        title: "Mr.",
      },
      {
        firstName: "Aida",
        lastName: "Garas",
        title: "Mrs.",
      },
    ],
    events: [],
    email: "gameel48@gmail.com",
    phone: "7326426709",
  },
  ChetanPatel0: {
    guests: [
      {
        firstName: "Chetan",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Mehul",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    email: "chetanp0815@gmail.com",
    phone: "7327159515",
  },
  DevanshiPatel0: {
    guests: [
      {
        firstName: "Devanshi",
        lastName: "Patel",
        title: "Ms.",
      },
      {
        firstName: "Mayuri",
        lastName: "Patel",
        title: "Ms.",
      },
    ],
    events: [],
    email: "devpatel825@gmail.com",
    phone: "2018840211",
  },
  DilipPatel0: {
    guests: [
      {
        firstName: "Dilip",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Parvati",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Ami",
        lastName: "Shah",
      },
      {
        firstName: "Ritesh",
        lastName: "Patel",
      },
      {
        firstName: "Ronak",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "patel2346@gmail.com",
    phone: "7325898922",
  },
  DimplePatel0: {
    guests: [
      {
        firstName: "Dimple",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Naresh",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "9088032934",
  },
  JayantibhaiPatel0: {
    guests: [
      {
        firstName: "Jayantibhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Sudha",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Sunny",
        lastName: "Patel",
      },
      {
        firstName: "Nish",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "patelsudha386@gmail.com",
    phone: "5512144825",
  },
  MukeshPatel0: {
    guests: [
      {
        firstName: "Mukesh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Jashuben",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Manali",
        lastName: "Patel",
      },
      {
        firstName: "Jigar",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "manali.patel96@gmail.com",
    phone: "7324391286",
  },
  NileshPatel0: {
    guests: [
      {
        firstName: "Nilesh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Sarasvati",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Jaymin",
        lastName: "Patel",
      },
      {
        firstName: "Shahil",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "npatelnrp@comcast.net",
    phone: "7325816523",
  },
  SubhashbhaiPatel0: {
    guests: [
      {
        firstName: "Subhashbhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Alkaben",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Ravi",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "alkaandnavnit@gmail.com",
    phone: "9293746422",
  },
  RonitPrajapati0: {
    guests: [
      {
        firstName: "Ronit",
        lastName: "Prajapati",
        title: "Mr.",
      },
      {
        firstName: "Brandy",
        lastName: "Prajapati",
        title: "Mrs.",
      },
    ],
    events: [],
    email: "ronitprajapati@gmail.com",
    phone: "6467993652",
  },
  BijalShah0: {
    guests: [
      {
        firstName: "Bijal",
        lastName: "Shah",
        title: "Mrs.",
      },
      {
        firstName: "Yash",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "bijalilesh@hotmail.com",
    phone: "9177108473",
  },
  BhartiPatel0: {
    guests: [
      {
        firstName: "Bharti",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Satishbhai",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    phone: "2014016495",
  },
  BhartiPatel1: {
    guests: [
      {
        firstName: "Bharti",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Jagdish",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "jrpatel10258@gmail.com",
    phone: "7329861584",
  },
  DahyabhaiPatel0: {
    guests: [
      {
        firstName: "Dahyabhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Bharti",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Ashish",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "pateldkbharti@yahoo.com",
    phone: "3236958289",
  },
  DaxaPatel0: {
    guests: [
      {
        firstName: "Daxa",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Ziver",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "5515802978",
  },
  DhirubhaiPatel0: {
    guests: [
      {
        firstName: "Dhirubhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Gitaben",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Shantiben",
        lastName: "Patel",
      },
    ],
    events: [],
    phone: "9083000371",
  },
  HanilPatel0: {
    guests: [
      {
        firstName: "Hanil",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Rosni",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Vijal",
        lastName: "Patel",
      },
      {
        firstName: "Dhanshukbhai",
        lastName: "Patel",
      },
    ],
    events: [],
    phone: "5516895384",
  },
  JigneshbhaiPatel0: {
    guests: [
      {
        firstName: "Jigneshbhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Akruti",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [],
    phone: "5628417402",
  },
  JyotiPatel0: {
    guests: [
      {
        firstName: "Jyoti",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Prakash",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "7323379476",
  },
  KalpanaPatel0: {
    guests: [
      {
        firstName: "Kalpana",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Pragnesh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Shrena",
        lastName: "Patel",
      },
    ],
    events: [],
    phone: "3108958044",
  },
  KishorbhaiPatel0: {
    guests: [
      {
        firstName: "Kishorbhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Jasuben",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [],
    phone: "3256958289",
  },
  KokilaPatel0: {
    guests: [
      {
        firstName: "Kokila",
        lastName: "Patel",
        title: "Mrs.",
        suffix: "F",
      },
      {
        firstName: "Chhaganbhai",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    email: "kokip64@gmail.com",
    phone: "9082140724",
  },
  MaitreePatel0: {
    guests: [
      {
        firstName: "Maitree",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Kantibhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Trun",
        lastName: "Patel",
      },
      {
        firstName: "Adhya",
        lastName: "Patel",
      },
      {
        firstName: "Niruben",
        lastName: "Patel",
      },
    ],
    events: [],
    phone: "4265897757",
  },
  MitaliPatel0: {
    guests: [
      {
        firstName: "Mitali",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Vijay",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Asvi",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "patel_vijay75@yahoo.com",
    phone: "5105299199",
  },
  MitulPatel0: {
    guests: [
      {
        firstName: "Mitul",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "2487613327",
  },
  NaynaPatel0: {
    guests: [
      {
        firstName: "Nayna",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Amartbhai",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "2013884369",
  },
  NileshPatel1: {
    guests: [
      {
        firstName: "Nilesh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Jigisha",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Anav",
        lastName: "Patel",
      },
    ],
    events: [],
    phone: "8509601544",
  },
  NitanPatel0: {
    guests: [
      {
        firstName: "Nitan",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Bhavna",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [],
    email: "bhavnapatel9795@yahoo.com",
    phone: "8185218618",
  },
  PankajPatel0: {
    guests: [
      {
        firstName: "Pankaj",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Pragnesh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Vijay",
        lastName: "Patel",
      },
      {
        firstName: "Nitant",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "pankajpatel130@yahoo.com",
    phone: "3233176338",
  },
  PragneshPatel0: {
    guests: [
      {
        firstName: "Pragnesh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Dipti",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [],
    phone: "2016166183",
  },
  PramodbhaiPatel0: {
    guests: [
      {
        firstName: "Pramodbhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Surbhiben",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Shantaben",
        lastName: "Patel",
      },
      {
        firstName: "Neel",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "neal_pramod@yahoo.com",
    phone: "7325974213",
  },
  PranavPatel0: {
    guests: [
      {
        firstName: "Pranav",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "2019882217",
  },
  RajuPatel0: {
    guests: [
      {
        firstName: "Raju",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "2014671695",
  },
  RinkuPatel0: {
    guests: [
      {
        firstName: "Rinku",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Uday",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "2017257536",
  },
  UshaPatel0: {
    guests: [
      {
        firstName: "Usha",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Raju",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    email: "urajni@aol.com",
    phone: "5513587904",
  },
  VaishaliPatel0: {
    guests: [
      {
        firstName: "Vaishali",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Vinay",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Jayntibhai",
        lastName: "Patel",
      },
      {
        firstName: "Mayur",
        lastName: "Patel",
      },
      {
        firstName: "Shardaben",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "bapasmayur@yahoo.com",
    phone: "2053532238",
  },
  VallabhbhaiPatel0: {
    guests: [
      {
        firstName: "Vallabhbhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Madhuben",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [],
    email: "vpatel38@gmail.com",
  },
  VaniataPatel0: {
    guests: [
      {
        firstName: "Vaniata",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Bharat",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "2194558423",
  },
  VarshaPatel1: {
    guests: [
      {
        firstName: "Varsha",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Kiritbhai",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "9082941732",
  },
  RajubhaiPatel0: {
    guests: [
      {
        firstName: "Rajubhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Savitaben",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [],
    phone: "7575911993",
  },
  SarlaPatel0: {
    guests: [
      {
        firstName: "Sarla",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Rohan",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "9084167055",
  },
  HiralPatel0: {
    guests: [
      {
        firstName: "Hiral",
        lastName: "Patel",
        title: "Ms.",
      },
      {
        firstName: "Aadit",
        lastName: "Panchal",
        title: "Mr.",
      },
      {
        firstName: "Sanjay",
        lastName: "Panchal",
      },
      {
        firstName: "Kanan",
        lastName: "Panchal",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "aaditandhiral@gmail.com",
    phone: "3234198312",
  },
  KamleshPatel0: {
    guests: [
      {
        firstName: "Kamlesh",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [],
    phone: "5516890800",
  },
  RajubhaiPatel1: {
    guests: [
      {
        firstName: "Rajubhai",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Jyotshna",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [],
    email: "joship319@comcast.net",
    phone: "5513587904",
  },
  TanviPatel0: {
    guests: [
      {
        firstName: "Tanvi",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Nikita",
        lastName: "Patel",
        title: "Ms.",
      },
      {
        firstName: "Nikyj",
        lastName: "Patel",
      },
      {
        firstName: "Ryav",
        lastName: "Patel",
      },
      {
        firstName: "Evani",
        lastName: "Patel",
      },
    ],
    events: [],
    phone: "7048069835",
  },
  TarunPatel0: {
    guests: [
      {
        firstName: "Tarun",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Bhumika",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Trisha",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "trishapatel1192@gmail.com",
    phone: "7814913444",
  },
  VishalPatel0: {
    guests: [
      {
        firstName: "Vishal",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Kinjal",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Veer",
        lastName: "Patel",
      },
      {
        firstName: "Kiyara",
        lastName: "Patel",
      },
    ],
    events: [],
    email: "vpatel@live.ca",
    phone: "6477177690",
  },
  JayshreePatel0: {
    guests: [
      {
        firstName: "Jayshree",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Jigar",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Vani",
        lastName: "Patel",
      },
    ],
    events: [],
    phone: "2018153782",
  },
  JashubenPatel0: {
    guests: [
      {
        firstName: "Jashuben",
        lastName: "Patel",
      },
      {
        firstName: "Hemant",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    phone: "9146207426",
  },
  ChandrakantPatel0: {
    guests: [
      {
        firstName: "Chandrakant",
        lastName: "Patel",
      },
      {
        firstName: "Mita",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    phone: "2037330167",
  },
  RajeshPatel0: {
    guests: [
      {
        firstName: "Rajesh",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    phone: "2037330167",
  },
  MukeshPatel1: {
    guests: [
      {
        firstName: "Mukesh",
        lastName: "Patel",
      },
      {
        firstName: "Mona",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    phone: "2037330167",
  },
  VishalDhandhukia0: {
    guests: [
      {
        firstName: "Vishal",
        lastName: "Dhandhukia",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "dhandhukia.vishal@gmail.com",
    phone: "7324848058",
  },
  NatashaDoshi0: {
    guests: [
      {
        firstName: "Natasha",
        lastName: "Doshi",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "natashadoshi28@gmail.com",
    phone: "7328874024",
  },
  HamzahHusain0: {
    guests: [
      {
        firstName: "Hamzah",
        lastName: "Husain",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "hambino64@gmail.com",
    phone: "9082479877",
  },
  JayJadav0: {
    guests: [
      {
        firstName: "Jay",
        lastName: "Jadav",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "jjadav0703@gmail.com",
    phone: "7325434276",
  },
  JittyJoseph0: {
    guests: [
      {
        firstName: "Jitty",
        lastName: "Joseph",
        title: "Ms.",
      },
      {
        firstName: "Matt",
        lastName: "Simon",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "jitty.joseph94@gmail.com",
    phone: "7328414444",
  },
  TimyJoy0: {
    guests: [
      {
        firstName: "Timy",
        lastName: "Joy",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "timyjoy@gmail.com",
    phone: "9734527539",
  },
  MatthewMathai0: {
    guests: [
      {
        firstName: "Matthew",
        lastName: "Mathai",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "matthew.mathai@wagner.edu",
    phone: "9177445724",
  },
  ShacheeMehta0: {
    guests: [
      {
        firstName: "Shachee",
        lastName: "Mehta",
        title: "Ms.",
      },
      {
        firstName: "Sunny",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "shacheemehta@gmail.com",
    phone: "7329106495",
  },
  SomilParekh0: {
    guests: [
      {
        firstName: "Somil",
        lastName: "Parekh",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "somilparekh28@gmail.com",
    phone: "7329157489",
  },
  ArthPatel0: {
    guests: [
      {
        firstName: "Arth",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: ["wedding", "reception"],
    email: "mcarth94@gmail.com",
    phone: "7326499954",
  },
  JaideepPatel0: {
    guests: [
      {
        firstName: "Jaideep",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Nikita",
        lastName: "Eddy",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "jaideepnikitapatel@gmail.com",
    phone: "5512086379",
  },
  PinkalPatel0: {
    guests: [
      {
        firstName: "Pinkal",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Poonam",
        lastName: "Patel",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "patelpinkal42@gmail.com",
    phone: "7329837940",
  },
  VishalPatel1: {
    guests: [
      {
        firstName: "Vishal",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Reema",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Kai",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "reevish1927@gmail.com",
    phone: "9047088599",
  },
  JoshRajkumar0: {
    guests: [
      {
        firstName: "Josh",
        lastName: "Rajkumar",
        title: "Mr.",
      },
      {
        firstName: "Nisha",
        lastName: "Dave",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "joshxnisha@gmail.com",
    phone: "8483912700",
  },
  HariRakholia0: {
    guests: [
      {
        firstName: "Hari",
        lastName: "Rakholia",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "hvrakholia@gmail.com",
    phone: "2012144181",
  },
  KrupeshRay0: {
    guests: [
      {
        firstName: "Krupesh",
        lastName: "Ray",
        title: "Mr.",
      },
      {
        firstName: "Nami",
        lastName: "Patel",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "krupeshray24@gmail.com",
    phone: "9734208022",
  },
  DeepakSharma0: {
    guests: [
      {
        firstName: "Deepak",
        lastName: "Sharma",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "dsharma0265@gmail.com",
    phone: "7325279069",
  },
  JaskaranSingh0: {
    guests: [
      {
        firstName: "Jaskaran",
        lastName: "Singh",
        title: "Mr.",
      },
      {
        firstName: "Stephanie",
        lastName: "Silva",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "sijaskar@gmail.com",
    phone: "9082420861",
  },
  ArjunSinha0: {
    guests: [
      {
        firstName: "Arjun",
        lastName: "Sinha",
        title: "Mr.",
      },
      {
        firstName: "Trisha",
        lastName: "Malik",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "arjunsinhanj@gmail.com",
    phone: "7327782941",
  },
  AmarThakkar0: {
    guests: [
      {
        firstName: "Amar",
        lastName: "Thakkar",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "amarthakkar2007@gmail.com",
    phone: "2013104784",
  },
  RaviZaveri0: {
    guests: [
      {
        firstName: "Ravi",
        lastName: "Zaveri",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "ravizaveri23@gmail.com",
    phone: "2014524527",
  },
  HarshBhanderi0: {
    guests: [
      {
        firstName: "Harsh",
        lastName: "Bhanderi",
        title: "Mr.",
      },
      {
        firstName: "Krishna",
        lastName: "Patel",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "hbhanderi201@gmail.com",
    phone: "2014179892",
  },
  MohitDhanani0: {
    guests: [
      {
        firstName: "Mohit",
        lastName: "Dhanani",
        title: "Mr.",
      },
      {
        firstName: "Vidhi",
        lastName: "Shah",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "m.dhanani@yahoo.com",
    phone: "5512419783",
  },
  ManishKakadiya0: {
    guests: [
      {
        firstName: "Manish",
        lastName: "Kakadiya",
        title: "Mr.",
      },
      {
        firstName: "Shaily",
        lastName: "Patel kakadiya",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "shailymanish8@gmail.com",
    phone: "5406422646",
  },
  MihirKasvala0: {
    guests: [
      {
        firstName: "Mihir",
        lastName: "Kasvala",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "mihir.kasvala@gmail.com",
    phone: "2015655567",
  },
  DeepeshLad0: {
    guests: [
      {
        firstName: "Deepesh",
        lastName: "Lad",
        title: "Mr.",
      },
      {
        firstName: "Javni",
        lastName: "Patel",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "laddeepesh123@gmail.com",
    phone: "9082397132",
  },
  AkashPatel0: {
    guests: [
      {
        firstName: "Akash",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Sneha",
        lastName: "Karla",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "akash.p9196@gmail.com",
    phone: "7326093235",
  },
  JaltejPatel0: {
    guests: [
      {
        firstName: "Jaltej",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "jaltejp@gmail.com",
    phone: "8624854736",
  },
  KaranPatel0: {
    guests: [
      {
        firstName: "Karan",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Krishna",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "krnpatel92@gmail.com",
    phone: "9083004929",
  },
  KishanPatel0: {
    guests: [
      {
        firstName: "Kishan",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kishanmpatel23@gmail.com",
    phone: "8626864519",
  },
  RaviPatel0: {
    guests: [
      {
        firstName: "Ravi",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Neha",
        lastName: "Patel",
        title: "Ms.",
      },
      {
        firstName: "Bharat",
        lastName: "Patel",
      },
      {
        firstName: "Pragna",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "rbp46@njit.edu",
    phone: "7326291012",
  },
  ShivamPatel0: {
    guests: [
      {
        firstName: "Shivam",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Shivani",
        lastName: "Patel",
        title: "Ms.",
      },
      {
        firstName: "Mahesh",
        lastName: "Patel",
      },
      {
        firstName: "Ruchi",
        lastName: "Patel",
      },
      {
        firstName: "Nayana",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "s8895p@gmail.com",
    phone: "7323257787",
  },
  RubalVekariya0: {
    guests: [
      {
        firstName: "Rubal",
        lastName: "Vekariya",
        title: "Mr.",
      },
      {
        firstName: "Jenna",
        lastName: "Patel",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "rubalvinit@gmail.com",
    phone: "2019046032",
  },
  HareshDoshi0: {
    guests: [
      {
        firstName: "Haresh",
        lastName: "Doshi",
        title: "Mr.",
      },
      {
        firstName: "Shobhana",
        lastName: "Goradia",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "ila12aspen@gmail.com",
    phone: "2158016046",
  },
  KanuDoshi0: {
    guests: [
      {
        firstName: "Kanu",
        lastName: "Doshi",
        title: "Mr.",
      },
      {
        firstName: "Shakuntala",
        lastName: "Doshi",
        title: "Mrs.",
      },
      {
        firstName: "Alok",
        lastName: "Doshi",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kpdoshi@hotmail.com",
    phone: "2404762457",
  },
  SamirDoshi0: {
    guests: [
      {
        firstName: "Samir",
        lastName: "Doshi",
        title: "Mr.",
      },
      {
        firstName: "Leslie",
        lastName: "Doshi",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "samir.doshi11@gmail.com",
    phone: "9089671713",
  },
  SeemaDoshi0: {
    guests: [
      {
        firstName: "Seema",
        lastName: "Doshi",
        title: "Dr.",
      },
      {
        firstName: "Damian",
        lastName: "Morden-snipper",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "sdoshi2447@gmail.com",
    phone: "9089671712",
  },
  HrishikeshGohel0: {
    guests: [
      {
        firstName: "Hrishikesh",
        lastName: "Gohel",
        title: "Mr.",
      },
      {
        firstName: "Nipa",
        lastName: "Gohel",
        title: "Mrs.",
      },
      {
        firstName: "Paulomi",
        lastName: "Gohel",
      },
      {
        firstName: "Varun",
        lastName: "Gohel",
      },
      {
        firstName: "Mark",
        lastName: "Moses",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "hg1319@gmail.com",
    phone: "7326881547",
  },
  ChaitanyaGupta0: {
    guests: [
      {
        firstName: "Chaitanya",
        lastName: "Gupta",
        title: "Mr.",
      },
      {
        firstName: "Kimisha",
        lastName: "Gupta",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kimishagoradia31993@gmail.com",
    phone: "7786749861",
  },
  NaimeshJaha0: {
    guests: [
      {
        firstName: "Naimesh",
        lastName: "Jaha",
        title: "Mr.",
      },
      {
        firstName: "Bindu",
        lastName: "Jaha",
        title: "Mrs.",
      },
      {
        firstName: "Niti",
        lastName: "Jaha",
      },
      {
        firstName: "Nikhil",
        lastName: "Jaha",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "bindu_jaha@yahoo.com",
    phone: "5105985012",
  },
  ChandrakantMehta0: {
    guests: [
      {
        firstName: "Chandrakant",
        lastName: "Mehta",
        title: "Mr.",
      },
      {
        firstName: "Chandrakant",
        lastName: "Mehta",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "cgmehta@yahoo.com",
    phone: "5712135728",
  },
  RajuMuni0: {
    guests: [
      {
        firstName: "Raju",
        lastName: "Muni",
        title: "Mr.",
      },
      {
        firstName: "Bharti",
        lastName: "Muni",
        title: "Mrs.",
      },
      {
        firstName: "Rena",
        lastName: "Muni",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "bhartimuni@yahoo.comm",
    phone: "5103961500",
  },
  JuhiParekh0: {
    guests: [
      {
        firstName: "Juhi",
        lastName: "Parekh",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "juhip16@gmail.com",
    phone: "9794221728",
  },
  DigantPatel0: {
    guests: [
      {
        firstName: "Digant",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Nipa",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Keya",
        lastName: "Patel",
      },
      {
        firstName: "Roodra",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "digantnipa@gmail.com",
    phone: "2019620739",
  },
  RamyaBanala0: {
    guests: [
      {
        firstName: "Ramya",
        lastName: "Banala",
        title: "Dr.",
      },
      {
        firstName: "Arun",
        lastName: "Vonoz",
        title: "Dr.",
      },
    ],
    events: [],
    email: "ramya.vonoz@gmail.com",
    phone: "3134050717",
  },
  HarishBhatt0: {
    guests: [
      {
        firstName: "Harish",
        lastName: "Bhatt",
        title: "Dr.",
      },
      {
        firstName: "Alka",
        lastName: "Bhatt",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "harishkb@aol.com",
    phone: "9082277174",
  },
  WarrenBuck0: {
    guests: [
      {
        firstName: "Warren",
        lastName: "Buck",
        title: "Dr.",
      },
    ],
    events: [],
    email: "mpmg118@aol.com",
    phone: "9084474707",
  },
  GhazaliChaudry0: {
    guests: [
      {
        firstName: "Ghazali",
        lastName: "Chaudry",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "ghazalichaudry@outlook.com",
    phone: "7322611149",
  },
  MathewCholankeril0: {
    guests: [
      {
        firstName: "Mathew",
        lastName: "Cholankeril",
        title: "Dr.",
      },
      {
        firstName: "Thressiamma",
        lastName: "Cholankeril",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    phone: "9082954033",
  },
  AristedesCodoyannis0: {
    guests: [
      {
        firstName: "Aristedes",
        lastName: "Codoyannis",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "codoyannis@embarqmail.com",
    phone: "9734762039",
  },
  DinoCosteas0: {
    guests: [
      {
        firstName: "Dino",
        lastName: "Costeas",
        title: "Dr.",
      },
      {
        firstName: "Maria",
        lastName: "Suarez",
        title: "Ms.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "ccosteas@msn.com",
    phone: "2014246094",
  },
  SalvatoreCuadra0: {
    guests: [
      {
        firstName: "Salvatore",
        lastName: "Cuadra",
        title: "Dr.",
      },
    ],
    events: ["housewarming", "garba-sangeet", "haldi", "wedding", "reception"],
    email: "salcuadra@yahoo.com",
    phone: "9089671615",
  },
  RobertCzyzewski0: {
    guests: [
      {
        firstName: "Robert",
        lastName: "Czyzewski",
        title: "Dr.",
      },
      {
        firstName: "Eva",
        lastName: "Czyzewski",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "polskahalina@yahoo.com",
    phone: "2017046602",
  },
  ConcepcionDancel0: {
    guests: [
      {
        firstName: "Concepcion",
        lastName: "Dancel",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "concepciondancel@yahoo.com",
    phone: "7324348078",
  },
  HemantDesai0: {
    guests: [
      {
        firstName: "Hemant",
        lastName: "Desai",
        title: "Mr.",
      },
      {
        firstName: "Deepika",
        lastName: "Desai",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "hemdeep9@gmail.com",
    phone: "9085689200",
  },
  RajshreeDoshi0: {
    guests: [
      {
        firstName: "Rajshree",
        lastName: "Doshi",
        title: "Dr.",
      },
      {
        firstName: "Hitesh",
        lastName: "Doshi",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "doshi.rajshree@gmail.com",
    phone: "6307319325",
  },
  JuheeGupta0: {
    guests: [
      {
        firstName: "Juhee",
        lastName: "Gupta",
        title: "Dr.",
      },
      {
        firstName: "Sanjeev",
        lastName: "Gupta",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "sanjeevg@aol.com",
    phone: "9084560896",
  },
  TaizoonJhaveri0: {
    guests: [
      {
        firstName: "Taizoon",
        lastName: "Jhaveri",
        title: "Mr.",
      },
      {
        firstName: "Jagruti",
        lastName: "Amin",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "aminjags@gmail.com",
    phone: "2156203738",
  },
  GurvindraJohal0: {
    guests: [
      {
        firstName: "Gurvindra",
        lastName: "Johal",
        title: "Dr.",
      },
      {
        firstName: "Sundeep",
        lastName: "Johal",
        title: "Dr.",
      },
      {
        firstName: "Karanveer",
        lastName: "Johal",
      },
      {
        firstName: "Jaiveer",
        lastName: "Johal",
      },
      {
        firstName: "Jashanveer",
        lastName: "Johal",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "gurvindra@yahoo.com",
    phone: "7327134768",
  },
  VijayKalaria0: {
    guests: [
      {
        firstName: "Vijay",
        lastName: "Kalaria",
        title: "Dr.",
      },
      {
        firstName: "Rita",
        lastName: "Kalaria",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "vijaykalaria@sbcglobal.net",
    phone: "8176813036",
  },
  BeoulaKoduri0: {
    guests: [
      {
        firstName: "Beoula",
        lastName: "Koduri",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kodurihoc@gmail.com",
    phone: "7322073858",
  },
  RichardLebovicz0: {
    guests: [
      {
        firstName: "Richard",
        lastName: "Lebovicz",
        title: "Dr.",
      },
      {
        firstName: "Barbara",
        lastName: "Lebovicz",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "ilnyc@aol.com",
    phone: "7326722517",
  },
  VarunMannam0: {
    guests: [
      {
        firstName: "Varun",
        lastName: "Mannam",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "varun3mannam@gmail.com",
    phone: "7322081198",
  },
  LalitMittal0: {
    guests: [
      {
        firstName: "Lalit",
        lastName: "Mittal",
        title: "Dr.",
      },
      {
        firstName: "Yamini",
        lastName: "Mittal",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "lmital@gmail.com",
    phone: "7709120676",
  },
  ArunNaik0: {
    guests: [
      {
        firstName: "Arun",
        lastName: "Naik",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    phone: "9732295962",
  },
  RobertNoh0: {
    guests: [
      {
        firstName: "Robert",
        lastName: "Noh",
        title: "Dr.",
      },
      {
        firstName: "Caryann",
        lastName: "Noh",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "robertnoh331@gmail.com",
    phone: "9089478687",
  },
  AditiPatel0: {
    guests: [
      {
        firstName: "Aditi",
        lastName: "Patel",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "aditipatel1068@gmail.com",
    phone: "4035026721",
  },
  AmitPatel0: {
    guests: [
      {
        firstName: "Amit",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Sarla",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [],
    email: "sendamitpatel@gmail.com",
    phone: "2012407857",
  },
  BhavinPatel0: {
    guests: [
      {
        firstName: "Bhavin",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Trupti",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Shardaben",
        lastName: "Patel",
      },
      {
        firstName: "Pushpaben",
        lastName: "Patel",
      },
      {
        firstName: "Shivani",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "bhavtrup@hotmail.com",
    phone: "7327620353",
  },
  DarshanaPatel0: {
    guests: [
      {
        firstName: "Darshana",
        lastName: "Patel",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "darshanapatel1968@gmail.com",
    phone: "4403827831",
  },
  DeepaPatel0: {
    guests: [
      {
        firstName: "Deepa",
        lastName: "Patel",
        title: "Dr.",
      },
      {
        firstName: "Samir",
        lastName: "Patel",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "drdspatel@yahoo.com",
    phone: "7323797064",
  },
  HarishPatel0: {
    guests: [
      {
        firstName: "Harish",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Monisha",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Aashna",
        lastName: "Patel",
      },
      {
        firstName: "Aneesh",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "4harishp@gmail.com",
    phone: "7577491166",
  },
  KetanPatel0: {
    guests: [
      {
        firstName: "Ketan",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Bina",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "ketanvp@yahoo.com",
    phone: "9194343803",
  },
  KiritPatel0: {
    guests: [
      {
        firstName: "Kirit",
        lastName: "Patel",
        title: "Dr.",
      },
      {
        firstName: "Dolly",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kpatel247@gmail.com",
    phone: "7327705385",
  },
  MahendraPatel0: {
    guests: [
      {
        firstName: "Mahendra",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Savita",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "mahendramp@aol.com",
    phone: "7575652824",
  },
  ManishPatel0: {
    guests: [
      {
        firstName: "Manish",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Roopal",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Rohan",
        lastName: "Patel",
      },
      {
        firstName: "Ria",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kariaroopal@gmail.com",
    phone: "7327621754",
  },
  NehaPatel0: {
    guests: [
      {
        firstName: "Neha",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Prashant",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "neha83_nc@yahoo.com",
    phone: "9194555417",
  },
  NehaPatel1: {
    guests: [
      {
        firstName: "Neha",
        lastName: "Patel",
        title: "Dr.",
      },
      {
        firstName: "Nikesh",
        lastName: "Patel",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "nehamp225@gmail.com",
    phone: "7576181814",
  },
  NeilPatel0: {
    guests: [
      {
        firstName: "Neil",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Romina",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "neilandromina@gmail.com",
    phone: "7327106725",
  },
  NileshPatel2: {
    guests: [
      {
        firstName: "Nilesh",
        lastName: "Patel",
        title: "Mr.",
      },
      {
        firstName: "Parul",
        lastName: "Patel",
        title: "Mrs.",
      },
      {
        firstName: "Nirmal",
        lastName: "Patel",
      },
      {
        firstName: "Neepa",
        lastName: "Patel",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "parul1970@gmail.com",
    phone: "7323098076",
  },
  NileshPatel3: {
    guests: [
      {
        firstName: "Nilesh",
        lastName: "Patel",
        title: "Dr.",
      },
      {
        firstName: "Rupal",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "advancedcardiacsurgeon@gmail.com",
    phone: "9176263363",
  },
  ParthPatel0: {
    guests: [
      {
        firstName: "Parth",
        lastName: "Patel",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "parthpatel36999@gmail.com",
    phone: "7327709760",
  },
  RavindraPatel0: {
    guests: [
      {
        firstName: "Ravindra",
        lastName: "Patel",
        title: "Dr.",
      },
      {
        firstName: "Lata",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "rpateldoc@yahoo.com",
    phone: "7322614380",
  },
  NiharPrabhala0: {
    guests: [
      {
        firstName: "Nihar",
        lastName: "Prabhala",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "niharprabhala@gmail.com",
  },
  ChinmayRajanahalli0: {
    guests: [
      {
        firstName: "Chinmay",
        lastName: "Rajanahalli",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "chinmay7312@gmail.com",
    phone: "7329109814",
  },
  AnuRamasubramanian0: {
    guests: [
      {
        firstName: "Anu",
        lastName: "Ramasubramanian",
        title: "Dr.",
      },
      {
        firstName: "Ram",
        lastName: "Ramasubramanian",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "anuram70@gmail.com",
    phone: "7322666438",
  },
  KishoreRamchandani0: {
    guests: [
      {
        firstName: "Kishore",
        lastName: "Ramchandani",
        title: "Dr.",
      },
      {
        firstName: "Rashmi",
        lastName: "Ramchandani",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kramchandanimd@gmail.com",
    phone: "7326881875",
  },
  PreetRandhawa0: {
    guests: [
      {
        firstName: "Preet",
        lastName: "Randhawa",
        title: "Dr.",
      },
      {
        firstName: "Anita",
        lastName: "Randhawa",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "randhawap30@yahoo.com",
    phone: "9089305271",
  },
  HershRanpura0: {
    guests: [
      {
        firstName: "Hersh",
        lastName: "Ranpura",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "hershranpura@gmail.com",
    phone: "7328570323",
  },
  ShyamRathnakumar0: {
    guests: [
      {
        firstName: "Shyam",
        lastName: "Rathnakumar",
        title: "Mr.",
      },
      {
        firstName: "Pranav",
        lastName: "Rathnakumar",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "shyamrathnakumar@gmail.com",
    phone: "7323799864",
  },
  AngelaRegina0: {
    guests: [
      {
        firstName: "Angela",
        lastName: "Regina",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    phone: "9172246958",
  },
  SandeepRiar0: {
    guests: [
      {
        firstName: "Sandeep",
        lastName: "Riar",
        title: "Dr.",
      },
      {
        firstName: "Virinder",
        lastName: "Kaur",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "sandeep.riar@gmail.com",
    phone: "7329105399",
  },
  DeborahRosin0: {
    guests: [
      {
        firstName: "Deborah",
        lastName: "Rosin",
        title: "Dr.",
      },
      {
        firstName: "Larry",
        lastName: "Rosin",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "entmom1219@aol.com",
    phone: "7329101190",
  },
  SanketRupareliya0: {
    guests: [
      {
        firstName: "Sanket",
        lastName: "Rupareliya",
        title: "Dr.",
      },
      {
        firstName: "Dhara",
        lastName: "Rupareliya",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "drsanket2000@gmail.com",
    phone: "8046172454",
  },
  AjaySarin0: {
    guests: [
      {
        firstName: "Ajay",
        lastName: "Sarin",
        title: "Mr.",
      },
      {
        firstName: "Anita",
        lastName: "Sarin",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "anitakhanna609@gmail.com",
    phone: "7326628510",
  },
  NihalShah0: {
    guests: [
      {
        firstName: "Nihal",
        lastName: "Shah",
        title: "Dr.",
      },
      {
        firstName: "Hemali",
        lastName: "Shah",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "nihalshah8@gmail.com",
    phone: "7277101205",
  },
  PareshShah0: {
    guests: [
      {
        firstName: "Paresh",
        lastName: "Shah",
        title: "Mr.",
      },
      {
        firstName: "Nita",
        lastName: "Shah",
        title: "Mrs.",
      },
      {
        firstName: "Rohan",
        lastName: "Shah",
      },
      {
        firstName: "Ria",
        lastName: "Shah",
      },
      {
        firstName: "Jay",
        lastName: "Patel",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    phone: "6099775256",
  },
  PradipShah0: {
    guests: [
      {
        firstName: "Pradip",
        lastName: "Shah",
        title: "Dr.",
      },
      {
        firstName: "Pragna",
        lastName: "Shah",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "drpshah635@gmail.com",
    phone: "7324851672",
  },
  RohanShah0: {
    guests: [
      {
        firstName: "Rohan",
        lastName: "Shah",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "rohanshah01@gmail.com",
    phone: "7327185207",
  },
  UrvajShah0: {
    guests: [
      {
        firstName: "Urvaj",
        lastName: "Shah",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "shahurvajd@hotmail.com",
    phone: "7326664787",
  },
  "MinalShah-baldota0": {
    guests: [
      {
        firstName: "Minal",
        lastName: "Shah-baldota",
        title: "Dr.",
      },
      {
        firstName: "Uday",
        lastName: "Baldota",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "minalbaldota@gmail.com",
    phone: "8452160485",
  },
  EdwardShen0: {
    guests: [
      {
        firstName: "Edward",
        lastName: "Shen",
        title: "Dr.",
      },
    ],
    events: ["housewarming", "wedding", "reception"],
    email: "admin@spscpaincare.com",
  },
  RajeshSheth0: {
    guests: [
      {
        firstName: "Rajesh",
        lastName: "Sheth",
        title: "Mr.",
      },
      {
        firstName: "Heena",
        lastName: "Sheth",
        title: "Mrs.",
      },
      {
        firstName: "Rajesh",
        lastName: "Sheth",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "rajesh11@usa.com",
    phone: "7325138138",
  },
  RashpalSingh0: {
    guests: [
      {
        firstName: "Rashpal",
        lastName: "Singh",
        title: "Dr.",
      },
      {
        firstName: "Sukhjinder",
        lastName: "Kaur-johal",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "rsjagra@gmail.com",
    phone: "7328096509",
  },
  PoonamSinghal0: {
    guests: [
      {
        firstName: "Poonam",
        lastName: "Singhal",
        title: "Dr.",
      },
      {
        firstName: "Giri",
        lastName: "Rao",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "singhal.poonam@gmail.com",
    phone: "3127357294",
  },
  RituSuri0: {
    guests: [
      {
        firstName: "Ritu",
        lastName: "Suri",
        title: "Dr.",
      },
      {
        firstName: "Sarabjit",
        lastName: "Suri",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "ritusuri@aol.com",
    phone: "2017258700",
  },
  LeenaSutaria0: {
    guests: [
      {
        firstName: "Leena",
        lastName: "Sutaria",
        title: "Dr.",
      },
      {
        firstName: "Kalpesh",
        lastName: "Sutaria",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "mysisterjagu@yahoo.com",
    phone: "8282802632",
  },
  MihirThakkar0: {
    guests: [
      {
        firstName: "Mihir",
        lastName: "Thakkar",
        title: "Mr.",
      },
    ],
    events: ["housewarming", "wedding", "reception"],
    email: "mihirthakkar730@gmail.com",
    phone: "9174405110",
  },
  DineshThakur0: {
    guests: [
      {
        firstName: "Dinesh",
        lastName: "Thakur",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "dmthakur@yahoo.com",
    phone: "9257651779",
  },
  EltonVaz0: {
    guests: [
      {
        firstName: "Elton",
        lastName: "Vaz",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "megavaz623@gmail.com",
  },
  SushanthVulpala0: {
    guests: [
      {
        firstName: "Sushanth",
        lastName: "Vulpala",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "sushanthvulpala1@gmail.com",
    phone: "9084622665",
  },
  SamuelZhang0: {
    guests: [
      {
        firstName: "Samuel",
        lastName: "Zhang",
        title: "Mr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "samuelzhang8809@gmail.com",
    phone: "7329105195",
  },
  JamesZu0: {
    guests: [
      {
        firstName: "James",
        lastName: "Zu",
        title: "Dr.",
      },
      {
        firstName: "Nancy",
        lastName: "Quan",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "zujames@gmail.com",
    phone: "7328414877",
  },
  DineshPatel0: {
    guests: [
      {
        firstName: "Dinesh",
        lastName: "Patel",
        title: "Dr.",
      },
      {
        firstName: "Shobhana",
        lastName: "Patel",
        title: "Mrs.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    phone: "7327424172",
  },
  MichelleGreenberg0: {
    guests: [
      {
        firstName: "Michelle",
        lastName: "Greenberg",
        title: "Ms.",
      },
    ],
    events: ["reception"],
  },
  ChinazoAduba0: {
    guests: [
      {
        firstName: "Chinazo",
        lastName: "Aduba",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "chinazoaduba@gmail.com",
    phone: "4433792143",
  },
  TeenaAlex0: {
    guests: [
      {
        firstName: "Teena",
        lastName: "Alex",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "teenasalex@gmail.com",
    phone: "9142551602",
  },
  ZakiaAli0: {
    guests: [
      {
        firstName: "Zakia",
        lastName: "Ali",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "zakia.ali25@gmail.com",
    phone: "7733669624",
  },
  NarcisseAmine0: {
    guests: [
      {
        firstName: "Narcisse",
        lastName: "Amine",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "narcisse.amine@gmail.com",
    phone: "9738306341",
  },
  AnirudhAnnadata0: {
    guests: [
      {
        firstName: "Anirudh",
        lastName: "Annadata",
        title: "Dr.",
      },
      {
        firstName: "Sabrina",
        lastName: "Bilimoria",
        title: "Ms.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "a.annadata@gmail.com",
    phone: "4109611094",
  },
  AnnaAyum0: {
    guests: [
      {
        firstName: "Anna",
        lastName: "Ayum",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "a.ayum515@gmail.com",
    phone: "5512216899",
  },
  AamirBandagi0: {
    guests: [
      {
        firstName: "Aamir",
        lastName: "Bandagi",
        title: "Dr.",
      },
    ],
    events: ["wedding", "reception"],
    email: "aamirban@gmail.com",
    phone: "2489432611",
  },
  ElisabethBarr0: {
    guests: [
      {
        firstName: "Elisabeth",
        lastName: "Barr",
        title: "Dr.",
      },
      {
        firstName: "Matthew",
        lastName: "Barr",
        title: "Mr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "elisabeth.y.cook@gmail.com",
    phone: "7607809967",
  },
  JakubBartnik0: {
    guests: [
      {
        firstName: "Jakub",
        lastName: "Bartnik",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "jbartnik@sbhny.org",
  },
  MarkBell0: {
    guests: [
      {
        firstName: "Mark",
        lastName: "Bell",
        title: "Dr.",
      },
      {
        firstName: "Denise",
        lastName: "Bell",
        title: "Mrs.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "markhbell1@gmail.com",
    phone: "2014504657",
  },
  PaulBeyer0: {
    guests: [
      {
        firstName: "Paul",
        lastName: "Beyer",
        title: "Dr.",
      },
      {
        firstName: "Rossanna",
        lastName: "Beyer",
      },
    ],
    events: ["wedding", "reception"],
    email: "pnrbeyer@msn.com",
    phone: "6462504521",
  },
  NatalieBhalla0: {
    guests: [
      {
        firstName: "Natalie",
        lastName: "Bhalla",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "natalie.bhalla@gmail.com",
    phone: "6789252691",
  },
  LeahBralow0: {
    guests: [
      {
        firstName: "Leah",
        lastName: "Bralow",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "lbralow@sbhny.org",
  },
  "KarenCastro-molina0": {
    guests: [
      {
        firstName: "Karen",
        lastName: "Castro-molina",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    phone: "7185020565",
  },
  AgnesChramiec0: {
    guests: [
      {
        firstName: "Agnes",
        lastName: "Chramiec",
        title: "Dr.",
      },
      {
        firstName: "Jonathan",
        lastName: "Doman",
        title: "Mr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "a.chramiec1@gmail.com",
    phone: "7734743696",
  },
  JulieClemmensen0: {
    guests: [
      {
        firstName: "Julie",
        lastName: "Clemmensen",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "jclemmensen@sbhny.org",
    phone: "7034055453",
  },
  "KevinDe los reyes0": {
    guests: [
      {
        firstName: "Kevin",
        lastName: "De los reyes",
        title: "Dr.",
      },
      {
        firstName: "Nancy",
        lastName: "Presnick",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "kdelosreyes@sbhny.org",
    phone: "8457097590",
  },
  JustinDelgado0: {
    guests: [
      {
        firstName: "Justin",
        lastName: "Delgado",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "justinpdelgado@gmail.com",
    phone: "7188668541",
  },
  NicholasDiaz0: {
    guests: [
      {
        firstName: "Nicholas",
        lastName: "Diaz",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "nabd1097@gmail.com",
    phone: "2392504784",
  },
  MarkEstrellado0: {
    guests: [
      {
        firstName: "Mark",
        lastName: "Estrellado",
        title: "Dr.",
      },
    ],
    events: ["wedding", "reception"],
    phone: "3156645399",
  },
  ZacharyFischer0: {
    guests: [
      {
        firstName: "Zachary",
        lastName: "Fischer",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "zjfish74@gmail.com",
    phone: "9144699861",
  },
  NikeaFrith0: {
    guests: [
      {
        firstName: "Nikea",
        lastName: "Frith",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "nfrith@sbhny.org",
    phone: "6467644754",
  },
  VincentGaldi0: {
    guests: [
      {
        firstName: "Vincent",
        lastName: "Galdi",
        title: "Dr.",
      },
      {
        firstName: "Amanda",
        lastName: "Tramutola",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "vgaldi@sbhny.org",
  },
  LukeGardner0: {
    guests: [
      {
        firstName: "Luke",
        lastName: "Gardner",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "lgardner@sbhny.org",
    phone: "3478741924",
  },
  AllenGold0: {
    guests: [
      {
        firstName: "Allen",
        lastName: "Gold",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "agold@sbhny.org",
  },
  BriannaGoldstein0: {
    guests: [
      {
        firstName: "Brianna",
        lastName: "Goldstein",
        title: "Dr.",
      },
      {
        firstName: "Jeremy",
        lastName: "Goldstein",
        title: "Mr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "briannangoldstein@gmail.com",
    phone: "5166686164",
  },
  BlancaGrand0: {
    guests: [
      {
        firstName: "Blanca",
        lastName: "Grand",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "bngrand@yahoo.com",
    phone: "9143165169",
  },
  LekhaGrandhi0: {
    guests: [
      {
        firstName: "Lekha",
        lastName: "Grandhi",
        title: "Dr.",
      },
      {
        firstName: "Ryan",
        lastName: "O\u2019sullivan",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "lekha.grandhi@gmail.com",
    phone: "6312553971",
  },
  MenachemGreenberg0: {
    guests: [
      {
        firstName: "Menachem",
        lastName: "Greenberg",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "mistermbg@yahoo.com",
    phone: "9178464505",
  },
  KevinGreener0: {
    guests: [
      {
        firstName: "Kevin",
        lastName: "Greener",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "kgreener@sbhny.org",
    phone: "9733497439",
  },
  HelenaGvili0: {
    guests: [
      {
        firstName: "Helena",
        lastName: "Gvili",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "lmgvili@gmail.com",
    phone: "9785050014",
  },
  DonJames0: {
    guests: [
      {
        firstName: "Don",
        lastName: "James",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "djames9748@gmail.com",
    phone: "2409170426",
  },
  MichaelJamgochian0: {
    guests: [
      {
        firstName: "Michael",
        lastName: "Jamgochian",
        title: "Dr.",
      },
      {
        firstName: "Martha",
        lastName: "Jamgochian",
        title: "Dr.",
      },
    ],
    events: ["wedding", "reception"],
    email: "michaeljamgochian@gmail.com",
    phone: "5167805375",
  },
  SarahJamison0: {
    guests: [
      {
        firstName: "Sarah",
        lastName: "Jamison",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "sjamison@sbhny.org",
  },
  AmnaJamshad0: {
    guests: [
      {
        firstName: "Amna",
        lastName: "Jamshad",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "amna.jamshad@gmail.com",
    phone: "6785103305",
  },
  RobertJardine0: {
    guests: [
      {
        firstName: "Robert",
        lastName: "Jardine",
        title: "Dr.",
      },
      {
        firstName: "Sowmya",
        lastName: "Balusu",
        title: "Dr.",
      },
    ],
    events: ["wedding", "reception"],
    email: "rjardine@sbhny.org",
    phone: "9295881962",
  },
  AndrewJarjour0: {
    guests: [
      {
        firstName: "Andrew",
        lastName: "Jarjour",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "ajarjour@sbhny.org",
    phone: "8186484298",
  },
  RamshaJaved0: {
    guests: [
      {
        firstName: "Ramsha",
        lastName: "Javed",
        title: "Ms.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "javedramsha96@gmail.com",
    phone: "7324298089",
  },
  PranitaKaginele0: {
    guests: [
      {
        firstName: "Pranita",
        lastName: "Kaginele",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "pranita.kaginele@gmail.com",
    phone: "5072696053",
  },
  ErikaKaiser0: {
    guests: [
      {
        firstName: "Erika",
        lastName: "Kaiser",
        title: "Dr.",
      },
      {
        firstName: "Kelly",
        lastName: "Clemenza",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "brk254@gmail.com",
    phone: "2162453381",
  },
  SamuelKlein0: {
    guests: [
      {
        firstName: "Samuel",
        lastName: "Klein",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "samuelbklein@gmail.com",
    phone: "4102362796",
  },
  OchanKwon0: {
    guests: [
      {
        firstName: "Ochan",
        lastName: "Kwon",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "okwon@sbhny.org",
    phone: "4107070790",
  },
  NghiLe0: {
    guests: [
      {
        firstName: "Nghi",
        lastName: "Le",
        title: "Dr.",
      },
      {
        firstName: "Francisco",
        lastName: "Ocampo",
        title: "Mr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "nle@sbhny.org",
    phone: "8156081549",
  },
  ColleenLeahy0: {
    guests: [
      {
        firstName: "Colleen",
        lastName: "Leahy",
        title: "Dr.",
      },
      {
        firstName: "Hector",
        lastName: "Feliciano",
        title: "Mr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "cleahy08@yahoo.com",
    phone: "6318791825",
  },
  ScottLeuchten0: {
    guests: [
      {
        firstName: "Scott",
        lastName: "Leuchten",
        title: "Dr.",
      },
      {
        firstName: "Lisa",
        lastName: "Leuchten",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "sleuchten@gmail.com",
    phone: "8452421456",
  },
  NaiLi0: {
    guests: [
      {
        firstName: "Nai",
        lastName: "Li",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "nli@sbhny.org",
  },
  ChristopherLin0: {
    guests: [
      {
        firstName: "Christopher",
        lastName: "Lin",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "clin@sbhny.org",
    phone: "5167360071",
  },
  'Sarah "lou"Louis0': {
    guests: [
      {
        firstName: 'Sarah "lou"',
        lastName: "Louis",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "louis.saraha@gmail.com",
    phone: "3477648885",
  },
  JonathanMaik0: {
    guests: [
      {
        firstName: "Jonathan",
        lastName: "Maik",
        title: "Dr.",
      },
      {
        firstName: "Miri",
        lastName: "Maik",
        title: "Mrs.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "jmaik1@sbhny.org",
    phone: "9734763368",
  },
  FannyMantilla0: {
    guests: [
      {
        firstName: "Fanny",
        lastName: "Mantilla",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "fmantilla@sbhny.org",
  },
  AngeloMascia0: {
    guests: [
      {
        firstName: "Angelo",
        lastName: "Mascia",
        title: "Dr.",
      },
      {
        firstName: "Delilah",
        lastName: "Mascia",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "angelo.mascia@gmail.com",
    phone: "9142610655",
  },
  MuelMccrimmons0: {
    guests: [
      {
        firstName: "Muel",
        lastName: "Mccrimmons",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "smccrimmons@sbhny.org",
    phone: "9167640376",
  },
  KevinMishan0: {
    guests: [
      {
        firstName: "Kevin",
        lastName: "Mishan",
        title: "Dr.",
      },
      {
        firstName: "Paige",
        lastName: "Lytle",
        title: "Ms.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "kmishan93@gmail.com",
    phone: "9179686912",
  },
  JosephMorvillo0: {
    guests: [
      {
        firstName: "Joseph",
        lastName: "Morvillo",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "jmorvillo@sbhny.org",
    phone: "3478600510",
  },
  RamasamyMuthuraman0: {
    guests: [
      {
        firstName: "Ramasamy",
        lastName: "Muthuraman",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "rmuthuraman@sbhny.org",
    phone: "7329866302",
  },
  RaphaelNakhon0: {
    guests: [
      {
        firstName: "Raphael",
        lastName: "Nakhon",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "rnakhon@sbhny.org",
    phone: "4432828200",
  },
  AlexNelson0: {
    guests: [
      {
        firstName: "Alex",
        lastName: "Nelson",
        title: "Dr.",
      },
      {
        firstName: "Paula",
        lastName: "Perdomo",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "nelsonalex523@gmail.com",
    phone: "6268189174",
  },
  RonaldNguyen0: {
    guests: [
      {
        firstName: "Ronald",
        lastName: "Nguyen",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "wedding", "reception"],
    email: "rnguyen@sbhny.org",
    phone: "8086799964",
  },
  MichaelNickas0: {
    guests: [
      {
        firstName: "Michael",
        lastName: "Nickas",
        title: "Dr.",
      },
      {
        firstName: "Caitlin",
        lastName: "Nickas",
      },
    ],
    events: ["wedding", "reception"],
    email: "mjn5058@gmail.com",
    phone: "7325989231",
  },
  DhruvPanchal0: {
    guests: [
      {
        firstName: "Dhruv",
        lastName: "Panchal",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "dpanchal@sbhny.org",
    phone: "7328908559",
  },
  ErnestPatti0: {
    guests: [
      {
        firstName: "Ernest",
        lastName: "Patti",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "epatti@sbhny.org",
    phone: "3476384844",
  },
  NiaRush0: {
    guests: [
      {
        firstName: "Nia",
        lastName: "Rush",
        title: "Dr.",
      },
      {
        firstName: "Cody",
        lastName: "Forbes",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "niac.rush@gmail.com",
    phone: "3013953425",
  },
  AntonioSanchez0: {
    guests: [
      {
        firstName: "Antonio",
        lastName: "Sanchez",
        title: "Dr.",
      },
      {
        firstName: "Jessica",
        lastName: "Rivetz",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "antonioasanchez691@gmail.com",
    phone: "3157411851",
  },
  JoshuaSchwarzbaum0: {
    guests: [
      {
        firstName: "Joshua",
        lastName: "Schwarzbaum",
        title: "Dr.",
      },
      {
        firstName: "Eyenadis",
        lastName: "Schwarzbaum",
      },
    ],
    events: ["wedding", "reception"],
    email: "jschwarzbaum@gmail.com",
    phone: "9444209590",
  },
  SavanShah0: {
    guests: [
      {
        firstName: "Savan",
        lastName: "Shah",
        title: "Dr.",
      },
      {
        firstName: "Devki",
        lastName: "Shukla",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "savanshah.0@gmail.com",
    phone: "8454892039",
  },
  ElizabethSheils0: {
    guests: [
      {
        firstName: "Elizabeth",
        lastName: "Sheils",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "esheils@sbhny.org",
    phone: "8605393057",
  },
  KristinaSousou0: {
    guests: [
      {
        firstName: "Kristina",
        lastName: "Sousou",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "kjsousou@gmail.com",
    phone: "2017882349",
  },
  DouglasSpencer0: {
    guests: [
      {
        firstName: "Douglas",
        lastName: "Spencer",
        title: "Dr.",
      },
      {
        firstName: "Bethany",
        lastName: "Elkin",
        title: "Ms.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "dspencer@sbhny.org",
    phone: "3039466604",
  },
  PeterTai0: {
    guests: [
      {
        firstName: "Peter",
        lastName: "Tai",
        title: "Dr.",
      },
    ],
    events: ["wedding", "reception"],
    email: "ptai@sbhny.org",
  },
  JaeeTamhane0: {
    guests: [
      {
        firstName: "Jaee",
        lastName: "Tamhane",
        title: "Dr.",
      },
      {
        firstName: "Gerard",
        lastName: "Mullen",
        title: "Mr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "jaeet319@gmail.com",
    phone: "3103440346",
  },
  HarshTerala0: {
    guests: [
      {
        firstName: "Harsh",
        lastName: "Terala",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "hterala26@gmail.com",
    phone: "8456627728",
  },
  TonyTherattil0: {
    guests: [
      {
        firstName: "Tony",
        lastName: "Therattil",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "tjtherattil@gmail.com",
    phone: "7326909730",
  },
  AshleyVoroba0: {
    guests: [
      {
        firstName: "Ashley",
        lastName: "Voroba",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "ashley.voroba@gmail.com",
    phone: "2036158999",
  },
  AmbreenWajid0: {
    guests: [
      {
        firstName: "Ambreen",
        lastName: "Wajid",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "amb.wajid@gmail.com",
    phone: "8174565372",
  },
  HarrisonWermuth0: {
    guests: [
      {
        firstName: "Harrison",
        lastName: "Wermuth",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "hwermuth@sbhny.org",
    phone: "2487629217",
  },
  CauriceWynter0: {
    guests: [
      {
        firstName: "Caurice",
        lastName: "Wynter",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "cvwynter@gmail.com",
    phone: "9177362501",
  },
  AnastasiaAmbrosio0: {
    guests: [
      {
        firstName: "Anastasia",
        lastName: "Ambrosio",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "aambrosio@sbhny.org",
    phone: "6319056827",
  },
  AnimaAnwar0: {
    guests: [
      {
        firstName: "Anima",
        lastName: "Anwar",
        title: "Ms.",
      },
      {
        firstName: "Ronim",
        lastName: "Anwar",
      },
      {
        firstName: "Nimana",
        lastName: "Anwar",
      },
      {
        firstName: "Ahmed",
        lastName: "Anwar",
      },
      {
        firstName: "Sharmin",
        lastName: "Anwar",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "animaanwar@gmail.com",
    phone: "9082025834",
  },
  DishaAya0: {
    guests: [
      {
        firstName: "Disha",
        lastName: "Aya",
        title: "Dr.",
      },
      {
        firstName: "Sunny",
        lastName: "Bhatnagar",
        title: "Mr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "disha.aya@gmail.com",
    phone: "7327897497",
  },
  KanikaGupta0: {
    guests: [
      {
        firstName: "Kanika",
        lastName: "Gupta",
        title: "Dr.",
      },
    ],
    events: [
      "housewarming",
      "bride-pre-wedding",
      "chandlo-matli",
      "bride-pre-wedding-2",
      "mehndi",
      "garba-sangeet",
      "haldi",
      "welcome-dinner",
      "wedding",
      "reception",
      "post-wedding",
    ],
    email: "kanikagupta82294@gmail.com",
    phone: "8456259917",
  },
  JeremiahRobison0: {
    guests: [
      {
        firstName: "Jeremiah",
        lastName: "Robison",
        title: "Dr.",
      },
    ],
    events: ["garba-sangeet", "haldi", "wedding", "reception"],
    email: "jer.b.robison@gmail.com",
    phone: "6096580850",
  },
  MonaRahimi0: {
    guests: [
      {
        firstName: "Mona",
        lastName: "Rahimi",
        title: "Dr.",
      },
    ],
    events: ["welcome-dinner", "wedding", "reception"],
    email: "monarahimi23@gmail.com",
    phone: "9737220354",
  },
};
