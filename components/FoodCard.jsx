export default function FoodCard(props) {
	return (
		<div>
			<div className='border rounded-lg border-slate-500 grid place-items-center h-28 '>
				<div className='grid grid-cols-1 gap-1 place-items-center'>
					<div className=' bg-green-100 font-extralight border rounded-lg border-green-600 pr-1 pl-1 text-xs'>
						{props.item_tag}
					</div>
					<div className='text-sm text-center font-normal pl-2 pr-2'>
						{props.item}
					</div>
				</div>
			</div>
		</div>
	)
}
