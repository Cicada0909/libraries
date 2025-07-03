import useLibraries from "../hooks/use-libraries.ts";

const Libraries = () => {
  const { data } = useLibraries();

  return <div>Libraries</div>;
};

export default Libraries;
