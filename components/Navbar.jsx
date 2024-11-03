'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

const Navbar = ({ className }) => {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 lg:w-[900px] lg:mx-[50px] z-50 backdrop-blur-md bg-opacity-50 bg-zinc-400 text-white rounded-full shadow-md">
      <div className="md:w-[800px] lg:w-[900px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src='/logo.jpg' alt='Logo' height={50} width={50} className='w-[80px] h-[80px]' />
        </div>

        {/* Hamburger Menu Button for md devices */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {/* Replace with your hamburger icon */}
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Navigation Links with Dropdowns */}
        <div className={`hidden md:flex space-x-8 font-light ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Menu setActive={setActive} className="space-x-8">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Culture">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/values">Our Values</HoveredLink>
                <HoveredLink href="/team">Our Team</HoveredLink>
                <HoveredLink href="/community">Community Involvement</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Insights">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/blog">Blog</HoveredLink>
                <HoveredLink href="/case-studies">Case Studies</HoveredLink>
                <HoveredLink href="/news">Latest News</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <button className="bg-black w-[120px] h-[35px] rounded-full text-white font-medium hover:bg-opacity-80 transition hidden md:block">
            Start Project
          </button>
          <button className="bg-black w-[50px] h-[35px] rounded-full text-white px-3.5 hidden md:block">
            <FaArrowAltCircleRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-600 rounded-b-lg">
          <Menu setActive={setActive} className="flex flex-col space-y-4 p-4">
            <MenuItem setActive={setActive} active={active} item="Services">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Culture">
              <HoveredLink href="/values">Our Values</HoveredLink>
              <HoveredLink href="/team">Our Team</HoveredLink>
              <HoveredLink href="/community">Community Involvement</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Insights">
              <HoveredLink href="/blog">Blog</HoveredLink>
              <HoveredLink href="/case-studies">Case Studies</HoveredLink>
              <HoveredLink href="/news">Latest News</HoveredLink>
            </MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
