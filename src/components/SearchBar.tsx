import { Input, InputGroup } from "@chakra-ui/react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <InputGroup>
      <Input
        placeholder="Search by title or location..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        _focus={{ borderColor: "teal.700" }}
      />
    </InputGroup>
  );
};

export default SearchBar;
