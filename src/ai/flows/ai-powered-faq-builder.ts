'use server';
/**
 * @fileOverview An AI-powered FAQ builder that leverages an LLM to analyze service offerings and regional plumbing codes to generate a draft FAQ.
 *
 * - generateFAQ - A function that handles the FAQ generation process.
 * - GenerateFAQInput - The input type for the generateFAQ function.
 * - GenerateFAQOutput - The return type for the generateFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFAQInputSchema = z.object({
  serviceOfferings: z
    .string()
    .describe('Detailed description of plumbing services offered.'),
  regionalPlumbingCodes: z
    .string()
    .describe('Relevant plumbing codes for the service region.'),
});
export type GenerateFAQInput = z.infer<typeof GenerateFAQInputSchema>;

const GenerateFAQOutputSchema = z.object({
  faqDraft: z.string().describe('A draft FAQ document based on the input data.'),
});
export type GenerateFAQOutput = z.infer<typeof GenerateFAQOutputSchema>;

export async function generateFAQ(input: GenerateFAQInput): Promise<GenerateFAQOutput> {
  return generateFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFAQPrompt',
  input: {schema: GenerateFAQInputSchema},
  output: {schema: GenerateFAQOutputSchema},
  prompt: `You are an expert in plumbing and local regulations. Based on the provided service offerings and regional plumbing codes, generate a comprehensive FAQ document that addresses common customer questions and concerns.

Service Offerings: {{{serviceOfferings}}}

Regional Plumbing Codes: {{{regionalPlumbingCodes}}}

Ensure the FAQ is informative, easy to understand, and covers a wide range of topics related to plumbing services and compliance with local codes. Focus on questions a layperson might have.  Consider including questions about:

* typical costs associated with plumbing services
* how to handle common plumbing emergencies
* how to select a plumber.

Output the FAQ as a single string.`, 
});

const generateFAQFlow = ai.defineFlow(
  {
    name: 'generateFAQFlow',
    inputSchema: GenerateFAQInputSchema,
    outputSchema: GenerateFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
