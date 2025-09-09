import React from "react";

function HiddenFees() {
  const fees = [
    {
      title: "Title Company Referral Fee—$50 to $200",
      description:
        "Companies like Flat Fee MLS Realty and several others get a referral fee from title companies. This fee is from the monies you pay. You’ll be forced to pay a “Coordination” fee if you select your option. It’s like paying a “convenience fee” for not using the free ATM. There are several other junk fees associated with choosing your own title service.",
    },
    {
      title: "Coordination Fee—$50 to $200",
      description:
        "You’re basically paying for the privilege of not using the title company your Flat Fee MLS company suggested. When you pick your own title company, your Flat Fee company has to coordinate well with that title company. Think of it as paying an extra $50 for your Uber driver to take the scenic route when you could’ve just taken the highway.",
    },
    {
      title: "Cancellation or Listing Removal Fees—$50 to $100",
      description:
        "You thought this was your dream sale, but now it feels like a bad Tinder date. If you decide to take your listing down early or cancel it, most Flat Fee MLS services will charge a removal fee. Depending on the company’s policy, this can range from $50 to $100 or more.",
    },
    {
      title: "Photo Updates Fees—$25 to $75",
      description:
        "You thought your living room looked cozy in the dim light, but on second thought, does it look more like a cave? Depending on where you live, you will have to spend $25 to $75 to upgrade your listing by adding or swapping out professional photos. The fees depend on how many photos you need to upload.",
    },
    {
      title: "Listing Price Update—$25 to $50",
      description:
        "You listed your home as the neighborhood’s crown jewel, but then the market decided to give you a reality check. Flat Fee services will charge you a fee if you need to adjust the asking price after it’s live. Depending on the provider, this fee can range from $25 to $50 per change. So, if you need to change your listing price a few times, you’re looking at the cost of 2–4 little Cafecitos.",
    },
    {
      title: "Feature Changes—$20 to $50",
      description:
        "While filling out the listing paperwork, you eyeballed the square footage, but now that you’ve finally measured the area, it turns out your 2,000 sq ft house is actually 1,800. To make things right, you need to quickly tweak the listing features, i.e., your home’s square footage. A Flat Fee MLS provider will charge you $20 to $50 per feature change.",
    },
    {
      title: "Addendum Fees—$25 to $50",
      description:
        "You called it a “minor plumbing issue,” but after a second glance, you realized it’s more like a “full-on flood zone.” Now, you need to disclose that with a seller’s disclosure. Expect to pay between $25 to $50 for adding disclosures, inspection reports, or other docs to your listing after it’s posted on the MLS (per document).",
    },
    {
      title: "Open House Updates—$25 to $50",
      description:
        "You planned your open house for Saturday afternoon, but then your neighbor decided to throw a massive BBQ on the same day. Now you need to reschedule, but hey, that’ll cost you! If you want to add or update details about an open house event, expect to pay around $25 to $50 to your Flat Fee MLS listing service.",
    },
    {
      title: "Description Update Fees—$20 to $40",
      description:
        "Maybe you described the kitchen as “rustic” when you meant “retro” or “vintage.” Now’s your chance to get real with those buyers. It’s time for a price adjustment—but you can’t do it for free with some Flat Fee MLS listing services. You’ll have to spend $20 to $40 for each update.",
    },
  ];

  return (
    <div className="w-full bg-white px-4 sm:px-6 py-8 sm:py-10 mx-auto max-w-[1200px]">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#EB4E3D] mb-4 text-center">
        Hidden Fees? <span className="text-black">Not with Listlly</span>
      </h2>
      <p className="text-sm sm:text-lg text-black mb-6 text-center">
        Houzeo doesn’t believe in hidden fees and discloses all the costs upfront.
        Transparency is in our DNA. Several Flat Fee MLS companies claim to list
        your home on the market for $99 or lower. The appeal is real, but your
        savings will not last long. You may have to pay for every little change
        you need to make to your listing. A few sneaky fees might pop up when
        you’re at the closing table. Always read the terms and conditions page
        of the Flat Fee MLS service you choose.
      </p>
      <p className="text-md text-black mb-6 text-center">
        Here’s a rundown of some things you might end up paying for:{" "}
        <a href="#" className="text-blue-500 underline">
          Read More
        </a>
      </p>

      <div className="grid grid-cols-1 gap-6">
        {fees.map((fee, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
              <h3 className="text-base sm:text-lg font-bold text-[#1C1C1C] mb-2">
              {fee.title}
            </h3>
              <p className="text-sm sm:text-base text-gray-500">{fee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HiddenFees;
