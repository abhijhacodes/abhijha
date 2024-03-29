import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script
						src={process.env.NEXT_PUBLIC_SANKHYA_SDK_URL}
						type="text/javascript"
						defer
					></script>

					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&family=Inter:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode="dark" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
