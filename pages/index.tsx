import Router from "next/router";
import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="vertical-stack center">
          <h1>Ecommerce Challenge</h1>
          <p>Make sure you read the README before continuing.</p>
          <Link href="/products">
            <button style={{ alignSelf: "center" }}>View products</button>
          </Link>
          <Link href="/example?sample=1&params=true">
            <button style={{ alignSelf: "center" }}>
              View example page for code hints
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .vertical-stack > * + * {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }
        .center {
          justify-content: center;
          align-items: center;
        }
        .horizontal-stack > * + * {
          margin-right: 1rem;
        }
      `}</style>
    </>
  );
};

export default IndexPage;
