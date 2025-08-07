
import { OpenAIApi, Configuration } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export async function getEmbeddings(input: string) {
  try {
    const response = await openai.createEmbedding({
      model: "text-embedding-3-small",
      input: input.replace(/\n/g, ' ')
    })

    const result = await response.json();

    // Defensive: check for error or missing data
    if (!result.data || !Array.isArray(result.data) || !result.data[0]?.embedding) {
      throw new Error(`OpenAI API error or unexpected response: ${JSON.stringify(result)}`);
    }

    // Truncate embedding to 512 dimensions for Pinecone compatibility
    return result.data[0].embedding.slice(0, 512) as number[];

  } catch (e) {
    console.log("Error calling OpenAI embedding API: ", e);
    throw new Error(`Error calling OpenAI embedding API: ${e}`);
  }
}