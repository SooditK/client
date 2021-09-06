import Head from "next/head";
import Hero from "../components/landing/Hero";
import PreFooter from "../components/landing/PreFooter";
import SemiFlex from "../components/landing/SemiFlex";
import Sidekick from "../components/landing/Sidekick";
import { withNearWallet } from "../components/near/withNearWallet";
import GridWrapper from "../layouts/GridWrapper";

function Home() {
  return (
    <>
      <Head>
        <title>Job Unicorn | Home</title>
        <meta name="description" content="Earn in solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Sidekick />

      <GridWrapper columns={3}>
        <SemiFlex
          inverted={false}
          heading="Wide Spectrum of Skills"
          text="People with a wide range of skill-sets are hard to come by, but we
          have a solution here to help you find a top-of-the-line freelancer for
          every type of business. Find Talent Across 1000+ Skills in various
          seniority levels."
        />
        <SemiFlex
          inverted={true}
          heading="Specialized Search Mechanism"
          text="Our Intelligent Rating system is used to filter search results and send the most relevant ones to you. You can easily find the right people for the growth of your organization."
        />
      </GridWrapper>

      <PreFooter />
    </>
  );
}

const Page = withNearWallet(Home, "DOES_NOT_NEED_AUTHENTICATION");

export default Page;
