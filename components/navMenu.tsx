"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function navMenu(){
    return (
        <nav className="flex items-center justify-between py-5 px-5">
            <div className="flex items-center">
                <Image src="https://cdn.discordapp.com/attachments/1175943800217161759/1175944021361819740/logo_64.png?ex=656d1236&is=655a9d36&hm=a5b94edcd36caa7e02a978bbeda46c67e4d7d3de61bc1f08aca62aafc1736140&" alt="logo" width={64 } height={64} />
            </div>
            <nav className="flex items-center justify-center">
                <Button asChild variant="ghost">
                    <Link href="/">Home</Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="/games">Games</Link>
                </Button>
            </nav>
        </nav>
    )
}