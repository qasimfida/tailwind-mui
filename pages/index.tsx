import * as React from "react";
import Link from 'next/link'
import { Inter } from 'next/font/google';
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] })
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  text-align: center;
  gap: 30px;
  align-items: center;

`;

export default function Home() {
  const router = useRouter();
  const signup = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // do something with form data here
    router.push("/signup");
  };

  return (
    <div className="main_div mx-auto" style={{color:'black'}}>
      <h1 className="text-4xl">Text here</h1>
      <p className="main_description pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
      Corrupti incidunt doloribus minima id sapiente iusto sint
      error, laudantium obcaecati, suscipit soluta ea eius saepe</p>

      <p className="return_description">Returning User, Please Log in</p>

      <div className=" max-w-[600px] w-full mx-auto px-3 space-y-5">
        <div>
          <p className="">Email Address</p>
          <TextField
            className="w-full"
            id="email"
            label="email*"
            variant="filled"
            // sx={{ width: "100%" }}
          />
        </div>
        <div className="!mb-[20px]">
          <p className="">Password</p>
          <TextField
            className="w-full"
            id="Password"
            label="Password*"
            variant="filled"
            // sx={{ width: "100%" }}
          />
        </div>
        <Link className="link_tag" href={`/`}>Forget Password? </Link>

        <hr className=""/>

        <div className="sign_up_section">
          <p>Or</p>
          <Button onClick={signup} variant="contained" size="large" style={{color: "white", width: "100%", backgroundColor: "grey", borderRadius:"0px", height:"56px"}}>Sign Up</Button>
        </div>
      </div>
    </div>
  )
}
