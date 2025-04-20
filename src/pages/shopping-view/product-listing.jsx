import ProductFilter from "@/components/shopping-view/filter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sortOptions } from "@/config";
import { ArrowUpDown } from "lucide-react";
import ShoppingProductTile from "./product-tile";

const ShoppingListing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-3 gap-3 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold mr-2">All products</h2>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">10 Products</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1">
                  <ArrowUpDown size="4" />
                  <span>Sort By</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup>
                  {sortOptions.map((item) => (
                    <DropdownMenuRadioItem key={item.id}>
                      {item.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <ShoppingProductTile />
        </div>
      </div>
    </div>
  );
};

export default ShoppingListing;
