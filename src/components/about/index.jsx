import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
                <ItemLayout
                    className={
                        " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
                    }
                >
                    <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
                        CAREER OBJECTIVES
                    </h2>
                    <p className="font-light  text-xs sm:text-sm md:text-base   ">
                        As a dedicated and skilled software developer with 2 years of hands-on experience in C#, .NET MVC, and .NET Core, specializing in ERP solutions, I am eager to leverage my expertise in a dynamic and challenging environment. My goal is to continually enhance my technical skills, contribute to innovative projects, and drive success through efficient and effective software solutions. I am committed to advancing my career towards a Tech Lead position, where I can mentor teams, lead complex projects, and implement best practices to achieve organizational objectives.
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        3+ <sub className="font-semibold text-base">clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        2+{" "}
                        <sub className="font-semibold text-base">years of experience</sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
                >
                    <img
                        className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=hoainam2k1&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                        alt="hoainam2k1"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img
                        className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=hoainam2k1&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                        alt="hoainam2k1"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full"}>
                    <img
                        className="w-full h-auto"
                        src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
                        alt="hoainam2k1"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img
                        className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=hoainam2k1&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
                        alt="hoainam2k1"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <Link
                        href="https://github.com/hoainam2k1/SGV_Shop"
                        target="_blank"
                        className="w-full"
                    >
                        <img
                            className="w-full h-auto"
                            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=hoainam2k1&repo=SGV_Shop&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                            alt="hoainam2k1"
                            loading="lazy"
                        />
                    </Link>
                </ItemLayout>
            </div>
        </section>
    );
};

export default AboutDetails;
