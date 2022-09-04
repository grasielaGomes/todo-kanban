import { FormLabel, RadioGroup, Stack, Radio, Box } from "@chakra-ui/react";
import { TodoRadioI } from "./";

export const TodoRadio = ({
  handleChange,
  map,
  options,
  title
}: TodoRadioI) => {
  return (
    <Box>
      <FormLabel fontWeight="bold">{title}</FormLabel>
      <RadioGroup defaultValue={options[0]} onChange={handleChange}>
        <Stack spacing={["2", "4"]} direction={["column", "row"]}>
          {options.length > 0 &&
            options.map((option) => {
              return (
                <Radio key={option} value={option}>
                  {map[option]}
                </Radio>
              );
            })}
        </Stack>
      </RadioGroup>
    </Box>
  );
};
