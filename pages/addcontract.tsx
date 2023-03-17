import { Container } from "@material-ui/core";
import * as React from "react";
import Tabs from "../components/Addcontract/Tabs";
export default function addContract() {
  return (
    <Container maxWidth="lg" >

        <div className="pl-[36px] mb-7">
          <span className="text-4xl text-gray-700">Text here</span>
        </div>
        <div className="">
          <Tabs />
        </div>
    </Container>
  );
}

addContract.getInitialProps = async () => {
    return { props: {} };
  };
  