import useLibraries from "../hooks/use-libraries.ts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Libraries = () => {
  const { data } = useLibraries();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Latest</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.results.map((library) => (
          <TableRow key={library.latest}>
            <TableCell>{library.name}</TableCell>
            <TableCell>{library.latest}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Libraries;
