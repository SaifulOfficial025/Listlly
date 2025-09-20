import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const sample = [
	{
		id: 1,
		address: '123 Oak Street, Beverly Hills, CA 90210',
		location: 'Rancho Santa Fe, CA 92067',
		type: 'Single Family',
		requested: '15/01/2024',
		schedule: '18/01/2024',
		time: '10 AM',
		status: 'pending',
	},
	{
		id: 2,
		address: '123 Oak Street, Beverly Hills, CA 90210',
		location: 'Rancho Santa Fe, CA 92067',
		type: 'Single Family',
		requested: '15/01/2024',
		schedule: '18/01/2024',
		time: '10 AM',
		status: 'pending',
	},
	{
		id: 3,
		address: '123 Oak Street, Beverly Hills, CA 90210',
		location: 'Rancho Santa Fe, CA 92067',
		type: 'Single Family',
		requested: '15/01/2024',
		schedule: '18/01/2024',
		time: '10 AM',
		status: 'pending',
	},
]

export default function PhotographyRequest() {
 	const navigate = useNavigate()
 	const [tab, setTab] = useState('all')
 	const [items, setItems] = useState(sample)

 	function accept(id) {
 		setItems((prev) => prev.map((p) => (p.id === id ? { ...p, status: 'accepted' } : p)))
 	}

 	function decline(id) {
 		setItems((prev) => prev.map((p) => (p.id === id ? { ...p, status: 'declined' } : p)))
 	}

	const visible = items // tabs are placeholders; all tabs show same sample for now

	return (
		<div className=" mx-auto space-y-6 text-black">
			<div>
				<h1 className="text-2xl font-semibold text-black">Photography Requests</h1>
				<div className="mt-3 flex items-center gap-4">
					<button onClick={() => setTab('all')} className={`text-sm ${tab === 'all' ? 'text-[#0B61E6] font-medium' : 'text-gray-500'}`}>All Request</button>
					<button onClick={() => setTab('accept')} className={`text-sm ${tab === 'accept' ? 'text-[#0B61E6] font-medium' : 'text-gray-500'}`}>Accept Request</button>
					<button onClick={() => setTab('pending')} className={`text-sm ${tab === 'pending' ? 'text-[#0B61E6] font-medium' : 'text-gray-500'}`}>Pending Request</button>
				</div>
			</div>

					<div className="space-y-6">
						{visible.map((r) => (
							<div key={r.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
								<div className="flex items-start justify-between">
									<div>
										<div className="text-lg font-semibold text-gray-800">{r.address}</div>
										<div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
												<path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
												<circle cx="12" cy="11" r="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>{r.location}</span>
										</div>
									</div>

									<div className="text-sm text-gray-700">{r.time}</div>
								</div>

								<div className="mt-6 grid grid-cols-4 gap-6 text-sm text-gray-500">
									<div>
										<div className="text-xs">Home Type</div>
										<div className="text-lg font-semibold text-gray-800 mt-2">{r.type}</div>
									</div>
									<div>
										<div className="text-xs">Requested</div>
										<div className="text-lg font-semibold text-gray-800 mt-2">{r.requested}</div>
									</div>
									<div>
										<div className="text-xs">Schedule</div>
										<div className="text-lg font-semibold text-gray-800 mt-2">{r.schedule}</div>
									</div>
									<div>
										<div className="text-xs">Time</div>
										<div className="text-lg font-semibold text-gray-800 mt-2">{r.time}</div>
									</div>
								</div>

								<div className="mt-6 flex items-center gap-4">
									{r.status === 'accepted' ? (
										<>
											<button className="flex items-center gap-2 px-6 py-2 bg-[#E9FBEE] text-[#15903d] rounded-md font-medium">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#15903d">
													<path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
													<circle cx="12" cy="12" r="10" strokeWidth="1.5" stroke="#15903d" />
												</svg>
												<span>Accepted</span>
											</button>
											<button onClick={() => navigate(`/vendor_dashboard/property_information/${r.id}`)} className="px-6 py-2 bg-[#EDF4FF] text-[#0B61E6] rounded-md font-medium">View Details</button>
										</>
									) : r.status === 'declined' ? (
										<button className="px-6 py-2 bg-[#FFEAEA] text-[#D33C40] rounded-md font-medium">Declined</button>
									) : (
										<>
											<button onClick={() => accept(r.id)} className="px-16 py-2 bg-[#37b226] hover:bg-green-600 text-white rounded-md">Accept</button>
											<button onClick={() => decline(r.id)} className="px-16 py-2 bg-[#ff6061] hover:bg-red-500 text-white rounded-md">Decline</button>
										</>
									)}
								</div>
							</div>
						))}
					</div>
		</div>
	)
}
