import * as React from "react";
import Link from 'next/link'
import { Inter } from 'next/font/google';
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { useRouter } from 'next/router';
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";


export default function Home() {
  return (
    <div className="flex flex-col justify-between h-[1418px] w-full text-black">
      <div className="flex flex-col w-full">
        <div className=" w-full bg-[#363636]">
          <div className="h-[40px] max-w-[1550px] px-3 mx-auto">
            <div className="flex items-center h-full text-white text-[10px]">
            <div className="h-[22px] w-[22px] rounded-[50%] bg-[#D9D9D9] mr-1"></div>
            TEXT HERE
            </div>
          </div>
        </div>
        <div className="w-full bg-[#424E63]">
          <div className="h-[40px] max-w-[1550px] px-3 mx-auto text-base">
            <div className="flex items-center h-full text-white">
              Text Here
            </div>
          </div>
        </div>
        <div className="flex items-center h-[81px] w-full max-w-[1550px] mx-auto text-[40px] justify-between px-3">
          <span>Text Here</span>
          <div className="h-[53px] w-[53px] rounded-[50%] bg-[#D9D9D9]"></div>
        </div>
      </div>
      <div className="w-full bg-[#363636]">
        <div className="grid grid-cols-1 md:grid-cols-2 border mx-auto">
          <div className="flex flex-col mx-auto px-3 space-y-5 pt-[32px] text-white text-base">
            <div>
              @2023 Text here<br/>
              Text here
            </div>
            <div className="flex flex-col">
              <span>Text here</span>
              <hr className="w-[50%] mt-1 mb-2" />
              <span>Text here</span>
              <span>Text here</span>
              <span>Text here</span>
            </div>
            <div className="flex flex-col">
              <span>Text here</span>
              <hr className="w-[50%] mt-1 mb-2" />
              <span>Text here</span>
              <span>Text here</span>
            </div>
            <div>
              To provide feedback or report an issue with the site, send us an email here
            </div>
          </div>
          <div className="flex flex-col mt-[32px] text-white text-base max-w-[463px] px-3 mx-auto">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            </span>
            <div className="flex flex-row w-full mx-auto mt-[40px] md:mt-[108px] justify-center mb-4">
              <div>
                <span>Text Here, you can pu</span>
                <div className="flex flex-col">
                  <span className=" text-right pr-1">Adress here</span>
                  <span className=" text-right pr-1">Adress here</span>
                </div>
              </div>
              <div className="bg-[#D9D9D9] w-[93px] h-[99px] ml-[26px]">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
