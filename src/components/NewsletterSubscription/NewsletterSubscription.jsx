export default function NewsletterSubscription() {
  return (
    <>
      <section className="bg-primary-600/10">
        <div className="container flex flex-col gap-3 items-center py-10 ">
          <h3 className="text-2xl  font-bold text-black">
            Subscibe to our Newsletter
          </h3>
          <p>Stay updated with our latest offers, recipies, and health tips</p>

          <search className="relative w-full max-w-md mt-2">
            <input
              type="text"
              className="form-control w-full p-3 pr-28 rounded-md border border-primary-600 placeholder:text-black"
              placeholder="Your email address"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-0 bg-primary-600 text-white px-4 py-2 rounded-e-md border-">
              Subscribe
            </button>
          </search>
        </div>
      </section>
    </>
  );
}
