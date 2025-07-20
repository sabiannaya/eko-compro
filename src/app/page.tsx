import { Metadata } from "next";
import { getPageMetadata } from "@/utils/MetadataContext";
import { getPageMetadataByKey } from "@/data/metadata";
import HomePageClient from "./HomePageClient";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getPageMetadataByKey("home");

  if (!metadata) {
    // Fallback metadata if page key doesn't exist
    return {
      title: "MR. EKO Guidance Learning",
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
  return <HomePageClient />;
}
