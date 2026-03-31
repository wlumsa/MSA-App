import { Platform } from "react-native";
import PostHog from "posthog-react-native";

let posthogInstance: PostHog | null = null;

function getPostHog() {
  if (Platform.OS === "web" || typeof window === "undefined") {
    return null;
  }

  if (!posthogInstance) {
    posthogInstance = new PostHog(
      process.env.EXPO_PUBLIC_POSTHOG_PROJECT_API || "",
      {
        host: "https://us.i.posthog.com",
      }
    );
  }

  return posthogInstance;
}

const posthog = {
  capture: (...args: Parameters<PostHog["capture"]>) => getPostHog()?.capture(...args),
};

export default posthog;
