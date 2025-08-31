import React, { useState } from 'react';

function ReviewPublish({ onCancel, onContinue, data }) {
  const property = data?.propertyAddress || {};

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
                <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">
            <span className="text-red-400 mr-1">List</span> Your Property
          </h2>
        </div>
      <div className="bg-white rounded-lg shadow px-6 py-6">
        {/* Header Section  */}
        <div className="flex items-start gap-6 mb-6">
          <img src="/property.jpg" alt="property" className="w-28 h-20 object-cover rounded" />
          <div className="flex-1">
            <div className="text-sm text-gray-600">{property.address || '123 Oak Street, Irvine, CA 92602'}</div>
            <div className="text-lg font-semibold">{property.title || 'Sample Property Title'}</div>
            <div className="text-sm text-gray-500 mt-1">{property.summary || '4 beds • 3 baths • 2,200 sq ft'}</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center drop-shadow-lg">
            <button className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">➕</button>
            <span className="mt-2">Start Escrow</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Accordion sections */}
          <Accordion
            title="Carolina MLS-NC Document"
            summary="Your listing requires these documents. Complete them to publish your listing."
            items={[
              'Listly Relationship Agreement And Disclosure',
              'North Carolina Property Required Sketch',
              'Listing Agreement',
              'Agency Disclosure',
              'MLS Data Input Single Family Home'
            ]}
          />

          <Accordion
            title="Federal And State Disclosure"
            summary="Various Federal And State laws require sellers to disclose materials facts regarding the property to prospective buyers. Listly has digitized this disclosure to make it easy to meet your requirements."
            items={[
              'Federal Lead Point Disclosure',
              'NC-Residential Property And Owners Association Disclosure',
              'NC-Mineral And Oil And Gas Rights Mandatory Disclosure'
            ]}
          />

          <Accordion
            title="Listing Upgrades"
            summary="We believe that instead of paying 3% commission you should pay exactly for the items you need. Here are some of the listing upgrades to purchase to help with your sale."
            items={[
              'Get Listed On An Additionally MLS',
              'Automated Schedule Of Showing And Feedback After Every Showing',
              'Professional Yard Sign',
              'Comparative Marketing Analysis',
              'Supra Realtor Lockbox',
              'Weekly Listing Report',
              'Contract Review',
              'Transaction Management Services',
              'Combo Lockbox'
            ]}
          />

          <Accordion
            title="Social Media Sharing"
            summary="20% of homes are bought by people the sellers know! There is no better way to market to these folks than via social media."
            items={["Share Via Facebook", "Share Via Twitter"]}
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button onClick={() => (onCancel ? onCancel() : null)} className="px-6 py-2 border rounded text-gray-600 bg-white">
            Save For Later
          </button>

          <button onClick={() => (onContinue ? onContinue({ published: true }) : null)} className="px-8 py-3 rounded bg-blue-600 text-white">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPublish;

function Accordion({ title, summary, items = [] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0 pb-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpen(!open)}>
        <div>
          <h4 className="font-medium">{title}</h4>
          <div className="text-sm text-gray-600 mt-1">{summary}</div>
        </div>
        <div className="text-gray-400">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.062a.75.75 0 111.12 1L10.56 13.06a.75.75 0 01-1.12 0L5.21 8.25a.75.75 0 01.02-1.04z" clipRule="evenodd"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.707l-3.71 4.062a.75.75 0 11-1.12-1L9.44 6.94a.75.75 0 011.12 0l4.24 4.82c.27.31.25.78-.03 1.03z" clipRule="evenodd"/></svg>
          )}
        </div>
      </div>

      {open && (
        <div className="mt-3 text-sm text-gray-700 space-y-2">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div>{it}</div>
              <div className="text-xs text-gray-400">▾</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
