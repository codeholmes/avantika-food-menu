import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const DateSelector = ({ onSelectDate }) => {
	var today = new Date()
	today.toISOString().split('T')[0]
	const offset = today.getTimezoneOffset()
	today = new Date(today.getTime() - offset * 60 * 1000)
	today = today.toISOString().split('T')[0]

	let menu = require('public/menu_test.json')
	const availableDates = []
	for (let key in menu) {
		availableDates.push(key)
	}
	let today_idx = availableDates.indexOf(today)

	const [selected, setSelected] = useState(availableDates[today_idx])

	return (
		<div className='w-72'>
			<Listbox
				value={selected}
				onChange={(date) => {
					setSelected(date)
					onSelectDate(date)
				}}>
				<div className='relative mt-1'>
					<Listbox.Button className='relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-purple-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm cursor-pointer'>
						<span className='block truncate'>{selected}</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							<ChevronUpDownIcon
								className='h-5 w-5 text-gray-400'
								aria-hidden='true'
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Listbox.Options className='z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
							{availableDates.map((date, dateIdx) => (
								<Listbox.Option
									key={(dateIdx = {})}
									className={({ active }) =>
										`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
											active
												? 'bg-purple-100 text-purple-900'
												: 'text-gray-900'
										}`
									}
									value={date}>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected
														? 'font-medium'
														: 'font-normal'
												}`}>
												{date}
											</span>
											{selected ? (
												<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600'>
													<CheckIcon
														className='h-5 w-5'
														aria-hidden='true'
													/>
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	)
}
export default DateSelector
