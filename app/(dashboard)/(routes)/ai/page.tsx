"use client";

import React, { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { SearchPrompt } from "./Scheme";
import { z } from "zod";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";

interface ConversationProp {
  Question: string;
  Answer: string;
}
import { IconArrowRight } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import ExampleComponent from "@/components/TypeAnimation/TextAnimation";
const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyApJAP_ZQN8n4HXiUVoIIU1bTYmeqjc1z0";
export type SearchInputType = z.infer<typeof SearchPrompt>;
const GeminiAi = () => {
  const [Conversation, setConversation] = useState<ConversationProp[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const acceptresponse = async (data: SearchInputType) => {
    setIsLoading(true);
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "create a chat for educational purpose" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "**Chat Title**: Exploring the Wonders of Space\n\n**Participants**:\n\n* Teacher\n* Group of Students\n\n**Teacher**: Welcome, students! Today, we're embarking on an exciting journey to explore the wonders of space. Let's dive into the cosmos and discover its mysteries.\n\n**Student 1**: Wow, I'm so excited! I've always been fascinated by space.\n\n**Student 2**: Me too! I can't wait to learn more about the stars, planets, and galaxies.\n\n**Teacher**: Let's start with the basics. What do we know about our solar system?\n\n**Student 3**: Our solar system consists of the Sun, eight planets, dwarf planets, moons, asteroids, and comets.\n\n**Student 4**: The Sun is the center of our solar system and provides light and heat to all the planets.\n\n**Teacher**: Excellent! Now, let's talk about the planets. Which planet is closest to the Sun?\n\n**Student 5**: Mercury is the closest planet to the Sun. It's a small, rocky planet with a very hot surface.\n\n**Teacher**: That's right. And what about the largest planet in our solar system?\n\n**Student 6**: Jupiter is the largest planet. It's a gas giant made up mostly of hydrogen and helium.\n\n**Teacher**: Very good! Now, let's move beyond our solar system and explore the vastness of the universe. What do we know about stars?\n\n**Student 7**: Stars are giant balls of glowing gas that produce their own light and heat.\n\n**Student 8**: They come in different sizes and colors, and they're often grouped together in clusters called galaxies.\n\n**Teacher**: That's fascinating! And what about galaxies? Tell me more about them.\n\n**Student 9**: Galaxies are enormous collections of stars, gas, and dust. Our galaxy, the Milky Way, is home to billions of stars, including our Sun.\n\n**Student 10**: Galaxies are incredibly vast and can be different shapes, like spirals, ellipticals, and irregulars.\n\n**Teacher**: Amazing! Space is truly filled with wonders. Now, let's talk about the possibility of life beyond Earth. What do you think?\n\n**Student 11**: I believe that there might be life beyond Earth. The universe is so vast, and it's possible that other planets or moons could have conditions suitable for life.\n\n**Student 12**: I agree! Scientists are actively searching for signs of extraterrestrial life by studying other planets and moons in our solar system and beyond.\n\n**Teacher**: That's an exciting thought. The search for life beyond Earth is one of the greatest mysteries of our time. As we continue to explore space, we might just find answers to some of the biggest questions about our universe.\n\n**Conclusion**:\n\nThe chat on \"Exploring the Wonders of Space\" engaged students in an interactive discussion about the mysteries of the cosmos. They explored the solar system, stars, galaxies, and the possibility of life beyond Earth, fostering their curiosity and interest in space science. The teacher guided the conversation, encouraged students to share their knowledge, and stimulated their thinking about the vastness and wonders of the universe.",
            },
          ],
        },
      ],
    });
    const result = await chat.sendMessage(data.search);
    const response = result.response;
    // console.log(response.text());
    setConversation((prev) => [
      ...prev,
      { Question: data.search, Answer: response.text() },
    ]);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SearchInputType>();
  const processForm = (data: SearchInputType) => {
    acceptresponse(data);
    if (errors.search) {
      console.log(errors.search);
    }
    reset();
    setIsLoading(false);
  };
  return (
    <main className="flex flex-col justify-between h-[90vh]">
      <div className="h-[85vh] pt-1 overflow-scroll no-scrollbar">
        {Conversation.map((item, index) => {
          return (
            <div key={index}>
              {/* design below question and answer fasionable way*/}
              <div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white dark:text-black">
                      {index + 1}
                    </div>
                    <div className="ml-2 text-lg font-bold">
                      {item.Question}
                    </div>
                  </div>
                </div>
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 border-t-2 border-b-2 border-primary rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="flex">
                    <div className="flex pt-3">
                      <div className="flex items-center justify-center w-8 h-8  text-left rounded-full bg-primary text-white dark:text-black">
                        <IconArrowRight />
                      </div>
                    </div>
                    <div className="ml-2 mt-2 text-lg">
                      <ExampleComponent Answer={item.Answer} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(processForm)}>
        <Input placeholder="Search questions" {...register("search")} />
      </form>
    </main>
  );
};

export default GeminiAi;
