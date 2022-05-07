import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { DefaultBox } from "src/shared/components/DefaultBox";
import { InfoWidget } from "../dashboard/InfoWidget";
import { DashboardLayout } from "../dashboardLayout";
import { LoginInformationEdit } from "./LoginInformationEdit";
import { TwoFaEdit } from "./TwoFaEdit";
import { NotificationEdit } from "./NotificationEdit";
import { ProfileSectionTitle } from "./ProfileSectionTitle";
import { Stepper } from "./Stepper";
import { stepperData } from "./const";
export function Profile() {
  return (
    <DashboardLayout title="Profile" caption="Manage your Profile">
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} container spacing={2}>
          <Grid item xs={12}>
            <LoginInformationEdit />
          </Grid>
          <Grid item xs={12}>
            <TwoFaEdit />
          </Grid>
          <Grid item xs={12}>
            <NotificationEdit />
          </Grid>
        </Grid>
        <Grid item container xs={12} md={5} spacing={2}>
          <Grid item xs={12} md={6}>
            <DefaultBox
              sx={{
                px: { xs: 2 },
                pt: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <ProfileSectionTitle title="Referrals" />
              <Typography variant="h4" mt={1} mb={3}>
                128
              </Typography>
            </DefaultBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <DefaultBox
              sx={{
                px: { xs: 2 },
                pt: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <ProfileSectionTitle title="Payout" />
              <Typography variant="h4" mt={1} mb={3}>
                $ 9.830
              </Typography>
            </DefaultBox>
          </Grid>
          <Grid item xs={12}>
            <DefaultBox
              sx={{
                px: { xs: 2, md: 4 },
                py: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 4,
                }}
              >
                <ProfileSectionTitle title="Referrals" />
                <Image
                  src="/ReferralSteps.png"
                  width={50}
                  height={50}
                  alt="image"
                />
              </Box>
              {stepperData.map((i, index) => (
                <Stepper
                  key={i.title}
                  index={index + 1}
                  title={i.title}
                  desc={i.desc}
                />
              ))}
            </DefaultBox>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
