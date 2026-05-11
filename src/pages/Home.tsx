import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket, Shield, Zap, Layout, Smartphone, Database } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              نحول رؤيتك <br />
              <span className="text-primary italic">إلى واقع رقمي</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              نحن في أفق التقنية نصمم ونطور حلولاً برمجية مبتكرة تساعد الشركات على النمو والتميز في العصر الرقمي.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link to="/portfolio">مشاهدة أعمالنا</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg group" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  تواصل معنا <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
              alt="Tech Dashboard" 
              className="relative rounded-2xl shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "مشروع مكتمل", value: "+150" },
            { label: "عميل سعيد", value: "+80" },
            { label: "سنة خبرة", value: "+10" },
            { label: "خبير تقني", value: "+25" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">خدمات متكاملة لنمو أعمالك</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة واسعة من الخدمات التقنية التي تغطي كافة احتياجات شركتك، من الفكرة وحتى الإطلاق.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "تطوير المواقع", desc: "بناء مواقع سريعة، متجاوبة، ومحسنة لمحركات البحث." },
              { icon: Smartphone, title: "تطبيقات الهاتف", desc: "تطبيقات أندرويد و iOS بتجربة مستخدم لا تضاهى." },
              { icon: Database, title: "حلول سحابية", desc: "بنية تحتية قوية وإدارة قواعد بيانات متطورة." },
              { icon: Shield, title: "الأمن السيبراني", desc: "حماية بياناتك وأنظمتك من التهديدات الرقمية." },
              { icon: Zap, title: "الذكاء الاصطناعي", desc: "أتمتة العمليات وتحليل البيانات باستخدام AI." },
              { icon: Rocket, title: "استشارات تقنية", desc: "نساعدك في اختيار أفضل التقنيات لمشروعك." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
