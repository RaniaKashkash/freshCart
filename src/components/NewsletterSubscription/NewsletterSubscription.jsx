
export default function NewsletterSubscription() {
  return <>
  <section className="bg-primary-600/10">
    <div className="container flex flex-col gap-3 items-center py-10 ">
        <h3 className="text-2xl  font-bold text-black">Subscibe to our Newsletter</h3>
        <p>Stay updated with our latest offers, recipies, and health tips</p>
        <search className="relative w-1/2 mt-2 *:!p-3">
            <input type="text" className="form-control w-full placeholder:text-black  " placeholder="Your email Address" />
            <button className="btn absolute top-0 right-0 border-primary-600 bg-primary-600 text-white !rounded-l-none  !rounded-r-md">Subscribe</button>
        </search>
    </div>
  </section>
</>
}
