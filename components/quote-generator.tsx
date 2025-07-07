"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, RefreshCw } from "lucide-react";
import quotesData from "@/data/quotes.json";

interface Quote {
  text: string;
  author: string;
  topics: string[];
}

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noQuotesFound, setNoQuotesFound] = useState(false);

  const generateQuote = async () => {
    if (!topic.trim()) return;

    setIsLoading(true);
    setNoQuotesFound(false);

    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    const filteredQuotes = quotesData.quotes.filter(quote =>
      quote.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
    );

    if (filteredQuotes.length === 0) {
      setNoQuotesFound(true);
      setCurrentQuote(null);
    } else {
      const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
      setCurrentQuote(randomQuote);
      setNoQuotesFound(false);
    }

    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateQuote();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          AI Quote Generator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Generate inspiring quotes on any topic. Simply enter a keyword and discover wisdom from great minds.
        </p>
      </div>

      {/* Input Form */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
            Generate Your Quote
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter a topic (e.g., motivation, love, success)"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="flex-1 h-12 text-lg"
              />
              <Button
                type="submit"
                disabled={!topic.trim() || isLoading}
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Generate Quote
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Quote Display */}
      {currentQuote && (
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 animate-in fade-in-50 duration-500">
          <CardContent className="p-8">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-6 italic">
              "{currentQuote.text}"
            </blockquote>
            <div className="flex items-center justify-between">
              <cite className="text-lg font-semibold text-blue-600">
                — {currentQuote.author}
              </cite>
              <div className="flex gap-2">
                {currentQuote.topics.slice(0, 3).map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* No Quotes Found */}
      {noQuotesFound && (
        <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50 animate-in fade-in-50 duration-500">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🤔</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No quotes found for "{topic}"
            </h3>
            <p className="text-gray-600">
              Try searching for topics like "motivation", "love", "success", "life", or "wisdom".
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}