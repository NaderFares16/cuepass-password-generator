import type { MetaFunction } from "@remix-run/node";
import defaultStyles from '~/styles/remix.css'
import Cuepass from "~/components/Cuepass";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
        </section>
      </main>
    </>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: defaultStyles }]
}
