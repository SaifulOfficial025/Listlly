import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Row({ children, onClick }) {
  return (
    <div
      className="flex items-center justify-between py-4 px-4 border-b last:border-b-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-sm text-gray-700">{children}</div>
      <div className="text-gray-400">▾</div>
    </div>
  );
}

function Accordion({ title, description, items = [] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}

      <div className="bg-white border rounded shadow-sm">
        {items.map((it, idx) => (
          <div key={idx}>
            <Row
              onClick={() => {
                /* placeholder */
              }}
            >
              {it}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialMediaSharing() {
  const navigate = useNavigate();

  const property = {
    address: "123 Oak Street, Irvine, CA 92602",
    region: "Rancho Santa Fe, CA 92067",
    price: "$899,000",
    specs: "4 beds • 3 baths • 2,200 sq ft",
  };

  const mlsItems = [
    "Listly Relationship Agreement And Disclosure",
    "North California Property Required Sketch",
    "Listing Agreement",
    "Agency Disclosure",
    "MLS Data Input Single Family Home",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      {/* blue header band with property */}
      <div className="bg-blue-50 rounded-lg px-6 py-4 flex items-center gap-6">
        <img
          src="/property.jpg"
          alt="property"
          className="w-28 h-20 object-cover rounded"
        />
        <div className="flex-1">
          <div className="text-sm text-gray-600">{property.address}</div>
          <div className="text-xs text-gray-500">{property.region}</div>
          <div className="text-lg font-semibold mt-1">{property.price}</div>
          <div className="text-sm text-blue-600 mt-1">{property.specs}</div>
        </div>
      </div>

      {/* centered action buttons */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          className="px-6 py-2 rounded bg-gray-100 border text-gray-700"
          onClick={() =>
            navigate(
              "/dashboard/selling_properties/start_escrow/select_settlement_agent"
            )
          }
        >
          Start Escrow
        </button>
        <button className="px-4 py-2 rounded border bg-white flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 010 2.828l-8.485 8.485a1 1 0 01-.464.263l-4 1a1 1 0 01-1.213-1.213l1-4a1 1 0 01.263-.464L14.586 2.586a2 2 0 012.828 0z" />
          </svg>
          Edit Listing
        </button>
      </div>

      {/* Social Media Sharing section */}
      <div className="mt-8">
        <Accordion
          title="Social Media Sharing"
          description="20% of homes are bought by people the sellers know! There is no better way to market to these folks than via social media."
          items={["Share Via Facebook", "Share Via Twitter"]}
        />
      </div>

      {/* Under Review Tasks */}
      <div className="mt-10">
        <h4 className="text-base font-semibold mb-4">Under Review Tasks</h4>

        <div className="bg-white rounded shadow-sm border p-6">
          <div className="mb-4">
            <h5 className="font-semibold">NC Regional MLS-NC Document</h5>
            <p className="text-sm text-gray-500 mt-2">
              Your Listing Agent Requires Some Documents Like The Listing
              Agreement, Agency Disclosure, And Property Details Input Forms.
              The Sooner You Complete This The Quicker Your Listing Will Be
              Online
            </p>
          </div>

          <div className="divide-y">
            {mlsItems.map((it, idx) => (
              <div
                key={idx}
                className="py-3 flex items-center justify-between text-sm text-gray-700"
              >
                <div>{it}</div>
                <div className="text-gray-400">▾</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
