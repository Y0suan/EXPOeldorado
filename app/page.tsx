
import { HomeExpo } from "@/components/home";

import Fotos from '../components/fotos';
import { SectionText } from "@/components/sectionText";
import Logos from "@/components/logos";
import FooterStile from "@/components/footer";
import { SectionTextdos } from "@/components/sectionTextdos";

export default function Home() {
  return (
    <section className=" bg-white flex flex-col items-center justify-center  py-8 md:py-10">
      <HomeExpo/>
      <SectionText/>
      <Logos></Logos>
      <Fotos></Fotos>
      <SectionTextdos/>
      <FooterStile/>
    </section>
  );
}
