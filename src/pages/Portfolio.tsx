import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "منصة إي-ترايد",
    category: "تجارة إلكترونية",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    desc: "حل متكامل للمتاجر الكبرى مع نظام دفع عالمي."
  },
  {
    title: "تطبيق صحتي",
    category: "تطبيقات جوال",
    image: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=1000",
    desc: "تطبيق لربط المرضى بالأطباء وحجز المواعيد الفوري."
  },
  {
    title: "لوحة تحكم ذكية",
    category: "نظم إدارية",
    image: "https://images.unsplash.com/photo-1551288049-bbda646267a7?auto=format&fit=crop&q=80&w=1000",
    desc: "نظام تحليل بيانات متطور للشركات اللوجستية."
  },
  {
    title: "موقع عقاراتي",
    category: "بوابات عقارية",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    desc: "محرك بحث عقاري متطور مع جولات افتراضية."
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">أعمالنا التي <span className="text-primary">نفخر بها</span></h1>
          <p className="text-xl text-muted-foreground">نحن لا نبني برمجيات فقط، نحن نبني قصة نجاح لكل عميل.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <Badge className="mb-4">{project.category}</Badge>
                <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
