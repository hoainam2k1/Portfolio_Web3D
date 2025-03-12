"use client";

import Image from "next/image";
import bg from "../../../../public/background/home-background.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Weapons = dynamic(() => import("@/components/models/Weapons"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Image
                src={bg}
                alt="Next.js Portfolio website's about page background image"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
                priority
                sizes="100vw"
            />
            <div className="flex w-full h-screen">
                <div className="w-2/5 flex items-center justify-center fixed left-0 top-16 lg:top-20 h-screen">
                    <RenderModel>
                        <Weapons />
                    </RenderModel>
                </div>

                <div className="w-3/5 ml-auto">
                    <ProjectList projects={projectsData} />
                </div>
            </div>

        </>
    );
}
