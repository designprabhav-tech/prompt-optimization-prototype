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
  return <div className="min-h-screen bg-gradient-to-br from-ai-gradient-start via-ai-gradient-middle to-ai-gradient-end flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-glass-bg/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ai-button/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-gradient-middle/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
        {/* Header with sparkle icon */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-ai-button" />
          <span className="text-ai-subtitle text-sm sm:text-base font-medium">AI Assistant</span>
        </div>

        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-ai-title mb-3 sm:mb-4 leading-tight bg-gradient-to-r from-ai-title to-ai-button bg-clip-text text-transparent">
          What can I help with?
        </h1>

        {/* Subtitle */}
        <p className="text-ai-subtitle text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          I'm here to assist you with creative writing, coding, research, and so much more. How can I make your day more productive?
        </p>

        {/* Input form with glassmorphism */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center backdrop-blur-xl bg-ai-input-bg-glass border border-ai-input-border hover:border-ai-input-border-hover rounded-2xl sm:rounded-full shadow-2xl shadow-ai-button/20 p-3 sm:p-2 max-w-xs sm:max-w-xl lg:max-w-3xl mx-auto gap-3 sm:gap-0 transition-all duration-300 hover:shadow-ai-button/30">
            <Input 
              type="text" 
              placeholder="Ask anything..." 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              className="flex-1 border-0 bg-transparent text-sm sm:text-base lg:text-lg placeholder:text-ai-subtitle/70 focus-visible:ring-0 focus-visible:ring-offset-0 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 min-h-[44px] sm:min-h-[48px] lg:min-h-[52px] text-ai-title" 
            />
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Button 
                type="button" 
                size="sm" 
                variant="outline" 
                className="flex-1 sm:flex-none bg-ai-glass-bg/50 backdrop-blur-sm border-ai-glass-border hover:bg-ai-glass-bg hover:border-ai-input-border-hover text-ai-subtitle hover:text-ai-title rounded-xl sm:rounded-full px-4 lg:px-6 py-2 sm:py-2 lg:py-3 font-medium text-sm lg:text-base min-h-[40px] sm:min-h-[44px] lg:min-h-[48px] transition-all duration-300"
              >
                Optimize
              </Button>
              <Button 
                type="submit" 
                size="sm" 
                className="flex-1 sm:flex-none bg-ai-button hover:bg-ai-button-hover text-white rounded-xl sm:rounded-full px-4 lg:px-6 py-2 sm:py-2 lg:py-3 flex items-center justify-center gap-1 lg:gap-2 font-medium text-sm lg:text-base min-h-[40px] sm:min-h-[44px] lg:min-h-[48px] transition-all duration-300 shadow-lg shadow-ai-button/25 hover:shadow-ai-button/40"
              >
                Send
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </Button>
            </div>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="text-ai-disclaimer text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 px-4 sm:px-0 opacity-80">
          AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>;
};
export default Index;