import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "@mui/material/Modal";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "@/theme";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
		backgroundColor: "#f5f5f5",
		color: "black",
	},
	topContent: {
		padding: `${theme.spacing(5)}px 0`,
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	modalHead: {
		display: "flex",
		justifyContent: "space-between",
		"& .heading": {
			fontWeight: 700,
			fontSize: "1.5rem",
			lineHeight: "2rem",
		},
	},
	modalBody: {
		background: "#e5e7eb",
		overflow: "auto",
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
		height: "280px",
		color: "black",
	},
	title: {
		fontSize: "36px",
		fontWeight: "bold",
		color: "black",
	},
	heading: {
		paddingBottom: `${theme.spacing(1)}px`,
		fontWeight: "bold",
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleModalOpen = () => setOpen(true);
	const handleModalClose = () => setOpen(false);
	const [checked, setChecked] = React.useState(false);

	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		handleModalOpen();
	};

	const router = useRouter();
	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		// do something with form data here
		router.push("/addcontract");
	};

	return (
		<Layout>
			<Box className={classes.root}>
				<Container maxWidth="lg">
					<Grid item>
						<Box className={classes.topContent}>
							<span className={classes.title}>Hello! Welcome.</span>
							<br />
							<span>Register below by entering your data</span>
						</Box>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<h1 className={classes.heading}>First Name</h1>
							<TextField id="first-name" label="First Name*" variant="filled" sx={{ width: "100%" }} />
						</Grid>
						<Grid item xs={12} md={6}>
							<h1 className={classes.heading}>Last Name</h1>
							<TextField id="last-name" label="Last Name*" variant="filled" sx={{ width: "100%" }} />
						</Grid>
						<Grid item xs={12}>
							<label className={classes.heading}>Email</label>
							<TextField
								className="w-full"
								id="email"
								label="Email*"
								variant="filled"
								placeholder="johndoe@gmail.com"
								sx={{ width: "100%" }}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<h1 className={classes.heading}>Pin</h1>
							<TextField id="pin" label="PIN" variant="filled" placeholder="11111111111*" sx={{ width: "100%" }} />
						</Grid>
						<Grid item xs={12} md={6}>
							<h1 className={classes.heading}>Code number</h1>
							<TextField
								id="code-number"
								label="Code Number*"
								variant="filled"
								placeholder="1111111*"
								sx={{ width: "100%" }}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<h1 className={classes.heading}>YOUR JOB TITLE</h1>
							<TextField
								id="job-title"
								label="Job Title"
								variant="filled"
								placeholder="E.g Project Manager, etc"
								sx={{ width: "100%" }}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<h1 className={classes.heading}>Phone Number</h1>
							<TextField
								id="phone-number"
								label="Phone Number*"
								variant="filled"
								placeholder="111-111-111*"
								sx={{ width: "100%" }}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<h1 className={classes.heading}>Create Password</h1>
							<TextField id="password" label="Password*" variant="filled" type="password" sx={{ width: "100%" }} />
						</Grid>
						<Grid item xs={12} md={6}>
							<h1 className={classes.heading}>Retype Password</h1>
							<TextField
								id="confirm-password"
								label="Confirm Password*"
								variant="filled"
								type="password"
								sx={{ width: "100%" }}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								style={{ color: "blue" }}
								control={<Checkbox checked={checked} onChange={handleCheck} name="terms" />}
								label="I agree to the terms and conditions"
							/>
						</Grid>
						<Grid item xs={12}>
							{/* <button onClick={handleSubmit} type="submit" className="px-8 py-3 text-white bg-gray-500">
              Submit
            </button> */}
							<Button
								variant="contained"
								onClick={handleSubmit}
								size="large"
								style={{ color: "white", backgroundColor: "grey" }}
							>
								Submit
							</Button>
						</Grid>
					</Grid>
					<Modal open={open} onClose={handleModalClose} className={classes.modal} style={{ color: "black" }}>
						<Box
							sx={{
								width: 600,
								bgcolor: "background.paper",
								px: 10,
								py: 3,
							}}
						>
							<Box className={classes.modalHead}>
								<h1 className="heading">Terms and Conditions</h1>
								<Button onClick={handleModalClose}>Close</Button>
							</Box>
							<Box className={classes.modalBody}>
								<p id="modal-description  ">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti incidunt doloribus minima id
									sapiente iusto sint error, laudantium obcaecati, suscipit soluta ea eius saepe amet unde? Voluptatum
									mollitia sequi possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ab
									itaque, culpa ipsam facere veniam quod beatae eligendi eius velit molestias voluptates cum? Earum
									voluptates iste consequatur assumenda illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Sit distinctio ducimus veniam quo corrupti! Beatae, delectus recusandae saepe ipsa accusamus magni
									omnis dolor sit incidunt deserunt? Suscipit consequatur tempora fugiat.
								</p>
							</Box>
							<Box style={{ marginTop: theme.spacing(5) }}>
								<Button
									variant="outlined"
									onClick={handleModalClose}
									size="large"
									style={{
										color: "grey",
										borderColor: "grey",
										marginRight: theme.spacing(4),
									}}
								>
									Decline
								</Button>
								<Button
									variant="contained"
									onClick={handleModalClose}
									size="large"
									style={{ color: "white", backgroundColor: "grey" }}
								>
									Agree
								</Button>
							</Box>
						</Box>
					</Modal>
				</Container>
			</Box>
		</Layout>
	);
}
