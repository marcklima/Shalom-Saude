'use server';
/**
 * @fileOverview An AI assistant that guides users to the most appropriate clinical specialty or health service based on their symptoms.
 *
 * - orientToSpecialty - A function that handles the health orientation process.
 * - AiHealthOrientationToolInput - The input type for the orientToSpecialty function.
 * - AiHealthOrientationToolOutput - The return type for the orientToSpecialty function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiHealthOrientationToolInputSchema = z.object({
  symptoms: z.string().describe('A description of the user\'s symptoms.'),
});
export type AiHealthOrientationToolInput = z.infer<typeof AiHealthOrientationToolInputSchema>;

const AiHealthOrientationToolOutputSchema = z.object({
  recommendedSpecialty: z.string().describe('The most appropriate clinical specialty or health service based on the symptoms. Choose from: Cardiologia, Ortopedia, Otorrinolaringologia, Neurologia, Psiquiatria, Traumatologia, Urologia, Nutrição, Dermatologia, Psicologia, Geriatria, Endocrinologia, Ginecologia, Pediatria, or "Clínico Geral" if no specific specialty fits best, or "Serviço de Saúde Geral" if the symptoms are not clinical.'),
  reasoning: z.string().optional().describe('An optional explanation for the recommendation.'),
});
export type AiHealthOrientationToolOutput = z.infer<typeof AiHealthOrientationToolOutputSchema>;

export async function orientToSpecialty(input: AiHealthOrientationToolInput): Promise<AiHealthOrientationToolOutput> {
  return aiHealthOrientationToolFlow(input);
}

const aiHealthOrientationToolPrompt = ai.definePrompt({
  name: 'aiHealthOrientationToolPrompt',
  input: {schema: AiHealthOrientationToolInputSchema},
  output: {schema: AiHealthOrientationToolOutputSchema},
  prompt: `Você é um assistente de saúde virtual amigável e útil, especializado em orientar usuários para a especialidade clínica ou serviço de saúde mais adequado com base em seus sintomas.

Analise os sintomas fornecidos pelo usuário e recomende a especialidade mais apropriada de uma das seguintes opções:
- Cardiologia
- Ortopedia
- Otorrinolaringologia
- Neurologia
- Psiquiatria
- Traumatologia
- Urologia
- Nutrição
- Dermatologia
- Psicologia
- Geriatria
- Endocrinologia
- Ginecologia
- Pediatria

Se nenhum dos sintomas se encaixar perfeitamente em uma especialidade específica, ou se for algo geral, recomende "Clínico Geral".
Se os sintomas não forem de natureza clínica ou forem mais para um serviço de saúde geral (e.g., check-up), recomende "Serviço de Saúde Geral".

Sempre forneça uma breve justificativa para a sua recomendação.

Sintomas do usuário: {{{symptoms}}}`
});

const aiHealthOrientationToolFlow = ai.defineFlow(
  {
    name: 'aiHealthOrientationToolFlow',
    inputSchema: AiHealthOrientationToolInputSchema,
    outputSchema: AiHealthOrientationToolOutputSchema,
  },
  async (input) => {
    const {output} = await aiHealthOrientationToolPrompt(input);
    if (!output) {
        throw new Error('Failed to get a recommendation from the AI.');
    }
    return output;
  }
);
