import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail, Facebook } from 'lucide-react';
import { GdgLogo } from '@/components/icons/GdgLogo';

const socialLinks = [
  { Icon: Github, href: 'https://github.com/gdg-on-campus', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/gdg-on-campus', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com/gdg_on_campus', label: 'Twitter / X' },
  { Icon: Instagram, href: 'https://instagram.com/gdg_on_campus', label: 'Instagram' },
  { Icon: Facebook, href: 'https://facebook.com/gdgoncampus', label: 'Facebook' },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GdgLogo />
              <span className="font-semibold text-lg">GDG On Campus Hub</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Connecting students with Google technologies and developer communities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <a href="mailto:contact@gdgoncampus.org" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="mr-2 h-4 w-4" />
              contact@gdgoncampus.org
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
          © {new Date().getFullYear()} GDG On Campus Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
