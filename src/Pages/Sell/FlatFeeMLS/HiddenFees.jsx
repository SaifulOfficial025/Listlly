import React from "react";
import hiddenBg from "../../../../public/hiddenfeesbg.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiFillStop } from "react-icons/ai";

function HiddenFees() {
  return (
    <div
      className="w-full bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url(${hiddenBg})` }}
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#fff] mb-4">
          <AiFillStop className="inline-block mr-2 text-red-600" />
          Hidden Fees? <span className="text-white">Not with Listlly</span>
        </h2>

        <p className="text-md sm:text-lg text-white/90 mb-6">
          Listlly was built on transparency. Other platforms might charge you
          for every small change updating a photo, fixing a typo, or
          rescheduling an open house. We don’t. What you see is what you get.
          The essentials are included for free, and anything extra is clearly
          listed below no fine print, no surprises.
        </p>

        <div className="space-y-8 mt-8">
          {/* Included Free Section */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <AiFillStop className="text-white text-lg" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Included Free with Every Listing
              </h3>
              <p className="text-md text-white/90 mb-2">
                We cover everything you actually need to keep your listing
                fresh, accurate, and competitive, at no extra cost.
              </p>
              <ul className="list-disc marker:text-white/90 pl-6 space-y-4">
                <li>
                  <p className="font-semibold">Listing Price Updates</p>
                  <p className="text-md text-white/80 leading-relaxed">
                    Markets shift, and so can your strategy. Update your price
                    anytime, as often as you want — no hidden charges.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">
                    Feature or Description Changes
                  </p>
                  <p className="text-md text-white/80 leading-relaxed">
                    Update your home's description, add new upgrades, or adjust
                    details anytime to highlight what buyers care about most.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Open House Updates</p>
                  <p className="text-md text-white/80 leading-relaxed">
                    Schedule or reschedule your open houses with zero fees. Life
                    happens — your listing should keep up.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Addendum & Disclosure Uploads</p>
                  <p className="text-md text-white/80 leading-relaxed">
                    If you’re on our Platinum plan, upload disclosures,
                    inspection reports, and addenda anytime — easy compliance,
                    no paperwork stress.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Optional Add-Ons Section */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <AiFillStop className="text-white text-lg" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Optional Add-Ons and Enhancements
              </h3>
              <p className="text-md text-white/90 mb-2">
                For sellers who want to go above and beyond, we offer premium
                add-ons to help your home stand out and attract more buyers.
              </p>
              <ul className="list-disc marker:text-white/90 pl-6 space-y-4">
                <li>
                  <p className="font-semibold">
                    Premium Re-Staging or Re-Photo Services – Optional
                    ($50–$100)
                  </p>
                  <p className="text-md text-white/80 leading-relaxed">
                    Professionally edited re-photos or new shoots to make your
                    listing shine even brighter.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">
                    “Boost Visibility” or “Extra MLS Exposure” – Optional
                    ($25–$50)
                  </p>
                  <p className="text-md text-white/80 leading-relaxed">
                    Expand your reach across multiple MLS networks and get your
                    listing in front of even more buyers.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Standard Fees Section */}

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <AiFillStop className="text-white text-lg" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Standard Fees That Still Apply
              </h3>
              <p className="text-md text-white/90 mb-2">
                We keep these minimal and only charge them when absolutely
                necessary. No tricks, no hidden adjustments just fair and
                upfront pricing.
              </p>
              <ul className="list-disc marker:text-white/90 pl-6 space-y-4">
                <li>
                  <p className="font-semibold">
                    Coordination Fee (External Title Company) – $50–$200
                  </p>
                  <p className="text-md text-white/80 leading-relaxed">
                    When you choose your own title or escrow company, a small
                    coordination fee applies to manage compliance and
                    communication.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">
                    Cancellation / Listing Removal Fee – $50–$200
                  </p>
                  <p className="text-md text-white/80 leading-relaxed">
                    If you decide to cancel or withdraw your listing early, a
                    small fee applies to cover MLS processing and administrative
                    handling.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8  ">
          <span className="font-bold text-white mb-5 text-lg">
            The Listlly Promise
          </span>
          <span className="mt-10">
            <br />
            We’re not here to nickel-and-dime you. We’re here to help you sell
            smarter, save thousands, and stay in control with no confusion and
            no last-minute surprises.
          </span>
        </p>
      </div>
    </div>
  );
}

export default HiddenFees;
