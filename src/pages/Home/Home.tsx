import AboutMe from "../../components/AboutMe/AboutMe";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";

export default function Home () {
    return(
       <div className="w-full  flex-col flex justify-center  bg-white dark:bg-gray-900 gap-4" >
            <ProfileBanner />
            <AboutMe />
        </div>
    )
}