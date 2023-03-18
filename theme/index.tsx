import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	spacing: 4,
	palette: {
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#f50057",
		},
	},
	typography: {
		fontFamily: "Roboto, sans-serif",
	},
});
export default theme;
