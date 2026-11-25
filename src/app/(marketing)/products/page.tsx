import { ProductCard } from "@/components/marketing/product-card";
import { CTASection } from "@/components/marketing/cta-section";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section";
import { products } from "@/content/products";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Futuristic World products with honest status labels—Live, Beta, Prototype, or Research—and clear descriptions of who each tool serves.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Software with status you can trust"
        lede="We label every product by maturity. Conceptual mockups are never presented as live offerings, and research tools are not marketed as investment products."
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.slug} id={product.slug}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
      <CTASection />
    </>
  );
}