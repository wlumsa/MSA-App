import PostHog from 'posthog-react-native'

export const posthog = new PostHog(process.env.POSTHOG_PROJECT_API || "", {
  host: 'https://us.i.posthog.com'
})