import Footer from "./_components/Footer";
import Header from "./_components/Header";
import JsonForm from "./_components/json-form/JsonForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center size-full pb-10">
        <JsonForm />
      </main>
      <Footer />
    </>
  );
}
