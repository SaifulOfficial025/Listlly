import React from "react";

const plans = [
	{
		id: "silver",
		name: "Silver",
		price: "$249+",
		description: "Best for DIY sellers",
		commission: "+0.5% at Close",
		savings: "2.5%",
		bgImage: "/silver.svg",
		features: [
			"MLS Listing: 6-Months, 24 Photos",
			"Syndication to Zillow, Trulia, Realtor, Redfin, and more",
			"Unlimited Listing Changes",
			"Unlimited Open Houses",
			"Yard Sign ($49)",
			"Listly IntelliList",
			"Listly Showings",
			"Cancel Anytime",
		],
	},
	{
		id: "gold",
		name: "Gold",
		price: "$299+",
		description: "Best for most sellers",
		commission: "+1% at Close",
		savings: "2% to 5%",
		bgImage: "/gold.svg",
		features: [
			"Maximum Photos",
			"Licensed Broker Assistance",
			"Contract to Close Consulting",
			"Listly Offers",
			"Premium Yard Sign ($49)",
			"Seller Disclosures",
		],
	},
	{
		id: "platinum",
		name: "Platinum",
		price: "$349+",
		description: "Best for first-time sellers",
		commission: "+1.25% at Close",
		savings: "1.75% to 4.75%",
		bgImage: "/platinum.svg",
		features: [
			"Virtual Full-Service with Licensed Broker",
			"Personal Concierge",
			"12-month Listing",
			"Call Forwarding Service",
			"Rush Service (Draft in 12 hours)",
			"Coming Soon",
			"Max Exposure with Additional MLS",
		],
	},
];

function Plans() {
	return (
		<div className="w-full bg-white px-2 py-10 text-black">
			<div className="max-w-[1200px] mx-auto">
				<h2 className="text-center text-[28px] font-bold text-[#1C1C1C] mb-6">
					<span className="text-[#EB4E3D]">Pick a Flat Fee Plan</span> That Fits
					Your Budget
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[980px] mx-auto">
					{plans.map((plan) => (
						<div
							key={plan.id}
							className={`border rounded-lg overflow-hidden bg-white shadow-sm border-t-0   ${
								plan.id === "silver"
									? "border-[#c3c3c3] bg-[#fffcfc]"
									: plan.id === "gold"
									? "border-[#e9c376] bg-[#fff4d6]"
									: "border-[#fc6a6b] bg-[#ffe3e3]"
							}`}
						>
							<div className="relative">
								<img
									src={plan.bgImage}
									alt={`${plan.name} header`}
									className="w-full h-[130px] object-cover -mt-4"
								/>
								<div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-5">
									<h3 className="text-4xl font-bold text-white text-center drop-shadow-md">
										{plan.name}
									</h3>
								</div>
							</div>
							<div className="p-4 space-y-3">
								<div className="text-center">
									<p className="text-sm text-blue-600 mb-1">
										{plan.description}
									</p>
									<div className="text-2xl font-bold mb-1">
										{plan.price}
									</div>
									<p className="text-sm text-gray-600">
										{plan.commission}
									</p>
									<p className="text-xs text-gray-500 mt-1">
										Your est. savings {plan.savings}
									</p>
								</div>
								<button
									className={`w-full py-2 rounded font-medium text-white ${
										plan.id === "silver"
											? "bg-gray-500"
											: plan.id === "gold"
											? "bg-yellow-600"
											: "bg-red-500"
									}`}
								>
									Buy {plan.name}
								</button>
								<div className="">
									{plan.features.map((feature, index) => (
										<div key={index} className="text-sm">
											<div className="flex items-start gap-2">
												<span
													className={`mt-0.5 flex-shrink-0 ${
														plan.id === "silver"
															? "text-gray-500"
															: plan.id === "gold"
															? "text-yellow-600"
															: "text-red-500"
													}`}
												>
													<svg
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="w-4 h-4"
													>
														<circle
															cx="12"
															cy="12"
															r="10"
															fill="currentColor"
														/>
														<path
															d="M9.5 12.5l1.5 1.5 4-4"
															stroke="#fff"
															strokeWidth="1.6"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<div className="flex-1">{feature}</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-10 text-md text-gray-500 space-y-2">
					<p>
						On Silver, Gold, and Platinum plans, a minimum commission of $999 is
						applicable.
					</p>
					<p>
						1 All Houzeo yard signs are FREE with a selfie. Send us a clear selfie
						that includes you, the yard sign, and the house, and get the entire $49
						back. Some states or MLS' require the listing agent's yard sign, which
						is available for purchase. Refunds are not applicable on listing agent
						signs.
					</p>
					<p>
						2 The broker's point of contact will help efficiently communicate between
						the broker, buyer agent, and the closing agent.
					</p>
					<p>
						3 If the broker receives any calls for your property, they will be
					.forwarded to you
					</p>
					<p>
						4 Upon request, a draft will be assigned or the listing activated within
						12 business hours (Included for Platinum; $99 otherwise).
					</p>
					<p>
						5 Coming Soon: Only upon request, and where available (Included for
						Platinum; $199 otherwise).
					</p>
					<p>
						6 Additional MLS: Only upon request, and where available (Included for
						Platinum; $199 otherwise).
					</p>
				</div>
			</div>
		</div>
	);
}

export default Plans;
