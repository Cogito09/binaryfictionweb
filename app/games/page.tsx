"use client"

import NavMenu from "@/components/navMenu";
import Image from "next/image";

export default function Games(){
    return (
        <main>
            <NavMenu />

            <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
                {/* Release Note Section */}
                <div className="border border-gray-300 rounded-lg p-6 mt-8 text-center max-w-md mx-auto">
                    <h2 className="text-xl font-bold mb-2">Last Release Notes</h2>
                    <p className="text-lg mb-4">December 19, 2023</p>
                    <ul className="text-lg text-left list-disc pl-4">
                        <li> Added Cut scenes</li>
                        <li> Added customizable characters</li>
                        <li> Polished looks on maps</li>
                        <li> Fixed save bug</li>
                        <li> Fixed many small visual and mechanics bugs</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center mt-8">
                    <div className="rounded-md overflow-hidden border border-gray-800">
                        <Image
                            src="https://cdn.discordapp.com/attachments/1175943800217161759/1175944020665585705/CM_Icon3.png"
                            alt="Big Logo"
                            width={256}
                            height={256}
                            className="mx-auto rounded-md"
                        />
                    </div>

                    <a href="https://play.google.com/store/apps/details?id=com.BinaryFiction.CubeMiner" target="_blank" rel="noopener" className="block mb-6">
                        <Image
                            src="https://cdn.discordapp.com/attachments/1175943800217161759/1175944021110173727/google-play-badge.png"
                            alt="Big Logo"
                            width={646 / 2}
                            height={250 / 2}
                            className="mx-auto mb-8"
                        />
                    </a>
                    <h1 className="text-3xl font-bold mb-4">Cube Miner</h1>
                    <p className="text-lg text-center max-w-md">
                        Cube Miner offers a satisfying and dynamic tapping experience. Navigate through cube walls, explore labyrinthine corridors in search of powerful monsters! Engage in bow battles, master evasion, evolve your village, and upgrade companions. The entire world and its dungeons await your discovery!
                    </p>
                </div>
            </div>
        </main>


    )
}