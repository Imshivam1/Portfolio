import { cn } from "@/lib/utils"; // Utility function to conditionally join class names
import { BackgroundGradientAnimation } from "./GradientBg";

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
      <div className={`${id=== 6} && 'flex justify-center'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
             src={img}
             alt={img}
             className={cn(imgClassName, "object-cover object-center ")}
             />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && "w-full opacity-80"
        }`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full" 
            />
          )}
        </div>
        {id===6 && ( 
          <BackgroundGradientAnimation>
            <div className="absolute z-50 items-center flex justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}
        
        <div className={cn(
          titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}>
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        </div>
      </div>
    </div>
  );
};
