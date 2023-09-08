import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI as OpenAIClient } from "openai";

type ResponseData = {
  message: string;
};

// export const runtime = "edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const client = new OpenAIClient();
  const result = await client.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "hi",
      },
    ],
    model: "gpt-3.5-turbo",
  });
  res.status(200).json({ message: JSON.stringify(result) });
}
