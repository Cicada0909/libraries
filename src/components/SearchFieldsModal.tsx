import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Typography,
} from "@mui/material";

interface SearchFieldsModalProps {
  open: boolean;
  onClose: () => void;
  searchFields: string[];
  setSearchFields: (fields: string[]) => void;
}

const searchFieldsOptions = [
  "name",
  "alternativeNames",
  "github.repo",
  "description",
  "keywords",
  "filename",
  "repositories.url",
  "github.user",
];

const SearchFieldsModal = ({
  open,
  onClose,
  searchFields,
  setSearchFields,
}: SearchFieldsModalProps) => {
  const handleSearchFieldsChange = (field: string) => {
    setSearchFields(
      searchFields.includes(field)
        ? searchFields.filter((f) => f !== field)
        : [...searchFields, field],
    );
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 380,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Select search filters
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
          }}
        >
          {searchFieldsOptions.map((field) => (
            <FormControlLabel
              key={field}
              control={
                <Checkbox
                  checked={searchFields.includes(field)}
                  onChange={() => handleSearchFieldsChange(field)}
                />
              }
              label={field}
            />
          ))}
        </Box>
        <Button sx={{ mt: 2 }} variant="contained" onClick={onClose}>
          Apply
        </Button>
      </Box>
    </Modal>
  );
};

export default SearchFieldsModal;
