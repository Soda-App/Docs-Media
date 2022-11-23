"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
	const searchParams = useSearchParams();
	let title = searchParams.get("title");
	let subtitle = searchParams.get("subtitle");
	const logo = searchParams.get("logo");
	const dark = searchParams.get("dark");

	// Handle media inputs
	if (title) {
		title = title.substring(0, 32); // Limit the title
		// Limit the subtitle
		if (subtitle) {
			subtitle = subtitle.substring(0, 200);
		}
		return (
			<div className={`${dark && "dark"}`}>
				<div className="w-screen h-screen dark:bg-black">
					<div className="flex gap-6 p-20 divide-x divide-gray-400 text-9xl dark:text-white">
						<div className="flex flex-col items-center">
							{/* Display the logo if requested */}
							{logo && (
								<Image
									src="/logo.png"
									alt="Soda Logo"
									width={128}
									height={128}
									unoptimized
								/>
							)}

							{/* App Name */}
							<h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500">
								Soda
							</h1>
						</div>
						<div className="flex flex-col justify-center max-w-5xl pl-6 break-all">
							{/* Title */}
							<h2 className="font-bold">{title}</h2>

							{/* Display the subtitle if provided */}
							{subtitle && <h3 className="font-thin text-7xl">{subtitle}</h3>}
						</div>
					</div>
				</div>
			</div>
		);
	}

	// Default Page
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center text-white bg-black">
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
