import {
  About,
  Experince,
  Hero,
  Navbar,
  Portfoli,
  SocialLink,
} from "./components";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SocialLink />
      <About />
      <Portfoli />
      <Experince />
    </div>
  );
}
