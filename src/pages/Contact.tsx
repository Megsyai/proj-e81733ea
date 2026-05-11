import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // محاكاة إرسال
    setTimeout(() => {
      setLoading(false);
      toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">دعنا <span className="text-primary">نتحدث</span></h1>
            <p className="text-xl text-muted-foreground mb-12">لديك فكرة؟ نحن هنا لنساعدك في تحويلها إلى حقيقة. املأ النموذج وسنرد عليك خلال 24 ساعة.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <div className="font-bold">البريد الإلكتروني</div>
                  <div className="text-muted-foreground">hello@techhorizon.sa</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <div className="font-bold">اتصل بنا</div>
                  <div className="text-muted-foreground">+966 500 000 000</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <div className="font-bold">المقر الرئيسي</div>
                  <div className="text-muted-foreground">الرياض، المملكة العربية السعودية</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input id="name" placeholder="أحمد محمد" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="name@company.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">الموضوع</Label>
                <Input id="subject" placeholder="مثلاً: طلب تطوير تطبيق جوال" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">رسالتك</Label>
                <Textarea id="message" placeholder="اشرح لنا بإيجاز عن مشروعك..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full h-14 text-lg" disabled={loading}>
                {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
                {!loading && <Send className="mr-2 h-5 w-5" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
