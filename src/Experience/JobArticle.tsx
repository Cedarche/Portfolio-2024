import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

function FormattedDate({
  date,
  className,
}: {
  date: string | Date;
  className?: string;
}) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return <time className={className}>{formattedDate}</time>;
}

function ContentWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div
          className={clsx(
            "mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ArticleHeader({ id, date }: { id: string; date: string | Date }) {
  return (
    <header className="relative mb-10 xl:mb-0">
      <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
        <a href={`#${id}`} className="inline-flex">
          <FormattedDate
            date={date}
            className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
          />
        </a>
        <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
      </div>
      <ContentWrapper>
        <div className="flex">
          <a href={`#${id}`} className="inline-flex">
            <FormattedDate
              date={date}
              className="text-2xs/4 font-medium text-gray-500 xl:hidden dark:text-white/50"
            />
          </a>
        </div>
      </ContentWrapper>
    </header>
  );
}

function Article({
  id,
  date,
  children,
}: {
  id: string;
  date: string | Date;
  children: React.ReactNode;
}) {
  const heightRef = useRef<HTMLDivElement>(null);
  const [heightAdjustment, setHeightAdjustment] = useState(0);

  useEffect(() => {
    if (!heightRef.current) {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (!heightRef.current) {
        return;
      }
      const { height } = heightRef.current.getBoundingClientRect();
      const nextMultipleOf8 = 8 * Math.ceil(height / 8);
      setHeightAdjustment(nextMultipleOf8 - height);
    });

    observer.observe(heightRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      id={id}
      className="scroll-mt-16"
      style={{ paddingBottom: `${heightAdjustment}px` }}
    >
      <div ref={heightRef}>
        <ArticleHeader id={id} date={date} />
        <ContentWrapper className="typography" data-mdx-content>
          {children}
        </ContentWrapper>
      </div>
    </article>
  );
}

export default Article;
