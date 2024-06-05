
import { HomeExpo } from "@/components/home";

import Fotos from '../components/fotos';
import { Texto } from "@/components/texto";
import { SectionText } from "@/components/sectionText";
import Logos from "@/components/logos";
import FooterStile from "@/components/footer";

export default function Home() {
  return (
    <section className=" bg-white flex flex-col items-center justify-center  py-8 md:py-10">
      <HomeExpo/> 
      {/* <Texto/> */}
      <SectionText/>
      <Logos></Logos>
      <Fotos></Fotos>
      <FooterStile/>
    </section>
  );
}
