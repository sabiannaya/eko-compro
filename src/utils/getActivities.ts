import fs from "fs";
import path from "path";
import { activitiesData } from "@/data/dummy";
import { Activity } from "@/utils/TypeContext";

const VALID_IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".svg",
]);

/**
 * Dynamically reads public/Activity/<dirName> and populates activity images.
 */
export function getActivitiesData(): Activity[] {
  const publicDir = path.join(process.cwd(), "public");

  return activitiesData.map((activity) => {
    if (!activity.dirName) return activity;

    const dirPath = path.join(publicDir, "Activity", activity.dirName);

    try {
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);

        // Filter valid image files and perform natural sorting
        const imageFiles = files
          .filter((file) =>
            VALID_IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase())
          )
          .sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
          );

        const images = imageFiles.map(
          (file) => `/Activity/${activity.dirName}/${file}`
        );

        if (images.length > 0) {
          return {
            ...activity,
            images,
            thumbnail: images[0],
          };
        }
      }
    } catch (err) {
      console.error(`Error reading directory for activity ${activity.id}:`, err);
    }

    return activity;
  });
}
