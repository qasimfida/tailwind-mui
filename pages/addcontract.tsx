import { Container } from "@material-ui/core";
import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import Tabs from "../components/Addcontract/Tabs";
export default function addContract() {
  return (
    <>
    <Container>

      <div className="w-full max-w-[1700px] mx-auto p-4">
        <div className="pl-[36px] mb-7">
          <span className="text-4xl text-gray-700">Text here</span>
        </div>
        <div className="">
          <Tabs />
        </div>
      </div>
    </Container>
    </>
  );
}

addContract.getInitialProps = async () => {
    return { props: {} };
  };
  