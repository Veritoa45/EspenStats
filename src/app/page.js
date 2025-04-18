import Header from "@/components/Landing/Header";
import Footer from "@/components/Landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white ">
      <Header className="bg-cyan-200" />
      <main className="flex min-h-[calc(100vh-160px)]">
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, cumque, quibusdam, voluptates quia quisquam voluptatibus
          cumque quibusdam voluptates quia quisquam voluptatibus cumque
          quibusdam voluptates quia quisquam voluptatibus cumque quibusdam
        </p>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, cumque, quibusdam, voluptates quia quisquam voluptatibus
          cumque quibusdam voluptates quia quisquam voluptatibus cumque
          quibusdam voluptates quia quisquam voluptatibus cumque quibusdam
        </p>
      </main>
      <Footer />
    </div>
  );
}
