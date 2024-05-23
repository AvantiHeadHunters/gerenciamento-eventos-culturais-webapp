import { Select } from "antd";
import { Controller } from "react-hook-form";

const { Option } = Select;

const SelectCategory = ({ category, control, name }) => {
  // Função para ordenar as opções alfabeticamente pelo campo name
  const sortOptions = (a, b) => {
    if (a.name && b.name) {
      return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
    }
    return 0;
  };

  // Ordena as opções
  const sortedCategory = [...category].sort(sortOptions);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          placeholder="Select a category"
          style={{ height: "50px", fontFamily: "Inter" }}
        >
          {sortedCategory.map((category) => (
            <Option key={category.id} value={category.id}>
              {category.name}
            </Option>
          ))}
        </Select>
      )}
    />
  );
};

export { SelectCategory };