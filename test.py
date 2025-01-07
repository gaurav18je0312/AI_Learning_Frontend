# import google.generativeai as genai


# class AITextbookGemini:

#     def __init__(self):
#         self.api_keys = "AIzaSyDGycTftnwlRjaYXW8oIjOySpNoidA6d9k"

#     def get_key():
#         return self.api_keys[self.ind]
    
#     def prevChat(self, prompt):
#         genai.configure(api_key=self.api_keys)
#         model = genai.GenerativeModel(ai_textbook_model)
#         chat = model.start_chat(
#             history=prompt
#         )
#         return chat

#     def sendMessage(self, chat, ques):
#         response = chat.send_message(ques)
#         return response.text

import asyncio
from google import genai

client = genai.Client(api_key="AIzaSyDGycTftnwlRjaYXW8oIjOySpNoidA6d9k", http_options={'api_version': 'v1alpha'})
model_id = "gemini-2.0-flash-exp"
config = {"response_modalities": ["TEXT"]}

async def main():
    async with client.aio.live.connect(model=model_id, config=config) as session:
        while True:
            message = input("User> ")
            if message.lower() == "exit":
                break
            await session.send(message, end_of_turn=True)

            async for response in session.receive():
                if response.text is None:
                    continue
                print(response.text, end="")

if __name__ == "__main__":
    asyncio.run(main())