"use client";
import { Grid, Stack } from "@mui/material";
import Link from '@mui/material/Link';

export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Stack direction="row" columnGap={1}>
        <Link href="register">Register</Link>
        <Link href="check-email">check-email</Link>
        <Link href="cereate-workspace">cereate-workspace</Link>
        <Link href="home">Home</Link>

      </Stack>
    </Grid>
  );
}