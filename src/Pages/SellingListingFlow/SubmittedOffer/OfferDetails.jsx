import React from "react";
import { FaRegEdit } from 'react-icons/fa';
import { FaHome, FaDollarSign, FaCalendarAlt, FaCheck, FaTimes } from "react-icons/fa";
import Dollar from "../../../../public/dollar.svg"
import Home from "../../../../public/home.svg"
import Date from "../../../../public/date.svg"
import Home2 from "../../../../public/home2.svg"
import Home3 from "../../../../public/home3.svg"




export default function OfferDetails() {
  return (
    <div className="w-full bg-white text-black justify-center min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-start justify-between">
          {/* Left: Title + Subtitle */}
          <div>
            <h1 className="text-[40px] leading-none font-bold tracking-tight">
              Offer Details
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              {/* keep the double space exactly as in the screenshot */}
              {"The\u00A0\u00A0Buyer Provided Info"}
            </p>
          </div>

          {/* Right: Gradient CTA */}
          <button
            className="inline-flex h-11 items-center justify-center rounded-xl px-8 text-sm font-medium text-white bg-gradient-to-r from-[#4E87F6] to-[#16386F] shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition-shadow"
          >
            Give Offer
          </button>
        </div>
      </div>



  <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
      {/* Counter Offer label */}
      <div className="text-[14px] leading-5 mb-2">Counter Offer</div>

      {/* Rows */}
      <div className="space-y-3">
        {/* Row 1 */}
        <div className="border border-gray-200 rounded-sm">
          <div className="grid grid-cols-3 gap-4 items-center px-4 py-3">
            {/* Left link */}
            <div className="text-[14px] font-semibold text-blue-600">
              Offer Contract
            </div>

            {/* Middle title + subtext */}
            <div>
              <div className="text-[14px] font-semibold">Offer Contract</div>
              <div className="text-[12px] text-gray-500">
                (3 Files) Offer Contract
              </div>
            </div>

            {/* Edit icon */}
            <div className="flex justify-end">
              <button type="button" className="p-1" aria-label="Edit">
                <FaRegEdit className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="border border-gray-200 rounded-sm">
          <div className="grid grid-cols-3 gap-4 items-center px-4 py-3">
            {/* Left link */}
            <div className="text-[14px] font-semibold text-blue-600">
              Payment
            </div>

            {/* Middle title + subtext */}
            <div>
              <div className="text-[14px] font-semibold">Mortgage</div>
              <div className="text-[12px] text-gray-500">
                (1 Files) Pre Approved File
              </div>
            </div>

            {/* Edit icon */}
            <div className="flex justify-end">
              <button type="button" className="p-1" aria-label="Edit">
                <FaRegEdit className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>












    <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
      {/* Section Label */}
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-[14px] font-semibold text-blue-600">
          Financials
        </span>
      </div>

      <div className="divide-y divide-gray-200">
        {/* Row 1 */}
        <div className="grid grid-cols-3 items-center px-4 py-3">
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-3">
            <img src={Home} alt="Home Icon" className="h-10 w-10" />
            <div>
              <div className="text-[14px] font-semibold">Offer Price</div>
              <div className="text-[12px] text-gray-500">
                List Price : $795,000
              </div>
            </div>
          </div>

          {/* Middle: Value */}
          <div>
            <div className="text-[14px] font-semibold">$700,000</div>
            <div className="text-[12px] text-green-600">- $95,000</div>
          </div>

          {/* Right: Edit */}
          <div className="flex justify-end">
            <button type="button" className="p-1" aria-label="Edit">
              <FaRegEdit className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={Home} alt="Home Icon" className="h-10 w-10" />
            <div>
              <div className="text-[14px] font-semibold">
                Earnest Money Deposit
              </div>
              <div className="text-[12px] text-gray-500">Original : $0</div>
            </div>
          </div>
          <div className="text-[14px] font-semibold">$00.00</div>
          <div className="flex justify-end">
            <button type="button" className="p-1" aria-label="Edit">
              <FaRegEdit className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-3 items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={Dollar} alt="Dollar Icon" className="w-10 h-10 text-blue-600" />
            <div>
              <div className="text-[14px] font-semibold">
                Seller Paid Settlement Charges
              </div>
              <div className="text-[12px] text-gray-500">Original : $0</div>
            </div>
          </div>
          <div className="text-[14px] font-semibold">$00.00</div>
          <div className="flex justify-end">
            <button type="button" className="p-1" aria-label="Edit">
              <FaRegEdit className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-3 items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={Dollar} alt="Dollar Icon" className="w-10 h-10 text-blue-600" />
            <div>
              <div className="text-[14px] font-semibold">
                Seller Paid Settlement Charges
              </div>
              <div className="text-[12px] text-gray-500">Original : $0</div>
            </div>
          </div>
          <div className="text-[14px] font-semibold">Buyer</div>
          <div className="flex justify-end">
            <button type="button" className="p-1" aria-label="Edit">
              <FaRegEdit className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </div>













<div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
  {/* Section Label */}
  <div className="px-4 py-3 border-b border-gray-200">
    <span className="text-[14px] font-semibold text-blue-600">Key Dates</span>
  </div>

  <div className="divide-y divide-gray-200">
    {/* Row 1 (inline edit) */}
    <div className="grid grid-cols-3 items-center px-4 py-3">
      {/* Left */}
      <div className="flex items-center gap-3 pr-6">
        <img src={Date} alt="Date Icon" className="w-10 h-10 text-blue-600" />
        <div>
          <div className="text-[14px] font-semibold">Settlement Date</div>
          <div className="text-[12px] text-gray-500">Original : Jun 16, 2021</div>
        </div>
      </div>

      {/* Middle */}
      <div className="flex items-center gap-2 px-6">
        <div className="flex items-center rounded px-2 py-0.5 text-[14px]">
          <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
          July 3, 2021
        </div>
        <span className="text-[12px] text-green-600">-17 Days</span>
      </div>

      {/* Right */}
      <div className="flex justify-end gap-3 pl-6">
        <button type="button" aria-label="Save">
          <FaCheck className="w-4 h-4 text-blue-600" />
        </button>
        <button type="button" aria-label="Cancel">
          <FaTimes className="w-4 h-4 text-blue-600" />
        </button>
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-3 items-center px-4 py-3">
      <div className="flex items-center gap-3 pr-6">
                <img src={Date} alt="Date Icon" className="w-10 h-10 text-blue-600" />

        <div>
          <div className="text-[14px] font-semibold">Offer Expiration Date</div>
          <div className="text-[12px] text-gray-500">Original : May 18, 2021</div>
        </div>
      </div>
      <div className="flex items-center  rounded px-2 py-0.5 text-[14px]">
          <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
          July 3, 2021
        </div>
      <div className="flex justify-end pl-6">
        <FaRegEdit className="w-4 h-4 text-blue-600" />
      </div>
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-3 items-center px-4 py-3">
      <div className="flex items-center gap-3 pr-6">
                <img src={Date} alt="Date Icon" className="w-10 h-10 text-blue-600" />

        <div>
          <div className="text-[14px] font-semibold">Inspection Period End Date</div>
          <div className="text-[12px] text-gray-500">Original : Jun 16, 2021</div>
        </div>
      </div>
      <div className="flex items-center  rounded px-2 py-0.5 text-[14px]">
          <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
          Aug 7, 2021
        </div>
      <div className="flex justify-end pl-6">
        <FaRegEdit className="w-4 h-4 text-blue-600" />
      </div>
    </div>

    {/* Row 4 */}
    <div className="grid grid-cols-3 items-center px-4 py-3">
      <div className="flex items-center gap-3 pr-6">
        <img src={Date} alt="Date Icon" className="w-10 h-10 text-blue-600" />
        <div>
          <div className="text-[14px] font-semibold">Inspection Resolution Date</div>
          <div className="text-[12px] text-gray-500">Original : May 18, 2021</div>
        </div>
      </div>
      <div className="flex items-center  rounded px-2 py-0.5 text-[14px]">
          <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
          July 3, 2021
        </div>
      <div className="flex justify-end pl-6">
        <FaRegEdit className="w-4 h-4 text-blue-600" />
      </div>
    </div>
  </div>
</div>
















    <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
      {/* Section Label */}
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-[14px] font-semibold text-blue-600">
          Contingencies
        </span>
      </div>

      <div className="divide-y divide-gray-200">
        {/* Row: Financing */}
        <div className="grid grid-cols-3 items-center px-4 py-4">
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-3">
            <img src={Home2} alt="Home Icon" className="w-10 h-10 text-blue-600" />
            <div>
              <div className="text-[14px] font-semibold">Financing</div>
              <div className="text-[12px] text-gray-500">
                Original : Conventional Loan
              </div>
            </div>
          </div>

          {/* Middle: Value */}
          <div className="text-center text-[14px] font-semibold">
            Conventional Loan
          </div>

          {/* Right: Edit */}
          <div className="flex justify-end">
            <FaRegEdit className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        {/* Row: Appraisal */}
        <div className="grid grid-cols-3 items-center px-4 py-4">
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-3">
            <img src={Home2} alt="Home Icon" className="w-10 h-10 text-blue-600" />
            <div>
              <div className="text-[14px] font-semibold">Appraisal</div>
              <div className="text-[12px] text-gray-500">Original : No</div>
            </div>
          </div>

          {/* Middle: Value */}
          <div className="text-center text-[14px] font-semibold">No</div>

          {/* Right: Edit */}
          <div className="flex justify-end">
            <FaRegEdit className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>
    </div>










    <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
      {/* Section Label */}
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-[14px] font-semibold text-blue-600">
          Miscellaneous
        </span>
      </div>

      <div className="divide-y divide-gray-200">
        {/* Row: Home Warranty */}
        <div className="grid grid-cols-3 items-center px-4 py-4">
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-3">
            <img src={Home3} alt="Home Icon" className="w-10 h-10 text-blue-600" />
            <div>
              <div className="text-[14px] font-semibold">Home Warranty</div>
              <div className="text-[12px] text-gray-500">Original : 0</div>
            </div>
          </div>

          {/* Middle: Value */}
          <div className="text-center text-[14px] font-semibold">0</div>

          {/* Right: Edit */}
          <div className="flex justify-end">
            <FaRegEdit className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        {/* Row: Any Other Important Consideration */}
        <div className="grid grid-cols-3 items-start px-4 py-4">
          {/* Left: Icon + Title */}
          <div className="flex items-start gap-3">
            <img src={Home3} alt="Home Icon" className="w-10 h-10 text-blue-600 mt-0.5" />
            <div>
              <div className="text-[14px] font-semibold">
                Any Other Imp Offer Consideration
              </div>
              <div className="text-[12px] text-gray-500">
                Buyer Agrees To Pay 100 More.................
              </div>
            </div>
          </div>

          {/* Middle: Long Text */}
          <div className="text-[13px] text-gray-700 leading-snug">
            Buyer Agrees To Increase The Purchase Price By $1,000 Above Any Bona
            Fide Competing Offer, Up To The Agreed Maximum Price. This Escalation
            Shall Apply Only Upon Written Proof Of Such Competing Offer.
          </div>

          {/* Right: Edit */}
          <div className="flex justify-end">
            <FaRegEdit className="w-4 h-4 text-blue-600 mt-1" />
          </div>
        </div>
      </div>
    </div>









    <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10 ">
      {/* Section Label */}
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-[14px] font-semibold text-blue-600">
          Any Comments (Optional)
        </span>
      </div>

      {/* Textarea */}
      <div className="px-4 py-4 ">
        <textarea
          rows="4"
          className="w-full border border-gray-300 rounded-md p-3 text-[14px] outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-white"
          placeholder=""
        />
      </div>

      {/* Back Button */}
      <div className="flex justify-center px-4 pb-6">
        <button
          type="button"
          className="px-6 py-2 border border-blue-500 rounded-md text-[14px] font-medium text-black hover:bg-blue-50"
        >
          Back
        </button>
      </div>
    </div>





    </div>
  );
}
