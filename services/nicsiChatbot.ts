import faqItems from "@/data/nicsi-chatbot-faqs.json";

export type NicsiChatbotFaq = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  href?: string;
};

export async function getNicsiChatbotFaqs(): Promise<NicsiChatbotFaq[]> {
  // JSON-backed for now; can be replaced with DB/API fetch later.
  return faqItems as NicsiChatbotFaq[];
}
