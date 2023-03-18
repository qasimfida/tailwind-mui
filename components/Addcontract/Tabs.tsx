import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ContractsCard from "./ContractsCard";
import Staff from "./Staff";
import Profile from "./Profile";

const StyledTabs = styled(Tabs)({
	"& .MuiTabs-indicator": {
		display: "none",
	},
});

const StyledTab = styled(Tab)({
	fontSize: "18px",
	marginRight: "20px",
});

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any }) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: { xs: 1, md: 3 } }}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
				<StyledTab style={{ marginLeft: "20px", textTransform: "none" }} label="Contracts" {...a11yProps(0)} />
				<StyledTab style={{ marginLeft: "20px", textTransform: "none" }} label="Staff" {...a11yProps(1)} />
				<StyledTab style={{ marginLeft: "20px", textTransform: "none" }} label="Profile" {...a11yProps(2)} />
			</StyledTabs>
			<TabPanel value={value} index={0}>
				<ContractsCard contracts={[]} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Staff Staff={[]} />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Profile Profile={[]} />
			</TabPanel>
		</Box>
	);
}
