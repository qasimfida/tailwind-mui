import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Box, Modal, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

const StyledModal = styled(Modal)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledModalContainer = styled.div`
	background-color: white;
	width: 700px;
	height: 400px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledDropzoneContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const CloudIcon = styled(CloudUploadIcon)`
	width: 150px;
	height: 150px;
`;

const useStyles = makeStyles((theme: any) => ({
	text3xl: {
		textAlign: "center",
		fontSize: "30px",
		lineHeight: " 36px ",
	},
	borderDoted: {
		padding: "16px 20px",
		border: "2px dotted #000",
	},
	flex: {
		display: "flex",
		justifyContent: "center",
	},
	browse: {
		padding: "12px",
		background: "#cbd5e0",
		borderRadius: "12px",
	},
}));

const FileDropzone = (props: DropzoneOptions & { open: boolean; handleClose: () => void }) => {
	const { getRootProps, getInputProps } = useDropzone();

	const [fileName, setFileName] = useState("");

	const { open, handleClose } = props;

	const handleFileChange = (event: any) => {
		const file = event.target.files[0];
		if (file) {
			setFileName(file.name);
		}
	};

	const classes = useStyles();
	return (
		<StyledModal open={open} onClose={handleClose}>
			<StyledModalContainer>
				<Typography component="h2" variant="h2" className={classes.text3xl}>
					Upload Contract
				</Typography>
				<StyledDropzoneContainer {...getRootProps()}>
					<input {...getInputProps({ onChange: handleFileChange })} />
					<Box className={classes.borderDoted}>
						<p>Drag and drop your files here, or click to select files</p>
						<Box className={classes.flex}>
							<CloudIcon />
						</Box>
						<Box className={classes.flex}>
							<button className={classes.browse}>Browse Files</button>
						</Box>
						<p>Selected file: {fileName}</p>
					</Box>
				</StyledDropzoneContainer>
			</StyledModalContainer>
		</StyledModal>
	);
};

export default FileDropzone;
