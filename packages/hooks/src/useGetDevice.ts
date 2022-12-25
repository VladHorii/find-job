import { useMediaQuery } from "react-responsive";

export const useGetDevice = () => {
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  if (isMobile) return "Mobile";

  if (isTablet) return "Tablet";

  if (isDesktop) return "Desktop";

  return "Error";
};
