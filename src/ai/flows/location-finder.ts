'use server';

/**
 * @fileOverview A location finder AI agent. This agent checks if a given address is within the service area.
 *
 * - checkServiceArea - A function that checks if an address is within the service area.
 * - CheckServiceAreaInput - The input type for the checkServiceArea function.
 * - CheckServiceAreaOutput - The return type for the checkServiceArea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CheckServiceAreaInputSchema = z.object({
  address: z.string().describe('The address to check.'),
});
export type CheckServiceAreaInput = z.infer<typeof CheckServiceAreaInputSchema>;

const CheckServiceAreaOutputSchema = z.object({
  isWithinServiceArea: z
    .boolean()
    .describe('Whether the address is within the service area.'),
  supportedRegions: z
    .array(z.string())
    .describe('The list of supported regions.'),
});
export type CheckServiceAreaOutput = z.infer<typeof CheckServiceAreaOutputSchema>;

export async function checkServiceArea(
  input: CheckServiceAreaInput
): Promise<CheckServiceAreaOutput> {
  return checkServiceAreaFlow(input);
}

const checkServiceAreaTool = ai.defineTool({
  name: 'checkServiceArea',
  description: 'Check if the given address is within our service area.',
  inputSchema: z.object({
    address: z.string().describe('The address to validate.'),
  }),
  outputSchema: z.boolean(),
},
async (input) => {
  // TODO: replace with actual implementation
  const supportedRegions = ["New York", "Los Angeles", "Chicago"];
  return supportedRegions.some(region => input.address.includes(region));
});

const prompt = ai.definePrompt({
  name: 'checkServiceAreaPrompt',
  input: {schema: CheckServiceAreaInputSchema},
  output: {schema: CheckServiceAreaOutputSchema},
  tools: [checkServiceAreaTool],
  prompt: `You are a service area checker. Check if the provided address is in the service area using the checkServiceArea tool.

  Address: {{{address}}}
`,
});

const checkServiceAreaFlow = ai.defineFlow(
  {
    name: 'checkServiceAreaFlow',
    inputSchema: CheckServiceAreaInputSchema,
    outputSchema: CheckServiceAreaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
