import { Form, Button, Badge } from "react-bootstrap";
import classes from "./FilterSort.module.css";

interface FilterSortProps {
  sortOption: string;
  setSortOption: (sortOption: string) => void;
  setShowFilterModal: (show: boolean) => void;
  activeFilterCount: number;
}

const FilterSort = ({
  sortOption,
  setSortOption,
  setShowFilterModal,
  activeFilterCount,
}: FilterSortProps) => {
  return (
    <>
      <Form.Select
        className={classes.sortDropdown}
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        style={{ marginRight: "1rem" }}
      >
        <option value="">Sort by</option>
        <option value="latest">Latest collections</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </Form.Select>
      <Button
        variant="outline-secondary"
        onClick={() => setShowFilterModal(true)}
        className="position-relative"
      >
        Filter
        {activeFilterCount > 0 && (
          <Badge
            bg="danger"
            pill
            className="position-absolute top-0 start-100 translate-middle"
          >
            {activeFilterCount}
          </Badge>
        )}
      </Button>
    </>
  );
};

export default FilterSort;
