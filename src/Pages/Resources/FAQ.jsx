import React, { useState } from 'react'
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

const Section = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">{title}</h2>

      <div className="grid grid-cols-1 gap-4">
        {items.map((it, i) => (
          <div
            key={i}
            className="p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-bold text-[#1C1C1C]">{it.q}</h3>
              <span className="text-[#EB4E3D] text-lg sm:text-xl">{openIndex === i ? '▲' : '▼'}</span>
            </div>
            {openIndex === i && (
              <p className="text-sm sm:text-base text-gray-500 mt-2">{it.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FAQ() {
  const fsbo = [
    { q: 'Should I sell my home myself?', a: 'Many homeowners choose FSBO to save on commission. Consider your local market and time to manage paperwork and showings.' },
    { q: 'What are the most important factors in selling my home?', a: 'Price, presentation, timing, and exposure are the primary factors. Good photography and accurate pricing help the most.' },
    { q: 'How do I get started with Houzeo?', a: 'Create an account, list your property with the required details and photos, and follow the guided steps to post to MLS.' },
  ]

  const mls = [
    { q: 'What is a Multiple Listing Service (MLS)?', a: 'An MLS is a database used by brokers to share listings and cooperate on offers and showings.' },
    { q: 'Does it matter which MLS my property is listed on?', a: 'Yes — coverage varies by region. Choose the MLS that serves your local market for best exposure.' },
    { q: "Should I offer the buyer's agent a commission?", a: 'Offering a buyer agent commission often increases showings and agent interest; it is selectable when listing.' },
    { q: 'How can I view my MLS listing?', a: 'Once live, your listing will appear on the MLS and syndicated portals within the publisher rules of the MLS.' },
    { q: 'Do I need to review my MLS listing?', a: 'Yes — always verify information, photos, and price are correct after publication.' },
    { q: 'How will I know when my listing goes public?', a: 'You will receive notifications and can check the listing status in your dashboard.' },
    { q: 'How long does it take to get my listing on the MLS?', a: 'Processing time varies by MLS; typically within 24-48 hours after submission and approval.' },
    { q: 'Will my listing appear on Zillow, Redfin, Realtor.com, Trulia, etc.?', a: 'Many MLSs syndicate listings to portals; syndication depends on MLS rules.' },
    { q: 'How will buyers and buyer agents contact me?', a: 'Contact info you provide will be visible to interested parties through buyer agent inquiries or contact forms.' },
    { q: 'If I list on houzeo.com, can I change my mind a month later and instead list with a full-service real estate agent?', a: 'Yes — you can switch to a full-service agent at any time; consult MLS and contract terms for any restrictions.' },
    { q: 'How do I get photos of my home?', a: 'You can upload professional photos or schedule a photographer; high-quality photos increase buyer interest.' },
  ]

  const features = [
    { q: "How does Houzeo's IntelliList Intelligent Listing Management System work?", a: 'It allows you to manage listings, updates, and requests from a single dashboard.' },
    { q: "What is Houzeo's Closing Dashboard?", a: 'A tool to manage closing documents, tasks, and partner communications until settlement.' },
    { q: 'How does Houzeo help me file Federal & State disclosures?', a: 'The platform provides guided forms and upload options for required disclosures.' },
    { q: 'How does Houzeo allow me to select an Escrow Agent or Attorney to help with my Closing?', a: 'You can choose from vetted partners or add your preferred settlement agent during the flow.' },
    { q: 'How do I compare offers on Houzeo?', a: 'Use the offers dashboard to review, compare, and counter offers online.' },
    { q: 'I have heard so much about Houzeo’s Closing Dashboard. What is it?', a: 'See above — it centralizes closing activities and documents.' },
    { q: 'How do I get help if I need it?', a: 'Contact support via the help center or email for real-time assistance.' },
  ]

  const general = [
    { q: 'Should I host an Open House?', a: 'Open houses can increase exposure; choose based on neighborhood traffic and safety.' },
    { q: 'How do I choose between offers?', a: 'Consider price, contingencies, timeline, and buyer qualifications.' },
    { q: 'How do I respond to low-ball offers?', a: 'Respond professionally: counter, decline, or request better terms based on market data.' },
    { q: 'Should I get my house professionally staged?', a: 'Staging often helps sell faster and at a higher price, but evaluate ROI for your market.' },
    { q: 'Do you have any other tips for me?', a: 'Price correctly, present well, and be responsive to buyer inquiries.' },
    { q: 'Is Houzeo Legit?', a: 'Houzeo is a legitimate FSBO/flat-fee MLS provider; review terms and local MLS partnerships.' },
  ]

  return (
    <div>
        <Header />
    <div className="w-full bg-white px-4 py-10 mx-auto max-w-[1200px] mt-16">
      <h1 className="text-[28px] font-bold text-black mb-4 text-center">
        Listlly Frequently Asked Questions <span className="text-[#EB4E3D]">(FAQ)</span>
      </h1>

      <p className="text-center text-gray-500 mb-8">We've compiled answers to your most asked questions below</p>

      <Section title="For Sale By Owner (FSBO) FAQ" items={fsbo} />
      <Section title="MLS (Multiple Listing Service) FAQ" items={mls} />
      <Section title="Listlly Features FAQ" items={features} />
      <Section title="General FAQ" items={general} />

      <div className="mt-8 text-sm">
        <h4 className="text-base font-semibold text-[#EB4E3D]">Other Questions</h4>
        <p className="mt-2 text-gray-600">Send us an email: <a className="text-blue-600 underline" href="mailto:listllysupport@gmail.com">listllysupport@gmail.com</a></p>
      </div>
    </div>
      <Footer />
    </div>
  )
}
