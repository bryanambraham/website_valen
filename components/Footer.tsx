import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = [
  {
    title: "Layanan Kami",
    links: [
      { name: "Pendirian Usaha", href: "#" },
      { name: "Perizinan Usaha", href: "#" },
      { name: "Konsultasi Perpajakan", href: "#" },
      { name: "Virtual & Service Office", href: "#" },
    ],
  },
  {
    title: "Kontak",
    links: [
      { name: "Whatsapp", href: "#" },
      { name: "Email", href: "#" },
      { name: "Lokasi", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#2A1810] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <Image
              src="hilink-logo.svg"
              alt="logo"
              width={150}
              height={50}
              className="mb-6"
            />
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <p>Jl. Example Street No. 123, Jakarta</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <p>+62 813 1157 4806</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <p>contact@pilargroup.net</p>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Social Media</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bryan Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

