import { initBackToTop} from "../features/ui/backToTop.js";
import { renderRootMenu } from "../features/navigation/navigationLogic.js";
import "../features/animations/repulsion.js";
import "../features/animations/physics.js";

export function initFeatures() {
    initBackToTop();
    renderRootMenu();
}