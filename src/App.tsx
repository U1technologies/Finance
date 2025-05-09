
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreditCards from "./pages/CreditCards";
import CardDetail from "./pages/CardDetail";
import NotFound from "./pages/NotFound";
import Loans from "./pages/Loans";
import PersonalLoans from "./pages/loans/PersonalLoans";
import HomeLoans from "./pages/loans/HomeLoans";
import BusinessLoans from "./pages/loans/BusinessLoans";
import Insurance from "./pages/Insurance";
import AutoInsurance from "./pages/insurance/AutoInsurance";
import HomeInsurance from "./pages/insurance/HomeInsurance";
import LifeInsurance from "./pages/insurance/LifeInsurance";
import HealthInsurance from "./pages/insurance/HealthInsurance";
import CreditScore from "./pages/CreditScore";
import Apply from "./pages/Apply";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Sitemap from "./pages/Sitemap";
import CreditScoreCalculator from "./pages/CreditScoreCalculator";
import CreditScorePersonalizer from "./pages/CreditScorePersonalizer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/credit-cards/:id" element={<CardDetail />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/loans/personal" element={<PersonalLoans />} />
          <Route path="/loans/home" element={<HomeLoans />} />
          <Route path="/loans/business" element={<BusinessLoans />} />
          <Route path="/business-loans" element={<BusinessLoans />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/insurance/auto" element={<AutoInsurance />} />
          <Route path="/insurance/home" element={<HomeInsurance />} />
          <Route path="/insurance/life" element={<LifeInsurance />} />
          <Route path="/insurance/health" element={<HealthInsurance />} />
          <Route path="/credit-score" element={<CreditScore />} />
          <Route path="/credit-score/calculator" element={<CreditScoreCalculator />} />
          <Route path="/credit-score/personalizer" element={<CreditScorePersonalizer />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/apply" element={<Apply />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
