// import { Experiences } from "@/components/experiences/experiences";
import { ExperiencesComp } from "@/components/experiences/experiences";
import { Experiences_data } from "@/constants/experiences";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen items-center justify-center">
      <ExperiencesComp data={Experiences_data} />
    </div>
  );
}
