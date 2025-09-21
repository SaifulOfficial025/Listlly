import React, { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


import PriceFilter from "../../Buys/PriceFilter";
import BedsBathsDropdown from "../../Buys/BedsBathsDropdown";
import HomeTypeDropdown from "../../Buys/HomeTypeDropdown";
import FiltersPanel from "../../Buys/FiltersPanel";


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


  
</div>



    </div>
  );
}
