import * as React from "react";
import { Box, Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		maxWidth: "1550px",
	},
	wrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		color: "#000",
		width: "100%",
		height: "1418px",
	},
	flexCol: {
		display: "flex",
		width: "100%",
		flexDirection: "column",
	},
	flexColored: {
		width: "100%",
		background: "#363636",
	},
	flexDarkend: {
		width: "100%",
		background: "#424E63",
	},

	titleBar: {
		padding: "0 12px",
		margin: "0 auto",
		height: "40px",
		maxWidth: "1510px",
	},
	flexText: {
		display: "flex",
		height: "100%",
		alignItems: "center",
		color: "#fff",
	},
	font10: {
		fontSize: "10px",
	},
	circle: {
		height: "22px",
		width: "22px",
		borderRadius: "50%",
		marginRight: "4px",
		background: "#D9D9D9",
	},
	circleLg: {
		height: "53px",
		width: "53px",
		borderRadius: "50%",
		background: "#D9D9D9",
	},
	textBase: {
		height: "40px",
		padding: "0 12px",
		margin: "0 auto",
		fontSize: "16px",
	},
	justifyBetween: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "81px",
		width: "100%",
		margin: "0 auto",
		fontSize: "40px",
		padding: "0 12px",
	},
	bordered: {
		border: "1px solid #fff",
		margin: "0 auto",
	},
	footerBox: {
		display: "flex",
		flexDirection: "column",
		margin: "0 auto",
		fontSize: "16px",
		lineHeight: "24px",
		padding: "32px 12px 0",
		color: "#fff",
		gap: "20px",
	},
	flexBoxCol: {
		display: "flex",
		flexDirection: "column",
	},
	// "flex flex-row w-full mx-auto mt-[40px] md:mt-[108px] justify-center mb-4"
	flexBoxRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		margin: "108px auto 16px auto",
		width: "100%",
		"@media(max-width: 1024px)": {
			marginTop: "108px",
		},
	},
	widthHalf: {
		width: "50%",
		marginTop: "4px",
		marginBottom: "8px",
	},
	appInfo: {
		margin: " 32px auto 0 auto",
		color: "#fff",
		padding: "0 12px",
		maxWidth: "463px",
		fontSize: "16px",
		lineHeight: "24px",
	},
	textRight: {
		paddingRight: "4px",
		textAlign: "right",
	},
	bgCover: {
		background: "#D9D9D9",
		width: "93px",
		height: "99px",
		marginLeft: "26px",
	},
}));
export default function Home() {
	const classes = useStyles();
	return (
		<Box className={classes.wrapper}>
			<Box className={classes.flexCol}>
				<Box className={classes.flexColored}>
					<Container maxWidth="lg">
						<Box className={classes.titleBar}>
							<Box className={`${classes.flexText} ${classes.font10}`}>
								<Box className={classes.circle}></Box>
								TEXT HERE
							</Box>
						</Box>
					</Container>
				</Box>
				<Box className={classes.flexDarkend}>
					<Container maxWidth="lg">
						<Box className={`${classes.textBase} `}>
							<Box className={classes.flexText}>Text Here</Box>
						</Box>
					</Container>
				</Box>
				<Container maxWidth="lg">
					<Box className={`${classes.justifyBetween} `}>
						<span>Text Here</span>
						<Box className={classes.circleLg} />
					</Box>
				</Container>
			</Box>
			<Box className={`${classes.flexColored} ${classes.bordered} `}>
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12} sm={6}>
							<Box className={` ${classes.footerBox}`}>
								<Box>
									@2023 Text here
									<br />
									Text here
								</Box>
								<Box className={classes.flexBoxCol}>
									<span>Text here</span>
									<hr className={classes.widthHalf} />
									<span>Text here</span>
									<span>Text here</span>
									<span>Text here</span>
								</Box>
								<Box className={classes.flexBoxCol}>
									<span>Text here</span>
									<hr className={classes.widthHalf} />
									<span>Text here</span>
									<span>Text here</span>
								</Box>
								<Box>To provide feedback or report an issue with the site, send us an email here</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box className={`${classes.flexBoxCol} ${classes.appInfo}`}>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
								</span>
								<Box className={`${classes.flexBoxRow}`}>
									<Box>
										<span>Text Here, you can pu</span>
										<Box className={classes.flexBoxCol}>
											<span className={classes.textRight}>Adress here</span>
											<span className={classes.textRight}>Adress here</span>
										</Box>
									</Box>
									<Box className={classes.bgCover}></Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}
