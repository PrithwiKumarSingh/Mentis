import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import TabNavigation from "./TabNavigation";

import OverviewTab from "./OverviewTab";
import KeyPointsTab from "./KeyPointsTab";
import KeywordsTab from "./KeywordsTab";
import ActionItemsTab from "./ActionItemsTab";
import DetailsTab from "./DetailsTab";

export interface SummaryData {
  short: string;
  detailed: string;
  bullets: string[];
  keywords: string[];
  actionItems: string[];
}

export interface AISummaryModalProps {
  open: boolean;
  onClose: () => void;

  title: string;
  description: string;

  summary: SummaryData;

  wordCount: number;
  readingTime: number;

  createdAt: string;
}

type Tab =
  | "overview"
  | "keypoints"
  | "keywords"
  | "actions"
  | "details";

export default function AISummaryModal({
  open,
  onClose,
  title,
  description,
  summary,
  wordCount,
  readingTime,
  createdAt,
}: AISummaryModalProps) {
  const [activeTab, setActiveTab] =
    useState<Tab>("overview");
    console.log(summary)

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handler);

    return () =>
      window.removeEventListener(
        "keydown",
        handler
      );
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
            fixed
            inset-0
            z-50
            bg-black/60
            backdrop-blur-sm
          "
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: .95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .95,
              y: 20,
            }}
            transition={{
              duration: .25,
            }}
            className="
            fixed
            left-1/2
            top-1/2
            z-60
            h-[92vh]
            w-[95vw]
            max-w-7xl
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            rounded-3xl
            border

            border-zinc-800
            bg-white

            shadow-2xl

            dark:border-zinc-800
            dark:bg-linear-to-bl from-slate-900 to-[#06071B]

            light:border-zinc-200
            light:bg-white
          "
          >
            {/* Header */}

            <header
              className="
            flex
            items-center
            justify-between
            border-b
            border-zinc-800
            px-7
            py-5
          "
            >
              <div>
                <h2
                  className="
                text-2xl
                font-bold
                text-black
                dark:text-white
              "
                >
                  AI Summary
                </h2>

                <p
                  className="
                mt-1
                text-sm
                text-zinc-400
              "
                >
                  Quick understanding of your saved
                  content.
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                rounded-xl
                p-2
                transition

                hover:bg-zinc-800
              "
              >
                <X className="h-6 w-6 text-zinc-300 hover:cursor-pointer" />
              </button>
            </header>

            {/* Body */}

            <div
              className="
            flex
            h-[calc(92vh-90px)]
            flex-col
            lg:flex-row
          "
            >
              {/* Sidebar */}

              <aside
                className="
              w-full
              border-b
              border-zinc-800

              lg:w-[290px]
              lg:border-b-0
              lg:border-r
            "
              >
                <Sidebar
                  title={title}
                  description={description}
                  wordCount={wordCount}
                  readingTime={readingTime}
                  createdAt={createdAt}
                />
              </aside>

              {/* Right */}

              <section
                className="
              flex
              flex-1
              flex-col
              overflow-hidden
            "
              >
                {/* Tabs */}

                <TabNavigation
                  active={activeTab}
                  onChange={setActiveTab}
                />

                {/* Scroll */}

                <div
                  className="
                flex-1
                overflow-y-auto
                px-6
                py-6 
              "
                >
                  {activeTab ===
                    "overview" && (
                    <OverviewTab
                      summary={summary}
                    />
                  )}

                  {activeTab ===
                    "keypoints" && (
                    <KeyPointsTab
                      bullets={
                        summary.bullets
                      }
                    />
                  )}

                  {activeTab ===
                    "keywords" && (
                    <KeywordsTab
                      keywords={
                        summary.keywords
                      }
                    />
                  )}

                  {activeTab ===
                    "actions" && (
                    <ActionItemsTab
                      keywords={
                        summary.actionItems
                      }
                    />
                  )}

                  {activeTab ===
                    "details" && (
                    <DetailsTab
                      detailed={
                        summary.detailed
                      }
                    />
                  )}
                </div>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}