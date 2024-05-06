"use client";
import { useEffect, useState } from "react";
import { PortfolioWithStocks } from "./DashboardPages/Insights";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PortfolioSelection from "./PortfolioSelection";

const InitialPortfolioOption = ({
  collectionOfPortfolios,
}: {
  collectionOfPortfolios: PortfolioWithStocks[];
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    setDialogOpen(true);
  }, []);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        {/* <DialogHeader>
          <DialogTitle>Select Portfolio</DialogTitle>
        </DialogHeader> */}
        <PortfolioSelection collectionOfPortfolios={collectionOfPortfolios} />
      </DialogContent>
    </Dialog>
  );
};

export default InitialPortfolioOption;
