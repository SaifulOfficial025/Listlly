import React from "react";

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
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}


        {/* Columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          {columns.map((col, i) => (
            <div
              key={col.heading}
              className={`pb-2 ${
                i !== columns.length - 1 ? "lg:border-r" : ""
              }`}
              style={{ borderColor: "#E7E9EE" }}
            >
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1C1C1C] mb-2 md:mb-3">
                {col.heading}
              </h3>
              <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-[12px] md:text-[14px] text-[#1C1C1C]">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
