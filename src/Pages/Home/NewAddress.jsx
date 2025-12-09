import React from "react";
import newaddressimg from "../../../public/newaddress.png";
const columns = [
  {
    heading: "Orange County",
    items: [
      "Irvine",
      "Newport Beach",
      "Huntington Beach",
      "Anaheim",
      "Santa Ana",
      "Costa Mesa",
      "Laguna Beach",
      "Dana Point",
      "Mission Viejo",
      "Lake Forest",
      "Tustin",
      "Fullerton",
      "Yorba Linda",
      "Garden Grove",
      "San Clemente",
      "Brea",
      "Buena Park",
      "Aliso Viejo",
      "Seal Beach",
    ],
  },
  {
    heading: "Los Angeles",
    items: [
      "Los Angeles",
      "Beverly Hills",
      "West Hollywood",
      "Santa Monica",
      "Culver City",
      "Venice",
      "Marina del Rey",
      "Brentwood",
      "Pacific Palisades",
      "Westwood",
      "Century City",
      "Mid‑Wilshire",
      "Hancock Park",
      "Hollywood",
      "Koreatown",
      "Downtown LA",
      "Silver Lake",
      "Echo Park",
      "Highland Park",
    ],
  },
  {
    heading: "San Fernando Valley",
    items: [
      "Sherman Oaks",
      "Studio City",
      "Encino",
      "Tarzana",
      "Woodland Hills",
      "West Hills",
      "Northridge",
      "North Hills",
      "Porter Ranch",
      "Granada Hills",
      "Van Nuys",
      "Reseda",
      "North Hollywood",
      "Burbank",
      "Glendale",
      "Panorama City",
      "Chatsworth",
      "Mission Hills",
      "Sylmar",
      "Sun Valley",
      "Valley Village",
      "Winnetka",
      "Pacoima",
    ],
  },
  {
    heading: "Santa Clarita Valley",
    items: [
      "Santa Clarita",
      "Valencia",
      "Saugus",
      "Canyon Country",
      "Newhall",
      "Stevenson Ranch",
      "Castaic",
      "Agua Dulce",
    ],
  },
  {
    heading: "Ventura County",
    items: [
      "Thousand Oaks",
      "Westlake Village",
      "Camarillo",
      "Moorpark",
      "Simi Valley",
      "Ventura",
      "Oxnard",
      "Port Hueneme",
      "Fillmore",
      "Ojai",
      "Santa Paula",
      "Newbury Park",
    ],
  },
];

export default function NewAddress() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 py-10 md:py-16">
      <img
        src={newaddressimg}
        alt="New Address"
        className="mx-auto w-full max-w-[1100px] object-cover h-40 sm:h-60 md:h-80 lg:h-[600px] mb-8"
      />
    </section>
  );
}
