
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronDown, Star, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CardForComparison {
  id: string;
  name: string;
  bank: string;
  image: string;
  annualFee: string;
  interestRate: string;
  rewards: string;
  rating: number;
  features?: string[];
  creditScore?: string;
  processingFee?: string;
  offerPeriod?: string;
  rewardRate?: string;
  featured?: boolean;
}

interface CardComparisonProps {
  allCards: CardForComparison[];
}

const CardComparison: React.FC<CardComparisonProps> = ({ allCards }) => {
  const [selectedCards, setSelectedCards] = useState<CardForComparison[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const addToComparison = (card: CardForComparison) => {
    if (selectedCards.length < 3 && !selectedCards.some(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const removeFromComparison = (cardId: string) => {
    setSelectedCards(selectedCards.filter(card => card.id !== cardId));
  };

  const clearComparison = () => {
    setSelectedCards([]);
  };

  const toggleComparisonView = () => {
    if (selectedCards.length >= 2) {
      setIsComparisonOpen(!isComparisonOpen);
    }
  };

  return (
    <>
      {/* Comparison Button */}
      <div className={`fixed bottom-4 right-4 z-30 transition-all duration-300 ${selectedCards.length > 0 ? 'translate-y-0' : 'translate-y-20'}`}>
        <Button 
          onClick={toggleComparisonView}
          className={`relative shadow-cta px-4 py-2 bg-teal hover:bg-teal-dark text-white font-medium rounded-lg transition-all ${selectedCards.length < 2 ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={selectedCards.length < 2}
        >
          Compare {selectedCards.length} Cards
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-navy text-white text-xs rounded-full flex items-center justify-center">
            {selectedCards.length}
          </span>
        </Button>
      </div>

      {/* Comparison Panel */}
      {isComparisonOpen && (
        <div className="fixed inset-0 bg-navy/90 z-50 overflow-auto pt-16 pb-24">
          <div className="container-wide">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Compare Credit Cards</h2>
              <Button 
                onClick={toggleComparisonView} 
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <Tabs defaultValue="features" className="w-full">
              <TabsList className="bg-navy-light mb-6">
                <TabsTrigger value="features" className="text-white data-[state=active]:bg-teal">Features</TabsTrigger>
                <TabsTrigger value="rewards" className="text-white data-[state=active]:bg-teal">Rewards</TabsTrigger>
                <TabsTrigger value="fees" className="text-white data-[state=active]:bg-teal">Fees & Rates</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-0">
                <div className="bg-white rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/4">Card Details</TableHead>
                        {selectedCards.map(card => (
                          <TableHead key={card.id} className="text-center">
                            <div className="relative">
                              <button 
                                onClick={() => removeFromComparison(card.id)}
                                className="absolute -top-2 -right-2 w-5 h-5 bg-slate text-white text-xs rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                              >
                                <X className="h-3 w-3" />
                              </button>
                              <div className="flex flex-col items-center">
                                <img 
                                  src={card.image} 
                                  alt={card.name} 
                                  className="w-20 h-12 object-cover rounded mb-2" 
                                />
                                <h3 className="text-sm font-medium">{card.name}</h3>
                                <p className="text-xs text-slate">{card.bank}</p>
                              </div>
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Annual Fee</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-fee`} className="text-center">{card.annualFee}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Interest Rate</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-rate`} className="text-center">{card.interestRate}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Rewards</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-rewards`} className="text-center">{card.rewards}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Rating</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-rating`} className="text-center">
                            <div className="flex items-center justify-center">
                              <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                              <span>{card.rating}</span>
                            </div>
                          </TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Actions</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-actions`} className="text-center">
                            <div className="flex flex-col gap-2">
                              <Link 
                                to={`/credit-cards/${card.id}`}
                                className="text-teal hover:text-teal-dark text-sm"
                              >
                                View Details
                              </Link>
                              <Link 
                                to={`/apply/${card.id}`}
                                className="bg-teal text-white text-sm px-3 py-1 rounded hover:bg-teal-dark transition-colors"
                              >
                                Apply Now
                              </Link>
                            </div>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="rewards" className="mt-0">
                <div className="bg-white rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/4">Rewards</TableHead>
                        {selectedCards.map(card => (
                          <TableHead key={card.id} className="text-center">
                            <div className="flex flex-col items-center">
                              <h3 className="text-sm font-medium">{card.name}</h3>
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Reward Type</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-reward-type`} className="text-center">{card.rewards}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Reward Rate</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-reward-rate`} className="text-center">{card.rewardRate || "1-5%"}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Welcome Bonus</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-welcome`} className="text-center">Yes</TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="fees" className="mt-0">
                <div className="bg-white rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/4">Fees & Rates</TableHead>
                        {selectedCards.map(card => (
                          <TableHead key={card.id} className="text-center">
                            <div className="flex flex-col items-center">
                              <h3 className="text-sm font-medium">{card.name}</h3>
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Annual Fee</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-annual-fee`} className="text-center">{card.annualFee}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Interest Rate</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-interest`} className="text-center">{card.interestRate}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Processing Fee</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-processing`} className="text-center">{card.processingFee || "₹500-₹1,000"}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Foreign Transaction Fee</TableCell>
                        {selectedCards.map(card => (
                          <TableCell key={`${card.id}-foreign`} className="text-center">2-3.5%</TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex justify-end">
              <Button onClick={clearComparison} variant="outline" className="mr-4 border-white/20 text-white hover:bg-white/10">
                Clear All
              </Button>
              <Button onClick={toggleComparisonView} className="bg-teal hover:bg-teal-dark text-white">
                Close Comparison
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add to Comparison Feature */}
      <div className="mb-6 p-4 bg-gradient-primary rounded-lg text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Compare Credit Cards</h3>
            <p className="text-white/80 text-sm">Select up to 3 cards to compare side by side</p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="mt-4 md:mt-0 bg-white text-navy hover:bg-gray-light transition-colors">
                Select Cards to Compare <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="p-1">
                <h4 className="font-medium mb-2">Select cards to compare</h4>
                <div className="max-h-60 overflow-y-auto">
                  {allCards.map(card => (
                    <div 
                      key={card.id} 
                      className="flex items-center justify-between p-2 hover:bg-gray rounded"
                    >
                      <div className="flex items-center">
                        <img 
                          src={card.image} 
                          alt={card.name} 
                          className="w-10 h-10 object-cover rounded mr-2" 
                        />
                        <div>
                          <p className="text-sm font-medium">{card.name}</p>
                          <p className="text-xs text-slate">{card.bank}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm"
                        onClick={() => addToComparison(card)}
                        disabled={selectedCards.some(c => c.id === card.id) || selectedCards.length >= 3}
                        className={selectedCards.some(c => c.id === card.id) ? "bg-teal/50" : "bg-teal"}
                      >
                        {selectedCards.some(c => c.id === card.id) ? <Check className="h-4 w-4" /> : "Add"}
                      </Button>
                    </div>
                  ))}
                </div>
                {selectedCards.length > 0 && (
                  <div className="mt-4 pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{selectedCards.length} cards selected</span>
                      <Button 
                        size="sm" 
                        onClick={toggleComparisonView}
                        disabled={selectedCards.length < 2}
                        className="bg-teal"
                      >
                        Compare <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default CardComparison;
