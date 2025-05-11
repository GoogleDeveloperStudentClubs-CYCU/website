import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail, MessageCircleMore } from 'lucide-react';
import { GdgLogo } from '@/components/icons/GdgLogo';

const socialLinks = [
  { Icon: Github, href: 'https://github.com/GoogleDeveloperStudentClubs-CYCU', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/%E4%B8%AD%E5%8E%9F%E5%A4%A7%E5%AD%B8%E9%96%8B%E6%BA%90%E8%BB%9F%E9%AB%94%E9%96%8B%E7%99%BC%E7%A4%BE-x-gdg-on-campus-cycu/', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/gdg.on.campus_cycu', label: 'Instagram' },
  { Icon: MessageCircleMore, href: 'https://discord.gg/JvgVxre5xt', label: 'Discord' },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GdgLogo />
              <span className="font-semibold text-lg">GDG On Campus CYCU</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              一群熱愛資訊技術的中原大學學生開發者社群
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <a href="mailto:cycugdsc@gmail.com" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="mr-2 h-4 w-4" />
              cycugdsc@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GDG On Campus CYCU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
