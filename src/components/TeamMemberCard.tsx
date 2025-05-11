import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';

export interface SocialLink {
  Id: number;
  Icon: LucideIcon;
  url: string;
  label: string;
}

export interface TeamMember {
  name: string;
  title: string;
  department: string;
  bio: string;
  imageUrl: string;
  imageHint?: string;
  socialLinks: SocialLink[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center text-center">
        <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
          <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint || "profile photo"} />
          <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{member.name}</CardTitle>
        <CardDescription className="text-primary">{member.title}</CardDescription>
        <CardDescription>{member.department}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          {member.bio}
        </p>
      </CardContent>
      <CardFooter className="justify-center space-x-3 pt-4">
        {member.socialLinks.map(({ Id, Icon, url, label }) => (
          <Button key={Id} variant="outline" size="icon" asChild>
            <Link href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon className="h-5 w-5" />
            </Link>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
