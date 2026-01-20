import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search sneakers..." }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 bg-secondary text-foreground rounded-full border border-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors placeholder:text-muted-foreground"
      />
    </div>
  );
};

export default SearchBar;
