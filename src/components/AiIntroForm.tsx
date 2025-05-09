"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateTeamMemberIntro, type GenerateTeamMemberIntroOutput } from '@/ai/flows/generate-team-member-intro';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  role: z.string().min(3, { message: "Role must be at least 3 characters." }),
  background: z.string().min(10, { message: "Background must be at least 10 characters." }).max(500, { message: "Background must be at most 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function AiIntroForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedIntro, setGeneratedIntro] = useState<string | null>(null);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedIntro(null);
    try {
      const result: GenerateTeamMemberIntroOutput = await generateTeamMemberIntro(data);
      setGeneratedIntro(result.introduction);
      toast({
        title: "Introduction Generated!",
        description: "Your AI-powered intro is ready.",
        variant: "default",
      });
      reset(); // Optionally reset form after successful submission
    } catch (error) {
      console.error("Error generating introduction:", error);
      toast({
        title: "Error",
        description: "Failed to generate introduction. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Sparkles className="mr-2 h-6 w-6 text-primary" />
            AI Team Member Intro Generator
          </CardTitle>
          <CardDescription>
            Fill in the details below to generate a creative introduction for a new team member.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} placeholder="e.g., Ada Lovelace" />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" {...register("role")} placeholder="e.g., Lead Innovator" />
              {errors.role && <p className="text-sm text-destructive">{errors.role.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="background">Background & Interests</Label>
              <Textarea
                id="background"
                {...register("background")}
                placeholder="e.g., Passionate about algorithms, enjoys hiking, and mentoring junior developers."
                rows={4}
              />
              {errors.background && <p className="text-sm text-destructive">{errors.background.message}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Introduction"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {generatedIntro && (
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Generated Introduction:</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-line">{generatedIntro}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
