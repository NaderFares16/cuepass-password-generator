import type { MetaFunction } from "@remix-run/node";
import defaultStyles from '~/styles/remix.css'
import Cuepass from "~/components/Cuepass";
import PasswordGenerator from "~/components/PasswordGenerator";
import FooterCopyright from "~/components/FooterCopyright";
import FooterList from "~/components/FooterList";

export const meta: MetaFunction = () => {
  return [
    { title: "Cuepass | Password Generator" },
    { name: "description", content: "Welcome to Cuepass Password Generator!" },
  ];
};

export default function Index() {
  return (
    <>
      <main>
        <section className="container">
          <nav>
            <Cuepass />
            <div className="nav-routes">
              <button className="hover-underline-animation">Pricing</button>
              <button className="hover-underline-animation">Docs</button>
            </div>
          </nav>
          <section className="application">
            <PasswordGenerator />
          </section>
        </section>
      </main>
      <footer>
        <FooterCopyright />
        <FooterList />
      </footer>
    </>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: defaultStyles }]
}
