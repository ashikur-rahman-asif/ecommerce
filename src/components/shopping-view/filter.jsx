import { filterOptions } from "@/config";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

export default function ProductFilter({ handleFilter, filters }) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {Object.keys(filterOptions).map((keyItem) => (
          <>
            <div>
              <h3 className="text-base font-bold">{keyItem}</h3>
              <div key={keyItem.id} className="grid gap-2 mt-2">
                {filterOptions[keyItem].map((option) => (
                  <>
                    <Label
                      key={option.id}
                      className="flex items-center gap-2 font-normal">
                      <Checkbox
                        checked={
                          filters &&
                          Object.keys(filters).length > 0 &&
                          filters[keyItem] &&
                          filters[keyItem].indexOf(option.id) > -1
                        }
                        onCheckedChange={() => handleFilter(keyItem, option.id)}
                      />
                      {option.label}
                    </Label>
                  </>
                ))}
              </div>
            </div>
            <Separator />
          </>
        ))}
      </div>
    </div>
  );
}
