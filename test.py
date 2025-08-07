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
