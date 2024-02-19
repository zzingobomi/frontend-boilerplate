"use client";

import { useTranslation } from "@/services/i18n/client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function AdvertisementsPanel() {
  const { t } = useTranslation("advertisements-panel-home");

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} wrap="nowrap" pt={3}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            {t("title")}
          </Typography>
          <Typography>{t("description")}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdvertisementsPanel;

//export default withPageRequiredAuth(AdminPanel, { roles: [RoleEnum.ADMIN] });
