import React from "react";

export const Coba = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className=" col-span-12 order-1 flex justify-end lg:order-1">
          <div className="w-1/2 bg-merah-0 h-10 sm:w-full">
            <h2 className="text-center">Merah</h2>
          </div>
        </div>
        <div className="bg-ungu-0 col-span-12 h-28 mt-8 sm:bg-hijau-0 order-2 lg:order-3 lg:col-span-8">
          <div className="flex justify-center items-center">
            <h2 className="text-center sm:hidden">Ungu</h2>
            <h2 className="text-center hidden sm:block">Hijau</h2>
          </div>
        </div>
        <div className="col-span-12 mt-8 order-3 lg:order-4">
          <div className="grid grid-cols-12 h-28 gap-4">
            <div className="flex justify-center items-center col-span-6 bg-pink-0">
              <h2 className="text-center">Pink</h2>
            </div>
            <div className="flex justify-center items-center col-span-6 bg-biru-0 sm:bg-pink-0">
              <h2 className="text-center sm:hidden">biru</h2>
              <h2 className="text-center hidden sm:block">pink</h2>
            </div>
          </div>
        </div>
        <div className="col-span-12 h-40 bg-hijau-0 mt-8 sm:bg-ungu-0 order-4 lg:order-2 lg:hidden">
          <div className="flex justify-center items-center ">
            <h2 className="text-center sm:hidden">Hijau</h2>
            <h2 className="text-center hidden sm:block">Ungu</h2>
          </div>
        </div>
      </div>
    </>
  );
};
