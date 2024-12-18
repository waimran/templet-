
import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drinks";
import Experience from "@/components/Experience/Experience";
import MainCours from "@/components/MainCours/MainCourse";
import StarterMenu from "@/components/Menu/StartMenu";
import PartnersAndClients from "@/components/PartnerClient/PartnerClient";
import Hero from "@/components/HeroSection/Hero";

export default function Menu() {
  return (
<div>
  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}