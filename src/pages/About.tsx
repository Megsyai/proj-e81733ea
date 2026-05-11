import Navbar from "@/components/layout/Navbar";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-12 text-center">نحن نبني <span className="text-primary">المستقبل</span></h1>
          
          <div className="aspect-video rounded-3xl overflow-hidden mb-16">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
              alt="Team Work" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                بدأت أفق التقنية كفريق صغير من المبرمجين الشغوفين في عام 2014. اليوم، نحن شركة برمجيات رائدة نخدم عملاء في أكثر من 10 دول حول العالم.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                مهمتنا هي تمكين الشركات من خلال التكنولوجيا المبتكرة، وتوفير حلول تقنية تساهم في تحقيق أهدافهم الاستراتيجية.
              </p>
            </div>
            <div className="bg-muted/50 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6">لماذا نحن؟</h2>
              <ul className="space-y-4">
                {[
                  "الالتزام بأعلى معايير الجودة العالمية.",
                  "فريق تقني بخبرات متنوعة وعميقة.",
                  "الشفافية التامة في التعامل مع العملاء.",
                  "دعم فني وصيانة مستمرة بعد الإطلاق.",
                  "حلول مخصصة تناسب ميزانيتك واحتياجاتك."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-primary h-6 w-6 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
