import Header from "@/components/Landing/Header";
import Footer from "@/components/Landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header className="bg-cyan-200" />
      <main>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, cumque, quibusdam, voluptates quia quisquam voluptatibus
          cumque quibusdam voluptates quia quisquam voluptatibus cumque
          quibusdam voluptates quia quisquam voluptatibus cumque quibusdam
        </p>
      </main>
      <Footer className="bg-cyan-200" />
    </div>
  );
}
