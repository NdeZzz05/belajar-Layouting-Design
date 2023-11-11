import React from "react";

export const Apk = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className=" p-8 w-full h-screen flex flex-col gap-4">
          <div className="sm:w-full h-1/6 w-1/3 ml-auto">
            <div className="bg-merah-0 w-full h-full flex justify-center items-center ">
              <h1 className="text-2xl">Merah</h1>
            </div>
          </div>
          <div className="w-full h-5/6 bg-green-100 flex gap-4">
            <div className="w-1/3 bg-ungu-0 h-full lg:flex justify-center items-center hidden">
              <h1 className="text-2xl">Ungu</h1>
            </div>
            <div className="lg:w-2/3 h-full flex flex-col gap-4 w-full">
              <div className="h-1/2 w-full bg-hijau-0 flex justify-center items-center order-3 sm:order-1">
                <h1 className="text-2xl">Hijau</h1>
              </div>
              <div className="h-1/2 w-full flex gap-4 order-2 sm:order-2">
                <div className="h-full w-1/2 lg:bg-biru-0 flex justify-center items-center sm:bg-pink-0 bg-pink-0">
                  <h1 className="text-2xl hidden lg:block">Biru</h1>
                  <h1 className="text-2xl block lg:hidden">Pink</h1>
                </div>
                <div className="h-full w-1/2 sm:bg-pink-0 flex justify-center items-center bg-biru-0">
                  <h1 className="text-2xl hidden sm:block">Pink</h1>
                  <h1 className="text-2xl block sm:hidden">Biru</h1>
                </div>
              </div>
              <div className="h-1/2 w-full bg-ungu-0 flex justify-center items-center lg:hidden order-1 sm:order-3">
                <h1 className="text-2xl">Ungu</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
