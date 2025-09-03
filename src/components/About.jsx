import React from 'react'

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <h1 className="text-3xl font-semibold text-center mx-auto">About Me</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works - each piece crafted with intention, emotion and style.
      </p>

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 px-8 md:px-0 pt-20">
        <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
        <div className="py-10 border-b md:border-b-0 md:px-10 flex justify-center">
          <div className="max-w-md w-full">
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded mx-auto">
              <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
            </div>
            <div className="mt-5 space-y-2 text-center">
              <h3 className="text-base font-medium text-slate-600">B.tech in computer science</h3>
              <p className="text-sm text-slate-500">Gvpce(A) 2021-2025 cgpa 7.88 </p>
            </div>
          </div>
        </div>
        <div className="border-t my-4 hidden md:block"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="py-10 border-b md:border-b-0 md:border-r md:px-10">
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
            </div>
            <div className="mt-5 space-y-2">
              <h2 className="text-base font-medium text-slate-600">Work experience</h2>
              <h3 className="text-base font-medium text-slate-600">software developer</h3>
              <p className="text-sm text-slate-500">bla bla description dkdkgvkdgvkugbvkv</p>
            </div>
          </div>
          <div className="py-10 border-b md:border-b-0 md:px-10">
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
            </div>
            <div className="mt-5 space-y-2">
              <h2 className="text-base font-medium text-slate-600">Work experience</h2>
              <h3 className="text-base font-medium text-slate-600">software developer</h3>
              <p className="text-sm text-slate-500">bla bla description dkdkgvkdgvkugbvkv</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About