"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const menuItems = [
  {
    title: "PENDIRIAN USAHA",
    href: "/DiriUsaha",
    items: [
      { title: "Perseroan Terbatas (PT)", href: "/PSTerbatas" },
      { title: "Persekutuan Komanditer (CV)", href: "/CV" },
      { title: "Firma", href: "/Firma" },
      { title: "Perseroan (PT) Perorangan", href: "/PSOrang" },
      { title: "Persekekutuan Perdata", href: "/Perdata" },
      { title: "PMA", href: "/PMA" },
      { title: "Koperasi", href: "/Koperasi" },
      { title: "Perkumpulan", href: "/Perkumpulan" },
      { title: "Yayasan", href: "/Yayasan" },
    ],
  },
  {
    title: "PERIZINAN USAHA",
    href: "/IzinUsaha",
  },
  {
    title: "KONSULTASI PERPAJAKAN",
    href: "/KonsulPajak",
  },
  {
    title: "VIRTUAL & SERVICE OFFICE",
    href: "/VSOffice",
  },
]
    const additionalMenuItems = [
        { title: "ABOUT PILAR", href: "/About" },
        { title: "SERVICES", href: "/Services" },
        { title: "ARTICLES", href: "#" },
        { title: "FAQ & CONTACT US", href: "#" },
    ]
    
    const socialLinks = [
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Youtube, href: "#", label: "YouTube" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ]
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#2A1810] text-white font-bold text-xs lg:text-base">
      <div className="container flex h-16 md:justify-center items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="hilink-logo.svg"
            alt="logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:text-white font-bold text-xs lg:text-base">
                      <Link href={item.href}>
                      {item.title}
                      </Link>
                    </NavigationMenuTrigger>
                    
                    {/* buat hasil dropdown dari Pendirian usaha */}
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-[#2A1810] text-white"> 
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {subItem.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      // ini buat isi navbar selain trigger "diri usaha"
                      className="bg-transparent text-white px-4 py-2 inline-block 
                      relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

    {/* Hamburger Menu - Always Visible */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white absolute right-5">
              <Menu  style={{ width: "27px", height: "27px"}}/>
              {/* <img src="/menu.svg" alt=""/> */}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="min-w-fit bg-[#2A1810] text-white border-l-white/20">
            <nav className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-6">
                {/* Main Menu Items */}
                <div className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <div key={item.title} className="flex flex-col gap-2">
                      <SheetClose asChild>
                        <Link href={item.href} className="text-lg font-medium hover:text-white/80 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                          {item.title}
                        </Link>
                      </SheetClose>
                      {item.items && (
                        <div className="flex flex-col gap-2 pl-4">
                          {item.items.map((subItem) => (
                            <SheetClose asChild key={subItem.title}>
                              <Link href={subItem.href} className="text-sm hover:text-white/80 ">
                                {subItem.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional Menu Items */}
                <div className="flex flex-col gap-4">
                  {additionalMenuItems.map((item) => (
                    <SheetClose asChild key={item.title}>
                      <Link href={item.href} className="text-lg font-medium hover:text-white/80 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 py-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-white hover:text-white/80"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

