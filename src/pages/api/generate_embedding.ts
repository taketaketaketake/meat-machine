import { openai } from '@/lib/openai'; // or however you import it
import { supabase } from '@/lib/supabase/supabase';

export async function POST({ request }) {
  const body = await request.json();
  const { creationId, prompt } = body;

  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: prompt,
  });

  const embedding = response.data[0].embedding;

  const { error } = await supabase
    .from('creations')
    .update({ prompt_embedding: embedding })
    .eq('id', creationId);

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
