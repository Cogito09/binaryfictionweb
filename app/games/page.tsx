import NavMenu from "@/components/navMenu";
import Image from "next/image";

export default async function Games(){
    return (
        <main>
            <NavMenu />

            <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
                <div className="flex items-center justify-between pb-4 mb-4">
                    <span className="text-lg">Created Users:</span>
                    <span className="text-2xl font-bold"> Feature not implemented</span>
                </div>
                    <Image src="/icons/CM_Icon3.png" alt="Game Screen 1" width={200} height={200} className="rounded-md" />

                    <a href="https://play.google.com/store/apps/details?id=com.BinaryFiction.CubeMiner" target="_blank" rel="noopener" className="block mb-6">
                        <Image src="/icons/google-play-badge.png" alt="Game Logo" width={646/3} height={250/3} />
                    </a>
                    <h1 className="text-3xl font-bold mb-4">Cube Miner</h1>
                    <p className="text-lg text-center mx-auto max-w-md">Cube Miner offers a satisfying and dynamic tapping experience. Navigate through cube walls, explore labyrinthine corridors in search of powerful monsters! Engage in bow battles, master evasion, evolve your village, and upgrade companions. The entire world and its dungeons await your discovery!</p>


                {/*<div className="flex-auto grid grid-cols-3 gap-4">*/}
                {/*    <div>*/}
                {/*        <Image src="/icons/Screen_1.png" alt="Game Screen 1" width={300} height={200} className="rounded-md" />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <Image src="/icons/Screen_2.png" alt="Game Screen 2" width={300} height={200} className="rounded-md" />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <Image src="/icons/Screen_3.png" alt="Game Screen 3" width={300} height={200} className="rounded-md" />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </main>
    )
}