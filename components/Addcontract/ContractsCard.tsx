import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import Modal from "./Modal";
import { Box, Button, Grid, makeStyles } from "@material-ui/core";

type Contract = {
	id: string;
	projectName: string;
	contractorType: string;
	location: string;
};

type ContractsCardProps = {
	contracts: Contract[];
};

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: `${theme.spacing(20)}px`,
		padding: `${theme.spacing(3)}px`,
		color: "black",
	},
	breadcrumb: {
		display: "flex",
		justifyContent: "space-between",
		paddingBottom: `${theme.spacing(2.5)}px`,
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	text: {
		"& span": {
			paddingTop: `${theme.spacing(5)}px`,
		},
	},
	actions: {
		display: "flex",
		gap: "10px",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			width: "100%",
			"& button": {
				minWidth: "100%",
			},
		},
	},
	contractsContainer: {
		marginTop: `${theme.spacing(2)}px`,
	},
	contract: {
		// border  lg:flex justify-between w-full px-5 py-10
		display: "flex",
		borderWidth: "1px",
		width: "100%",
		padding: `${theme.spacing(5)}px ${theme.spacing(2.5)}px`,
		[theme.breakpoints.down("sm")]: {
			display: "block",
		},
	},
	marginY: {
		marginTop: `${theme.spacing(1)}px`,
		marginBottom: `${theme.spacing(1)}px`,
	},
	textEnd: {
		textAlign: "end",
	},
	date: {
		textDecoration: "underline",
		fontSize: "11px",
	},
}));

export default function ContractsCard({}: ContractsCardProps) {
	const classes = useStyles();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const contracts: Contract[] = [
		{
			id: "2345678",
			projectName: "ProjectName 1",
			contractorType: "Prime Contractor",
			location: "NEWYORK, NEWJERSEY",
		},
		{
			id: "3456789",
			projectName: "ProjectName 2",
			contractorType: "Sub Contractor",
			location: "CHICAGO, ILLINOIS",
		},
		{
			id: "4567890",
			projectName: "ProjectName 3",
			contractorType: "Sub Contractor",
			location: "LOS ANGELES, CALIFORNIA",
		},
	];

	return (
		<>
			<Box className={classes.root}>
				<Box className={classes.breadcrumb}>
					<Box className={classes.text}>
						<span>View/add contracts here</span>
					</Box>

					<Box className={classes.actions}>
						<Button
							variant="contained"
							onClick={handleModalOpen}
							size="large"
							style={{ background: "#9ca3af", color: "#fff" }}
						>
							<AddIcon />
							Add contract
						</Button>
						<Button variant="contained" size="large" style={{ background: "#9ca3af", color: "#fff" }}>
							<ZoomOutIcon />
							View contract
						</Button>
					</Box>
				</Box>
				<hr />
				<Grid container spacing={2} className={classes.contractsContainer}>
					{contracts.map((contract) => (
						<Grid item sm={12} md={6}>
							<Box key={contract.id} className={classes.contract}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={4}>
										<Box>
											<strong>{contract.projectName}</strong>
											<p>{contract.contractorType}</p>
										</Box>
										<Box className={classes.marginY}>
											<span>{contract.location}</span>
										</Box>
										<span>ID: {contract.id}</span>
									</Grid>
									<Grid item xs={12} sm={8} className={classes.textEnd}>
										<Box className={classes.marginY}>
											<Button variant="contained" size="small" style={{ background: "#9ca3af", color: "#fff" }}>
												Add/view certified Payroll Info
											</Button>
											<Box>
												<span className={classes.date}>Last submitted Certified payroll: mm/ddd/yy</span>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
			<Modal open={isModalOpen} handleClose={handleModalClose} />
		</>
	);
}
