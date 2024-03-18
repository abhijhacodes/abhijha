import type { NextPage } from "next";
import { Layout, Hero, About, Featured, Contact } from "../components";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";

const Home: NextPage = () => {
	useEffect(() => {
		(async () => {
			try {
				if (typeof window !== "undefined") {
					await (window as any).sankhyaSDKv1.captureUserEvent(
						process.env.NEXT_PUBLIC_SANKHYA_API_KEY
					);
				}
			} catch (error) {}
		})();
	}, []);

	return (
		<Layout
			title="Abhishek Jha"
			description="Abhishek Jha portfolio website"
			relativeCanonicalURL=""
		>
			<main>
				<Box
					css={{
						backgroundColor: useColorModeValue(
							"rgba(245, 242, 243, 0.8)",
							"rgba(20, 25, 36, 0.6)"
						),
					}}
				>
					<div id="main">
						<Hero />
					</div>
					<div id="about">
						<About />
					</div>
					<div id="featured">
						<Featured />
					</div>
					<div id="contact">
						<Contact />
					</div>
				</Box>
			</main>
		</Layout>
	);
};

export default Home;
