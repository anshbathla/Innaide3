"use client";
import Image from 'next/image'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Frame6 from "../app/Frame6.svg"

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16" id="Footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl"  style={{ display: 'flex', alignItems: 'center' }} >
           
           <Image src={Frame6} width={65} height={65} />
           <span className="Montserrat" font-weight="400" marginleft="10px">INNAIDE</span>
          </h2>
            <p className="max-w-xs mt-4 text-sm">
              INNAIDE is your cutting-edge solution, a pair of smart wearable shorts designed specifically to manage Stress Urinary Incontinence (SUI) .
            </p>
            <div className="flex mt-8 space-x-6">
              <Link
                href="https://www.linkedin.com/in/vishvarajbiotech"
                target="_blank"
              >
                <FacebookOutlinedIcon className="hover:text-blue-500 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="https://www.linkedin.com/in/vishvarajbiotech" target="_blank">
                <GitHubIcon className="hover:text-blue-500 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/vishvarajbiotech"
                target="_blank"
              >
                <LinkedInIcon className="hover:text-blue-500 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="https://www.linkedin.com/in/vishvarajbiotech" target="_blank">
                <TwitterIcon className="hover:text-blue-500 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/vishvarajbiotech"
                target="_blank"
              >
                <InstagramIcon className="hover:text-blue-500 hover:-translate-y-1 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Meet the Team
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Features
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Resources
                </Link>
              </nav>
            </div>
            
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  FAQs
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Live Chat
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Returns Policy
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Accessibility
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 Innaide - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
