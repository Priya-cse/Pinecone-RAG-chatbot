from openai import OpenAI

client = OpenAI(
  api_key="your api-key"
)

response = client.responses.create(
  model="gpt-4o-mini",
  input="write a haiku about ai",
  store=True,
)

print(response.output_text);
