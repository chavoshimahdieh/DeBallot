"use client";

import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { ShieldCheckIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="relative w-full h-64">
          {/* First Banner Image */}
          <Image
            src="/people.jpeg"
            alt="People collaborating on DeBallot"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
            <h1 className="text-white text-4xl font-bold">Welcome to DeBallot</h1>
          </div>
        </div>

        <div className="px-5 mt-10">
          <p className="text-center text-lg mt-4 max-w-2xl">
            DeBallot is a cutting-edge decentralized voting system leveraging Zero-Knowledge (ZK) technology and the
            sing-protocol for user verification. Our platform ensures secure, anonymous, and transparent voting
            processes, making every vote count without compromising privacy. Join us in redefining democracy with
            blockchain!
          </p>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row mt-6">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </div>

        <div className="relative w-full h-64 mt-16">
          {/* Second Banner Image */}
          <Image
            src="/simple_people.jpeg"
            alt="Simplified people illustration for DeBallot"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 z-20 ">
            <p className="text-white bg-blue-700 text-lg font-semibold rounded-lg px-2 opacity-1 bg-opacity-80">
              Empowering Secure, Transparent, and Private Voting
            </p>
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <ShieldCheckIcon className="h-8 w-8 fill-secondary" />
              <p>
                Secure your votes with our advanced Zero-Knowledge proof mechanism. Learn more in the{" "}
                <Link href="/zk-proof" passHref className="link">
                  ZK Proofs
                </Link>{" "}
                section.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <AcademicCapIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore the unique sing-protocol used for verifying users while keeping their identities confidential.
                Check out our{" "}
                <Link href="/sing-protocol" passHref className="link">
                  Sing Protocol
                </Link>{" "}
                guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
