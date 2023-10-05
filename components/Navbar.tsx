"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

import { navLinks } from '@/constants';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className={`padding-x py-5 fixed top-0 z-10 w-full
      ${scrolled ? "bg-[#ffffff0d]" : "bg-transparent"}
    `}>
      <div className='flex justify-between items-center max-container'>
        <Link href='/'>
          <Image
            src={"/logo.svg"}
            alt='logo'
            width={130}
            height={45}
            className='m-0 w-[130px] h-[45px] object-contain'
          />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.filter((x) => x.href !== "#contact-us").map((nav) => (
            <li 
              key={nav.label}
              className={`${active === nav.label ? "text-white" : "text-secondary"}
              hover:text-white cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.label);
              }}
            >
              <a href={nav.href} className='font-poppins leading-normal text-md'>
                {nav.label}
              </a>
            </li>
          ))}
          <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
            <a href={`#contact-us`} className='flex justify-center items-center gap-2 px-6 py-3 border-2 border-primary font-montserrat text-md leading-none btn-white text-primary rounded-full'>Let's Talk</a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? '/icons/close.svg' : '/icons/menu.svg'}
            alt='menu'
            width={28}
            height={28}
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.href}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.label ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.label);
                  }}
                >
                  <a href={`${nav.href}`}>{nav.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className='flex gap-2 text-md leading-normal font-medium font-montserrat max-lg:hidden'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={"hamburger"} alt='hamburger icon' width={25} height={25} />
        </div> */}
      </div>
    </nav>
    {/* <nav className="w-full py-3 bg-primary border border-white">
      <div className='container'>
        <div className='flex-between w-full'>
          <Link href={"/"} className="flex gap-2 fle-center">
            <Image src={"/next.svg"} alt="logo" width={60} height={60} className="object-contain" />
            <p className='logo_text'>Promptopia</p>
          </Link>

          <div className='flex gap-3 md:gap-5'>
            <button type='button' className='outline_btn'>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav> */}
    </>
  )
}

export default Navbar