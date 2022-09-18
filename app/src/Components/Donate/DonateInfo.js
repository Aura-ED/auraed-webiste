import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";


import phonepaySvg from "../../assets/phonepay.png";
import gofundmeSvg from "../../assets/gofundme.png";
import phonepayQR from "../../assets/images/AuraPhonepayQR.png";
import esewaSvg from "../../assets/esewa.svg";
import logo from "../../assets/logo.png";
import InputCopy from "./InputCopy";

function DonateInfo() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <section id="donate" className="mt-20 -z-1">
      <div className="container px-2 mx-auto flex flex-col items-center space-y-10 md:flex-row md:space-x-16 md:space-y-0 md:px-0">
        {/* <!-- Bank Info--> */}
        <div className="w-full space-y-7 self-center md:self-start md:w-1/3 text-center md:text-start md:items-start">
          <h2 className="text-3xl font-bold">Bank Details</h2>
          <div className="flex flex-col space-y-3">
            <p className="text-md text-dark font-bold">Prabhu bank, Nepal</p>
            <InputCopy title="Account Holder's Name" value="Aura Ed"/>
            <InputCopy title="Account Number" value="4040 4040 4040 4040"/>
          </div>
        </div>

        {/* <!-- Wallets --> */}
        <div className="space-y-7 w-full self-center md:self-start md:w-1/3 text-center md:text-start md:items-start">
          <h2 className="text-3xl font-bold">Wallets</h2>
          <div className="flex flex-col space-y-3">
            {/* <a
              href="#"
              className="py-3 px-6 text-md bg-[#5FB946] font-bold rounded-xl"
            >
              <img className="w-[100px]" src={esewaSvg} alt="esewa" />
            </a>
            <div className="flex justify-between items-center">
              <hr className="w-1/3" />
              <span className="text-md font-semibold">or</span>
              <hr className="w-1/3" />
            </div> */}
            <div
              onClick={() => setIsOpen(true)}
              className="py-3 px-6 text-md bg-primaryLight font-bold rounded-xl cursor-pointer"
            >
              <img className="w-[150px]" src={phonepaySvg} alt="phonepay" />
            </div>
            <Transition show={isOpen} as={Fragment}>
              <Dialog
                className="relative z-20"
                onClose={() => setIsOpen(false)}
              >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div
                    className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-30"
                    aria-hidden="true"
                  />
                </Transition.Child>

                {/* Full-screen container to center the panel */}

                <Transition.Child
                  as={Fragment}
                  enter="ease duration-200"
                  enterFrom="translate-y-full opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="ease-out duration-200"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="translate-y-full opacity-0"
                >
                  <div
                    className={`fixed inset-0 flex items-end sm:items-center justify-center sm:p-4`}
                  >
                    <Dialog.Panel className="sm:max-w-sm bg-white w-full sm:w-[390px] z-10 mx-auto p-4 backdrop-blur-lg  rounded-xl">
                      <div className="fixed">
                        <div
                          onClick={() => setIsOpen(false)}
                          className="bg-gray-100 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer self-end"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="#4FA3A5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M368 368L144 144M368 144L144 368"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col spacey-2 items-center mt-10">
                        
                        
                          <img src={phonepayQR} alt="Auraed PhonePay QR Scan" />
                        
                        {/* <div className="flex w-full justify-between items-end mt-4 text-md font-bold rounded-xl">
                          <div>
                            <img
                              className="w-[140px]"
                              src={phonepaySvg}
                              alt="esewa"
                            />
                          </div>

                          <div>
                            <img
                              className="w-[70px] h-[40px]"
                              src={logo}
                              alt="aura"
                            />
                          </div>
                        </div> */}
                      </div>
                    </Dialog.Panel>
                  </div>
                </Transition.Child>

                {/* The actual dialog panel  */}
              </Dialog>
            </Transition>
          </div>
        </div>

        {/* <!-- Wallets --> */}
        <div className="space-y-7 w-full self-center md:self-start md:w-1/3 text-center md:text-start md:items-start">
          <h2 className="text-3xl font-bold">Fund Raisers</h2>
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="py-3 px-6 text-md bg-[#D3FFE3] font-bold rounded-xl"
            >
              <img className="w-[100px]" src={gofundmeSvg} alt="esewa" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateInfo;
