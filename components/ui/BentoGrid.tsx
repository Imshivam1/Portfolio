import { cn } from "@/lib/utils"; // Utility function to conditionally join class names

// BentoGrid component to create a responsive grid layout
export const BentoGrid = ({
  className,   // Optional className prop to pass additional styles
  children,    // React children prop for nested components
}: {
  className?: string;  // className is optional and expects a string
  children?: React.ReactNode;  // children can be any React node
}) => {
  return (
    <div
      className={cn(
        // Default classes for the grid layout
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className // Merges the custom className passed via props
      )}
    >
      {children} {/* Render any child elements inside the grid */}
    </div>
  );
};

// BentoGridItem component to create individual grid items
export const BentoGridItem = ({
  className,     // Optional className prop to style each item
  title,         // The title for the grid item
  description,   // Description for the grid item
  header,        // Optional header element (can be an image, icon, etc.)
  icon,          // Optional icon element to display in the grid item
  id,            // Required ID for each grid item, for uniqueness
}: {
  className?: string;  // className is optional and expects a string
  title?: string | React.ReactNode;  // Title can be a string or React node
  description?: string | React.ReactNode;  // Description can be a string or React node
  header?: React.ReactNode;  // Header can be any React node
  icon?: React.ReactNode;  // Icon can be any React node
  id: number,  // ID is required and must be a number
}) => {
  return (
    <div
      className={cn(
        // Default styles for each grid item, including transitions and hover effects
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className // Merges any custom className passed via props
      )}
    >
      {header} {/* Optional header (can be an image or a custom element) */}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon} {/* Optional icon displayed at the top */}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title} {/* Title of the grid item */}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description} {/* Description of the grid item */}
        </div>
      </div>
    </div>
  );
};
