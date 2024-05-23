import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Coins } from "lucide-react";
const PortfolioCard = ({
  heading,
  description,
  growth,
}: {
  growth: string;
  heading: string;
  description: string;
}) => {
  return (
    <Card className="w-[350px] ">
      <CardHeader>
        <div className="flex">
          <div className="bg-gray-200 p-1 rounded-2xl ">
            <Coins color="#20a23a" className=" mb-1" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CardTitle>{description}</CardTitle>
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-[#20a23a]" />
        </div>

        <CardDescription>{heading}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <div className="space-y-1">
              <p className="text-2xl font-medium leading-none">{growth}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
