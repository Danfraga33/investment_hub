import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ComponentProps } from "react";

type CardProps = ComponentProps<typeof Card>;

export default function PricingPage({ className, ...props }: CardProps) {
  return (
    <div className="flex w-full justify-center items-center sm:gap-4 sm:py-4 sm:pl-14 h-screen overflow-hidden">
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>
            Start for free and upgrade as you grow
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-4xl font-semibold text-center">FREE</p>
          <div className="flex flex-col items-start gap-4 rounded-md border p-4">
            <div className="flex items-center">
              <Check color="green" /> <p>Summarize Annual Report</p>
            </div>
            <div className="flex items-center">
              <Check color="green" /> <p>Visualize Financials</p>
            </div>
            <div className="flex items-center">
              <Check color="green" /> <p>Smart Investment Insights</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card
        className={cn("w-[380px] shadow-2xl shadow-green-100", className)}
        {...props}
      >
        <CardHeader>
          <CardTitle>Premium</CardTitle>
          <CardDescription>
            For power users who need more features
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-4xl font-semibold text-center">$19.99</p>
          <div className="flex flex-col items-start gap-4 rounded-md border p-4">
            <div className="flex items-center">
              <Check color="green" /> <p>Advanced Annual Report Summaries</p>
            </div>
            <div className="flex items-center">
              <Check color="green" />{" "}
              <p>Customizable Financial Visualizations</p>
            </div>
            <div className="flex items-center">
              <Check color="green" /> <p>Expert Investment Advice</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>Advanced</CardTitle>
          <CardDescription>For those who need a little extra</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-4xl font-semibold text-center">$9.99</p>
          <div className="flex flex-col items-start gap-4 rounded-md border p-4">
            <div className="flex items-center">
              <Check color="green" />{" "}
              <p>Comprehensive Annual Report Insights</p>
            </div>
            <div className="flex items-center">
              <Check color="green" /> <p>Real-time Financial Updates</p>
            </div>
            <div className="flex items-center">
              <Check color="green" /> <p>Personalized Investment Strategies</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
