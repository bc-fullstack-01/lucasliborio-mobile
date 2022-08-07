import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef()
export default function Navigate(name: string, params?: string) {
  if (navigationRef.isReady()){
    navigationRef.navigate(name as never, params as never)
  }
}