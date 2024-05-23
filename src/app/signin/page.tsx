import { signIn, providerMap } from "@/lib/auth.ts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function SignInPage() {
  return (
    <div className="flex justify-center w-full items-center h-screen gap-2">
      {Object.values(providerMap).map((provider) => (
        <form
          key={providerMap.id}
          action={async () => {
            "use server";
            await signIn(provider.id);
          }}
        >
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Choose how you would like to sign in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button type="submit">
                <span>Sign in with {provider.name}</span>
              </button>
            </CardContent>
          </Card>
        </form>
      ))}
    </div>
  );
}
