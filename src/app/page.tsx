import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semi-bold text-gray-700">
            Financial Metrics Visualizer
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Visualize Your <span className="text-green-500">Financial Data</span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Upload your company &apos;s financial statements and uncover key
          insights with interactive charts and graphs.
        </p>

        <Link
          href="/Dashboard"
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          target="_blank"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* Value proposition section */}
      <div>
        <div className="relative isolate">
          {/* Insert your background gradient or image */}
        </div>

        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 ring-1 p-2 ring-inset ring-gray-900/10 lg:-m-4  lg:rounded-2xl lg:p-4">
                {/* Placeholder for image */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-grey-900 sm:text-5xl">
              Discover Insights from Your{" "}
              <span className="text-green-500">Financial Statements</span>
            </h2>
            <p className="mt-4 text-lg text-grey-600">
              Understand your company&apos;s performance and make informed
              decisions.
            </p>
          </div>
        </div>
        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col border-l-4 border-zinc-300 space-y-2 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-500">Step 1</span>
              <span className="text-xl font-semibold">
                Upload Financial Statements
              </span>
              <span className="mt-2 text-zinc-700">
                Upload your company&apos;s financial documents securely.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col border-l-4 border-zinc-300 space-y-2 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-500">Step 2</span>
              <span className="text-xl font-semibold">Analyze Key Metrics</span>
              <span className="mt-2 text-zinc-700">
                Gain insights into your company&apos;s performance through
                interactive charts and graphs.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col border-l-4 border-zinc-300 space-y-2 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-500">Step 3</span>
              <span className="text-xl font-semibold">
                Engage with Insights
              </span>
              <span className="mt-2 text-zinc-700">
                Utilize chat functionality to delve deeper into your
                company&apos;s financial data.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 ring-1 p-2 ring-inset ring-gray-900/10 lg:-m-4  lg:rounded-2xl lg:p-4">
              {/* Placeholder for another image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
