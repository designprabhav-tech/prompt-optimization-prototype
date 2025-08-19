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
  return <div className="min-h-screen bg-gradient-to-b from-ai-gradient-start to-ai-gradient-end flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Header with sparkle icon */}
        

        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ai-title mb-3 sm:mb-4 leading-tight">
          What can I help with?
        </h1>

        {/* Subtitle */}
        <p className="text-ai-subtitle text-base sm:text-lg mb-8 sm:mb-12 max-w-xs sm:max-w-lg mx-auto leading-relaxed px-4 sm:px-0">
          I'm here to assist you with creative writing, coding, research, and so much more. How can I make your day more productive?
        </p>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-ai-input-bg border border-ai-input-border rounded-2xl sm:rounded-full shadow-lg p-3 sm:p-2 max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto gap-3 sm:gap-0">
            <Input type="text" placeholder="Ask anything..." value={query} onChange={e => setQuery(e.target.value)} className="flex-1 border-0 bg-transparent text-sm sm:text-base placeholder:text-ai-subtitle focus-visible:ring-0 focus-visible:ring-offset-0 px-3 sm:px-4 py-2 sm:py-3 min-h-[44px] sm:min-h-0" />
            <div className="flex items-center gap-2 sm:gap-2 w-full sm:w-auto">
              <Button type="button" size="sm" variant="outline" className="flex-1 sm:flex-none bg-transparent border-ai-input-border text-ai-subtitle hover:bg-ai-input-border rounded-xl sm:rounded-full px-4 py-2 sm:py-2 font-medium text-sm min-h-[40px] sm:min-h-0">
                Optimize
              </Button>
              <Button type="submit" size="sm" className="flex-1 sm:flex-none bg-ai-button hover:bg-ai-button-hover text-white rounded-xl sm:rounded-full px-4 py-2 sm:py-2 flex items-center justify-center gap-1 font-medium text-sm min-h-[40px] sm:min-h-0">
                Send
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="text-ai-disclaimer text-xs sm:text-sm mt-4 sm:mt-6 px-4 sm:px-0">
          AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>;
};
export default Index;