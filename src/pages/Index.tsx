import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Query:", query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ai-gradient-start to-ai-gradient-end flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        {/* Header with sparkle icon */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-ai-title" />
          <span className="text-ai-subtitle font-medium text-lg">AI Assistant</span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl font-bold text-ai-title mb-4">
          What can I help with?
        </h1>

        {/* Subtitle */}
        <p className="text-ai-subtitle text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          I'm here to assist you with creative writing, coding, research, and so much more. How can I make your day more productive?
        </p>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-center bg-ai-input-bg border border-ai-input-border rounded-full shadow-lg p-2 max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Ask anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border-0 bg-transparent text-base placeholder:text-ai-subtitle focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-3"
            />
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="bg-transparent border-ai-input-border text-ai-subtitle hover:bg-ai-input-border rounded-full px-4 py-2 font-medium"
              >
                Optimize
              </Button>
              <Button
                type="submit"
                size="sm"
                className="bg-ai-button hover:bg-ai-button-hover text-white rounded-full px-4 py-2 flex items-center gap-1 font-medium"
              >
                Send
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="text-ai-disclaimer text-sm mt-6">
          AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
};

export default Index;