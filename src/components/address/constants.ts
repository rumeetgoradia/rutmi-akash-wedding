export type Address = {
  title: string;
  street: string[];
  city: string;
  state: string;
  zipCode: string;
  googleMaps: string;
};

export const ADDRESSES: Record<string, Address> = {
  goradia: {
    title: "The Goradia Residence",
    street: ["240 Midwood Way"],
    city: "Colonia",
    state: "NJ",
    zipCode: "07067",
    googleMaps: "https://maps.app.goo.gl/iuTGSHTsd4tZeiV8A",
  },
  patel: {
    title: "The Patel Residence",
    street: ["62 Adams Street"],
    city: "Iselin",
    state: "NJ",
    zipCode: "08830",
    googleMaps: "https://maps.app.goo.gl/rqFT9pb3Q2rCzaat7",
  },
  ukrainian: {
    title: "Ukrainian Cultural Center",
    street: ["135 Davidson Avenue"],
    city: "Somerset",
    state: "NJ",
    zipCode: "08873",
    googleMaps: "https://maps.app.goo.gl/3a7x6wN37nYuMs446",
  },
  hotel: {
    title: "DoubleTree by Hilton Fairfield",
    street: ["690 US-46"],
    city: "Fairfield",
    state: "NJ",
    zipCode: "07004",
    googleMaps: "https://maps.app.goo.gl/4mLyP7EPsSqKfo2r6",
  },
  legacy: {
    title: "The Legacy Castle",
    street: ["141 NJ-23"],
    city: "Pompton Plains",
    state: "NJ",
    zipCode: "07444",
    googleMaps: "https://maps.app.goo.gl/51iYeGQTduRmGfTW8",
  },
} as const;
