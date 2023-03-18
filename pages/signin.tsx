// pages/signin.tsx

import { useState } from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import theme from "@/theme";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
		backgroundColor: "#f5f5f5",
		display: "flex",
	},
	imageContainer: {
		// width: "50%",
		height: "100%",
		background: `url('https://via.placeholder.com/800x600.png') no-repeat center center/cover`,
	},
	buttonContainer: {
		// width: "50%",
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(4),

		backgroundColor: "#f5f5f5",
	},
	welcomeText: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(2),
	},
	actions: {
		display: "flex",
		flexDirection: "column",
	},
}));

const Signin: React.FC = () => {
	const classes = useStyles();

	return (
		<Layout>
			<Grid className={classes.root} container>
				<Grid item xs={12} sm={6}>
					<Box className={classes.imageContainer}>{""}</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box className={classes.buttonContainer}>
						<Box className={classes.welcomeText} style={{ color: "black", paddingLeft: "8px" }}>
							<Typography variant="h4">I am ...</Typography>
							<Typography variant="h6">Please select your role</Typography>
						</Box>
						<Box className={classes.actions}>
							<Button
								variant="contained"
								size="large"
								style={{ color: "white", width: "270px", backgroundColor: "grey", marginBottom: theme.spacing(3) }}
							>
								Contractor
							</Button>
							<Button
								variant="contained"
								size="large"
								style={{ color: "white", width: "270px", backgroundColor: "grey" }}
							>
								PublicBody
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Layout>
	);
};
export default Signin;
