"use client"

import NavMenu from "@/components/navMenu";
import Image from "next/image";

export default function Games(){
    return (
        <main>
            <NavMenu />

            <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
                <div className="flex items-center justify-between pb-4 mb-4">
                    <span className="text-lg">Created Users:</span>
                    <span className="text-2xl font-bold"> Feature not implemented</span>
                </div>

                    <Image
                        src="https://cdn.discordapp.com/attachments/1175943800217161759/1175944020665585705/CM_Icon3.png"
                        alt="Big Logo"
                        width={512}
                        height={512}
                        className="mx-auto mb-8"
                        />

                    <a href="https://play.google.com/store/apps/details?id=com.BinaryFiction.CubeMiner" target="_blank" rel="noopener" className="block mb-6">
                        <Image
                            src="https://cdn.discordapp.com/attachments/1175943800217161759/1175944021110173727/google-play-badge.png"
                            alt="Big Logo"
                            width={646}
                            height={250}
                            className="mx-auto mb-8"
                        />
                    </a>
                    <h1 className="text-3xl font-bold mb-4">Cube Miner</h1>
                    <p className="text-lg text-center mx-auto max-w-md">Cube Miner offers a satisfying and dynamic tapping experience. Navigate through cube walls, explore labyrinthine corridors in search of powerful monsters! Engage in bow battles, master evasion, evolve your village, and upgrade companions. The entire world and its dungeons await your discovery!</p>
            </div>
        </main>
    )
}