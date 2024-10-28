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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
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
  id,            // Required ID for each grid item, for uniqueness
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;  // className is optional and expects a string
  title?: string | React.ReactNode;  // Title can be a string or React node
  description?: string | React.ReactNode;  // Description can be a string or React node
  header?: React.ReactNode;  // Header can be any React node
  icon?: React.ReactNode;  // Icon can be any React node
  id?: number;  // ID is required and must be a number
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        // Default styles for each grid item, including transitions and hover effects
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className // Merges any custom className passed via props
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id=== 6} && 'flex justify-center`}></div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
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
