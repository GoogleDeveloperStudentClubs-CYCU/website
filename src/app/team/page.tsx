import { TeamMemberCard, type TeamMember } from '@/components/TeamMemberCard';
import { Github, Linkedin, Twitter, Globe, Instagram } from 'lucide-react';

const LeadteamMembers: TeamMember[] = [
  {
    name: 'YiJia Huang',
    title: 'Organizer',
    department: '資訊三甲',
    bio: 'Focus On Cyber Security',
    imageUrl: 'https://2.gravatar.com/avatar/feef4421f4052a6fe1c0391b0cafd938fa6756e252b29a05af9519b35d15a214?size=256&d=initials',
    imageHint: "male student",
    socialLinks: [
      { Id: 1, Icon: Linkedin, url: '#', label: 'LinkedIn' },
      { Id: 2, Icon: Github, url: 'https://github.com/ja-errorpro', label: 'GitHub' },
      { Id: 3, Icon: Globe, url: 'https://ja-errorpro.codes/', label: 'Blog' },
      { Id: 4, Icon: Instagram, url: '#', label: 'Instagram'},
    ],
  },
];

const teachingMembers: TeamMember[] = [
];

const generalAffairsMembers: TeamMember[] = [
];

const activityMembers: TeamMember[] = [
];

const promotionMembers: TeamMember[] = [
];

export default function TeamPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-primary">認識我們的核心成員</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        GDG On Campus CYCU 背後是由許多人奉獻時間與精神成立的，參加活動時別忘了這些人的付出。
      </p>
      <h2 className="text-2xl font-bold mb-4 mt-4 text-body">Lead</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {LeadteamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-4 text-body">教學組</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teachingMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-4 text-body">總務組</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {generalAffairsMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-4 text-body">活動組</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {activityMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-4 text-body">美宣組</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {promotionMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
