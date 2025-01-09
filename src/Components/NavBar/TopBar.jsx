"use client"

import React from "react"
import { Link } from "react-router-dom"
import { Dropdown } from "flowbite-react"
import { FaUserAlt, FaHeadset } from "react-icons/fa"
import { TbTruckDelivery } from "react-icons/tb"
import { MdAttachMoney } from "react-icons/md"
import { GoPackageDependencies } from "react-icons/go"

const TopBar = () => {
  return (
    <nav className='bg-[#f57224] border-gray-200 dark:bg-gray-900 text-white max-h-[50px] text-center '>
      <div className='flex items-center justify-center'>
        <div className='w-full flex justify-end items-center h-[auto]'>
          <ul className='flex justify-center items-center w-[75%] gap-7'>
            <li>
              <Link to='#' className=''>
                SAVE MORE ON APP
              </Link>
            </li>
            <li>
              <Link to='#' className=''>
                BECOME A SELLER
              </Link>
            </li>
            <li>
              <div className='cursor-pointer'>
                <Dropdown
                  label=''
                  dismissOnClick={false}
                  inline
                  className='z-50'
                  renderTrigger={() => <span>HELP & SUPPORT</span>}
                >
                  <Dropdown.Item icon={FaUserAlt}>Help Center</Dropdown.Item>
                  <Dropdown.Item icon={FaHeadset}>Contact Customer Care</Dropdown.Item>
                  <Dropdown.Item icon={TbTruckDelivery}>Shipping & Delivery</Dropdown.Item>
                  <Dropdown.Item icon={MdAttachMoney}>Payment</Dropdown.Item>
                  <Dropdown.Item icon={GoPackageDependencies}>Order</Dropdown.Item>
                </Dropdown>
              </div>
            </li>
            <li>
              <Link to='/login' className=''>
                LOGIN
              </Link>
            </li>
            <li>
              <Link to='/signup' className=''>
                SIGN UP
              </Link>
            </li>
            <li>
              <Link to='#' className=''>
                भाषा परिवर्तन
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
