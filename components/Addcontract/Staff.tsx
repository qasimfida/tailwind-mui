import React, { useState } from "react";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

// import Modal from "./Modal";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			border: "2px solid #f0eff1",
			boxShadow: "unset",
			width: "100%",
			margin: "30px 15px",
		},
		details: {
			display: "flex",
			flexDirection: "column",
		},
		content: {
			flex: "1 0 auto",
		},
		cover: {
			width: 151,
			background: "#d9d9d9",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		staffCard: {
			display: "flex",
		},
		main: {
			marginBottom: `${theme.spacing(10)}px`,
			padding: "12px",
		},
		title: {
			paddingBottom: `${theme.spacing(2.5)}px`,
		},
	})
);

type Staff = {
	id: string;
	staffName: string;
	jobtitle: string;
	email: string;
};

type StaffProps = {
	Staff: StaffProps[];
};

export default function Staff({}: StaffProps) {
	const classes = useStyles();
	const theme = useTheme();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const staff: Staff[] = [
		{
			id: "1",
			staffName: "Jhon Doe",
			jobtitle: "job Title",
			email: "johndoe@gmail.com",
		},
		{
			id: "2",
			staffName: "Jhon Doe",
			jobtitle: "job Title",
			email: "johndoe@gmail.com",
		},
	];

	return (
		<>
			<Box className={classes.main} style={{ color: "black" }}>
				<Box className={classes.title}>
					<span style={{ paddingTop: "40px" }}>View staff members here</span>
				</Box>
				<hr />
				<Box className={classes.staffCard}>
					{staff.map((staff) => (
						<Card className={classes.root} key={staff.id}>
							<CardMedia className={classes.cover} title="Live from space album cover">
								<ContactMailIcon
									style={{
										height: "50px",
										width: "50px",
										color: "rgba(0, 0, 0, 0.54)",
									}}
								/>
							</CardMedia>
							<Box className={classes.details}>
								<CardContent className={classes.content}>
									<Typography component="h6" variant="h6">
										{staff.staffName}
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										{staff.jobtitle}
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										{staff.email}
									</Typography>
								</CardContent>
							</Box>
						</Card>
					))}
				</Box>
			</Box>
		</>
	);
}
