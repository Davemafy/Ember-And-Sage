const faqs = [
  "Can I modify my reservation?",
  "Is there a cancellation fee?",
  "Do you accommodate large groups?",
  "Do you offer private dining?",
  "Are kids welcome?",
];

const ReservationFAQ = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-12 text-text-primary">
      <h2 className="font-serif text-[34px] leading-none">
        Frequently Asked Questions
      </h2>

      <div className="mt-6 border-t border-border-light">
        {faqs.map((question) => (
          <details
            key={question}
            className="group border-b border-border-light py-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-sm font-medium text-text-primary">
                {question}
              </span>

              <span className="text-xl text-text-primary transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 text-sm leading-6 text-text-secondary">
              Yes. Reach out to our team ahead of your booking and we’ll help
              adjust the reservation based on availability.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default ReservationFAQ;
