import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Layout, Smartphone, Database, Shield, Zap, Rocket, Code, Globe, Cpu } from "lucide-react";

const services = [
  { icon: Globe, title: "تطوير المواقع والمنصات", desc: "تصميم وتطوير مواقع إلكترونية احترافية ومنصات SaaS متكاملة." },
  { icon: Smartphone, title: "تطبيقات الجوال الذكية", desc: "تطبيقات iOS و Android أصلية (Native) أو هجينة (Cross-platform)." },
  { icon: Cpu, title: "الأتمتة والذكاء الاصطناعي", desc: "دمج تقنيات AI لتحسين الإنتاجية وأتمتة المهام المتكررة." },
  { icon: Database, title: "حلول البنية التحتية", desc: "إعداد السيرفرات السحابية وإدارة قواعد البيانات الضخمة." },
  { icon: Shield, title: "الأمن السيبراني", desc: "اختبار الاختراق وتأمين الأنظمة ضد الهجمات الإلكترونية." },
  { icon: Code, title: "واجهات البرمجة (API)", desc: "بناء وتكامل واجهات برمجية لربط الأنظمة المختلفة ببعضها." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6">خدماتنا <span className="text-primary">التقنية</span></h1>
          <p className="text-xl text-muted-foreground">نقدم حلولاً برمجية شاملة تغطي كافة جوانب التحول الرقمي.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl border border-border bg-card hover:bg-primary/5 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
