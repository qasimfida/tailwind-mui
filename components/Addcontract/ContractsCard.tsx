import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Modal from "./Modal";

type Contract = {
  id: string;
  projectName: string;
  contractorType: string;
  location: string;
};

type ContractsCardProps = {
  contracts: Contract[];
};

export default function ContractsCard({}: ContractsCardProps) {
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
      <div className="mb-20 p-[12px]" style={{color:'black'}}>
        <div className="sm:flex  justify-between pb-5 items-center">
          <div>
            <span className="pt-10">View/add contracts here</span>
          </div>

          <div className="flex gap-4">
            <div>
              <button onClick={handleModalOpen} className="px-4 py-2 text-white bg-gray-400 h-[35px] flex items-center">
                <AddIcon/>Add contract
              </button>
            </div>
            <div>
              <button className="px-4 py-2 text-white bg-gray-400 h-[35px] flex items-center">
                <ZoomOutIcon/>View contract
              </button>
            </div>
          </div>
        </div>
        <hr />

        <div className="mt-5 grid grid-cols-1  md:grid-cols-2 gap-4">
          {contracts.map((contract) => (
            <div
              key={contract.id}
              className="border  lg:flex justify-between w-full px-5 py-10"
            >
              <div className="">
                <div className="my-2">
                  <strong>{contract.projectName}</strong>
                  <p>{contract.contractorType}</p>
                </div>
                <div className="my-2">
                  <span>{contract.location}</span>
                </div>
                <span>ID: {contract.id}</span>
              </div>
              <div className="sm:flex flex-col items-center">
                <button
                  className="px-2 text-[15px] mt-5 bg-gray-400 py-2 text-white h-[35px] flex items-center w-[240px] justify-center"
                >
                  Add/view certified Payroll Info
                </button>
                <div className="w-full flex justify-end pt-2">
                  <span className="underline text-[11px]">
                    Last submitted Certified payroll: mm/ddd/yy
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal open={isModalOpen} handleClose={handleModalClose} />
    </>
  );
}
