import { Experiences } from "@/components/about/experiences";
import { Experiences_data } from "@/constants/experiences";

export const AboutPage = () => {
  return (
    <div className="width-full">
      <Experiences data={Experiences_data} />
    </div>
  );
};
