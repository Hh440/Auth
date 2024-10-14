"use client"
import { AboutComponent } from "@/components/about";
import { AboutPage } from "@/components/tic-tac-toe";
import { CounterAboutPage } from "@/components/about-page";
import { DanezioAbout } from "@/components/danezio-about";
import { EnhancedAbout } from "@/components/enhanced-about-page";
import { Profile } from "@/components/enhanced-profile-creator";
import { SignupPage } from "@/components/signup-page";
import { Url } from "@/components/url";
import Url_info from "@/components/url_info";


export default function Home() {
  return (
   <div>
     <CounterAboutPage/>
   </div>
  );
}
