import { Box, Container, createStyles, makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material";
import * as React from "react";
import Tabs from "../components/Addcontract/Tabs";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: `${theme.spacing(4.5)}px`,
		marginBottom: `${theme.spacing(3.5)}px`,
	},
	title: {
		// text-4xl text-gray-700
		fontSize: "36px",
		color: "gray",
	},
}));
export default function addContract() {
	const classes = useStyles();
	return (
		<Container maxWidth="lg">
			<Box className={classes.root}>
				<span className={classes.title}>Text here</span>
			</Box>
			<Box className="">
				<Tabs />
			</Box>
		</Container>
	);
}

addContract.getInitialProps = async () => {
	return { props: {} };
};
