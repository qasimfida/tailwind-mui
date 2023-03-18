import React, { useState } from "react";
import styled from "@emotion/styled";
import { Modal, Select, MenuItem, TextField, InputLabel, FormControl, Button, Typography, Box } from "@mui/material";
import FileDropzone from "./Dropzone";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
const StyledModal = styled(Modal)`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const StyledModalContainer = styled.div`
	background-color: white;
	width: 650px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: auto;
`;
const StyledInputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	gap: 10px;
	height: "35px";
`;

const useStyles = makeStyles(({ spacing }: any) => ({
	text2xl: {
		textAlign: "center",
		fontSize: "25px",
		lineHeight: " 32px ",
		fontWeight: 400,
	},
	textxl: {
		textAlign: "center",
		fontSize: `16px`,
		paddingBottom: "12px",
		lineHeight: "24px",
	},
	title: {
		fontSize: "12px",
		fontWeight: 700,
	},
	subTitle: {
		fontSize: "12px",
	},
	flexBetween: {
		display: "flex",
		justifyContent: "space-between",
	},
	flexEnd: {
		display: "flex",
		justifyContent: "end",
	},
	wFull: {
		width: "100%",
	},
	wHalf: {
		width: "50%",
	},
	w20: {
		width: "20%",
	},
	w30: {
		width: "20%",
	},
	mb5: {
		marginBottom: "20px",
	},
	mt5: {
		marginTop: "20px",
	},
	mt3: {
		marginBottom: "12px",
	},
	pt3: {
		paddingTop: "12px",
	},
	pb2: {
		paddingBottom: "8px",
	},
	underline: {
		textDecoration: "underline",
	},
	colorBlue: {
		color: "#2563EB",
	},
	btn: {
		fontSize: "12px",
	},
}));

type ModalProps = {
	open: boolean;
	handleClose: () => void;
};
export default function MyModal({ open, handleClose }: ModalProps) {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleClose();
	};
	const [uploadModalOpen, setUploadModalOpen] = useState(false);
	const handleUploadModalOpen = () => {
		setUploadModalOpen(true);
	};
	const handleUploadModalClose = () => {
		setUploadModalOpen(false);
	};
	const { getRootProps, getInputProps } = useDropzone();
	const classes = useStyles();
	return (
		<>
			<StyledModal open={open} onClose={handleClose} style={{ color: "black" }}>
				<StyledModalContainer>
					<Typography component="h2" variant="h2" className={classes.text2xl}>
						Add New Contract Here!
					</Typography>
					<Typography component="h2" variant="h2" className={classes.textxl}>
						Review/Update the new contract information below
					</Typography>
					{/* <hr /> */}
					<form onSubmit={handleSubmit}>
						<hr />
						<FormControl fullWidth size="small" className="mt-[20px]">
							<InputLabel id="demo-simple-select-label">Your Role</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								// value={age}
								label="Your Role"
							>
								<MenuItem value={10}>Admin</MenuItem>
								<MenuItem value={20}>User</MenuItem>
								<MenuItem value={30}>Client</MenuItem>
							</Select>
						</FormControl>
						<Box className={classes.mb5}>
							<Typography component="h1" variant="h1" className={`${classes.title} ${classes.pb2} ${classes.pt3}`}>
								PROJECT DETAILS
							</Typography>
							<StyledInputContainer>
								<TextField className={classes.wFull} label="Public Body" variant="outlined" size="small" />
							</StyledInputContainer>
							<StyledInputContainer>
								<TextField className={classes.wFull} label="Project  Name" variant="outlined" size="small" />
								<TextField className={classes.wFull} label="Contract ID" variant="outlined" size="small" />
							</StyledInputContainer>
							<StyledInputContainer>
								<TextField className={classes.wFull} label="Award Date" variant="outlined" size="small" />
								<TextField className={classes.wFull} label="Award Amount" variant="outlined" size="small" />
							</StyledInputContainer>
							<StyledInputContainer>
								<FormControl fullWidth size="small">
									<InputLabel id="demo-simple-select-status">Status</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										// value={age}
										label="Status"
									>
										<MenuItem value={10}>Admin</MenuItem>
										<MenuItem value={20}>User</MenuItem>
										<MenuItem value={30}>Client</MenuItem>
									</Select>
								</FormControl>
								<FormControl fullWidth size="small">
									<InputLabel id="demo-simple-select-Project">Project Type</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										// value={age}
										label="Project Type"
									>
										<MenuItem value={10}>Admin</MenuItem>
										<MenuItem value={20}>User</MenuItem>
										<MenuItem value={30}>Client</MenuItem>
									</Select>
								</FormControl>
							</StyledInputContainer>
						</Box>
						<hr />
						<Box className={`${classes.mb5} ${classes.mt5}`}>
							<Typography component="h2" variant="h2" className={`${classes.title} ${classes.pb2}`}>
								PROJECT LOCATIONS
							</Typography>
							<StyledInputContainer>
								<TextField className={classes.wFull} label="Street Address" variant="outlined" size="small" />
							</StyledInputContainer>
							<StyledInputContainer>
								<FormControl fullWidth size="small">
									<InputLabel id="demo-simple-select-city">City</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										// value={age}
										label="City"
									>
										<MenuItem value={10}>Admin</MenuItem>
										<MenuItem value={20}>User</MenuItem>
										<MenuItem value={30}>Client</MenuItem>
									</Select>
								</FormControl>
								<FormControl fullWidth size="small">
									<InputLabel id="demo-simple-select-city">County</InputLabel>
									<Select
										labelId="demo-simple-select-county"
										id="demo-simple-select"
										// value={age}
										label="County"
									>
										<MenuItem value={10}>Admin</MenuItem>
										<MenuItem value={20}>User</MenuItem>
										<MenuItem value={30}>Client</MenuItem>
									</Select>
								</FormControl>
							</StyledInputContainer>
							<StyledInputContainer>
								<FormControl fullWidth size="small">
									<InputLabel id="demo-simple-select-city">State</InputLabel>
									<Select
										labelId="demo-simple-select-state"
										id="demo-simple-select"
										// value={age}
										label="State"
									>
										<MenuItem value={10}>Admin</MenuItem>
										<MenuItem value={20}>User</MenuItem>
										<MenuItem value={30}>Client</MenuItem>
									</Select>
								</FormControl>
								<TextField className={classes.wFull} label="Zip Code" variant="outlined" size="small" />
							</StyledInputContainer>
						</Box>
						<hr />
						<Box className={classes.mt5}>
							<Typography component="h2" variant="h2" className={`${classes.title} ${classes.pb2}`}>
								SUB-CONTRATOR
							</Typography>
							<Typography component="h2" variant="h2" className={`${classes.subTitle} ${classes.pb2}`}>
								Sub-contractor 1 information
							</Typography>
							<StyledInputContainer>
								{/* <TextField className={classes.wFull} label="City" variant="outlined" /> */}
								<TextField className={classes.wHalf} label="Company name" variant="outlined" size="small" />
								<TextField className={classes.w30} label="Certificate Number" variant="outlined" size="small" />
								<TextField className={classes.w20} label="FEIN" variant="outlined" size="small" />
							</StyledInputContainer>
							<StyledInputContainer>
								<TextField
									className={classes.wFull}
									id="outlined-multiline-static"
									multiline
									rows={2}
									placeholder="Description"
								/>
							</StyledInputContainer>
						</Box>
						<Box className={classes.flexBetween}>
							<button className={`${classes.btn} ${classes.pb2} ${classes.underline}`}>
								+ Add another Sub-contractor
							</button>
							<button className={`${classes.btn} ${classes.pb2} ${classes.underline} ${classes.colorBlue}`}>
								UPLOAD CONTRACT
							</button>
						</Box>
						<Box className={classes.flexEnd}>
							<Button variant="contained" style={{ color: "white", backgroundColor: "grey" }}>
								SUBMIT
							</Button>
						</Box>
					</form>
				</StyledModalContainer>
			</StyledModal>
			<FileDropzone
				open={uploadModalOpen}
				handleClose={handleUploadModalClose}
				getRootProps={getRootProps}
				getInputProps={getInputProps}
			/>
		</>
	);
}
