import React, { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../Shared/Header";

import PriceFilter from "../Buys/PriceFilter";
import BedsBathsDropdown from "../Buys/BedsBathsDropdown";
import HomeTypeDropdown from "../Buys/HomeTypeDropdown";
import FiltersPanel from "../Buys/FiltersPanel";
import NewAddress from "../Home/NewAddress";
import Footer from "../../Shared/Footer";

/* UI helpers */
const BarBtn = ({ children }) => (
  <button
    className="h-10 px-3 rounded-md border text-sm flex items-center gap-2"
    style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#1C1C1C" }}
  >
    {children}
  </button>
);

const tiers = ["$100K", "$150K", "$250K", "$300K", "$350K", "$400K"];

  const contentHeight = "calc(100vh - 64px)"; // below the filter bar (used for large screens)

/* Dummy pictures */
const pics = [
  "https://images.unsplash.com/photo-1600585154340-1e66307b7aa5?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560448075-bb4caa6c4e1b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
];

/* Dummy data */
const makeCard = (i) => {
  const price = 650_000 + (i % 12) * 23_500;
  const beds = 2 + (i % 4);
  const baths = 1 + (i % 3);
  const area = 1450 + (i % 18) * 35;

  return {
    id: i,
    title: `${120 + (i % 80)}${String.fromCharCode(65 + (i % 26))} Oak Street, Irvine, CA 92${600 + (i % 50)}`,
    price: `$${price.toLocaleString()}`,
    beds,
    baths,
    area: `${area.toLocaleString()} sq ft`,
    img: pics[i % pics.length],
  };
};

export default function HomeForSale() {
  const navigate = useNavigate();

  // 96 items so paging feels real
  const allCards = useMemo(
    () => Array.from({ length: 96 }, (_, i) => makeCard(i + 1)),
    []
  );
  const PER_PAGE = 8; // two columns -> 4 rows
  const totalPages = Math.ceil(allCards.length / PER_PAGE);

  const [page, setPage] = useState(1);

  const start = (page - 1) * PER_PAGE;
  const currentCards = allCards.slice(start, start + PER_PAGE);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));
  const goTo = (p) => setPage(p);

  const handleCardClick = (id) => {
    navigate(`/homeforsale/property_details`);
  };

  // Page numbers like the mock: 1 2 3 … N
  const pageNumbers = totalPages <= 5
    ? Array.from({ length: totalPages }, (_, i) => i + 1)
    : [1, 2, 3, "…", totalPages];

  return (
  <div className="w-full dark:bg-white " style={{ background: "#FFFFFF", color: "#1C1C1C" }}>
        <Header />
        <div className="bg-white -mt-20 py-10">
            {/* necessary for layout. dont remove this div */}
        </div>

      {/* Filter bar */}
<div className="mt-20">    
<div
  className="w-full border-b py-3"
  style={{ background: "#FFFFFF", borderColor: "#E5E7EB" }}
>
  <div
    className="flex flex-wrap justify-center items-center gap-2 w-full"
  >
    {/* Search */}
    <div
      className="flex items-center gap-2 rounded-md px-3 h-10 w-full max-w-[520px]" 
      style={{ border: "1px solid #E5E7EB", background: "#FFFFFF" }}
    >
      <Search className="w-4 h-4" style={{ color: "#5A5A5A" }} />
      <input
  className="w-full h-full outline-none text-sm dark:bg-white text-black"
        style={{ color: "#1C1C1C" }}
        placeholder="Search by City, State or Zip"
      />
    </div>

    {/* Filter stubs */}
    <div className="relative">
  <select
    className="h-10 px-3 pr-8 rounded-md border text-sm appearance-none"
    style={{
      borderColor: "#E5E7EB",
      background: "#FFFFFF",
      color: "#1C1C1C",
    }}
    defaultValue="for-sale"
  >
    <option value="for-sale">For Sale</option>
    <option value="sold">Sold</option>
  </select>
  <ChevronDown
    className="w-4 h-4 pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2"
    style={{ color: "#5A5A5A" }}
  />
</div>

    {/* Price Filter Dropdown */}
    <PriceFilter onApply={(min, max) => {
      console.log("apply price", { min, max });
      // TODO: Connect min/max to your filter logic
    }} />
    <BedsBathsDropdown onApply={(vals) => {
      console.log("apply beds/baths", vals);
      // TODO: Connect beds/baths to your filter logic
    }} />
    <HomeTypeDropdown onApply={(types) => {
      console.log("apply home types", types);
      // TODO: Connect home types to your filter logic
    }} />
    <FiltersPanel onApply={(vals) => {
      console.log("apply filters", vals);
      // TODO: Connect filters to your filter logic
    }} />
  </div>
</div>


      {/* Split: 60% map / 40% list */}
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-full py-5">
        {/* Map (left) */}
        <div
          className="col-span-5 lg:col-span-3 border-r"
          style={{ borderColor: "#E5E7EB", background: "#E9F0FF" }}
        >
          {/* On small screens show a shorter static map; on lg screens keep sticky full-height map */}
          <div className="w-full h-56 lg:h-[calc(100vh-64px)]">
            <img
              src="https://maps.gstatic.com/tactile/pane/default_geographic_background_tile_hdpi.png"
              alt="Map"
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>

        {/* List (right) */}
        <div className="col-span-5 lg:col-span-2">
          <div className="flex flex-col">
            {/* Section header */}
            <div className="px-4 pt-5">
              <h2 className="text-[24px] font-semibold">
                Homes <span style={{ color: "#EB4E3D" }}>For Sale</span>
              </h2>
              <div
                className="text-xs mt-1 flex items-center justify-between"
                style={{ color: "#6B7280" }}
              >
                <span>{allCards.length} Homes</span>
                <span>
                  Short By :{" "}
                  <button
                    className="font-semibold hover:underline"
                    style={{ color: "#0054F6" }}
                  >
                    House For You
                  </button>{" "}
                  ▾
                </span>
              </div>
            </div>

            {/* Cards scroller (ALWAYS scrollable on lg) */}
            <div
              className="flex-1 overflow-y-auto lg:h-[calc(100vh-64px)]"
              style={{ padding: "16px 16px 96px 16px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCards.map((c) => (
                  <div
                    key={c.id}
                    className="bg-white rounded-xl overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.08)] cursor-pointer"
                    onClick={() => handleCardClick(c.id)}
                  >
                    <div className="w-full h-48 sm:h-40 md:h-44 lg:h-[120px]">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-[16px] mb-1" style={{ color: "#6B7280" }}>
                        Active • MLS # {10000 + c.id}
                      </div>
                      <div className="text-[13px] font-semibold">{c.title}</div>
                      <div
                        className="text-[13px] font-semibold mt-1"
                        style={{ color: "#0054F6" }}
                      >
                        {c.price}
                      </div>
                      <div className="text-[11px] mt-1" style={{ color: "#6B7280" }}>
                        {c.beds} beds • {c.baths} baths •{" "}
                        <span className="font-semibold" style={{ color: "#0054F6" }}>
                          {c.area.split(" ")[0]}
                        </span>{" "}
                        {c.area.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  </div>
                ))}

                {/* End segment only on last page */}
                {page === totalPages && (
                  <div
                    className="col-span-2 mt-4 rounded-xl border p-4"
                    style={{ borderColor: "#E5E7EB" }}
                  >
                    <h3 className="font-semibold mb-1">More for you</h3>
                    <p className="text-sm" style={{ color: "#5A5A5A" }}>
                      Explore nearby neighborhoods, school ratings, and price trends tailored to your search.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination (sticky except on last page) */}
            <div
              className={page < totalPages ? "shrink-0 sticky bottom-0" : "shrink-0"}
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, #FFFFFF 60%)",
              }}
            >
              <div className="px-4 pt-2 pb-3">
                <div
                  className="rounded-full border flex items-center justify-center gap-3 h-10 px-2"
                  style={{ borderColor: "#2F6FEB", background: "#FFFFFF" }}
                >
                  <button
                    className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-40"
                    style={{ borderColor: "#2F6FEB", color: "#2F6FEB" }}
                    onClick={goPrev}
                    disabled={page === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {pageNumbers.map((n, idx) =>
                    n === "…" || n === "..." ? (
                      <span key={`e-${idx}`} style={{ color: "#6B7280" }}>
                        …
                      </span>
                    ) : (
                      <button
                        key={n}
                        onClick={() => goTo(n)}
                        className="text-sm px-1"
                        style={{
                          color: n === page ? "#2F6FEB" : "#6B7280",
                          fontWeight: n === page ? 700 : 400,
                        }}
                      >
                        {n}
                      </button>
                    )
                  )}

                  <button
                    className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-40"
                    style={{ borderColor: "#2F6FEB", color: "#2F6FEB" }}
                    onClick={goNext}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  className="w-full h-10 mt-3 rounded-md font-semibold"
                  style={{
                    color: "#FFFFFF",
                    background: "linear-gradient(90deg, #0054F6 0%, #0D47C1 100%)",
                  }}
                >
                  Start Listing ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
          <NewAddress />
          <Footer />

</div>



    </div>
  );
}
