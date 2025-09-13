import React, { useState } from "react";
import { FaRegEdit } from 'react-icons/fa';
import { FaHome, FaDollarSign, FaCalendarAlt, FaCheck, FaTimes } from "react-icons/fa";
import Dollar from "../../../../public/dollar.svg"
import Home from "../../../../public/home.svg"
import Date from "../../../../public/date.svg"
import Home2 from "../../../../public/home2.svg"
import Home3 from "../../../../public/home3.svg"




export default function OfferDetails() {
  const [counterOfferCount, setCounterOfferCount] = useState(0); // Track number of counter offers (0, 1, or 2)
  const [isCounterOffer, setIsCounterOffer] = useState(false);
  const [savedOffers, setSavedOffers] = useState([]); // Store saved counter offers
  const [counterOfferData, setCounterOfferData] = useState({
    offerContract: '',
    payment: '',
    offerPrice: '',
    earnestMoney: '',
    sellerSettlement1: '',
    sellerSettlement2: '',
    settlementDate: '',
    expirationDate: '',
    inspectionEndDate: '',
    inspectionResolutionDate: '',
    financing: '',
    appraisal: '',
    homeWarranty: '',
    otherConsideration: ''
  });

  const handleCounterOfferToggle = () => {
    if (isCounterOffer) {
      // If currently in counter offer mode, cancel and reset form
      setIsCounterOffer(false);
      setCounterOfferData({
        offerContract: '',
        payment: '',
        offerPrice: '',
        earnestMoney: '',
        sellerSettlement1: '',
        sellerSettlement2: '',
        settlementDate: '',
        expirationDate: '',
        inspectionEndDate: '',
        inspectionResolutionDate: '',
        financing: '',
        appraisal: '',
        homeWarranty: '',
        otherConsideration: ''
      });
    } else {
      // Enter counter offer mode only if less than 2 counter offers made
      if (counterOfferCount < 2) {
        setIsCounterOffer(true);
      }
    }
  };

  const handleSendCounterOffer = () => {
    if (counterOfferCount < 2) {
      // Save the current counter offer data
      setSavedOffers(prev => [...prev, { ...counterOfferData }]);
      setCounterOfferCount(prev => prev + 1);
      setIsCounterOffer(false);
      
      // Reset form for next counter offer
      setCounterOfferData({
        offerContract: '',
        payment: '',
        offerPrice: '',
        earnestMoney: '',
        sellerSettlement1: '',
        sellerSettlement2: '',
        settlementDate: '',
        expirationDate: '',
        inspectionEndDate: '',
        inspectionResolutionDate: '',
        financing: '',
        appraisal: '',
        homeWarranty: '',
        otherConsideration: ''
      });
    }
  };

  const getColumnCount = () => {
    return 3 + counterOfferCount + (isCounterOffer ? 1 : 0);
  };

  const getGridCols = () => {
    const totalCols = getColumnCount();
    if (totalCols === 3) return 'grid-cols-3';
    if (totalCols === 4) return 'grid-cols-4';
    if (totalCols === 5) return 'grid-cols-5';
    if (totalCols === 6) return 'grid-cols-6';
    return 'grid-cols-3'; // fallback
  };

  const handleInputChange = (field, value) => {
    setCounterOfferData(prev => ({
      ...prev,
      [field]: value
    }));
  };

      const validateInput = (field, value) => {
    switch (field) {
      case 'offerPrice':
      case 'earnestMoney':
      case 'sellerSettlement1':
      case 'sellerSettlement2':
      case 'homeWarranty':
        // Numeric fields
        return /^\d*\.?\d*$/.test(value);
      case 'settlementDate':
      case 'expirationDate':
      case 'inspectionEndDate':
      case 'inspectionResolutionDate':
        // Date fields - basic validation for MM/DD/YYYY format
        return /^(\d{0,2}\/?\d{0,2}\/?\d{0,4})?$/.test(value);
      case 'financing':
      case 'appraisal':
      case 'otherConsideration':
      case 'offerContract':
      case 'payment':
        // Text fields
        return true;
      default:
        return true;
    }
  };
  return (
    <div className="w-full bg-white text-black justify-center min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-start justify-between">
          {/* Left: Title + Subtitle */}
          <div>
            <h1 className="text-[40px] leading-none font-bold tracking-tight">
              {isCounterOffer ? 'Counter Offer' : 'Offer Details'}
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              {/* keep the double space exactly as in the screenshot */}
              {isCounterOffer ? "You will counter offer here for John Doe" : "The\u00A0\u00A0Buyer Provided Info"}
            </p>
          </div>

          {/* Right: Gradient CTA */}
          <button
            onClick={isCounterOffer ? handleSendCounterOffer : handleCounterOfferToggle}
            disabled={!isCounterOffer && counterOfferCount >= 2}
            className={`inline-flex h-11 items-center justify-center rounded-xl px-8 text-sm font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition-shadow ${
              !isCounterOffer && counterOfferCount >= 2 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#4E87F6] to-[#16386F]'
            }`}
          >
            {isCounterOffer 
              ? 'Send Counter Offer' 
              : counterOfferCount >= 2 
                ? 'Max Counter Offers Reached' 
                : 'Give Offer'
            }
          </button>
        </div>
      </div>



  <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
      {/* Counter Offer label */}
      {/* Section Label */}
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-[14px] font-semibold text-blue-600">
          Counter Offer
        </span>
      </div>

      {/* Table */}
      <table className="w-full table-fixed">
        <tbody className="space-y-3 block">
          {/* Row 1 */}
          <tr className="border border-gray-200 rounded-sm block">
            <td className={`grid ${getGridCols()} gap-4 items-center px-4 py-3`}>
              {/* Left link */}
              <div className="text-[14px] font-semibold text-blue-600">
                Offer Contract
              </div>

              {/* Middle title + subtext */}
              <div className="items-center justify-center text-center">
                <div className="text-[14px] font-semibold">Offer Contract</div>
                <div className="text-[16px] text-gray-500">
                  (3 Files) Offer Contract
                </div>
              </div>

              {/* Previous Counter Offers */}
              {savedOffers.map((offer, index) => (
                <div key={index} className="flex items-center justify-center text-center">
                  <div className="text-[16px] font-semibold text-blue-600">
                    {offer.offerContract || 'No changes'}
                  </div>
                </div>
              ))}

              {/* Current Counter Offer Input */}
              {isCounterOffer && (
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    value={counterOfferData.offerContract}
                    onChange={(e) => {
                      if (validateInput('offerContract', e.target.value)) {
                        handleInputChange('offerContract', e.target.value);
                      }
                    }}
                    placeholder="Enter details"
                    className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              )}

              {/* Edit icon */}
              <div className="flex justify-end">
                <button type="button" className="p-1" aria-label="Edit">
                  <FaRegEdit className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </td>
          </tr>

          {/* Row 2 */}
          <tr className="border border-gray-200 rounded-sm block">
            <td className={`grid ${getGridCols()} gap-4 items-center px-4 py-3`}>
              {/* Left link */}
              <div className="text-[14px] font-semibold text-blue-600">
                Payment
              </div>

              {/* Middle title + subtext */}
              <div className="items-center justify-center text-center">
                <div className="text-[14px] font-semibold">Mortgage</div>
                <div className="text-[16px] text-gray-500">
                  (1 Files) Pre Approved File
                </div>
              </div>

              {/* Previous Counter Offers */}
              {savedOffers.map((offer, index) => (
                <div key={index} className="flex items-center justify-center text-center">
                  <div className="text-[16px] font-semibold text-blue-600">
                    {offer.payment || 'No changes'}
                  </div>
                </div>
              ))}

              {/* Current Counter Offer Input */}
              {isCounterOffer && (
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    value={counterOfferData.payment}
                    onChange={(e) => {
                      if (validateInput('payment', e.target.value)) {
                        handleInputChange('payment', e.target.value);
                      }
                    }}
                    placeholder="Enter details"
                    className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              )}

              {/* Edit icon */}
              <div className="flex justify-end">
                <button type="button" className="p-1" aria-label="Edit">
                  <FaRegEdit className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>










    <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
      {/* Section Label */}
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-[14px] font-semibold text-blue-600">
          Financials
        </span>
      </div>

      <table className="w-full">
        <tbody className="divide-y divide-gray-200">
          {/* Row 1 */}
          <tr className={`grid grid-cols-${getColumnCount()} items-center px-4 py-3`}>
            {/* Left: Icon + Title */}
            <td className="flex items-center gap-3">
              <img src={Home} alt="Home Icon" className="h-10 w-10" />
              <div>
                <div className="text-[14px] font-semibold">Offer Price</div>
                <div className="text-[16px] text-gray-500">
                  List Price : $795,000
                </div>
              </div>
            </td>

            {/* Middle: Value */}
            <td className="flex flex-col items-center justify-center text-center">
              <div className="text-[14px] font-semibold">$700,000</div>
              <div className="text-[16px] text-green-600">- $95,000</div>
            </td>

            {/* Previous Counter Offers */}
            {savedOffers.map((offer, index) => (
              <td key={index} className="flex items-center justify-center text-center">
                <div className="text-[16px] font-semibold text-blue-600">
                  {offer.offerPrice ? `$${offer.offerPrice}` : 'No change'}
                </div>
              </td>
            ))}

            {/* Current Counter Offer Input */}
            {isCounterOffer && (
              <td className="flex items-center justify-center">
                <input
                  type="text"
                  value={counterOfferData.offerPrice}
                  onChange={(e) => {
                    if (validateInput('offerPrice', e.target.value)) {
                      handleInputChange('offerPrice', e.target.value);
                    }
                  }}
                  placeholder="Enter price"
                  className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
            )}

            {/* Right: Edit */}
            <td className="flex justify-end">
              <button type="button" className="p-1" aria-label="Edit">
                <FaRegEdit className="w-4 h-4 text-blue-600" />
              </button>
            </td>
          </tr>

          {/* Row 2 */}
          <tr className={`grid grid-cols-${getColumnCount()} items-center px-4 py-3`}>
            <td className="flex items-center gap-3">
              <img src={Home} alt="Home Icon" className="h-10 w-10" />
              <div>
                <div className="text-[14px] font-semibold">
                  Earnest Money Deposit
                </div>
                <div className="text-[16px] text-gray-500">Original : $0</div>
              </div>
            </td>
            <td className="flex items-center justify-center text-center">
              <div className="text-[14px] font-semibold">$00.00</div>
            </td>
            {savedOffers.map((offer, index) => (
              <td key={index} className="flex items-center justify-center text-center">
                <div className="text-[16px] font-semibold text-blue-600">
                  {offer.earnestMoney ? `$${offer.earnestMoney}` : 'No change'}
                </div>
              </td>
            ))}
            {isCounterOffer && (
              <td className="flex items-center justify-center">
                <input
                  type="text"
                  value={counterOfferData.earnestMoney}
                  onChange={(e) => {
                    if (validateInput('earnestMoney', e.target.value)) {
                      handleInputChange('earnestMoney', e.target.value);
                    }
                  }}
                  placeholder="Enter amount"
                  className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
            )}
            <td className="flex justify-end">
              <button type="button" className="p-1" aria-label="Edit">
                <FaRegEdit className="w-4 h-4 text-blue-600" />
              </button>
            </td>
          </tr>

          {/* Row 3 */}
          <tr className={`grid grid-cols-${getColumnCount()} items-center px-4 py-3`}>
            <td className="flex items-center gap-3">
              <img src={Dollar} alt="Dollar Icon" className="w-10 h-10 text-blue-600" />
              <div>
                <div className="text-[14px] font-semibold">
                  Seller Paid Settlement Charges
                </div>
                <div className="text-[16px] text-gray-500">Original : $0</div>
              </div>
            </td>
            <td className="flex items-center justify-center text-center">
              <div className="text-[14px] font-semibold">$00.00</div>
            </td>
            {savedOffers.map((offer, index) => (
              <td key={index} className="flex items-center justify-center text-center">
                <div className="text-[16px] font-semibold text-blue-600">
                  {offer.sellerSettlement1 ? `$${offer.sellerSettlement1}` : 'No change'}
                </div>
              </td>
            ))}
            {isCounterOffer && (
              <td className="flex items-center justify-center">
                <input
                  type="text"
                  value={counterOfferData.sellerSettlement1}
                  onChange={(e) => {
                    if (validateInput('sellerSettlement1', e.target.value)) {
                      handleInputChange('sellerSettlement1', e.target.value);
                    }
                  }}
                  placeholder="Enter amount"
                  className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
            )}
            <td className="flex justify-end">
              <button type="button" className="p-1" aria-label="Edit">
                <FaRegEdit className="w-4 h-4 text-blue-600" />
              </button>
            </td>
          </tr>

          {/* Row 4 */}
          <tr className={`grid grid-cols-${getColumnCount()} items-center px-4 py-3`}>
            <td className="flex items-center gap-3">
              <img src={Dollar} alt="Dollar Icon" className="w-10 h-10 text-blue-600" />
              <div>
                <div className="text-[14px] font-semibold">
                  Seller Paid Settlement Charges
                </div>
                <div className="text-[16px] text-gray-500">Original : $0</div>
              </div>
            </td>
            <td className="flex items-center justify-center text-center">
              <div className="text-[14px] font-semibold">Buyer</div>
            </td>
            {savedOffers.map((offer, index) => (
              <td key={index} className="flex items-center justify-center text-center">
                <div className="text-[16px] font-semibold text-blue-600">
                  {offer.sellerSettlement2 || 'No change'}
                </div>
              </td>
            ))}
            {isCounterOffer && (
              <td className="flex items-center justify-center">
                <input
                  type="text"
                  value={counterOfferData.sellerSettlement2}
                  onChange={(e) => {
                    if (validateInput('sellerSettlement2', e.target.value)) {
                      handleInputChange('sellerSettlement2', e.target.value);
                    }
                  }}
                  placeholder="Enter value"
                  className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
            )}
            <td className="flex justify-end">
              <button type="button" className="p-1" aria-label="Edit">
                <FaRegEdit className="w-4 h-4 text-blue-600" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>













<div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
  {/* Section Label */}
  <div className="px-4 py-3 border-b border-gray-200">
    <span className="text-[14px] font-semibold text-blue-600">Key Dates</span>
  </div>

  <table className="w-full">
    <tbody className="divide-y divide-gray-200">
      {/* Row 1 (inline edit) */}
      <tr className={`grid grid-cols-${getColumnCount()} items-center px-4 py-3`}>
        {/* Left */}
        <td className="flex items-center gap-3 pr-6">
          <img src={Date} alt="Date Icon" className="w-10 h-10 text-blue-600" />
          <div>
            <div className="text-[14px] font-semibold">Settlement Date</div>
            <div className="text-[16px] text-gray-500">Original : Jun 16, 2021</div>
          </div>
        </td>

        {/* Middle */}
        <td className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex items-center rounded px-2 py-0.5 text-[14px]">
            <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
            July 3, 2021
          </div>
          <span className="text-[16px] text-green-600">-17 Days</span>
        </td>

        {/* Previous Counter Offers */}
        {savedOffers.map((offer, index) => (
          <td key={index} className="flex items-center justify-center text-center">
            <div className="text-[16px] font-semibold text-blue-600">
              {offer.settlementDate || 'No change'}
            </div>
          </td>
        ))}

        {/* Counter Offer Input Column */}
        {isCounterOffer && (
          <td className="flex items-center justify-center">
            <input
              type="text"
              value={counterOfferData.settlementDate}
              onChange={(e) => {
                if (validateInput('settlementDate', e.target.value)) {
                  handleInputChange('settlementDate', e.target.value);
                }
              }}
              placeholder="MM/DD/YYYY"
              className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </td>
        )}

        {/* Right */}
        <td className="flex justify-end gap-3 pl-6">
          <button type="button" aria-label="Save">
            <FaCheck className="w-4 h-4 text-blue-600" />
          </button>
          <button type="button" aria-label="Cancel">
            <FaTimes className="w-4 h-4 text-blue-600" />
          </button>
        </td>
      </tr>

      {/* Row 2 */}
      <tr className={`grid grid-cols-${getColumnCount()} items-center px-4 py-3`}>
        <td className="flex items-center gap-3 pr-6">
          <img src={Date} alt="Date Icon" className="w-10 h-10 text-blue-600" />
          <div>
            <div className="text-[14px] font-semibold">Offer Expiration Date</div>
            <div className="text-[16px] text-gray-500">Original : May 18, 2021</div>
          </div>
        </td>
        <td className="flex items-center justify-center rounded px-2 py-0.5 text-[14px]">
          <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
          July 3, 2021
        </td>
        {savedOffers.map((offer, index) => (
          <td key={index} className="flex items-center justify-center text-center">
            <div className="text-[16px] font-semibold text-blue-600">
              {offer.expirationDate || 'No change'}
            </div>
          </td>
        ))}
        {isCounterOffer && (
          <td className="flex items-center justify-center">
            <input
              type="text"
              value={counterOfferData.expirationDate}
              onChange={(e) => {
                if (validateInput('expirationDate', e.target.value)) {
                  handleInputChange('expirationDate', e.target.value);
                }
              }}
              placeholder="MM/DD/YYYY"
              className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </td>
        )}
        <td className="flex justify-end pl-6">
          <FaRegEdit className="w-4 h-4 text-blue-600" />
        </td>
      </tr>

      {/* Row 3 */}
      <tr className={`grid ${getGridCols()} items-center px-4 py-3`}>
        <td className="flex items-center gap-3 pr-6">
          <img src={Date} alt="Date Icon" className="w-10 h-10 text-blue-600" />
          <div>
            <div className="text-[14px] font-semibold">Inspection Period End Date</div>
            <div className="text-[16px] text-gray-500">Original : Jun 16, 2021</div>
          </div>
        </td>
        <td className="flex items-center justify-center rounded px-2 py-0.5 text-[14px]">
          <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
          Aug 7, 2021
        </td>
        {savedOffers.map((offer, index) => (
          <td key={index} className="flex items-center justify-center text-center">
            <div className="text-[16px] font-semibold text-blue-600">
              {offer.inspectionEndDate || 'No change'}
            </div>
          </td>
        ))}
        {isCounterOffer && (
          <td className="flex items-center justify-center">
            <input
              type="text"
              value={counterOfferData.inspectionEndDate}
              onChange={(e) => {
                if (validateInput('inspectionEndDate', e.target.value)) {
                  handleInputChange('inspectionEndDate', e.target.value);
                }
              }}
              placeholder="MM/DD/YYYY"
              className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </td>
        )}
        <td className="flex justify-end pl-6">
          <FaRegEdit className="w-4 h-4 text-blue-600" />
        </td>
      </tr>

      {/* Row 4 */}
      <tr className={`grid ${getGridCols()} items-center px-4 py-3`}>
        <td className="flex items-center gap-3 pr-6">
          <img src={Date} alt="Date Icon" className="w-10 h-10 text-blue-600" />
          <div>
            <div className="text-[14px] font-semibold">Inspection Resolution Date</div>
            <div className="text-[16px] text-gray-500">Original : May 18, 2021</div>
          </div>
        </td>
        <td className="flex items-center justify-center rounded px-2 py-0.5 text-[14px]">
          <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
          July 3, 2021
        </td>
        {savedOffers.map((offer, index) => (
          <td key={index} className="flex items-center justify-center text-center">
            <div className="text-[16px] font-semibold text-blue-600">
              {offer.inspectionResolutionDate || 'No change'}
            </div>
          </td>
        ))}
        {isCounterOffer && (
          <td className="flex items-center justify-center">
            <input
              type="text"
              value={counterOfferData.inspectionResolutionDate}
              onChange={(e) => {
                if (validateInput('inspectionResolutionDate', e.target.value)) {
                  handleInputChange('inspectionResolutionDate', e.target.value);
                }
              }}
              placeholder="MM/DD/YYYY"
              className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </td>
        )}
        <td className="flex justify-end pl-6">
          <FaRegEdit className="w-4 h-4 text-blue-600" />
        </td>
      </tr>
    </tbody>
  </table>
</div>
















    <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
      {/* Section Label */}
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-[14px] font-semibold text-blue-600">
          Contingencies
        </span>
      </div>

      <table className="w-full">
        <tbody className="divide-y divide-gray-200">
          {/* Row: Financing */}
          <tr className={`grid ${getGridCols()} items-center px-4 py-4`}>
            {/* Left: Icon + Title */}
            <td className="flex items-center gap-3">
              <img src={Home2} alt="Home Icon" className="w-10 h-10 text-blue-600" />
              <div>
                <div className="text-[14px] font-semibold">Financing</div>
                <div className="text-[16px] text-gray-500">
                  Original : Conventional Loan
                </div>
              </div>
            </td>

            {/* Middle: Value */}
            <td className="flex items-center justify-center text-center text-[14px] font-semibold">
              Conventional Loan
            </td>

            {/* Previous Counter Offers */}
            {savedOffers.map((offer, index) => (
              <td key={index} className="flex items-center justify-center text-center">
                <div className="text-[16px] font-semibold text-blue-600">
                  {offer.financing || 'No change'}
                </div>
              </td>
            ))}

            {/* Counter Offer Input Column */}
            {isCounterOffer && (
              <td className="flex items-center justify-center">
                <input
                  type="text"
                  value={counterOfferData.financing}
                  onChange={(e) => {
                    if (validateInput('financing', e.target.value)) {
                      handleInputChange('financing', e.target.value);
                    }
                  }}
                  placeholder="Enter type"
                  className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
            )}

            {/* Right: Edit */}
            <td className="flex justify-end">
              <FaRegEdit className="w-4 h-4 text-blue-600" />
            </td>
          </tr>

          {/* Row: Appraisal */}
          <tr className={`grid ${getGridCols()} items-center px-4 py-4`}>
            {/* Left: Icon + Title */}
            <td className="flex items-center gap-3">
              <img src={Home2} alt="Home Icon" className="w-10 h-10 text-blue-600" />
              <div>
                <div className="text-[14px] font-semibold">Appraisal</div>
                <div className="text-[16px] text-gray-500">Original : No</div>
              </div>
            </td>

            {/* Middle: Value */}
            <td className="flex items-center justify-center text-center text-[14px] font-semibold">No</td>

            {/* Previous Counter Offers */}
            {savedOffers.map((offer, index) => (
              <td key={index} className="flex items-center justify-center text-center">
                <div className="text-[16px] font-semibold text-blue-600">
                  {offer.appraisal || 'No change'}
                </div>
              </td>
            ))}

            {/* Counter Offer Input Column */}
            {isCounterOffer && (
              <td className="flex items-center justify-center">
                <input
                  type="text"
                  value={counterOfferData.appraisal}
                  onChange={(e) => {
                    if (validateInput('appraisal', e.target.value)) {
                      handleInputChange('appraisal', e.target.value);
                    }
                  }}
                  placeholder="Yes/No"
                  className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
            )}

            {/* Right: Edit */}
            <td className="flex justify-end">
              <FaRegEdit className="w-4 h-4 text-blue-600" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>










    <div className="w-full bg-white border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
      {/* Section Label */}
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-[14px] font-semibold text-blue-600">
          Miscellaneous
        </span>
      </div>

      <table className="w-full">
        <tbody className="divide-y divide-gray-200">
          {/* Row: Home Warranty */}
          <tr className={`grid ${getGridCols()} items-center px-4 py-4`}>
            {/* Left: Icon + Title */}
            <td className="flex items-center gap-3">
              <img src={Home3} alt="Home Icon" className="w-10 h-10 text-blue-600" />
              <div>
                <div className="text-[14px] font-semibold">Home Warranty</div>
                <div className="text-[16px] text-gray-500">Original : 0</div>
              </div>
            </td>

            {/* Middle: Value */}
            <td className="flex items-center justify-center text-center text-[14px] font-semibold">0</td>

            {/* Previous Counter Offers */}
            {savedOffers.map((offer, index) => (
              <td key={index} className="flex items-center justify-center text-center">
                <div className="text-[16px] font-semibold text-blue-600">
                  {offer.homeWarranty || 'No change'}
                </div>
              </td>
            ))}

            {/* Counter Offer Input Column */}
            {isCounterOffer && (
              <td className="flex items-center justify-center">
                <input
                  type="text"
                  value={counterOfferData.homeWarranty}
                  onChange={(e) => {
                    if (validateInput('homeWarranty', e.target.value)) {
                      handleInputChange('homeWarranty', e.target.value);
                    }
                  }}
                  placeholder="Enter value"
                  className="w-24 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
            )}

            {/* Right: Edit */}
            <td className="flex justify-end">
              <FaRegEdit className="w-4 h-4 text-blue-600" />
            </td>
          </tr>

          {/* Row: Any Other Important Consideration */}
          <tr className={`grid ${getGridCols()} items-start px-4 py-4`}>
            {/* Left: Icon + Title */}
            <td className="flex items-start gap-3">
              <img src={Home3} alt="Home Icon" className="w-10 h-10 text-blue-600 mt-0.5" />
              <div>
                <div className="text-[14px] font-semibold">
                  Any Other Imp Offer Consideration
                </div>
                <div className="text-[16px] text-gray-500">
                  Buyer Agrees To Pay 100 More.................
                </div>
              </div>
            </td>

            {/* Middle: Long Text */}
            <td className="flex items-center justify-center text-center text-[13px] text-gray-700 leading-snug px-4">
              Buyer Agrees To Increase The Purchase Price By $1,000 Above Any Bona
              Fide Competing Offer, Up To The Agreed Maximum Price. This Escalation
              Shall Apply Only Upon Written Proof Of Such Competing Offer.
            </td>

            {/* Previous Counter Offers */}
            {savedOffers.map((offer, index) => (
              <td key={index} className="flex items-start justify-center text-center pt-2">
                <div className="text-[16px] font-semibold text-blue-600">
                  {offer.otherConsideration || 'No change'}
                </div>
              </td>
            ))}

            {/* Counter Offer Input Column */}
            {isCounterOffer && (
              <td className="flex items-start justify-center pt-2">
                <textarea
                  value={counterOfferData.otherConsideration}
                  onChange={(e) => {
                    if (validateInput('otherConsideration', e.target.value)) {
                      handleInputChange('otherConsideration', e.target.value);
                    }
                  }}
                  placeholder="Enter details"
                  rows="3"
                  className="w-32 px-2 py-1 text-[16px] border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </td>
            )}

            {/* Right: Edit */}
            <td className="flex justify-end">
              <FaRegEdit className="w-4 h-4 text-blue-600 mt-1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>




{/* Add this here  */}




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
          onClick={isCounterOffer ? handleCounterOfferToggle : undefined}
          className="px-6 py-2 border border-blue-500 rounded-md text-[14px] font-medium text-black hover:bg-blue-50"
        >
          {isCounterOffer ? 'Cancel Counter' : 'Back'}
        </button>
      </div>
    </div>
      {/* Inclusions/Exclusions Section */}
      <div className="w-full bg-[#fafbfc] border border-gray-200 rounded-sm text-black container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-10">
        <div className="px-2 pb-2">
          <span className="text-[16px] font-semibold text-blue-600">Inclusions/Exclusions</span>
        </div>
        <div className="divide-y divide-gray-200">
          {/* Include Row */}
          <div className="flex items-center py-5">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
              <div>
                <div className="font-semibold text-[15px] text-[#222]">Include Fixtures & Items Beyond The Usual</div>
                <div className="text-xs text-gray-500 mt-0.5">Original : None</div>
              </div>
            </div>
            <div className="flex-1 text-center text-[17px] font-medium text-gray-700">None</div>
            <div className="flex-1 flex justify-end">
              <button type="button" className="p-1" aria-label="Edit">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m2 2l-6 6m2-2l6-6" /></svg>
              </button>
            </div>
          </div>
          {/* Exclude Row */}
          <div className="flex items-center py-5">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
              <div>
                <div className="font-semibold text-[15px] text-[#222]">Exclude Fixtures & Items Beyond The Usual</div>
                <div className="text-xs text-gray-500 mt-0.5">Original : None</div>
              </div>
            </div>
            <div className="flex-1 text-center text-[17px] font-medium text-gray-700">None</div>
            <div className="flex-1 flex justify-end">
              <button type="button" className="p-1" aria-label="Edit">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m2 2l-6 6m2-2l6-6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
}
