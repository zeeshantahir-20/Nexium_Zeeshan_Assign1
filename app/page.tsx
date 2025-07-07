import QuoteGenerator from "@/components/quote-generator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <QuoteGenerator />
      </div>
    </div>
  );
}