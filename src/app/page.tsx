import Image, {StaticImageData} from 'next/image';
import logo from '@/image/GDG On Campus - Centered - Small - Square.jpg'; // 社團圖標
import GroupPhoto from '@/image/LINE_cutted.jpg'; // 大合照
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Lightbulb, Users, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "GDG On Campus 是什麼？",
    answer: "GDG On Campus CYCU 是由一群對科技有熱忱的學生，與 Google 官方合作成立的社群，提供學習各種技術以及分享、交流想法的機會。"
  },
  {
    question: "誰可以加入 GDG On Campus？",
    answer: "任何對技術和發展充滿熱情的學生都可以加入！無論您是初學者還是經驗豐富的開發者，每個人都能找到適合自己的內容。"
  },
  {
    question: "如何成為社員？",
    answer: 
    <div>
    社員應時常參與社課，並且在公告時間之內繳交一學期 200 元社費。<br/>如有興趣，
    <a className="font-bold text-primary" href='https://forms.gle/32mHCDL5dVFpvziN9'>
      請點我開始填寫入社申請表單
    </a>
    </div>
  },
  {
    question: "活動都是免費的嗎？",
    answer: "我們的活動對社員來說是免費的。非社員可能需繳交額外費用。"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 inline-block p-3 rounded-full bg-primary/20">
            <Image 
              src={logo as StaticImageData} 
              alt="GDG On Campus Logo" 
              width={80} 
              height={80} 
              className="rounded-full"
              data-ai-hint="tech logo" 
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            GDG On Campus CYCU
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            中原大學開源軟體開發社 | 程式、AI、資安，尋找開發夥伴
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="https://gdg.community.dev/gdg-on-campus-chung-yuan-christian-university-taoyuan-taiwan/">活動資訊</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/team">核心團隊</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#faqs">常見問題</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary flex items-center">
                <Users className="mr-3 h-8 w-8" /> 我們是誰
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                GDG On Campus CYCU 是由一群對科技有熱忱的中原大學學生，與 Google 官方合作成立的社群，提供學習各種技術以及分享、交流想法的機會。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                我們相信社區的力量可以促進成長和創造力。加入我們，成為一個充滿活力的團體的一部分，分享知識，互相支持，共同探索令人興奮的科技世界。
              </p>
            </div>
            <div>
              <Image 
                src={GroupPhoto}
                alt="Students collaborating" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl"
                data-ai-hint="students collaboration" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary flex items-center justify-center">
            <Lightbulb className="mr-3 h-8 w-8" /> 社團內容
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">工作坊</h3>
              <p className="text-muted-foreground text-sm">
                有關各種技術例如 Android、Firebase、Cloud、AI/ML、資訊安全等的實作課程。
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">技術講座</h3>
              <p className="text-muted-foreground text-sm">
                邀請來自各種行業專家的演講。
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">跨校活動</h3>
              <p className="text-muted-foreground text-sm">
                與志同道合的夥伴一起交流，參與企業參訪、聯合技術研討和開發專案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary flex items-center justify-center">
            <MessageSquare className="mr-3 h-8 w-8" /> 常見問題
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
