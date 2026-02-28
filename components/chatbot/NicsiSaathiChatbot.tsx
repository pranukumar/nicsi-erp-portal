"use client";

import Link from "next/link";
import { Bot, MessageCircle, Send, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { NicsiChatbotFaq } from "@/services/nicsiChatbot";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
  href?: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: "m0",
    role: "bot",
    text: "Namaste. Main NICSI Saathi hoon. Aap NICSI portal ke baare me sawal puch sakte hain.",
  },
];

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[^\w\s]/g, " ").trim();
}

function getBestFaqMatch(query: string, faqs: NicsiChatbotFaq[]): NicsiChatbotFaq | null {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return null;

  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  let best: { faq: NicsiChatbotFaq; score: number } | null = null;

  for (const faq of faqs) {
    const haystack = normalizeText(`${faq.question} ${faq.keywords.join(" ")}`);
    let score = 0;
    for (const token of queryTokens) {
      if (haystack.includes(token)) score += 1;
    }
    if (!best || score > best.score) {
      best = { faq, score };
    }
  }

  if (!best || best.score === 0) return null;
  return best.faq;
}

export default function NicsiSaathiChatbot({ faqs }: { faqs: NicsiChatbotFaq[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const quickFaqs = useMemo(() => faqs.slice(0, 3), [faqs]);

  const askQuestion = (input: string) => {
    const text = input.trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text,
    };

    const match = getBestFaqMatch(text, faqs);
    const botMessage: ChatMessage = match
      ? {
          id: `b-${Date.now()}`,
          role: "bot",
          text: match.answer,
          href: match.href,
        }
      : {
          id: `b-${Date.now()}`,
          role: "bot",
          text: "Is query ka exact FAQ abhi available nahi hai. Kripya Contact page use karein.",
          href: "/contact",
        };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setQuery("");
  };

  const clearChat = () => {
    setMessages(initialMessages);
    setQuery("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-5 sm:right-5">
      {open ? (
        <div className="flex max-h-[min(84vh,36rem)] w-[min(92vw,22rem)] flex-col rounded-2xl border border-blue-200 bg-white shadow-[0_20px_40px_rgba(10,46,115,0.22)]">
          <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-[#0A2E73] to-[#0F4BB8] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <Bot size={16} />
              </span>
              <div>
                <p className="text-sm font-semibold">NICSI Saathi</p>
                <p className="text-[11px] text-blue-100">FAQ Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={clearChat}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
                aria-label="Erase chat"
                title="Erase chat"
              >
                <Trash2 size={14} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
                aria-label="Close chatbot"
                title="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message) => (
              <div key={message.id} className={message.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block max-w-[85%] rounded-xl px-3 py-2 text-sm leading-6 ${
                    message.role === "user" ? "bg-[#0F4BB8] text-white" : "border border-blue-100 bg-[#F7FAFF] text-[#0F172A]"
                  }`}
                >
                  {message.text}
                </div>
                {message.role === "bot" && message.href ? (
                  <div className="mt-1">
                    <Link href={message.href} className="text-xs font-semibold text-[#0052CC] hover:text-[#003A8C]">
                      Open related page
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="border-t border-blue-100 px-4 py-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickFaqs.map((faq) => (
                <button
                  key={faq.id}
                  type="button"
                  onClick={() => askQuestion(faq.question)}
                  className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-[#003A8C] hover:bg-blue-100"
                >
                  {faq.question}
                </button>
              ))}
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                askQuestion(query);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type your question..."
                className="h-9 flex-1 rounded-md border border-blue-200 px-3 text-sm outline-none focus:border-[#0F4BB8]"
              />
              <button
                type="submit"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0F4BB8] text-white hover:brightness-110"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {!open ? (
        <div className="relative">
          <span className="nicsi-chatbot-tooltip absolute -top-10 right-0 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2E73] shadow-sm">
            Need help?
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="nicsi-chatbot-fab inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#0A2E73] to-[#0F4BB8] text-white shadow-[0_10px_24px_rgba(10,46,115,0.35)] hover:brightness-110"
            aria-label="Open NICSI Saathi chatbot"
          >
            <MessageCircle size={20} className="nicsi-chatbot-icon" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
