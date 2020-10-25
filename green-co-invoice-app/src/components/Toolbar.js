import React from 'react';

const Toolbar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-green-100 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="text-black fill-current h-8 w-8 mr-2"
        height="30px">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>

     <span className="font-semibold text-xl tracking-tight text-black">Green Co. Invoice</span>
  </div>
</nav>
)

export default Toolbar;
