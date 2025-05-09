import { TeamMemberCard, type TeamMember } from '@/components/TeamMemberCard';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Johnson',
    title: 'Lead Organizer',
    department: 'Computer Science, 4th Year',
    bio: 'Passionate about building communities and exploring new technologies. Loves Android development and cloud computing.',
    imageUrl: 'https://picsum.photos/seed/alex/200/200',
    imageHint: "male student",
    socialLinks: [
      { Icon: Linkedin, url: '#', label: 'LinkedIn' },
      { Icon: Github, url: '#', label: 'GitHub' },
      { Icon: Twitter, url: '#', label: 'Twitter' },
    ],
  },
  {
    name: 'Maria Garcia',
    title: 'Events Coordinator',
    department: 'Software Engineering, 3rd Year',
    bio: 'Enjoys organizing impactful events and workshops. Keen interest in AI/ML and web development.',
    imageUrl: 'https://picsum.photos/seed/maria/200/200',
    imageHint: "female student",
    socialLinks: [
      { Icon: Linkedin, url: '#', label: 'LinkedIn' },
      { Icon: Globe, url: '#', label: 'Portfolio' },
    ],
  },
  {
    name: 'Sam Lee',
    title: 'Tech Lead',
    department: 'Data Science, 3rd Year',
    bio: 'Loves diving deep into technical challenges and mentoring others. Expert in Python and data analysis.',
    imageUrl: 'https://picsum.photos/seed/sam/200/200',
    imageHint: "person programming",
    socialLinks: [
      { Icon: Github, url: '#', label: 'GitHub' },
      { Icon: Linkedin, url: '#', label: 'LinkedIn' },
    ],
  },
  {
    name: 'Priya Sharma',
    title: 'Marketing Lead',
    department: 'Business & Technology, 2nd Year',
    bio: 'Creative thinker with a knack for digital marketing and community outreach. Passionate about tech for good.',
    imageUrl: 'https://picsum.photos/seed/priya/200/200',
    imageHint: "student smiling",
    socialLinks: [
      { Icon: Linkedin, url: '#', label: 'LinkedIn' },
      { Icon: Twitter, url: '#', label: 'Twitter' },
      { Icon: Instagram, url: '#', label: 'Instagram'},
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-primary">Meet Our Team</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        The dedicated individuals who make GDG On Campus a thriving community for student developers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
