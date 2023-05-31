import Link from "../components/Link";

export default function HomePage({ lights }) {
  const turnedOnLights = lights.filter((light) => light.isOn === true);
  const count = turnedOnLights.length;
  return (
    <div>
      <h1>Home</h1>
      <p>{count} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
