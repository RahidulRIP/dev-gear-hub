export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
        <div className="space-y-4 text-left">
          <details className="p-4 bg-white rounded shadow-sm">
            <summary className="font-bold">Shipping time?</summary> 2-3 days.
          </details>
          <details className="p-4 bg-white rounded shadow-sm">
            <summary className="font-bold">Warranty?</summary> 1 year
            replacement.
          </details>
        </div>
      </div>
    </section>
  );
}
