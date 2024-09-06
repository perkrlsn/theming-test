import { Button, Stack } from "@mui/material";

type TParams = {
  theme: string;
};

export default function Page({ searchParams }: { searchParams: TParams }) {
  return (
    <>
      {searchParams.theme ? (
        <link href={`/${searchParams.theme}.css`} rel="stylesheet" />
      ) : null}
      <Stack height="100%" alignItems="center" justifyContent="center">
        <Button variant="contained">This button is amazing!</Button>
      </Stack>
    </>
  );
}
