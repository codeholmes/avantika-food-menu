import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import FoodCard from '../components/FoodCard'
let menu_object = require('public/menu_test.json')

export default function Meal(props) {
	const menu = menu_object[props.date]
	const mealType = props.mealType
	return (
		<div>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
							<span>{props.mealType}</span>
							<ChevronUpIcon
								className={`${
									open ? 'rotate-180 transform' : ''
								} h-5 w-5 text-purple-500`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
							<div className='grid grid-cols-2 gap-4'>
								{mealType == 'Breakfast'
									? menu.breakfast.map((item) => (
											<div>
												<FoodCard
													item={item[1]}
													item_tag={
														item[0]
													}></FoodCard>
											</div>
									  ))
									: mealType == 'Lunch'
									? menu.lunch.map((item) => (
											<FoodCard
												item={item[1]}
												item_tag={item[0]}></FoodCard>
									  ))
									: mealType == 'Evening Snacks'
									? menu.snacks.map((item) => (
											<FoodCard
												item={item[1]}
												item_tag={item[0]}></FoodCard>
									  ))
									: menu.dinner.map((item) => (
											<FoodCard
												item={item[1]}
												item_tag={item[0]}></FoodCard>
									  ))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	)
}
