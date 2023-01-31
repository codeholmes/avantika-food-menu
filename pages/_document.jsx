import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='UTF-8' />
			</Head>
			<body className='bg-slate-100 h-full'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
