// pages/_app.tsx

import type { AppProps } from "next/app";
import Signup from "./signup";
import Signin from "./signin";
import First from "./first";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
function MyApp({ Component, pageProps }: AppProps) {
	switch (Component) {
		case Signup:
			return (
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			);
		case Signin:
			return (
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			);
		case First:
			return (
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			);
		default:
			return (
				<ThemeProvider theme={theme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			);
	}
}

export default MyApp;
