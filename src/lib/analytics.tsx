"use client";

import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
      />
      {children}
    </>
  );
};

export default AnalyticsProvider;
