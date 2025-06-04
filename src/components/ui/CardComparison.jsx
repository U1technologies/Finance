
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronDown, Star, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CardComparison = ({ allCards }) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isComparing, setIsComparing] = useState(false);

  const addCardToComparison = (card) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const removeCardFromComparison = (cardId) => {
    setSelectedCards(selectedCards.filter(card => card.id !== cardId));
  };

  const clearComparison = () => {
    setSelectedCards([]);
    setIsComparing(false);
  };

  const startComparison = () => {
    setIsComparing(true);
  };

  if (isComparing && selectedCards.length > 1) {
    return (
      <div className="mb-8 bg-white p-6 rounded-lg shadow-soft">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Card Comparison</h3>
          <Button onClick={clearComparison} variant="outline" size="sm">
            <X className="h-4 w-4 mr-2" />
            Clear Comparison
          </Button>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="fees">Fees & Rates</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Feature</TableHead>
                    {selectedCards.map(card => (
                      <TableHead key={card.id} className="text-center min-w-48">
                        <div className="flex flex-col items-center">
                          <img src={card.image} alt={card.name} className="w-16 h-10 object-cover rounded mb-2" />
                          <span className="font-medium text-sm">{card.name}</span>
                          <span className="text-xs text-slate">{card.bank}</span>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Rating</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                          <span>{card.rating}</span>
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Annual Fee</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center font-medium">
                        {card.annualFee}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Interest Rate</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        {card.interestRate}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rewards</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        {card.rewards}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Actions</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        <div className="flex flex-col gap-2">
                          <Link to={`/credit-cards/${card.id}`} className="text-xs bg-teal text-white px-3 py-1 rounded">
                            View Details
                          </Link>
                          <Link to={`/apply/${card.id}`} className="text-xs bg-gold text-navy px-3 py-1 rounded">
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

          <TabsContent value="fees" className="mt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Fee Type</TableHead>
                    {selectedCards.map(card => (
                      <TableHead key={card.id} className="text-center min-w-48">
                        {card.name}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Annual Fee</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        {card.annualFee}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Processing Fee</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        {card.processingFee || "₹0"}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Interest Rate</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        {card.interestRate}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Benefit</TableHead>
                    {selectedCards.map(card => (
                      <TableHead key={card.id} className="text-center min-w-48">
                        {card.name}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Rewards</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        {card.rewards}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Credit Score Required</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center">
                        {card.creditScore || "650+"}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-soft">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">Compare Credit Cards</h3>
          <p className="text-sm text-slate">Select up to 3 cards to compare side by side</p>
        </div>
        {selectedCards.length > 1 && (
          <Button onClick={startComparison} className="bg-teal hover:bg-teal-dark text-white">
            Compare {selectedCards.length} Cards
          </Button>
        )}
      </div>

      {selectedCards.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCards.map(card => (
            <div key={card.id} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
              <span>{card.name}</span>
              <button
                onClick={() => removeCardFromComparison(card.id)}
                className="ml-2 text-slate hover:text-red-500"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Add Card to Compare <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white z-50">
          <div className="max-h-60 overflow-y-auto">
            {allCards.filter(card => !selectedCards.find(c => c.id === card.id)).map(card => (
              <button
                key={card.id}
                onClick={() => addCardToComparison(card)}
                disabled={selectedCards.length >= 3}
                className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center gap-3 disabled:opacity-50"
              >
                <img src={card.image} alt={card.name} className="w-8 h-5 object-cover rounded" />
                <div>
                  <div className="font-medium text-sm">{card.name}</div>
                  <div className="text-xs text-slate">{card.bank}</div>
                </div>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CardComparison;
