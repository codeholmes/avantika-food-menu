import Head from 'next/head'
import DateSelector from '../components/DateSelector'
import Meal from '../components/Meal'
import { useState } from 'react'
import SpecialMealText from '../components/SpecialMealText'

let menu = require('public/menu_test.json')

export default function Home() {
	const availableDates = []
	for (let key in menu) {
		availableDates.push(key)
	}

	var today = new Date()
	today.toISOString().split('T')[0]
	const offset = today.getTimezoneOffset()
	today = new Date(today.getTime() - offset * 60 * 1000)
	today = today.toISOString().split('T')[0]

	var today_idx = availableDates.indexOf(today)

	const [selectedDate, setSelectedDate] = useState(availableDates[today_idx])
	const onSelectDate = (date) => {
		setSelectedDate(date)
	}
	return (
		<div>
			<Head>
				<title>Avantika Food Menu</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='grid cols-1 place-items-center'>
					{availableDates.indexOf(today) ? (
						<div className='grid cols-1 place-items-center mt-12'>
							<div className='text-6xl font-medium mb-4'>🍽</div>
							<DateSelector onSelectDate={onSelectDate} />
							<div className='w-80 px-4 pt-4'>
								<div>
									{menu[selectedDate].lunch_special !=
									'Nan' ? (
										<SpecialMealText
											special_text={
												menu[selectedDate].lunch_special
											}
											mealType='Lunch'
										/>
									) : menu[selectedDate].dinner_special !=
									  'Nan' ? (
										<SpecialMealText
											special_text={
												menu[selectedDate]
													.dinner_special
											}
											mealType='Dinner'
										/>
									) : null}
								</div>
								<div className='mx-auto w-full max-w-md rounded-2xl grid gap-y-2 bg-white p-2 shadow-md'>
									<Meal
										mealType='Breakfast'
										date={selectedDate}></Meal>
									<Meal
										mealType='Lunch'
										date={selectedDate}
									/>
									<Meal
										mealType='Evening Snacks'
										date={selectedDate}
									/>
									<Meal
										mealType='Dinner'
										date={selectedDate}
									/>
								</div>
							</div>
							<div className='text-xs font-extralight text-center mt-4 mb-4 text-slate-400'>
								Developed by Anish P.
							</div>
						</div>
					) : (
						<div className='text-md font-extralight text-center h-full mt-12 pr-10 pl-10 text-slate-400'>
							<div className='text-2xl'>⚠️</div>
							<p>
								Data not available, check back after sometime!
							</p>
						</div>
					)}
				</div>
			</main>
		</div>
	)
}
