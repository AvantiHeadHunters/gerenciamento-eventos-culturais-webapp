import { Select } from "antd";
import { Controller } from "react-hook-form";

const { Option } = Select;

const SelectLocation = ({ location, control, name }) => {
  // Função para ordenar as opções alfabeticamente pelo campo name
  const sortOptions = (a, b) => {
    if (a.name + ", " + a.city && b.name + ", " + b.city) {
      return (a.name + ", " + a.city).localeCompare(
        b.name + ", " + b.city,
        "en",
        {
          sensitivity: "base",
        }
      );
    }
    return 0;
  };

  // Ordena as opções
  const sortedLocation = [...location].sort(sortOptions);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          style={{ height: "50px", fontFamily: "Inter" }}
          showSearch
          placeholder="Select a category"
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
          optionFilterProp="children"
        >
          {sortedLocation.map((location) => (
            <Option key={location.id} value={location.id}>
              {location.name + ", " + location.city}
            </Option>
          ))}
        </Select>
      )}
    />
  );
};

export { SelectLocation }