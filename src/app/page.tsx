export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center text-white">
			<h1 className="text-4xl font-bold">Docs Media</h1>
			<h2 className="max-w-lg text-xl">
				Used to generate media that can be used on Soda&apos;s documentation.
			</h2>
			<h3 className="mt-7">
				View on{" "}
				<a
					className="text-purple-400"
					href="https://github.com/Soda-App/Docs-Media"
				>
					GitHub
				</a>{" "}
				for help
			</h3>
		</div>
	);
}
