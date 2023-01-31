export default function SpecialMealText(props) {
	return (
		<div className='text-center text-slate-500 mb-4'>
			{props.special_text} in {props.mealType} 🎉
		</div>
	)
}
