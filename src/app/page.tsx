import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Lightbulb, Users, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "What is GDG On Campus?",
    answer: "GDG On Campus (Google Developer Groups on Campus) are university-based community groups for students interested in Google's developer technologies. We host workshops, talks, and hackathons to help students learn and connect."
  },
  {
    question: "Who can join?",
    answer: "Any student passionate about technology and development can join! Whether you're a beginner or an experienced coder, there's something for everyone."
  },
  {
    question: "How can I get involved?",
    answer: "You can attend our events, join our online community, or even volunteer to help organize activities. Follow our social media channels for the latest updates!"
  },
  {
    question: "Are events free?",
    answer: "Yes, most of our events are free to attend for students. Our goal is to make learning accessible."
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
              src="https://picsum.photos/80/80" 
              alt="GDG On Campus Logo" 
              width={80} 
              height={80} 
              className="rounded-full"
              data-ai-hint="tech logo" 
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Welcome to GDG On Campus Hub
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discover, learn, and connect with fellow student developers passionate about Google technologies.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/team">Meet the Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#faqs">Learn More</Link>
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
                <Users className="mr-3 h-8 w-8" /> Who We Are
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                GDG On Campus Hub is a vibrant community of student developers enthusiastic about exploring Google's cutting-edge technologies. We are driven by a passion for learning, collaboration, and innovation. Our aim is to create a supportive environment where students can grow their skills, network with peers and industry professionals, and build amazing projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of community to foster growth and creativity. Join us to be part of a dynamic group that shares knowledge, supports each other, and explores the exciting world of technology together.
              </p>
            </div>
            <div>
              <Image 
                src="https://picsum.photos/600/400" 
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
            <Lightbulb className="mr-3 h-8 w-8" /> What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Workshops & Bootcamps</h3>
              <p className="text-muted-foreground text-sm">
                Hands-on sessions on various Google technologies like Android, Firebase, Google Cloud, AI/ML, and more.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech Talks & Seminars</h3>
              <p className="text-muted-foreground text-sm">
                Insightful talks from industry experts and Google Developer Experts (GDEs).
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hackathons & Challenges</h3>
              <p className="text-muted-foreground text-sm">
                Opportunities to collaborate, innovate, and build cool projects to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary flex items-center justify-center">
            <MessageSquare className="mr-3 h-8 w-8" /> Frequently Asked Questions
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
