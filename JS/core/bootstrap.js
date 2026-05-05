import { initLayout } from "./layout.js";
import { initFeatures } from "./features.js";

export async function bootstrapApp() {
    await initLayout();
    initFeatures();
}