import { useState } from "react";
import {
  AppLayout,
  SideNavigation,
  SpaceBetween,
} from "@cloudscape-design/components";
import { Outlet } from "react-router-dom";
import { Mode, applyMode } from "@cloudscape-design/global-styles";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { logo, nombreApp } from '../env';

function App() {
  applyMode(Mode.Dark);
  const [open, setOpen] = useState(true);

  return (
    <>
      <SpaceBetween direction="vertical" size="xxs">
        <TopNavigation
          identity={{
            href: "/",
            title: nombreApp,
            logo: {
              src: logo,
              alt: nombreApp,
            },
          }}
          utilities={[
            {
              type: "button",
              iconName: "notification",
              title: "Notifications",
              ariaLabel: "Notifications (unread)",
              badge: true,
              disableUtilityCollapse: false,
            },
            {
              type: "menu-dropdown",
              iconName: "settings",
              ariaLabel: "Settings",
              title: "Settings",
              items: [
                {
                  id: "settings-org",
                  text: "Organizational settings",
                },
                {
                  id: "settings-project",
                  text: "Project settings",
                },
              ],
            },
            {
              type: "menu-dropdown",
              text: "Customer Name",
              description: "email@example.com",
              iconName: "user-profile",
              items: [
                { id: "profile", text: "Profile" },
                { id: "preferences", text: "Preferences" },
                { id: "security", text: "Security" },
                {
                  id: "support-group",
                  text: "Support",
                  items: [
                    {
                      id: "documentation",
                      text: "Documentation",
                      href: "#",
                      external: true,
                      externalIconAriaLabel: " (opens in new tab)",
                    },
                    { id: "support", text: "Support" },
                    {
                      id: "feedback",
                      text: "Feedback",
                      href: "#",
                      external: true,
                      externalIconAriaLabel: " (opens in new tab)",
                    },
                  ],
                },
                { id: "signout", text: "Sign out" },
              ],
            },
          ]}
        />

        <AppLayout
          maxContentWidth={Number.MAX_VALUE}
          toolsHide={true}
          navigationOpen={open}
          onNavigationChange={() => setOpen(!open)}
          navigation={
            <SideNavigation
              header={{
                href: "#",
                text: "Service name",
              }}
              items={[{ type: "link", text: `Page #1`, href: `#` }]}
            />
          }
          content={
            <Outlet />
            // <ContentLayout
            //   header={
            //     <Header variant="h1" info={<Link variant="info">Info</Link>}>
            //       Page header
            //     </Header>
            //   }
            // >
            //   <Container
            //     header={
            //       <Header variant="h2" description="Container description">
            //         Container header
            //       </Header>
            //     }
            //   >
            //     <div className="contentPlaceholder" />
            //   </Container>
            // </ContentLayout>
          }
        />
      </SpaceBetween>
    </>
  );
}

export default App;
