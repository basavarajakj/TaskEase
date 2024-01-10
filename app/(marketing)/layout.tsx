import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {

  return (
    <div className="md:h-screen h-[100dvh] bg-slate-100">
      <Navbar />
      <main className="pt-40  bg-slate-100">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MarketingLayout;