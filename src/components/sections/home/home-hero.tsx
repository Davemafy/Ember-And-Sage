import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  Dot,
  DotIcon,
  PersonStanding,
  Play,
  ShieldCheck,
  User,
} from "lucide-react";
import Button from "../../ui/button";
import heroBanner from "@/assets/img/home-hero.png";
import dotIcon from "@/assets/img/dot.svg";

const HomeHero = () => {
  return (
    <section className={` grid text-warm-ivory pb-4 `}>
      <div
        className={`relative isolate min-h-[560px] round-bottom overflow-clip  bg-near-black px-4 pb-8 pt-6`}
      >
        <img
          src={heroBanner}
          alt="hero-banner"
          className="absolute h-full w-full -z-1 top-0 left-0"
        />
        <div className="space-y-6">
          <div>
            <p className="text-[9.5px] mb-3 font-semibold uppercase tracking-[0.15em] text-burnt-orange">
              Modern Cuisine. Timeless Experience.
            </p>

            <h1 className="font-serif text-[56px] leading-[0.92] tracking-[-0.03em] max-w-[10ch]">
              Good food is our <span className="italic font-normal">love</span>{" "}
              language.
            </h1>

            <p className="mt-5 tracking-[0.1px] max-w-[30ch] font-light text-[15px] leading-6">
              Ember &amp; Sage brings together the finest ingredients,
              exceptional flavours and genuine hospitality.
            </p>
            <div className="flex gap-3 items-center mt-4">
              <Button variant="icon-button" className="h-9 w-9">
                <Play size={14} stroke="white" />
              </Button>
              <p className="text-[15px] font-light">Watch our story</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-7">
          <div className="card rounded-2xl -mt-30 relative w-full bg-[#f9f4f1] shadow-xl shadow-[#d6d2d1] p-5 pt-4 px-8 text-text-primary">
            <h2 className="mt-3 font-serif font-semibold text-[24px] leading-none">
              Reserve Your Table
            </h2>
            <p className="0 flex items-center gap-2 mt-2 text-sm font-light text-text-muted">
              <img
                src={dotIcon}
                alt="dot"
                className="text-[60px] align-text-top h-1.25 text-burnt-orange"
              />
              <span className="text-xs">Quick and Easy</span>
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl flex items-center gap-2 bg-white border border-border-light px-4 py-3">
                <Calendar size={16} />
                <p className="mt-1 font-medium text-[13px] -translate-y-[2px]">
                  Select Date
                </p>
                <ChevronDown size={20} className="ml-auto text-gray-500" />
              </div>
              <div className="rounded-xl flex items-center gap-2 bg-white border border-border-light px-4 py-3">
                <Clock size={16} />
                <p className="mt-1 font-medium text-[13px] -translate-y-[2px]">
                  Select Time
                </p>
                <ChevronDown size={20} className="ml-auto text-gray-500" />
              </div>
              <div className="rounded-xl flex items-center gap-2 bg-white border border-border-light px-4 py-3">
                <User size={16} />
                <p className="mt-1 font-medium text-[13px] -translate-y-[2px]">
                  2 Guests
                </p>
                <ChevronDown size={20} className="ml-auto text-gray-500" />
              </div>
            </div>

            <div className="mt-5">
              <Button
                className=" text-xs h-12 rounded-md font-regular  flex items-center "
                fullWidth
              >
                <span className="ml-auto">Find a Table</span>
                <ArrowRight className="ml-auto" size={18} />
              </Button>
            </div>
            <div className="flex items-center mt-6  gap-4">
              <p className=" flex items-center  gap-2  text-sm font-light text-text-muted">
                <ShieldCheck size={16} className="text-burnt-orange" />
                <span className="text-[11px] whitespace-nowrap">
                  {" "}
                  No booking fees.
                </span>
              </p>
              <img src={dotIcon} alt="dot" className=" h-1 text-burnt-orange" />
              <p className="flex items-center gap-2 text-sm translate-px font-light text-text-muted">
                <span className="text-[11px] whitespace-nowrap">
                  Instant Confirmation
                </span>
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
