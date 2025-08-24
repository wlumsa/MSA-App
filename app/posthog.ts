import PostHog from 'posthog-react-native'

const posthog = new PostHog(process.env.EXPO_PUBLIC_POSTHOG_PROJECT_API || "", {
  host: 'https://us.i.posthog.com'
})

export default posthog