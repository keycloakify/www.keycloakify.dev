import { GlTemplate } from "gitlanding/GlTemplate";
import { OnyxiaUi } from "theme";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export function App() {
  return (
    <OnyxiaUi>
      <AppContextualized />
    </OnyxiaUi>
  );
}

function AppContextualized() {
  return (
    <GlTemplate
      hasTopOfPageLinkButton={true}
      headerOptions={{
        position: "sticky",
        isRetracted: "smart",
      }}
      header={<Header />}
      body={<Body />}
      footer={<Footer />}
    />
  );
}
