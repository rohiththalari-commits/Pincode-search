import Head from "next/head";

export async function getServerSideProps({ params }) {
  const pin = params.pin;

  const res = await fetch(
    `https://api.postalpincode.in/pincode/${pin}`
  );
  const data = await res.json();

  if (data[0].Status !== "Success") {
    return { notFound: true };
  }

  return {
    props: {
      pin,
      offices: data[0].PostOffice
    }
  };
}

export default function PinPage({ pin, offices }) {
  const district = offices[0].District;
  const state = offices[0].State;

  return (
    <>
      <Head>
        <title>{pin} PIN Code – {district}, {state}</title>
        <meta
          name="description"
          content={`Find ${pin} PIN code details including post offices, district ${district} and state ${state}.`}
        />
      </Head>

      <main style={{ padding: 20 }}>
        <h1>{pin} PIN Code</h1>
        <p>
          The PIN code {pin} belongs to {district}, {state}.
        </p>

        {offices.map((o, i) => (
          <div key={i}>
            <h3>{o.Name}</h3>
            <p>{o.District}, {o.State}</p>
          </div>
        ))}
      </main>
    </>
  );
}
