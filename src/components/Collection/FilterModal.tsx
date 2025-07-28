import { useState } from "react";
import { Offcanvas, Button, Form } from "react-bootstrap";
import classes from "./FilterModal.module.css";

interface FilterOptions {
  metal: string[];
  productType: string[];
  gender: string[];
  occasion: string[];
}

interface FilterModalProps {
  show: boolean;
  onHide: () => void;
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  clearFilters: () => void;
}

interface FilterCategories {
  metal: string[];
  productType: string[];
  gender: string[];
  occasion: string[];
}

const filterCategories: FilterCategories = {
  metal: ["gold", "diamond", "silver"],
  productType: ["bangles", "rings", "bracelets", "earrings", "necklace"],
  gender: ["male", "female", "unisex"],
  occasion: ["wedding", "engagement", "everyday", "special"],
};

const FilterModal = ({
  show,
  onHide,
  filters,
  setFilters,
  clearFilters,
}: FilterModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState<keyof FilterCategories>("metal");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters: FilterOptions) => ({
      ...prevFilters,
      [name as keyof FilterOptions]: checked
        ? [...prevFilters[name as keyof FilterOptions], value]
        : prevFilters[name as keyof FilterOptions].filter((item: string) => item !== value),
    }));
  };

  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      placement="end"
      className={classes.modalRight}
      backdrop={true}
      scroll={false}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filter</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={classes.modalBodyContent}>
        <div className={classes.categoryList}>
          {Object.keys(filterCategories).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "light"}
              className={`w-100 mb-2 text-capitalize ${selectedCategory === category ? classes.activeButton : ''}`}
              onClick={() => setSelectedCategory(category as keyof FilterCategories)}
            >
              {category.replace(/([A-Z])/g, " $1")}
            </Button>
          ))}
        </div>
        <div className={classes.optionsPanel}>
          <Form>
            <Form.Group>
              <Form.Label className="text-capitalize fw-bold">
                {selectedCategory.replace(/([A-Z])/g, " $1")}
              </Form.Label>
              <div className={classes.optionsContainer}>
                {filterCategories[selectedCategory].map((option: string) => (
                  <Form.Check
                    key={option}
                    type="checkbox"
                    label={option}
                    name={selectedCategory}
                    value={option}
                    checked={filters[selectedCategory]?.includes(option)}
                    onChange={handleFilterChange}
                    className="mb-2"
                  />
                ))}
              </div>
            </Form.Group>
          </Form>
          <div className={classes.clearButtonContainer}>
            <Button variant="outline-secondary" onClick={clearFilters} className="w-100">
              Clear Filters
            </Button>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FilterModal;