from openai import OpenAI

client = OpenAI(
  api_key="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"
)

response = client.responses.create(
  model="gpt-4o-mini",
  input="write a haiku about ai",
  store=True,
)

print(response.output_text);
