'use server';

/**
 * @fileOverview A team member intro generator AI agent.
 *
 * - generateTeamMemberIntro - A function that handles the intro generation process.
 * - GenerateTeamMemberIntroInput - The input type for the generateTeamMemberIntro function.
 * - GenerateTeamMemberIntroOutput - The return type for the generateTeamMemberIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTeamMemberIntroInputSchema = z.object({
  name: z.string().describe('The name of the team member.'),
  role: z.string().describe('The role of the team member.'),
  background: z
    .string()
    .describe(
      'A short description of the team member\'s background and interests.'
    ),
});
export type GenerateTeamMemberIntroInput = z.infer<
  typeof GenerateTeamMemberIntroInputSchema
>;

const GenerateTeamMemberIntroOutputSchema = z.object({
  introduction: z.string().describe('A draft introduction for the team member.'),
});
export type GenerateTeamMemberIntroOutput = z.infer<
  typeof GenerateTeamMemberIntroOutputSchema
>;

export async function generateTeamMemberIntro(
  input: GenerateTeamMemberIntroInput
): Promise<GenerateTeamMemberIntroOutput> {
  return generateTeamMemberIntroFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTeamMemberIntroPrompt',
  input: {schema: GenerateTeamMemberIntroInputSchema},
  output: {schema: GenerateTeamMemberIntroOutputSchema},
  prompt: `You are a creative copywriter specializing in writing introductions for new team members.

  Based on the following information, generate a short and engaging introduction for the new team member.

  Name: {{{name}}}
  Role: {{{role}}}
  Background: {{{background}}}

  Introduction:`,
});

const generateTeamMemberIntroFlow = ai.defineFlow(
  {
    name: 'generateTeamMemberIntroFlow',
    inputSchema: GenerateTeamMemberIntroInputSchema,
    outputSchema: GenerateTeamMemberIntroOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
