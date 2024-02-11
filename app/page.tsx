import Footer from "./_components/Footer";
import Header from "./_components/Header";
import JsonForm from "./_components/json-form/JsonForm";
import { ThemeSwitch } from "./_components/theme-switch/ThemeSwitch";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center size-full pb-16">
        <ThemeSwitch />
        <JsonForm />
      </main>
      <Footer />
    </>
  );
}
