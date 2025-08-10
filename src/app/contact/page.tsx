import { Metadata } from "next";
import { getPageMetadata } from "@/utils/MetadataContext";
import { getPageMetadataByKey } from "@/data/metadata";
import ContactClient from "./ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getPageMetadataByKey("contact");

  if (!metadata) {
    // Fallback metadata if page key doesn't exist
    return {
      title: "Guidance Learning Mr.Eko",
      description: "Educational guidance and learning platform",
    };
  }

  return await getPageMetadata(
    metadata.title,
    metadata.description,
    metadata.keywords
  );
}

export default function HomePage() {
  return <ContactClient />;
}