export default function Pagemetadata({
  title = "FreshCart",
  description = "FreshCart,Your shop for all things",
  keywords = "online shopping ,freshcart",
  author = "Rania Kashkash",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
